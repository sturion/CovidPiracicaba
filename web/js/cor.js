

var cont = 0;

function tema() {


  if (cont == 0) {

    cont = 1;

    document.documentElement.style.setProperty('--cinza', '#FFF');
    document.documentElement.style.setProperty('--branco', '#333');
  }

  else {

    cont = 0

    document.documentElement.style.setProperty('--cinza', '#333');
    document.documentElement.style.setProperty('--branco', '#D1D7DA');
  }

}


