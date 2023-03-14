let arr = ['uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez'];
let arr2 = [1,25,66,95,75,100,18,15,45,22];

let arrc = arr.concat(arr2);

arrc.push('soyese xdxd')

document.write('<h1>Arreglo Concatenado</h1>');

arrc.forEach(elem => {
    document.write(`${elem}<br>`);
});