let monitorear = false;

let FREC_MIN = 900;
let FREC_MAX = 2000;

let AMP_MIN = 0.01;
let AMP_MAX = 0.4;


let mic;
let pitch;
let audioCotext;

let gestorAmp;
let gestorPitch;

let haySonido; // estado de cómo está el sonido en cada momento
let antesHabiaSonido; // moemoria del estado anterior del sonido

let estado = "agregar";

let trazos;
let cantidad = 13;
let Capa1 = 0;
let Capa2 = 0;
let Capa3 = 0;
let Capa4 = 0;
let Capa5 = 0;
let Capa6 = 0;
let Capa7 = 0;
let Capa8 = 0;
let firma;
let monday;
let posiciones;

function preload() {
  firma = loadImage("data/TrazoFirma.png");
  monday = loadImage("data/Monday.png");
  trazos = new Array(cantidad);
  for (let i = 0; i < cantidad; i++) {
    let nombre = "data/Trazo"+nf( i , 2 )+ ".png";
    trazos[i] = loadImage(nombre);
  }
}

function setup() {
  createCanvas(600, 700);
  background(250);
  posiciones = new Array(20).fill().map(() => new Array(2)); // Ajustar el tamaño del array posiciones
  colorMode(HSB, 360, 100, 100);
}

function draw() {

  let vol = mic.getLevel(); // cargo en vol la amplitud del micrófono (señal cruda);
  gestorAmp.actualizar(vol);

  haySonido = gestorAmp.filtrada > 0.1; // umbral de ruido que define el estado haySonido

  let inicioElSonido = haySonido && !antesHabiaSonido; // evendo de INICIO de un sonido
  let finDelSonido = !haySonido && antesHabiaSonido; // evento de fIN de un sonido

  if(estado == "agregar"){
    
  } else if(estado == "fondo") {

  } else if(estado == "pinceladas pequeñas") {

  } else if(estado == "mondray") {

  } else if(estado == "firma") {

  } else if(estado == "reinicio") {

  }
  /*
  //--------TRAZOS AZUL OSCURO
  let cual = int(random(cantidad));
  let x = random(width - 100);
  let y = random(height - 150);
  while (posicionOcupada(x, y)) {
    x = random(width - 100);
    y = random(height - 150);
  }
  posiciones[Capa1][0] = int(x); // Almacenar la posición ocupada
  posiciones[Capa1][1] = int(y);
  tint(240, 80, random(30, 80));
  image(trazos[cual], x, y, 80, 200);
  Capa1++;
} 
/*
  //-----------TRAZOS FONDO
  else if (Capa2 < 5) {
    let cual = int(random(cantidad));
    let x = random(width - 100);
    let y = random(height - 150);
    while (posicionOcupada(x, y)) {
      x = random(width - 100);
      y = random(height - 150);
    }
    posiciones[Capa2][0] = int(x); // Almacenar la posición ocupada
    posiciones[Capa2][1] = int(y);
    tint(55, 80, 92); 
    image(trazos[cual], x, y, 80, 200);
    Capa2++;
  }

  //--------TRAZOS ROSAS
  else if (Capa3 < 10) {
    let cual = int(random(cantidad));
    let x = random(width - 150);
    let y = random(height - 40);
    tint(330, random(30, 85), random(65, 85));
    image(trazos[cual], x, y, 40, 60);
    Capa3++;
  }

  //-----------TRAZOS AMARILLOS
  else if (Capa4 < 10) {
    let cual = int(random(cantidad));
    let x = random(width - 150);
    let y = random(height - 70);
    tint(36, random(70, 85), 95);
    image(trazos[cual], x, y, 40, 60);
    Capa4++;
  }

  //---------LINEAS DE COLOR
  else if (Capa5 < 10) {
    let cual = int(random(cantidad));
    let x = random(width - 150);
    let y = random(height - 70);
    tint(359, 30, 88);
    image(trazos[cual], x, y, 100, 5);

    Capa5++;
    
  } else if (Capa6 < 30) {
    let cual = int(random(cantidad));
    let x = random(width - 150);
    let y = random(height - 70);
    tint(334, 55, 80);
    image(trazos[cual], x, y, 5, 100);

    Capa6++;  
  } 
  
    else if (Capa7 < 10) {
    tint(5, 12, 35);
    image(monday, 50, 100, 500, 500);

    Capa7++;
  }
  
  else if (Capa8 < 10) {
    let x = 134;
    let y = 48;
    tint(0, 0, 0);
    image(firma, 450, 630, x, y);

    Capa8++;
  }
}
}
*/
if(monitorear){
  gestorAmp.dibujar(100, 100);
  gestorPitch.dibujar(100, 300);
}

console.log(estado);
antesHabiaSonido =  haySonido;
}

// Función para verificar si una posición está ocupada
function posicionOcupada(x, y) {
  for (let i = 0; i < Capa1; i++) {
    if (dist(x, y, posiciones[i][0], posiciones[i][1]) < 100) {
      return true;
    }
  }

  /*for (let i = 0; i < Capa2; i++) {
    if (dist(x, y, posiciones[i][0], posiciones[i][1]) < 100) {
      return true;
    }
  }*/

  return false;
}

// ---- Pitch detection ---
function startPitch() {
  pitch = ml5.pitchDetection(model_url, audioContext , mic.stream, modelLoaded);
}

function modelLoaded() {
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {

      gestorPitch.actualizar(frequency);    
      //console.log(frequency);
    } 
    getPitch();
  })
}
