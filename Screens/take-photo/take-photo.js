let FRAME = 210;

function setup() {
  //noCanvas();
  createElements();

  let photoDiv = document.querySelector(".photo");
  canvasCreation(photoDiv);
}

function canvasCreation(container) {
  createCanvas(FRAME, FRAME); // Creamos el canvas
  let pCanvas = document.querySelector(".p5Canvas"); // seleccionamos el canvas
  pCanvas.classList.add("my-auto", "hidden");
  container.appendChild(pCanvas); // agregamos el canvas a el contendor
}

function draw() {}

function backMain() {
  window.location.href = "../main-menu/main-menu.html";
}

function moveMaze() {
  window.location.href = "../maze/maze.html";
}

let usePhoto = (video = undefined) => {
  if (video == undefined) {
    return;
  }

  let nuevaImg = video.get(); // .get() hace un pantallazo del video y devuelve un objeto de tipo Image
  nuevaImg.resize(FRAME, FRAME); // Reducimos el tamaño de la imagen
  image(nuevaImg, 0, 0); //Colocamos la imagen en el canvas principal
  video.hide(); // Ocultamos el video
  let pCanvas = document.querySelector(".p5Canvas");
  pCanvas.classList.remove("hidden");
  console.log(video);
};

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
  //photoDiv.child(p5Canvas);

  let menuDiv = createDiv("");
  menuDiv.class("menu-buttons");

  let takePhoto = createButton("Take a Photo");
  takePhoto.mousePressed((e) => {
    usePhoto(profileImage);
  });
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
