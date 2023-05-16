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
