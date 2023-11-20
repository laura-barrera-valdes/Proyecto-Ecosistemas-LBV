function setup() {
  noCanvas();
  createElements();
}

function draw() {}

function moveMain() {
  window.location.href = "../main-menu/main-menu.html";
}

function cambiarPagina() {
  window.location.href = "../main-menu/main-menu.html";
}

function createElements() {
  let backButton = createButton("");
  backButton.class("back");
  backButton.mousePressed(moveMain);

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

  // Crear elemento de imagen y número
  let imageNumber = createDiv("");
  imageNumber.class("photo");
  let profileImage = createImg(
    "https://vivolabs.es/wp-content/uploads/2022/03/perfil-hombre-vivo.png",
    ""
  );
  profileImage.size(200, 200);
  profileImage.style("border-radius", "200px");
  profileImage.style("border", "4px solid #002046bf");

  // Agregar elementos al DOM
  document.body.appendChild(backButton.elt);
  document.body.appendChild(header.elt);
  header.child(title);
  header.child(number);
  document.body.appendChild(imageNumber.elt);
  imageNumber.child(profileImage);

  let menuDiv = createDiv("");
  menuDiv.class("menu-buttons");

  let startButton = createButton("Take a Photo");
  startButton.mousePressed(moveMain);

  let playersScoreButton = createButton("Select from Gallery");
  playersScoreButton.mousePressed(moveMain);
}
