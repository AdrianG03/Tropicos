console.log("Hola");

let a = [1,2,3,4,5];

a.forEach(element => {
    document.write(element);   
});

//Sobre el índice de un array
console.log('Tamaño del array es de: ', a.length);

//Método push
//Agrega un elemento al arreglo
a.push('pera');
console.log(a);

//Método pop 
//Saca el último elemento 
console.log(a.pop());

//Método delete
//Elimina la posición de un elemento
delete a[1];
console.log(a);

//Método Concat
//Definir arrays a contatenar
let a2 = ['que bendicion', 'compaltan chico', 'que mira bobo', 'anda pa ash'];
let a3 = ['zanahoria','calabaza','chayote','jitomate'];

console.log(a2);
console.log(a3);

let arrC =a2.concat(a3);

console.log(arrC);

