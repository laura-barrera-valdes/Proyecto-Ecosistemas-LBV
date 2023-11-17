const int pinBotonArriba = 2;
const int pinBotonIzquierda = 3;
const int pinBotonAbajo = 4;
const int pinBotonDerecha = 5;

char personaje = '*';

void setup() {
  pinMode(pinBotonArriba, INPUT);
  pinMode(pinBotonIzquierda, INPUT);
  pinMode(pinBotonAbajo, INPUT);
  pinMode(pinBotonDerecha, INPUT);

  Serial.begin(9600);
}

void loop() {
  // Leer el estado de los botones
  int estadoBotonArriba = digitalRead(pinBotonArriba);
  int estadoBotonIzquierda = digitalRead(pinBotonIzquierda);
  int estadoBotonAbajo = digitalRead(pinBotonAbajo);
  int estadoBotonDerecha = digitalRead(pinBotonDerecha);

  // Enviar comandos al Arduino a través del puerto serie
   if (estadoBotonArriba == HIGH) {
    Serial.write('W');
  }
  if (estadoBotonIzquierda == HIGH) {
    Serial.write('A');
  }
  if (estadoBotonAbajo == HIGH) {
    Serial.write('S');
  }
  if (estadoBotonDerecha == HIGH) {
    Serial.write('D');
  }
  // Mover el personaje en función de los comandos recibidos
  if (Serial.available() > 0) {
    char comando = Serial.read();
    moverPersonaje(comando);
  }
}