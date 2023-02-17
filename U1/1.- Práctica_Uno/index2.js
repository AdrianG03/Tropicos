//ARRAY
let arr=[1,'cuchao',true,3.1415];

//Recorrer array con ciclo foreach
arr.forEach(elem=>{
    //document.write(elem);
});

//Recorrer array con ciclo for
for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    //document.write(arr[i]);
}

//OBJETOS
//En JS, a un objeto, se le llama tambien JSON
//Que por sus siglas significa JavaScript Object Notation

let estudiante = {
    nombre: 'Medio metro',
    apellido: "Pirata",
    escuela: 'TECNM Campus Zacatepec',
    semestre: 6,
    totalMaterias: 7,
};

//console.log(estudiante);
//document.write(estudiante.nombre);
document.write('EL nombre del estudiante es: ',estudiante.nombre, `<br>`);
document.write('EL apellido del estudiante es: ',estudiante.apellido, `<br>`);
document.write('La escuela del estudiante es: ',estudiante.escuela, `<br>`);
document.write('EL semestre del estudiante es: ',estudiante.semestre, `<br>`);
document.write('EL  total de materias del estudiante es: ',estudiante.totalMaterias, `<br>`);
