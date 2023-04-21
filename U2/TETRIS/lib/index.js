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

let fichasGrafico=[
    [//Primer pieza
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
        ],
    ],
    [//Segunda pieza
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0],
        ],
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0],
        ],
    ],
    [//Tercera pieza
        [
            [0,0,0,0],
            [0,0,3,3],
            [0,3,3,0],
            [0,0,0,0],
        ],
        [
            [0,0,3,0],
            [0,0,3,3],
            [0,0,0,3],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [0,0,3,3],
            [0,3,3,0],
            [0,0,0,0],
        ],
        [
            [0,0,3,0],
            [0,0,3,3],
            [0,0,0,3],
            [0,0,0,0],
        ], 
    ],
    [//Cuarta pieza
        [
            [0,0,0,0],
            [0,4,4,0],
            [0,0,4,4],
            [0,0,0,0],
        ],
        [
            [0,0,0,4],
            [0,0,4,4],
            [0,0,4,0],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [0,4,4,0],
            [0,0,4,4],
            [0,0,0,0],
        ],
        [
            [0,0,0,4],
            [0,0,4,4],
            [0,0,4,0],
            [0,0,0,0],
        ], 
    ],
    [//Quinta pieza
        [
            [0,0,0,0],
            [0,5,5,5],
            [0,5,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,5,0],
            [0,0,5,0],
            [0,0,5,5],
            [0,0,0,0],
        ],
        [
            [0,0,0,5],
            [0,5,5,5],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,5,5,0],
            [0,0,5,0],
            [0,0,5,0],
            [0,0,0,0],
        ], 
    ],
    [//Sexta pieza
        [
            [0,0,0,0],
            [0,6,6,6],
            [0,0,0,6],
            [0,0,0,0],
        ],
        [
            [0,0,6,6],
            [0,0,6,0],
            [0,0,6,0],
            [0,0,0,0],
        ],
        [
            [0,6,0,0],
            [0,6,6,6],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,0,4],
            [0,0,4,4],
            [0,0,4,0],
            [0,0,0,0],
        ], 
    ],
    [//Séptima pieza
        [
            [0,0,0,0],
            [0,7,7,7],
            [0,0,7,0],
            [0,0,0,0],
        ],
        [
            [0,0,7,0],
            [0,0,7,7],
            [0,0,7,0],
            [0,0,0,0],
        ],
        [
            [0,0,7,0],
            [0,7,7,7],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,7,0],
            [0,7,7,0],
            [0,0,7,0],
            [0,0,0,0],
        ], 
    ],
];

//ANCHOR 9.- Crear variable pieza
let pieza;

//ANCHOR 10.- Crear el objPieza
let objPieza=function(){
    this.x = 0;
    this.y = 0;

    this.tipo=2;      //7 posibilidades (0-6)
    this.angulo=0;    //4 posibilidades (0-3)   

    this.retraso=50;
    this.fotograma=0;

    this.dibuja=function () {
        for(py=0; py<4; py++){
            for(px=0; px<4; px++){
                if(fichasGrafico[this.tipo][this.angulo][py][px]!=0){
                    ctx.fillStyle ='#777';
                    ctx.fillRect((this.x+px)*anchoTablero,(this.y+py)*altoTablero,anchoTablero, altoTablero);
                }
            }
        }
    }

    //ANCHOR Crear nueva pieza aleatoria
    this.nueva=function() {
        this.tipo=Math.floor((Math.random()*7));
        this.fotograma=0;
        this.x=4;
        this.y=0;

        console.log(this.tipo);
    }

    console.log('Creanding pieza, soy ese');

    this.rotar=function() {
        console.log('el rotor xd');
    }

    //ANCHOR 11.- Métodos principales
    this.rotar=function() {
        console.log('Yo roto xdxd');
    }
    this.izquierdo=function() {
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
            pieza.izquierdo();
        }
        if(tecla.keyCode==38){
            pieza.rotar();
        }
        if(tecla.keyCode==39){
            pieza.derecha();
        }
        if(tecla.keyCode==40){
            pieza.abajo();
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
    console.log(pieza.nueva());
   
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
    pieza.dibuja();
}