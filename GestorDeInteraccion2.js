class GestorDeInteraccion {
    constructor() {
      this.mouse = new Dir_y_Vel();
      this.seMoviaEnElFrameAnterior = false;
      this.arriba = false;
      this.abajo = false;
    }
  
    actualizar() {
      this.mouse.calcularTodo(mouseX, mouseY);
  
      let seMueveElmouseEnEsteFrame = false;
      let sensibilidad = 35;
      if (this.mouse.velocidad() > sensibilidad && this.mouse.velocidad() < 150) {
        seMueveElmouseEnEsteFrame = true;
      }
      this.arriba = false;
      this.abajo = false;
  
      if (seMueveElmouseEnEsteFrame && !this.seMoviaEnElFrameAnterior) {
        this.arriba = this.mouse.direccionY() < -sensibilidad;
        this.abajo = this.mouse.direccionY() > sensibilidad;
      }
  
      this.seMoviaEnElFrameAnterior = seMueveElmouseEnEsteFrame;
    }
  }
  