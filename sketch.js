let g;
let g2;
let cs;
let trazos;
let cantidad = 13;
let mascara;

function preload() {
  trazos = new Array(cantidad);
  for (let i = 0; i < cantidad; i++) {
    let nombre = "data/trazo" + nf(i, 2) + ".png";
    trazos[i] = loadImage(nombre);
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  imageMode(CENTER);
  cs = new Array();
  g = new GestorDeInteracion();
  g2 = new GestorDeInteraccion();

  colorMode(HSB, 360, 100, 100);
  
  background(33, 5, 89);
}

function draw() {
  g.actualizar();
  g2.actualizar();
  if (g.movGrande) {
    crearTrazosGrandes();
  } else if (g.movPeque) {
    crearTrazosPeque();
  }
  if (g2.arriba) {
    for (let i = 0; i < 5; i++) {
      cs.push(new Caminante());
    }
  }
  if (g2.abajo) {
    for (let c of cs) {
      c.parar();
    }
  }
  for (let c of cs) {
    c.mover();
    c.dibujar();
    c.rebotes();
  }
}

function crearTrazosGrandes() {
  let cual = int(random(cantidad));
  let x = random(100, width - 100);
  let y = random(30, height - 30);
  if (mouseY < height / 2.0) {
    tint(240, 80, random(30, 80));
    image(trazos[cual], x, y);
  }
}

function crearTrazosPeque() {
  let cual = int(random(cantidad));
  let x = random(100, width - 100);
  let y = random(30, height - 30);
  if (mouseY > height / 2.0) {
    if (random(100) < 90) {
      tint(330, random(30, 85), random(65, 85));
    } else {
      tint(36, random(70, 85), 95);
    }
    push();
    translate(x, y);
    scale(random(0.2, 0.5));
    image(trazos[cual], 0, 0);
    pop();
  }
}
