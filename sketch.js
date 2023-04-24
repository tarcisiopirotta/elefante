
let pinceladas = [];
let cantidad = 13;

let miPaleta;
let elefante;

function preload(){
  miPaleta = new Paleta( "data/noche.png" );
  elefante = loadImage( "data/elefante.png" );
  for( let i=0 ; i<cantidad ; i++){
    let nombre = "data/trazo"+nf( i , 2 )+".png";
    //console.log( nombre );
    pinceladas[i] = loadImage( nombre );
  }
}
function setup() {
  createCanvas( windowWidth, windowHeight );
  background(255);
  imageMode( CENTER );
}
function draw() {

  for( let i=0 ; i<100 ; i++){

  let x = random( width );
  let y = random( height );

  let xElefante = int( map( x , 0 , width , 0 , elefante.width ) );
  let yElefante = int( map( y , 0 , height , 0 , elefante.height ) );

  let colorDeEstePixel = elefante.get( xElefante , yElefante );

  if( red( colorDeEstePixel ) < 100 ){
    let cual = int( random(cantidad));
    let tamanio = random( 0.05 , 0.3 );
  
    let esteColor =  miPaleta.darColor();
    let angulo = radians( map( x , 0 , width , -30 , 120 ) + random(-5,5) );
    let angulo2 = radians( map( y , 0 , height , 0 , 180 ) + random(-5,5) );
  
    tint( red(esteColor) , green(esteColor) , blue(esteColor) , 150 );
  
    push();
    translate( x, y );
    rotate( angulo+angulo2 );
    scale( tamanio );
    image( pinceladas[cual] , 0 , 0 );  
    pop();
  
  }
}

}
