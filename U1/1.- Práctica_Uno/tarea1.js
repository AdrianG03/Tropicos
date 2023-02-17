//ANCHOR Definicion de los arreglos
let arr1 =[1,2,3,4,5,6,7,8,9,10];
let arr2 =['alfalfa','hierba del sapo','diente de leon','yumel','discorea','te de caña','albacar','cilantro','ruda','vaporub'];
let arr3 =['mango','guanabana','guayaba','mandarina','naranja','anona','chirimoya','tamarindo','chicomamey','maracuya'];
let arr4 =[true,false,true,false,true,false,true,false,true,false];
let arr5 =[1.2,2.3,4.4,21.222,0.3,0.001,12.002,21.222,88.88,489.49];
let arr6 =[1,'dos',3,'cuatro',5,'seis',7,'ocho',9,'diez'];
let arr7 =[true,false,NaN,undefined,333,'ojo',23.35,'aaaaa','medio',2222];
let arr8 =[5,10,15,20,25,30,35,40,45,50];
let arr9 =['procesador','ventilador','ram','almacenamiento','fuente de poder','tarjeta grafica','microfono','camara','bocinas','cables'];
let arr10 =[1,true,'uno','si','true',1.2121,6565,20,NaN,undefined];
let arr11 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let arr12 = [null, undefined, null, undefined, null, undefined, null, undefined,null, undefined];
let arr13 =[12,24,36,48,60,72,84,96,108,120];
let arr14 =["a", 1, 1.1, "b", 2, 2.2, "c", 3, 3.3, "d"];
let arr15 =[1, 1.1, "uno", 2, 2.2, "dos", 3, 3.3, "tres", 4];
let arr16 =['doce',12,'e12',12.12,true,'eledoce',NaN,'?',null,111];
let arr17 =['calvo','chipocludo','enquiste','el beban','e12','huevo','chilaquiles','tacos de arroz','queso','tortilla'];
let arr18 =['vaca','toro','Caballo','pollo','tractor','si','no','no sé', 'porque', 'un tiro'];
let arr19 =[1,1,2,3,5,8,13,21,34,55];
let arr20 =['pugs','perro calcetin','kashtira',99,undefined,'embutido',616,'los pugs otra vez',null,987];

//ANCHOR - Definición de los objetos
let obj1 ={
    prop1: 1,
    prop2: 2,
    prop3: 3,
    prop4: 4,
    prop5: 5,
};
let obj2 ={
    prop1: 'alfalfa',
    prop2: 'hierba del sapo',
    prop3: 'diente de leon',
    prop4: 'yumel',
    prop5: 'discorea',
};
let obj3 ={
    prop1: 'mango',
    prop2: 'guanabana',
    prop3: 'guayaba',
    prop4: 'mandarina',
    prop5: 'naranja',
};
let obj4 ={
    prop1: true,
    prop2: false,
    prop3: true,
    prop4: false,
    prop5: true,
};
let obj5 ={
    prop1: 1.2,
    prop2: 2.3,
    prop3: 4.4,
    prop4: 21.222,
    prop5: 0.3,
};
let obj6 ={
    prop1: 1,
    prop2: 'dos',
    prop3: 3,
    prop4: 'cuatro',
    prop5: 5,
};
let obj7 ={
    prop1: true,
    prop2: false,
    prop3: NaN,
    prop4: undefined,
    prop5: 333,
};
let obj8 ={
    prop1: 5,
    prop2: 10,
    prop3: 15,
    prop4: 20,
    prop5: 25,
};
let obj9 ={
    prop1: 'procesador',
    prop2: 'ventilador',
    prop3: 'ram',
    prop4: 'almacenamiento',
    prop5: 'fuente de poder',
};
let obj10 ={
    prop1: 1,
    prop2: true,
    prop3: 'uno',
    prop4: 'si',
    prop5: 'true',
};
let obj11 ={
    prop1: 'a',
    prop2: 'b', 
    prop3: 'c', 
    prop4: 'd', 
    prop5: 'e', 
};
let obj12 ={
    prop1: null, 
    prop2: undefined, 
    prop3: null, 
    prop4: undefined, 
    prop5: null, 
};
let obj13 ={
    prop1: 12,
    prop2: 24,
    prop3: 36,
    prop4: 48,
    prop5: 60,
};
let obj14 ={
    prop1: 'a', 
    prop2: 1, 
    prop3: 1.1, 
    prop4: 'b', 
    prop5: 2,
};
let obj15 ={
    prop1: 1, 
    prop2: 1.1, 
    prop3: 'uno', 
    prop4: 2, 
    prop5: 2.2, 
};
let obj16 ={
    prop1: 'doce',
    prop2: 12,
    prop3: 'e12',
    prop4: 12.12,
    prop5: true,
};
let obj17 ={
    prop1: 'calvo',
    prop2: 'chipocludo',
    prop3: 'enquiste',
    prop4: 'el beban',
    prop5: 'e12',
};
let obj18 ={
    prop1: 'vaca',
    prop2: 'toro',
    prop3: 'Caballo',
    prop4: 'pollo',
    prop5: 'tractor',
};
let obj19 ={
    prop1: 1,
    prop2: 1,
    prop3: 2,
    prop4: 3,
    prop5: 5,
};
let obj20 ={
    prop1: 'pugs',
    prop2: 'perro calcetin',
    prop3: 'kashtira',
    prop4: 99,
    prop5: undefined,
};

//ANCHOR - Impresion de los arreglos en document.write
document.write(`<h2>ARREGLOS</h2>`)
document.write(`<h4>Arreglo 1</h4>`);
document.write('Elemento 1: ',arr1[0],`<br>`);
document.write('Elemento 2: ',arr1[1],`<br>`);
document.write('Elemento 3: ',arr1[2],`<br>`);
document.write('Elemento 4: ',arr1[3],`<br>`);
document.write('Elemento 5: ',arr1[4],`<br>`);
document.write('Elemento 6: ',arr1[5],`<br>`);
document.write('Elemento 7: ',arr1[6],`<br>`);
document.write('Elemento 8: ',arr1[7],`<br>`);
document.write('Elemento 9: ',arr1[8],`<br>`);
document.write('Elemento 10: ',arr1[9],`<br>`);

document.write(`<h4>Arreglo 2</h4>`);
document.write('Elemento 1: ',arr2[0],`<br>`);
document.write('Elemento 2: ',arr2[1],`<br>`);
document.write('Elemento 3: ',arr2[2],`<br>`);
document.write('Elemento 4: ',arr2[3],`<br>`);
document.write('Elemento 5: ',arr2[4],`<br>`);
document.write('Elemento 6: ',arr2[5],`<br>`);
document.write('Elemento 7: ',arr2[6],`<br>`);
document.write('Elemento 8: ',arr2[7],`<br>`);
document.write('Elemento 9: ',arr2[8],`<br>`);
document.write('Elemento 10: ',arr2[9],`<br>`);

document.write(`<h4>Arreglo 3</h4>`);
document.write('Elemento 1: ',arr3[0],`<br>`);
document.write('Elemento 2: ',arr3[1],`<br>`);
document.write('Elemento 3: ',arr3[2],`<br>`);
document.write('Elemento 4: ',arr3[3],`<br>`);
document.write('Elemento 5: ',arr3[4],`<br>`);
document.write('Elemento 6: ',arr3[5],`<br>`);
document.write('Elemento 7: ',arr3[6],`<br>`);
document.write('Elemento 8: ',arr3[7],`<br>`);
document.write('Elemento 9: ',arr3[8],`<br>`);
document.write('Elemento 10: ',arr3[9],`<br>`);

document.write(`<h4>Arreglo 4</h4>`);
document.write('Elemento 1: ',arr4[0],`<br>`);
document.write('Elemento 2: ',arr4[1],`<br>`);
document.write('Elemento 3: ',arr4[2],`<br>`);
document.write('Elemento 4: ',arr4[3],`<br>`);
document.write('Elemento 5: ',arr4[4],`<br>`);
document.write('Elemento 6: ',arr4[5],`<br>`);
document.write('Elemento 7: ',arr4[6],`<br>`);
document.write('Elemento 8: ',arr4[7],`<br>`);
document.write('Elemento 9: ',arr4[8],`<br>`);
document.write('Elemento 10: ',arr4[9],`<br>`);

document.write(`<h4>Arreglo 5</h4>`);
document.write('Elemento 1: ',arr5[0],`<br>`);
document.write('Elemento 2: ',arr5[1],`<br>`);
document.write('Elemento 3: ',arr5[2],`<br>`);
document.write('Elemento 4: ',arr5[3],`<br>`);
document.write('Elemento 5: ',arr5[4],`<br>`);
document.write('Elemento 6: ',arr5[5],`<br>`);
document.write('Elemento 7: ',arr5[6],`<br>`);
document.write('Elemento 8: ',arr5[7],`<br>`);
document.write('Elemento 9: ',arr5[8],`<br>`);
document.write('Elemento 10: ',arr5[9],`<br>`);

document.write(`<h4>Arreglo 6</h4>`);
document.write('Elemento 1: ',arr6[0],`<br>`);
document.write('Elemento 2: ',arr6[1],`<br>`);
document.write('Elemento 3: ',arr6[2],`<br>`);
document.write('Elemento 4: ',arr6[3],`<br>`);
document.write('Elemento 5: ',arr6[4],`<br>`);
document.write('Elemento 6: ',arr6[5],`<br>`);
document.write('Elemento 7: ',arr6[6],`<br>`);
document.write('Elemento 8: ',arr6[7],`<br>`);
document.write('Elemento 9: ',arr6[8],`<br>`);
document.write('Elemento 10: ',arr6[9],`<br>`);

document.write(`<h4>Arreglo 7</h4>`);
document.write('Elemento 1: ',arr7[0],`<br>`);
document.write('Elemento 2: ',arr7[1],`<br>`);
document.write('Elemento 3: ',arr7[2],`<br>`);
document.write('Elemento 4: ',arr7[3],`<br>`);
document.write('Elemento 5: ',arr7[4],`<br>`);
document.write('Elemento 6: ',arr7[5],`<br>`);
document.write('Elemento 7: ',arr7[6],`<br>`);
document.write('Elemento 8: ',arr7[7],`<br>`);
document.write('Elemento 9: ',arr7[8],`<br>`);
document.write('Elemento 10: ',arr7[9],`<br>`);

document.write(`<h4>Arreglo 8</h4>`);
document.write('Elemento 1: ',arr8[0],`<br>`);
document.write('Elemento 2: ',arr8[1],`<br>`);
document.write('Elemento 3: ',arr8[2],`<br>`);
document.write('Elemento 4: ',arr8[3],`<br>`);
document.write('Elemento 5: ',arr8[4],`<br>`);
document.write('Elemento 6: ',arr8[5],`<br>`);
document.write('Elemento 7: ',arr8[6],`<br>`);
document.write('Elemento 8: ',arr8[7],`<br>`);
document.write('Elemento 9: ',arr8[8],`<br>`);
document.write('Elemento 10: ',arr8[9],`<br>`);

document.write(`<h4>Arreglo 9</h4>`);
document.write('Elemento 1: ',arr9[0],`<br>`);
document.write('Elemento 2: ',arr9[1],`<br>`);
document.write('Elemento 3: ',arr9[2],`<br>`);
document.write('Elemento 4: ',arr9[3],`<br>`);
document.write('Elemento 5: ',arr9[4],`<br>`);
document.write('Elemento 6: ',arr9[5],`<br>`);
document.write('Elemento 7: ',arr9[6],`<br>`);
document.write('Elemento 8: ',arr9[7],`<br>`);
document.write('Elemento 9: ',arr9[8],`<br>`);
document.write('Elemento 10: ',arr9[9],`<br>`);

document.write(`<h4>Arreglo 10</h4>`);
document.write('Elemento 1: ',arr10[0],`<br>`);
document.write('Elemento 2: ',arr10[1],`<br>`);
document.write('Elemento 3: ',arr10[2],`<br>`);
document.write('Elemento 4: ',arr10[3],`<br>`);
document.write('Elemento 5: ',arr10[4],`<br>`);
document.write('Elemento 6: ',arr10[5],`<br>`);
document.write('Elemento 7: ',arr10[6],`<br>`);
document.write('Elemento 8: ',arr10[7],`<br>`);
document.write('Elemento 9: ',arr10[8],`<br>`);
document.write('Elemento 10: ',arr10[9],`<br>`);

document.write(`<h4>Arreglo 11</h4>`);
document.write('Elemento 1: ',arr11[0],`<br>`);
document.write('Elemento 2: ',arr11[1],`<br>`);
document.write('Elemento 3: ',arr11[2],`<br>`);
document.write('Elemento 4: ',arr11[3],`<br>`);
document.write('Elemento 5: ',arr11[4],`<br>`);
document.write('Elemento 6: ',arr11[5],`<br>`);
document.write('Elemento 7: ',arr11[6],`<br>`);
document.write('Elemento 8: ',arr11[7],`<br>`);
document.write('Elemento 9: ',arr11[8],`<br>`);
document.write('Elemento 10: ',arr11[9],`<br>`);

document.write(`<h4>Arreglo 12</h4>`);
document.write('Elemento 1: ',arr12[0],`<br>`);
document.write('Elemento 2: ',arr12[1],`<br>`);
document.write('Elemento 3: ',arr12[2],`<br>`);
document.write('Elemento 4: ',arr12[3],`<br>`);
document.write('Elemento 5: ',arr12[4],`<br>`);
document.write('Elemento 6: ',arr12[5],`<br>`);
document.write('Elemento 7: ',arr12[6],`<br>`);
document.write('Elemento 8: ',arr12[7],`<br>`);
document.write('Elemento 9: ',arr12[8],`<br>`);
document.write('Elemento 10: ',arr12[9],`<br>`);

document.write(`<h4>Arreglo 13</h4>`);
document.write('Elemento 1: ',arr13[0],`<br>`);
document.write('Elemento 2: ',arr13[1],`<br>`);
document.write('Elemento 3: ',arr13[2],`<br>`);
document.write('Elemento 4: ',arr13[3],`<br>`);
document.write('Elemento 5: ',arr13[4],`<br>`);
document.write('Elemento 6: ',arr13[5],`<br>`);
document.write('Elemento 7: ',arr13[6],`<br>`);
document.write('Elemento 8: ',arr13[7],`<br>`);
document.write('Elemento 9: ',arr13[8],`<br>`);
document.write('Elemento 10: ',arr13[9],`<br>`);

document.write(`<h4>Arreglo 14</h4>`);
document.write('Elemento 1: ',arr14[0],`<br>`);
document.write('Elemento 2: ',arr14[1],`<br>`);
document.write('Elemento 3: ',arr14[2],`<br>`);
document.write('Elemento 4: ',arr14[3],`<br>`);
document.write('Elemento 5: ',arr14[4],`<br>`);
document.write('Elemento 6: ',arr14[5],`<br>`);
document.write('Elemento 7: ',arr14[6],`<br>`);
document.write('Elemento 8: ',arr14[7],`<br>`);
document.write('Elemento 9: ',arr14[8],`<br>`);
document.write('Elemento 10: ',arr14[9],`<br>`);

document.write(`<h4>Arreglo 15</h4>`);
document.write('Elemento 1: ',arr15[0],`<br>`);
document.write('Elemento 2: ',arr15[1],`<br>`);
document.write('Elemento 3: ',arr15[2],`<br>`);
document.write('Elemento 4: ',arr15[3],`<br>`);
document.write('Elemento 5: ',arr15[4],`<br>`);
document.write('Elemento 6: ',arr15[5],`<br>`);
document.write('Elemento 7: ',arr15[6],`<br>`);
document.write('Elemento 8: ',arr15[7],`<br>`);
document.write('Elemento 9: ',arr15[8],`<br>`);
document.write('Elemento 10: ',arr15[9],`<br>`);

document.write(`<h4>Arreglo 16</h4>`);
document.write('Elemento 1: ',arr16[0],`<br>`);
document.write('Elemento 2: ',arr16[1],`<br>`);
document.write('Elemento 3: ',arr16[2],`<br>`);
document.write('Elemento 4: ',arr16[3],`<br>`);
document.write('Elemento 5: ',arr16[4],`<br>`);
document.write('Elemento 6: ',arr16[5],`<br>`);
document.write('Elemento 7: ',arr16[6],`<br>`);
document.write('Elemento 8: ',arr16[7],`<br>`);
document.write('Elemento 9: ',arr16[8],`<br>`);
document.write('Elemento 10: ',arr16[9],`<br>`);

document.write(`<h4>Arreglo 17</h4>`);
document.write('Elemento 1: ',arr17[0],`<br>`);
document.write('Elemento 2: ',arr17[1],`<br>`);
document.write('Elemento 3: ',arr17[2],`<br>`);
document.write('Elemento 4: ',arr17[3],`<br>`);
document.write('Elemento 5: ',arr17[4],`<br>`);
document.write('Elemento 6: ',arr17[5],`<br>`);
document.write('Elemento 7: ',arr17[6],`<br>`);
document.write('Elemento 8: ',arr17[7],`<br>`);
document.write('Elemento 9: ',arr17[8],`<br>`);
document.write('Elemento 10: ',arr17[9],`<br>`);

document.write(`<h4>Arreglo 18</h4>`);
document.write('Elemento 1: ',arr18[0],`<br>`);
document.write('Elemento 2: ',arr18[1],`<br>`);
document.write('Elemento 3: ',arr18[2],`<br>`);
document.write('Elemento 4: ',arr18[3],`<br>`);
document.write('Elemento 5: ',arr18[4],`<br>`);
document.write('Elemento 6: ',arr18[5],`<br>`);
document.write('Elemento 7: ',arr18[6],`<br>`);
document.write('Elemento 8: ',arr18[7],`<br>`);
document.write('Elemento 9: ',arr18[8],`<br>`);
document.write('Elemento 10: ',arr18[9],`<br>`);

document.write(`<h4>Arreglo 19</h4>`);
document.write('Elemento 1: ',arr19[0],`<br>`);
document.write('Elemento 2: ',arr19[1],`<br>`);
document.write('Elemento 3: ',arr19[2],`<br>`);
document.write('Elemento 4: ',arr19[3],`<br>`);
document.write('Elemento 5: ',arr19[4],`<br>`);
document.write('Elemento 6: ',arr19[5],`<br>`);
document.write('Elemento 7: ',arr19[6],`<br>`);
document.write('Elemento 8: ',arr19[7],`<br>`);
document.write('Elemento 9: ',arr19[8],`<br>`);
document.write('Elemento 10: ',arr19[9],`<br>`);

document.write(`<h4>Arreglo 20</h4>`);
document.write('Elemento 1: ',arr20[0],`<br>`);
document.write('Elemento 2: ',arr20[1],`<br>`);
document.write('Elemento 3: ',arr20[2],`<br>`);
document.write('Elemento 4: ',arr20[3],`<br>`);
document.write('Elemento 5: ',arr20[4],`<br>`);
document.write('Elemento 6: ',arr20[5],`<br>`);
document.write('Elemento 7: ',arr20[6],`<br>`);
document.write('Elemento 8: ',arr20[7],`<br>`);
document.write('Elemento 9: ',arr20[8],`<br>`);
document.write('Elemento 10: ',arr20[9],`<br>`);

//ANCHOR - Impresión de objetos en document.write
document.write(`<br><h2>OBJETOS</h2>`);
document.write(`<h4>Objeto 1</h4>`);
document.write('Propiedad 1: ',obj1.prop1,`<br>`);
document.write('Propiedad 2: ',obj1.prop2,`<br>`);
document.write('Propiedad 3: ',obj1.prop3,`<br>`);
document.write('Propiedad 4: ',obj1.prop4,`<br>`);
document.write('Propiedad 5: ',obj1.prop5,`<br>`);

document.write(`<h4>Objeto 2</h4>`);
document.write('Propiedad 1: ',obj2.prop1,`<br>`);
document.write('Propiedad 2: ',obj2.prop2,`<br>`);
document.write('Propiedad 3: ',obj2.prop3,`<br>`);
document.write('Propiedad 4: ',obj2.prop4,`<br>`);
document.write('Propiedad 5: ',obj2.prop5,`<br>`);

document.write(`<h4>Objeto 3</h4>`);
document.write('Propiedad 1: ',obj3.prop1,`<br>`);
document.write('Propiedad 2: ',obj3.prop2,`<br>`);
document.write('Propiedad 3: ',obj3.prop3,`<br>`);
document.write('Propiedad 4: ',obj3.prop4,`<br>`);
document.write('Propiedad 5: ',obj3.prop5,`<br>`);

document.write(`<h4>Objeto 4</h4>`);
document.write('Propiedad 1: ',obj4.prop1,`<br>`);
document.write('Propiedad 2: ',obj4.prop2,`<br>`);
document.write('Propiedad 3: ',obj4.prop3,`<br>`);
document.write('Propiedad 4: ',obj4.prop4,`<br>`);
document.write('Propiedad 5: ',obj4.prop5,`<br>`);

document.write(`<h4>Objeto 5</h4>`);
document.write('Propiedad 1: ',obj5.prop1,`<br>`);
document.write('Propiedad 2: ',obj5.prop2,`<br>`);
document.write('Propiedad 3: ',obj5.prop3,`<br>`);
document.write('Propiedad 4: ',obj5.prop4,`<br>`);
document.write('Propiedad 5: ',obj5.prop5,`<br>`);

document.write(`<h4>Objeto 6</h4>`);
document.write('Propiedad 1: ',obj6.prop1,`<br>`);
document.write('Propiedad 2: ',obj6.prop2,`<br>`);
document.write('Propiedad 3: ',obj6.prop3,`<br>`);
document.write('Propiedad 4: ',obj6.prop4,`<br>`);
document.write('Propiedad 5: ',obj6.prop5,`<br>`);

document.write(`<h4>Objeto 7</h4>`);
document.write('Propiedad 1: ',obj7.prop1,`<br>`);
document.write('Propiedad 2: ',obj7.prop2,`<br>`);
document.write('Propiedad 3: ',obj7.prop3,`<br>`);
document.write('Propiedad 4: ',obj7.prop4,`<br>`);
document.write('Propiedad 5: ',obj7.prop5,`<br>`);

document.write(`<h4>Objeto 8</h4>`);
document.write('Propiedad 1: ',obj8.prop1,`<br>`);
document.write('Propiedad 2: ',obj8.prop2,`<br>`);
document.write('Propiedad 3: ',obj8.prop3,`<br>`);
document.write('Propiedad 4: ',obj8.prop4,`<br>`);
document.write('Propiedad 5: ',obj8.prop5,`<br>`);

document.write(`<h4>Objeto 9</h4>`);
document.write('Propiedad 1: ',obj9.prop1,`<br>`);
document.write('Propiedad 2: ',obj9.prop2,`<br>`);
document.write('Propiedad 3: ',obj9.prop3,`<br>`);
document.write('Propiedad 4: ',obj9.prop4,`<br>`);
document.write('Propiedad 5: ',obj9.prop5,`<br>`);

document.write(`<h4>Objeto 10</h4>`);
document.write('Propiedad 1: ',obj10.prop1,`<br>`);
document.write('Propiedad 2: ',obj10.prop2,`<br>`);
document.write('Propiedad 3: ',obj10.prop3,`<br>`);
document.write('Propiedad 4: ',obj10.prop4,`<br>`);
document.write('Propiedad 5: ',obj10.prop5,`<br>`);

document.write(`<h4>Objeto 11</h4>`);
document.write('Propiedad 1: ',obj11.prop1,`<br>`);
document.write('Propiedad 2: ',obj11.prop2,`<br>`);
document.write('Propiedad 3: ',obj11.prop3,`<br>`);
document.write('Propiedad 4: ',obj11.prop4,`<br>`);
document.write('Propiedad 5: ',obj11.prop5,`<br>`);

document.write(`<h4>Objeto 12</h4>`);
document.write('Propiedad 1: ',obj12.prop1,`<br>`);
document.write('Propiedad 2: ',obj12.prop2,`<br>`);
document.write('Propiedad 3: ',obj12.prop3,`<br>`);
document.write('Propiedad 4: ',obj12.prop4,`<br>`);
document.write('Propiedad 5: ',obj12.prop5,`<br>`);

document.write(`<h4>Objeto 13</h4>`);
document.write('Propiedad 1: ',obj13.prop1,`<br>`);
document.write('Propiedad 2: ',obj13.prop2,`<br>`);
document.write('Propiedad 3: ',obj13.prop3,`<br>`);
document.write('Propiedad 4: ',obj13.prop4,`<br>`);
document.write('Propiedad 5: ',obj13.prop5,`<br>`);

document.write(`<h4>Objeto 14</h4>`);
document.write('Propiedad 1: ',obj14.prop1,`<br>`);
document.write('Propiedad 2: ',obj14.prop2,`<br>`);
document.write('Propiedad 3: ',obj14.prop3,`<br>`);
document.write('Propiedad 4: ',obj14.prop4,`<br>`);
document.write('Propiedad 5: ',obj14.prop5,`<br>`);

document.write(`<h4>Objeto 15</h4>`);
document.write('Propiedad 1: ',obj15.prop1,`<br>`);
document.write('Propiedad 2: ',obj15.prop2,`<br>`);
document.write('Propiedad 3: ',obj15.prop3,`<br>`);
document.write('Propiedad 4: ',obj15.prop4,`<br>`);
document.write('Propiedad 5: ',obj15.prop5,`<br>`);

document.write(`<h4>Objeto 16</h4>`);
document.write('Propiedad 1: ',obj16.prop1,`<br>`);
document.write('Propiedad 2: ',obj16.prop2,`<br>`);
document.write('Propiedad 3: ',obj16.prop3,`<br>`);
document.write('Propiedad 4: ',obj16.prop4,`<br>`);
document.write('Propiedad 5: ',obj16.prop5,`<br>`);

document.write(`<h4>Objeto 17</h4>`);
document.write('Propiedad 1: ',obj17.prop1,`<br>`);
document.write('Propiedad 2: ',obj17.prop2,`<br>`);
document.write('Propiedad 3: ',obj17.prop3,`<br>`);
document.write('Propiedad 4: ',obj17.prop4,`<br>`);
document.write('Propiedad 5: ',obj17.prop5,`<br>`);

document.write(`<h4>Objeto 18</h4>`);
document.write('Propiedad 1: ',obj18.prop1,`<br>`);
document.write('Propiedad 2: ',obj18.prop2,`<br>`);
document.write('Propiedad 3: ',obj18.prop3,`<br>`);
document.write('Propiedad 4: ',obj18.prop4,`<br>`);
document.write('Propiedad 5: ',obj18.prop5,`<br>`);

document.write(`<h4>Objeto 19</h4>`);
document.write('Propiedad 1: ',obj19.prop1,`<br>`);
document.write('Propiedad 2: ',obj19.prop2,`<br>`);
document.write('Propiedad 3: ',obj19.prop3,`<br>`);
document.write('Propiedad 4: ',obj19.prop4,`<br>`);
document.write('Propiedad 5: ',obj19.prop5,`<br>`);

document.write(`<h4>Objeto 20</h4>`);
document.write('Propiedad 1: ',obj20.prop1,`<br>`);
document.write('Propiedad 2: ',obj20.prop2,`<br>`);
document.write('Propiedad 3: ',obj20.prop3,`<br>`);
document.write('Propiedad 4: ',obj20.prop4,`<br>`);
document.write('Propiedad 5: ',obj20.prop5,`<br>`);








