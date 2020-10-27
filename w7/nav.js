function change(index) {
  const p = document.getElementById('show');
  //console.log('show, p');
  switch (index) {
    case 1:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="./w01-intro-pokemon/index.html"/></iframe>';
      break;
    case 2:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="./w01-intro-pokemon/pokemon.html"/></iframe>';
      break;
    case 3:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="./w02-imgGallery/imgGallery.html"/></iframe>';
      break;
    case 4:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="./w03-div/div.html"/></iframe>';
      break;
    case 5:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="./w04-div-tku60-js/div_tku60-js.html"/></iframe>';
      break;
    case 6:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="./w05-bootstrap w1/Nav.html"/></iframe>';
      break;
    case 7:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="./w6/index.html"/></iframe>';
      break;
  }
}
