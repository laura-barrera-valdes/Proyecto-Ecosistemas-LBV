const socket = io.connect("http://localhost:5500/", { path: "/real-time" });

let boton = {
  x: 350,
  y: 60,
  size: 100,
};

let yes = false;

function setup() {
  createCanvas(500, 200);
  noStroke();
}

function draw() {
  background(0, 0, 0);

  fill(254, 63, 45);
  rect(boton.x, boton.y, boton.size, boton.size);

  if (yes === true) {
    fill(255);
    rect(boton.x, boton.y, boton.size, boton.size);
    fill(254, 63, 45);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("BANG", 400, 35);
    yes = false;
  }

  seleccion();
}

function mouseClicked() {
  if (
    mouseX >= boton.x &&
    mouseX <= boton.x + boton.size &&
    mouseY >= boton.y &&
    mouseY <= boton.y + boton.size
  ) {
    yes = true;
    socket.emit("tap1", yes);
  }
}

function touchStarted() {
  if (
    mouseX >= boton.x &&
    mouseX <= boton.x + boton.size &&
    mouseY >= boton.y &&
    mouseY <= boton.y + boton.size
  ) {
    yes = true;
    socket.emit("tap1", yes);
  }
}

function seleccion() {
  if (
    mouseX >= boton.x &&
    mouseX <= boton.x + boton.size &&
    mouseY >= boton.y &&
    mouseY <= boton.y + boton.size
  ) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}
