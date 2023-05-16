class Caminante {
  constructor() {
    this.x = width/2.0;
    this.y = height/2.0;
    this.t = 5;
    this.vel = 2;
    this.dir = 30;
  }

  dibujar() {
    noStroke();
    fill(26, 8, 36);
    ellipse(this.x, this.y, this.t, this.t);
  }

  mover() {
    if (mouseIsPressed) {
      this.dir += 2;
    } else {
      this.dir += random(-7, 7);
    }
    this.x = this.x + this.vel * cos(radians(this.dir));
    this.y = this.y + this.vel * sin(radians(this.dir));
  }

  cambiarDireccion() {
    this.dir = random(0, 360);
  }
  
  parar() {
    this.vel = 0;
  }

  rebotes() {
    if (this.x >= width) {
      this.dir = 180;
    }

    if (this.x <= 0) {
      this.dir = 0;
    }

    if (this.y >= height) {
      this.dir = 270;
    }

    if (this.y <= 0) {
      this.dir = 90;
    }
  }
}
