let trazos = [];
let cantidad = 13;

function preload(){
  for( let i=0 ; i<cantidad ; i++ ){
    let nombre = "data/trazo"+nf(i,2)+".png"; 
    //console.log( nombre );
    trazos[i] = loadImage( nombre );
  }
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);
  imageMode( CENTER );
}

function draw() {
  let cual = int(random( cantidad ));
  let x = random( width );
  let y = random( height );
  tint( random(255),random(255),random(255),
  100);

  image( trazos[cual] , x , y );
}
