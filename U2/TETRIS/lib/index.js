//ANCHOR 1.- Definición de variables
let canvas;
let ctx;
let FPS=50;

//ANCHOR 4.- Definir tamaño real
//10x16
let anchoTablero = 10;
let altoTablero = 20;

//ANCHOR 5.- Ancho y largo del lienzo
//Dimensones del canvas
let anchoCanvas = 400;
let altoCanvas = 640;

//ANCHOR 3.-Definir tablero
//Matriz de tablero(12x21)
let tablero=[
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
];

//ANCHOR 9.- Crear variable pieza
let pieza;

//ANCHOR 10.- Crear el objPieza
let objPieza=function(){
    this.x = 0;
    this.y = 0;

    console.log('Creanding pieza, soy ese');

    this.rotar=function() {
        console.log('el rotor xd');
    }

    //ANCHOR 11.- Métodos principales
    this.izquerdo=function() {
        console.log('NO me desbordo a la I');
    }
    this.derecha=function() {
        console.log('NO me desbordo a la D');
    }
    this.abajo=function() {
        console.log('NO me paso de mi nivel');
    }
}

//ANCHOR 8.- Crear la funcion que inicializa teclado
function inicializaTeclado() {
    //Lectura del teclado
    document.addEventListener('keydown', function(tecla){
        if(tecla.keyCode==37){
            console.log('Correle gordo a la izquierda');
        }
        if(tecla.keyCode==38){
            console.log('Correle gordo pa arriba');
        }
        if(tecla.keyCode==39){
            console.log('Correle gordo a la derecha');
        }
        if(tecla.keyCode==40){
            console.log('Correle gordo pa abajo');
        }
    });
}

//ANCHOR 2.- Definir función principal
function inicializa(){
    //5.1.1. DEfinir canvas en la web
    canvas = document.getElementById('canvas');
    ctx= canvas.getContext('2d');

    document.getElementById('canvas').style.width=anchoCanvas;
    document.getElementById('canvas').style.height=altoCanvas;
   
    //ANCHOR 10.1 instanciar la clase obj
    pieza = new objPieza();
   
    setInterval(function(){
        principal();
    }, 1000/FPS)

    //Llamar a la función inicializaTeclado()
    inicializaTeclado();
}

//ANCHOR 7.- Función que resetea canvas
function borrarCanvas() {
    canvas.width=anchoCanvas;
    canvas.height=altoCanvas;
}

//ANCHOR 6.- funcion main
function principal(){
    //Invocar la funcion borroarCanvas
    borrarCanvas();
}