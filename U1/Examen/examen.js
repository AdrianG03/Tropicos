let arrX = [
{
    marca: 'Ford',
    modelo:'Zx2',
    precio: 80000,
    puertas: 4,
    rin: '13',
    otros:{
        velmax: 210,
        enVenta: true, 
    },
},
{
    marca: 'Nissan',
    modelo: 'Hikari',
    precio: 83000,
    puertas: 5,
    rin: 14,
    otros:{
        velmax: 200,
        enVenta: false, 
    },
},
{
    marca: 'Chevrolet',
    modelo: 'Chevy',
    precio: 30000,
    puertas: 5,
    rin: 16,
    otros:{
        velmax: 180,
        enVenta: false, 
    },
}];

arrX.forEach(element => {
    document.write(`<h3></h3>`);
    for (const k in element) {
        if (typeof element[k] == 'object') {
            for (const key in element[k]) {
                document.write(`${key}: ${element[k][key]}<br>`);
            }
        }else{
            document.write(`${k}: ${element[k]}<br>`);
        }
    }
});




