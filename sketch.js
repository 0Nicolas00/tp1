//Para usarlo primero debemos declarar un objeto Dir_y_Vel. Será uno por cada puntero que querramos seguir
let miVelocidadYDireccion;

function setup() {
  createCanvas(innerWidth, innerHeight);
  // Inicializo el objeto, no necesito pasarle parametros.
  miVelocidadYDireccion = new Dir_y_Vel();
}

function draw() {
  background(frameCount, 0, 0);

  //Lo priemero que deberia hacer es pasarle los parametros x e y que quiero calcular, en este caso el mouse
  miVelocidadYDireccion.calcularTodo(mouseX, mouseY);



  //Para usarlo, simplemente se le pregunta al objet por alguno de los valores. En la medida que los necesitemos

  //miVelocidadYDireccion.velocidad();
  //miVelocidadYDireccion.direccionX();
  //miVelocidadYDireccion.direccionY();
  //miVelocidadYDireccion.direccionPolar();

  //Por ejemplo:
  push();

  var hue = miVelocidadYDireccion.direccionPolar();
  var satYBright = miVelocidadYDireccion.velocidad() * 4;

  colorMode(HSB);
  var miColor = color(hue, satYBright, satYBright);
  fill(miColor);

  rect(0, 0, width, height);

  pop();


  //Esta es una funcion solo para ver en pantalla si esta funcionando todo ok
  miVelocidadYDireccion.mostrarData();
}
// fin del draw

// lo relacionado al objeto en si mismo
class Dir_y_Vel {

  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.prevPosX;
    this.prevPosY;
    this.miDireccionX;
    this.miDireccionY;
    this.vel;
    this.miDireccionPolar;
  }

  calcularTodo(mi_X, mi_Y) {
    this.prevPosX = this.posX;
    this.prevPosY = this.posY;
    this.posX = mi_X;
    this.posY = mi_Y;

    this.miDireccionX = this.posX - this.prevPosX;
    this.miDireccionY = this.posY - this.prevPosY;
    this.miDireccionPolar = degrees(atan2(this.posY - this.prevPosY, this.posX - this.prevPosX));

    this.vel = dist(this.posX, this.posY, this.prevPosX, this.prevPosY);
  }


  //////* ESTOS SON LOS METODOS QUE DEVUELVEN ALGO *///////

  velocidad() {
    return this.vel;
  }
  direccionX() {
    return this.miDireccionX;
  }

  direccionY() {
    return this.miDireccionY;
  }


  direccionPolar() {
    return this.miDireccionPolar;
  }


  //////* ESTO ES PARA DEBBUGGEAR LO QUE SE ESTA VIENDO *///////

  mostrarData() {
    textSize(24);
    fill(255);
    text("Velocidad: " + this.vel, 50, 50);
    text("Direccion X: " + this.miDireccionX, 50, 75);
    text("Direccion Y: " + this.miDireccionY, 50, 100);
    text("Direccion Polar: " + this.miDireccionPolar, 50, 125);


    push();
    noFill();
    stroke(255);
    strokeWeight(3);
    translate(width / 2, height / 2);

    ellipse(0, 0, 100, 100);
    rotate(radians(this.miDireccionPolar));
    line(0, 0, this.vel * 2, 0);


    pop();
  }

  ///////////// FIN DE LA CLASE  ///////
}
