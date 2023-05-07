let g;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
  g = new GestorDeInteracion();
}

function draw() {
  g.actualizar();
  if (g.movGrande) {
    crearGrandes();
  } else if (g.movPeque) {
    crearPeque();
  }
}

function crearGrandes() {
  let t = random(150, 250);
  noStroke();
  fill(random(70), random(70), random(100));
  ellipse(random(width), random(height), t, t);
}

function crearPeque() {
  let t = random(5, 20);
  noStroke();
  if (mouseX < width/2.0) {
    fill(random(200,255), 0, 0);
  } else {
    fill(0, 0, random(200,255));
  }
  ellipse(random(width), random(height), t, t);
}

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
}

class GestorDeInteracion {
  constructor() {
    this.mouse = new Dir_y_Vel();
    this.movGrande = false;
    this.movPeque = false;
    this.tiempoGrande = 0;
    this.tiempoPeque = 0;
  }

  actualizar() {
    this.mouse.calcularTodo(mouseX, mouseY);
    this.movGrande = false;
    this.movPeque = false;
    this.tiempoGrande--;
    this.tiempoPeque--;
    this.tiempoGrande = constrain(this.tiempoGrande, 0, 90);
    this.tiempoPeque = constrain(this.tiempoPeque, 0, 90);
    if (this.mouse.velocidad() > 10) {
      let umbral = 50;
      if (this.mouse.velocidad() > umbral) {
        this.tiempoGrande += 10;
        this.tiempoPeque -= 10; 
      } else {
        if (this.tiempoGrande < 10) {
          this.tiempoPeque += 10;
        }
      }
    }
    
    if (this.tiempoGrande > 55) {
      this.movGrande = true;
    } 
    if (this.tiempoPeque > 55) {
      this.movPeque = true;
    }
  }
}

