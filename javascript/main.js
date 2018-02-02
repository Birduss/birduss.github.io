/* DE LEESLIJST TOEVOEG KNOP */

var content     = document.getElementById('content')
  , toggle      = document.getElementById('classToggleButton')
  , add         = document.getElementById('classAddButton')
  , remove      = document.getElementById('classRemoveButton');


toggle.addEventListener('click', btnClicked);

function btnClicked(e) {
   content.classList.toggle('out');
}


/* DE LEESLIJST TOEVOEG KNOP */




/* DE SEARCHBAR ANIMATIE */
var btn = document.querySelector('.search-button');
var input = document.querySelector('.search-input');

btn.addEventListener('click', function(el) {
  if (input.style.visibility == 'visible') {
    input.style.transform = 'scaleX(0)';
    input.style.visibility = 'hidden';
  } else {
    input.style.transform = 'scaleX(1)';
    input.style.visibility = 'visible';
  }
});
/* DE SEARCHBAR ANIMATIE */






/* DE PAGINATION */

let pages = 25;

document.getElementById('pagination').innerHTML = createPagination(pages, 1);

function createPagination(pages, page) {
  let str = '<ul class="pagination">';
  let active;
  let pageCutLow = page - 1;
  let pageCutHigh = page + 1;
  // Laat de vorige knop zien wanneer je je op een andere pagina vind dan de eerste
  if (page > 1) {
    str += '<li class="page-item previous no"><a onclick="createPagination(pages, '+(page-1)+')">Vorige</a></li>';
  }

  // Laat alle pagination elementen zien wanneer er minder dan 6 paginas in totaal zijn

  if (pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page == p ? "active" : "no";
      str += '<li class="'+active+'"><a onclick="createPagination(pages, '+p+')">'+ p +'</a></li>';
    }
  }


  else {
    if (page > 2) {
      str += '<li class="no page-item"><a onclick="createPagination(pages, 1)">1</a></li>';
      if (page > 3) {
          str += '<li class="out-of-range"><a onclick="createPagination(pages,'+(page-2)+')">...</a></li>';
      }
    }

    if (page === 1) {
      pageCutHigh += 2;
    } else if (page === 2) {
      pageCutHigh += 1;
    }

    if (page === pages) {
      pageCutLow -= 2;
    } else if (page === pages-1) {
      pageCutLow -= 1;
    }

    for (let p = pageCutLow; p <= pageCutHigh; p++) {
      if (p === 0) {
        p += 1;
      }
      if (p > pages) {
        continue
      }
      active = page == p ? "active" : "no";
      str += '<li class="page-item '+active+'"><a onclick="createPagination(pages, '+p+')">'+ p +'</a></li>';
    }
    // Laat de allerlaatste pagina zien voorafgaand aan de puntjes
    if (page < pages-1) {
      if (page < pages-2) {
        str += '<li class="out-of-range"><a onclick="createPagination(pages,'+(page+2)+')">...</a></li>';
      }
      str += '<li class="page-item no"><a onclick="createPagination(pages, pages)">'+pages+'</a></li>';
    }
  }
  // Laat de Volgende knop zien alleen wanneer je op een pagina bent die niet de laatste is.
  if (page < pages) {
    str += '<li class="page-item next no"><a onclick="createPagination(pages, '+(page+1)+')">Volgende</a></li>';
  }
  str += '</ul>';


  document.getElementById('pagination').innerHTML = str;
  return str;
}

/* DE PAGINATION */

