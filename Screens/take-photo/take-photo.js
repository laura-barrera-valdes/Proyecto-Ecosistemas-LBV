function setup() {
  noCanvas();
  createElements();
}

function draw() {}

function backMain() {
  window.location.href = "../main-menu/main-menu.html";
}

function moveMaze() {
  window.location.href = "../maze/maze.html";
}

function usePhoto(video = undefined) {
  /*
  if (video == undefined) {
    return;
  }
  
  let nuevaImg = createCapture(VIDEO);
  
  let photoDiv = document.querySelector(".photo"); //seleccionar un objeto del documento
  photoDiv.innerHTML = nuevaImg;
  console.log(nuevaImg);
  console.log(photoDiv);*/
}

function createElements() {
  let backButton = createButton("");
  backButton.class("back");
  backButton.mousePressed(backMain);

  // Crear botón de regresar
  let backImage = createImg("../imgs/Frame.png", "back");
  backImage.size(30, 30);
  backButton.child(backImage);

  // Crear elementos del encabezado
  let header = createDiv("");
  header.class("head");
  let title = createElement("h1", "Photo");
  let number = createElement(
    "p",
    "Take a photo to identify your self in the competition."
  );

  // Crear elemento de imagen con captura de video
  let photoDiv = createDiv("");
  photoDiv.class("photo");
  let profileImage = createCapture(VIDEO);

  // Agregar elementos al DOM
  document.body.appendChild(backButton.elt);
  document.body.appendChild(header.elt);
  header.child(title);
  header.child(number);
  document.body.appendChild(photoDiv.elt);
  photoDiv.child(profileImage);

  let menuDiv = createDiv("");
  menuDiv.class("menu-buttons");

  let takePhoto = createButton("Take a Photo");
  takePhoto.mousePressed(usePhoto(profileImage));
  takePhoto.class("buttonPhoto");

  let nextScreen = createButton("Next");
  nextScreen.mousePressed(moveMaze);
  nextScreen.class("buttonPhoto");

  //menuDiv.parent("body");
  takePhoto.parent(menuDiv);
  nextScreen.parent(menuDiv);

  let logoDiv = createDiv("");
  logoDiv.class("logo-div");

  let logo = createImg("../imgs/rappi-logo-2.png", "Rappi Logo");
  logo.style("max-width", "100%");
  logo.style("height", "auto");
  logo.style("margin-bottom", "20px");

  logo.parent(logoDiv);
}
