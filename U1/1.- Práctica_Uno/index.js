//1.- Primer Hola mundo con js
//alert("Hola mundo desde JS");

//2.- Segundo Hola mundo
//document.write("Hola mundo desde el cuerpo");

//3.- Tercer hola mundo
//console.log("Hola mundo desde la consola de navegador");

//Tipos de datos
let nombre ='Adrián';

let apellido ='Guevara';

//console.log(nombre,apellido);

var nombreMascota = 'Chucho'; 
var raza = 'Corriente'; 

//console.log('Nombre de la mascota:',nombreMascota,'Raza de la mascota:', raza);

const WEB = 'www.google.com';
//console.log(WEB);

let num1=15;
let num2=5;

//console.log('suma:', num1+num2, 'resta:',num1-num2,
//'multiplicacion:', num1*num2,'division:',num1/num2);

//Arrays
let arr = [1,2,3,4,'gato','perro','vaca','toro'];
//console.log('el tamaño del array es de:', arr.length);

//console.log('num:',arr[7]);

let arr2=arr.push('Aaaaaaaa medio metro');
//console.log(arr);

arr.forEach(element=>{
    console.log(element);
    document.write(element);
});

for (let i = 0; i < arr.length; i++) {
    //console.log(i);
    
}

//OBJETOS EN JAVASCRIPT
let estudiante={
    nombre: 'El medio metro',
    edad:20,
    uni:'Poderosisimo TEC',
    totalMaterias:7,
    horaSemana: '35 hrs',
};

/*
console.log(estudiante.nombre);
console.log(estudiante.uni);
console.log(estudiante.edad);
console.log(estudiante.totalMaterias);
console.log(estudiante.horaSemana);
*/

for (const key in estudiante) {
    console.log(`${key}: ${estudiante[key]}`);
}

//ATAJO DE SELECCIÓN MULTILÍNEA CTRL+D
//ATAJO DE ALINEAMIENTO DE TEXTO A PANTALLA ALT+Z

//OBJETOS ANIDADOS
let cosas=[{
    nombre: 'Revolver',
    anime: 'Yu-Gi-Oh!',
    creador: 'Katsuki Takahashi',
    capitulos: 1000,
    transmisionStatus: true,
    barajas:{
        b1: 'Rokket',
        b2: 'Borrel',
        b3: 'Dragon link',
        b4: 'Dragon cyberse',
        b5: 'Meta',
        b6: 'Antimeta',
        b7: 'Cúbico',
        b8: 'Invoked',
        b9: 'Shadoll',
    },
    villanos:{
        v1: 'Maximilian Pegasus',
        v2: 'Seto Kaiba',
        v3: 'Yubel',
    },
    temporadasNombre:{
        t1: 'Duel Monsters',
        t2: 'Zexal',
    },
    idiomaOriginal: 'Japonés',
    totalArcos: 7,
},//OBJETO DE BIBLIOTECA DE STEAM
{
    cosa: 'Biblioteca de Steam',
    dueño: 'Guevara Jr.',
    computadora: 'Escritoro',
    nivel: 26,
    activo: true,
    favoritos:{
        f1: 'Blasphemous',
        f2: 'Borderlands 2',
        f3: 'Dark Souls II',
        f4: 'Fallout 4',
        f5: 'Pony Island',
    },
    multi:{
        m1: 'Brawlhalla',
        m2: 'Halo Infinite',
        m3: 'Paladins',
        m4: 'Fall Guys',
        m5: 'El Ramiro Sexto',
    },
    terminados:{
        t1: 'Outlast',
        t2: 'Miss Neko',
        t3: 'Borderlands GOTY',
        t4: 'Fallout: New Vegas',
        t5: 'Dragon Ball Xenoverse',
    },
    logros: 534,
    numJuegos: 60,
},//OBJETO DE BARAJA DE YUGIOH
{
    deck: 'Antimeta',
    numMain: 40,
    numExtra: 15,
        tr3: 'There Can Be Only One',
        tr3: 'There Can Be Only One',
        numSide: 15,
    insignia: 'Fossil Dyna Pachycephalo',
    monstruos:{
      e1: 'Inspector Boarder',
      e2: 'Gren Maju Da Eiza',
      e3: 'Fossil Dyna Pachycephalo',
    },
    magias:{
        mag1: 'Pot of Desires',
        mag2: 'Pot of Extravagance',
        mag3: 'Forbbiden Lance',
        mag4: 'Pot of Duality',
        mag5: 'Card of Demise',
        mag6: 'Necrovalley',
        mag7: 'Raigeki',
    },
    trampas:{
        tr1: 'Dogmatika Punishment',
        tr2: 'Compulsory Evacuation Device',
        tr3: 'There Can Be Only One',
        tr4: 'Crackdown',
        tr5: 'Solemn Strike',
        tr6: 'Solemn Judgment',
    },
},
];

//console.log(cosas);
//document.write(`<h1>${cosas.nombre}</h1>`);

for (const k in cosas) {
    //document.write(`<h2>${k}: ${cosas[k]}</h2>`);
    
}

/*
document.write(`<h3>${personaje.barajas.b1}</h3>`);
document.write(`<h3>${personaje.barajas.b2}</h3>`);
document.write(`<h3>${personaje.barajas.b3}</h3>`);
document.write(`<h3>${personaje.barajas.b4}</h3>`);document.write(`<h3>${personaje.barajas.b5}</h3>`);
*/

//Obejeto anidado
let obj3 = {
    nombrePelicula: 'Jurassic Park',
    anio: 1993,
    director: 'Steven Spielberg',
    //DEFINIENDO COMO TIPO ARRAY
    //productoras: ['Universal Studios', 'Amblin Entertainment','Legendary Entertainment'],
    productoras: {
        p1: 'Universal Studios',
        p2: 'Amblin Entertainment',
        p3: 'Legendary Entertainment',
    }
};

let arrayObj = [
    {
        marca: 'Lamborghini',
        color: 'Negro',
        subMarca: 'Huracán',
        precio: '$3,500,000.00 MXN',
        noPuertas: 3,
        disponibleVenta: true,
        urlImg: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/model_chooser/huracan_evo_m.jpg',
    },
    {
        marca: 'Toyota',
        color: 'Negro',
        subMarca: 'Supra',
        precio: '$1,500,000.00 MXN',
        noPuertas: 5,
        disponibleVenta: false,
        urlImg: 'https://www.toyota.mx/sites/default/files/galeria360/02_30.jpg',
    },
    {
        marca: 'John Deere',
        color: 'Verde',
        subMarca: '9600',
        precio: '$500,000.00 MXN',
        noPuertas: 0,
        disponibleVenta: true,
        urlImg: 'https://corredordigital.mx/wp-content/uploads/listing-uploads/gallery/2022/06/IMG_0274-scaled.jpg',
    },
    {
        marca: 'Nissan',
        color: 'Rojo',
        subMarca: 'Hikari',
        precio: '$80,000.00 MXN',
        noPuertas: 3,
        disponibleVenta: false,
        urlImg: 'https://www.refaccionarianissan.com.mx/images/automoviles/HIKARI-B12/HIKARI-1988-1991.png',
    },
    {
        marca: 'Ford',
        color: 'Azul',
        subMarca: 'Escort Zx2',
        precio: '$60,000.00 MXN',
        noPuertas: 3,
        disponibleVenta: false,
        urlImg: 'https://i.pinimg.com/originals/25/57/ac/2557ac39ea19ad6518007a02f84ac314.jpg',
    },
    {
        marca: 'Pontiac',
        color: 'Amarillo',
        subMarca: 'Solstice',
        precio: '$460,000.00 MXN',
        noPuertas: 2,
        disponibleVenta: true,
        urlImg: 'https://img.automexico.com/2021/02/21/1sxqQxn4/pontiac-solstice-en-venta-4-c63b.jpg',
    },
    {
        marca: 'Nissan',
        color: 'Negro',
        subMarca: 'Sx 240',
        precio: '$80,000.00 MXN',
        noPuertas: 3,
        disponibleVenta: true,
        urlImg: 'https://i.ebayimg.com/thumbs/images/g/4uQAAOSw9U9jvDeX/s-l300.jpg',
    },
    {
        marca: 'Chevrolet',
        color: 'Rojo',
        subMarca: 'Cavalier Z24',
        precio: '$31,000.00 MXN',
        noPuertas: 3,
        disponibleVenta: false,
        urlImg: 'https://acnews.blob.core.windows.net/imgnews/medium/NAZ_ea610c57fdfb42b4adf8837c468e5185.jpg',
    },
    {
        marca: 'Pontiac',
        color: 'Rojo',
        subMarca: 'Firebird',
        precio: '$40,000.00 MXN',
        noPuertas: 2,
        disponibleVenta: false,
        urlImg: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/1993-97_Pontiac_Firebird.jpg',
    },
    {
        marca: 'Datsun',
        color: 'Café',
        subMarca: '200sx',
        precio: '$280,000.00 MXN',
        noPuertas: 2,
        disponibleVenta: false,
        urlImg: 'https://i.ytimg.com/vi/GhkbbvZWrGE/maxresdefault.jpg',
    },
];

for (let i = 0; i < arrayObj.length; i++) {
    document.write('Marca Vehículo: ',arrayObj[i].marca,`<br>`);
    document.write('Color: ',arrayObj[i].color,`<br>`);
    document.write('Sub Marca: ',arrayObj[i].subMarca,`<br>`);
    document.write('Precio: ',arrayObj[i].precio,`<br>`);
    document.write('Número de Puertas: ',arrayObj[i].noPuertas,`<br>`);
    document.write('Disponibilidad: ',arrayObj[i].disponibleVenta,`<br>`);
    document.write('Imagen representativa: ',`<br>`,`<img src=${arrayObj[i].urlImg} style='max-width: 25%'>`,`<br>`);
}


