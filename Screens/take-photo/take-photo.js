function setup() {
  noCanvas();
  createElements();
}

function draw() {}

function backMain() {
  window.location.href = "../main-menu/main-menu.html";
}

function movePlay() {
  window.location.href = "../maze/maze.html";
}

function createElements() {
  //createCapture(VIDEO);
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

  // Crear elemento de imagen
  let imageNumber = createDiv("");
  imageNumber.class("photo");
  let profileImage = createCapture(VIDEO);

  // Agregar elementos al DOM
  document.body.appendChild(backButton.elt);
  document.body.appendChild(header.elt);
  header.child(title);
  header.child(number);
  document.body.appendChild(imageNumber.elt);
  imageNumber.child(profileImage);

  let menuDiv = createDiv("");
  menuDiv.class("menu-buttons");

  let takePhotoButton = createButton("Take a Photo");
  takePhotoButton.mousePressed(movePlay);
  takePhotoButton.class("buttonPhoto");

  let selectFromGallery = createButton("Select from Gallery");
  selectFromGallery.mousePressed(movePlay);
  selectFromGallery.class("buttonPhoto");

  //menuDiv.parent("body");
  takePhotoButton.parent(menuDiv);
  selectFromGallery.parent(menuDiv);

  let logoDiv = createDiv("");
  logoDiv.class("logo-div");

  let logo = createImg("../imgs/rappi-logo-2.png", "Rappi Logo");
  logo.style("max-width", "100%");
  logo.style("height", "auto");
  logo.style("margin-bottom", "20px");

  logo.parent(logoDiv);
}
