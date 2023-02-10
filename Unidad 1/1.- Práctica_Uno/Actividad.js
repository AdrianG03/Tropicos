//NOTE 10 arrays con 5 elementos
let arr1 = [1,2,3,4,5];
let arr2 = ['vaca','toro','Caballo','pollo','tractor'];
let arr3 = ['ford','chevrolet','nissan','Datsun','transAm'];
let arr4 = ['si','no','no sé', 'porque', 'un tiro'];
let arr5 = [1,1,2,3,5];
let arr6 = ['huevo','chilaquiles','tacos de arroz','queso','tortilla'];
let arr7 = [8,16,24,32,40];
let arr8 = [true,false,12,14,16];
let arr9 = ['procesador','ventilador','memoria ram','almacenamiento','fuente de poder'];
let arr10 = ['calvo','chipocludo','enquiste','el beban','e12'];

//NOTE 10 objetos con 5 propiedades
let numeros={
    n1: 1,
    n2: 2,
    n3: 3,
    n4: 4,
    n5: 5,
};
let granja={
    g1: 'vaca',    
    g2: 'toro',
    g3: 'caballo',
    g4: 'pollo',
    g5: 'tractor',
};
let carros={
    c1: 'ford',
    c2: 'chevrolet',
    c3: 'nissan',
    c4: 'datsun',
    c5: 'transAm',    
};
let preguntas={
    p1: 'si',
    p2: 'no',
    p3: 'no sé',
    p4: 'por que',
    p5: 'un tiro',
};
let fibbo={
    f1: 1,
    f2: 1,
    f3: 2,
    f4: 3,
    f5: 5,
};
let comida={
    com1: 'huevo',
    com2: 'chilaquiles',
    com3: 'taco de arroz',
    com4: 'queso',
    com5: 'tortilla',
};
let tablaOcho={
    t1: 8,
    t2: 16,
    t3: 24,
    t4: 32,
    t5: 40,
};
let xd={
    x1: true,    
    x2: false,    
    x3: 12,    
    x4: 14,    
    x5: 16,    
};
let partes={
    part1: 'procesador',
    part2: 'ventilador',
    part3: 'memoria ram',
    part4: 'almacenamiento',
    part5: 'fuente de poder',
};
let apodos={
    a1: 'calvo',
    a2: 'chipocludo',
    a3: 'enquiste',
    a4: 'bebeban',
    a5: 'e12',
};

//NOTE 10 objetos anidados con 10 propiedades
let papa={
    numeros:{
        n1: 1,
        n2: 2,
        n3: 3,
        n4: 4,
        n5: 5,
        n6: 6,
        n7: 7,
        n8: 8,
        n9: 9,
        n10: 10,
    },
    granja:{
        g1: 'vaca',    
        g2: 'toro',
        g3: 'caballo',
        g4: 'pollo',
        g5: 'tractor',
        g6: 'maiz',    
        g7: 'frijol',
        g8: 'mula',
        g9: 'burro',
        g10: 'oveja',
    },
    carros:{
        c1: 'ford',
        c2: 'chevrolet',
        c3: 'nissan',
        c4: 'datsun',
        c5: 'transAm',
        c6: 'pontiac',    
        c7: 'hundai',
        c8: 'honda',
        c9: 'ram',
        c10: 'jeep',    
    },
    preguntas:{
        p1: 'si',
        p2: 'no',
        p3: 'no sé',
        p4: 'por que',
        p5: 'un tiro',
        p6: 'que',    
        p7: 'como',
        p8: 'cuando',
        p9: 'donde',
        p10: 'para',
    },
    fibbo:{
        f1: 1,
        f2: 1,
        f3: 2,
        f4: 3,
        f5: 5,
        f6: 8,    
        f7: 13,
        f8: 21,
        f9: 34,
        f10: 55,
    },
    comida:{
        com1: 'huevo',
        com2: 'chilaquiles',
        com3: 'taco de arroz',
        com4: 'queso',
        com5: 'tortilla',
        com6: 'torta',    
        com7: 'hotdog',
        com8: 'tamal',
        com9: 'pizza',
        com10: 'hamburguesa',
    },
    tablaOcho:{
        t1: 8,
        t2: 16,
        t3: 24,
        t4: 32,
        t5: 40,
        t6: 48,    
        t7: 56,
        t8: 64,
        t9: 72,
        t10: 80,
    },
    xd:{
        x1: true,    
        x2: false,    
        x3: 12,    
        x4: 14,    
        x5: 16,
        x6: 'equis de',    
        x7: undefined,
        x8: 'soy ese',
        x9: 'false pero string',
        x10: 99999,    
    },
    partes:{
        part1: 'procesador',
        part2: 'ventilador',
        part3: 'memoria ram',
        part4: 'almacenamiento',
        part5: 'fuente de poder',
        part6: 'perifericos',    
        part7: 'gabinete',
        part8: 'tarjeta gráfica',
        part9: 'el rgb',
        part10: 'pantalla',
    },
    apodos:{
        a1: 'calvo',
        a2: 'chipocludo',
        a3: 'enquiste',
        a4: 'bebeban',
        a5: 'e12',
        a6: 'el yaquisieras',    
        a7: 'gamaliel',
        a8: 'ebase',
        a9: 'tizoc',
        a10: 'trollas',
    },
};

//NOTE  10 arrays con objetos de 10 propiedades
let arrayObj = [
    {
        marca: 'Lamborghini',
        color: 'Negro',
        subMarca: 'Huracán',
        precio: '$3,500,000.00 MXN',
        noPuertas: 3,
        disponibleVenta: true,
        urlImg: 'la foto',
        ocho:'ocho',
        nueve:9,
        diez:'diez',
    },
    {
        marca: 'Toyota',
        color: 'Negro',
        subMarca: 'Supra',
        precio: '$1,500,000.00 MXN',
        noPuertas: 5,
        disponibleVenta: false,
        urlImg: 'foto',
        ocho:'ocho',
        nueve:9,
        diez:'diez',
    },
    {
        marca: 'John Deere',
        color: 'Verde',
        subMarca: '9600',
        precio: '$500,000.00 MXN',
        noPuertas: 0,
        disponibleVenta: true,
        urlImg: 'foto',
        ocho:'ocho',
        nueve:9,
        diez:'diez',
    },
    {
        marca: 'Nissan',
        color: 'Rojo',
        subMarca: 'Hikari',
        precio: '$80,000.00 MXN',
        noPuertas: 3,
        disponibleVenta: false,
        urlImg: 'la foto',
        ocho:'ocho',
        nueve:9,
        diez:'diez',
    },
    {
        marca: 'Ford',
        color: 'Azul',
        subMarca: 'Escort Zx2',
        precio: '$60,000.00 MXN',
        noPuertas: 3,
        disponibleVenta: false,
        urlImg: 'imagen.png',
        ocho:'ocho',
        nueve:9,
        diez:'diez',
    },
    {
        marca: 'Pontiac',
        color: 'Amarillo',
        subMarca: 'Solstice',
        precio: '$460,000.00 MXN',
        noPuertas: 2,
        disponibleVenta: true,
        urlImg: 'imagen.jpg',
        ocho:'ocho',
        nueve:9,
        diez:'diez',
    },
    {
        marca: 'Nissan',
        color: 'Negro',
        subMarca: 'Sx 240',
        precio: '$80,000.00 MXN',
        noPuertas: 3,
        disponibleVenta: true,
        urlImg: 'imagen.jpeg',
        ocho:'ocho',
        nueve:9,
        diez:'diez',
    },
    {
        marca: 'Chevrolet',
        color: 'Rojo',
        subMarca: 'Cavalier Z24',
        precio: '$31,000.00 MXN',
        noPuertas: 3,
        disponibleVenta: false,
        urlImg: 'soy ese',
        ocho:'ocho',
        nueve:9,
        diez:'diez',
    },
    {
        marca: 'Pontiac',
        color: 'Rojo',
        subMarca: 'Firebird',
        precio: '$40,000.00 MXN',
        noPuertas: 2,
        disponibleVenta: false,
        urlImg: 'el calvo',
        ocho:'ocho',
        nueve:9,
        diez:'diez',
    },
    {
        marca: 'Datsun',
        color: 'Café',
        subMarca: '200sx',
        precio: '$280,000.00 MXN',
        noPuertas: 2,
        disponibleVenta: false,
        urlImg: 'fotico',
        ocho:'ocho',
        nueve:9,
        diez:'diez',
    },
];

//ANCHOR Impresión primera parte
document.write(`<h3>---Arreglos de 5 elementos---</h3>`);
document.write(`<h4>Arreglo 1</h4>`);
for (let i = 0; i < arr1.length; i++) {
    document.write(arr1[i],`<br>`);
}
document.write(`<h4>Arreglo 2</h4>`);
for (let i = 0; i < arr2.length; i++) {
    document.write(arr2[i],`<br>`);
}
document.write(`<h4>Arreglo 3</h4>`);
for (let i = 0; i < arr3.length; i++) {
    document.write(arr3[i],`<br>`);
}
document.write(`<h4>Arreglo 4</h4>`);
for (let i = 0; i < arr4.length; i++) {
    document.write(arr4[i],`<br>`);
}
document.write(`<h4>Arreglo 5</h4>`);
for (let i = 0; i < arr5.length; i++) {
    document.write(arr5[i],`<br>`);
}
document.write(`<h4>Arreglo 6</h4>`);
for (let i = 0; i < arr6.length; i++) {
    document.write(arr6[i],`<br>`);
}
document.write(`<h4>Arreglo 7</h4>`);
for (let i = 0; i < arr7.length; i++) {
    document.write(arr7[i],`<br>`);
}
document.write(`<h4>Arreglo 8</h4>`);
for (let i = 0; i < arr8.length; i++) {
    document.write(arr8[i],`<br>`);
}
document.write(`<h4>Arreglo 9</h4>`);
for (let i = 0; i < arr9.length; i++) {
    document.write(arr9[i],`<br>`);
}
document.write(`<h4>Arreglo 10</h4>`);
for (let i = 0; i < arr10.length; i++) {
    document.write(arr10[i],`<br>`);
}

//ANCHOR Impresión segunda parte
document.write(`<h3>---Objetos---</h3>`);
document.write(`<h4>Objeto 1</h4>`);
for (const key in numeros) {
    document.write(`${key}: ${numeros[key]}<br>`);
}
document.write(`<h4>Objeto 2</h4>`);
for (const key in granja) {
    document.write(`${key}: ${granja[key]}<br>`);
}
document.write(`<h4>Objeto 3</h4>`);
for (const key in carros) {
    document.write(`${key}: ${carros[key]}<br>`);
}
document.write(`<h4>Objeto 4</h4>`);
for (const key in preguntas) {
    document.write(`${key}: ${preguntas[key]}<br>`);
}
document.write(`<h4>Objeto 5</h4>`);
for (const key in fibbo) {
    document.write(`${key}: ${fibbo[key]}<br>`);
}
document.write(`<h4>Objeto 6</h4>`);
for (const key in comida) {
    document.write(`${key}: ${comida[key]}<br>`);
}
document.write(`<h4>Objeto 7</h4>`);
for (const key in tablaOcho) {
    document.write(`${key}: ${tablaOcho[key]}<br>`);
}
document.write(`<h4>Objeto 8</h4>`);
for (const key in xd) {
    document.write(`${key}: ${xd[key]}<br>`);
}
document.write(`<h4>Objeto 9</h4>`);
for (const key in partes) {
    document.write(`${key}: ${partes[key]}<br>`);
}
document.write(`<h4>Objeto 10</h4>`);
for (const key in apodos) {
    document.write(`${key}: ${apodos[key]}<br>`);
}

//ANCHOR Impresión tercera parte
document.write(`<h3>---Objetos anidados---</h3>`);
for (const key in papa) {
    document.write(`<h4>${key}</h4>`);
    for (const k in papa[key]) {
        document.write(`${k}: ${papa[key][k]}<br>`);
    }
}

//ANCHOR Impresión cuarta
document.write(`<h3>---10 veces la tarea---</h3>`);
for (let i = 0; i < 10; i++) {
    document.write(`<h4>Numero ${i+1}</h4>`);
    arrayObj.forEach(element => {
        for (const key in element) {
            document.write(`${key}: ${element[key]}<br>`);
        }
        document.write(`<br>`);
    });
}

