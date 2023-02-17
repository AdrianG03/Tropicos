let objAn = {
    prop1: 'Anodo',
    prop2: 'Catodo',
    prop3: 3333,
    propO: {
        pro: 'Soy ese',
        pr1: false,
    },
};

console.log('Holiwis for in');
for (const k in objAn) {

    if (typeof objAn[k] == 'object') {
        
        console.log('Holiwis otra vez pero if');
        for (const key in objAn[k]) {
            console.log(`${key}: ${objAn[k][key]}`);
        }
    }else{
        console.log(`${k}: ${objAn[k]}`);
    }

}
