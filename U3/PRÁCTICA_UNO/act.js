function main() {
    function saludar() {
        document.write(`<h1>Holiwis sisoy xd</h1>`);
    }
    
    function tabla() {
        document.write(`TABLA DE MUlTIPLICAR<br>`);
        let numero=8;
        for (let i = 0; i < 10; i++) {
            let x=numero*(i+1);
            document.write(`${numero}x${i+1}=${x}<br>`);
        }
        document.write(`<br>`);
    }

    
    function calculadora() {
        document.write(`CALCULADORA <br>`);
        let num1=15, num2=5;
        let suma=15+5;
        let multi=15*5;
        let div=15/5;
        let resta=15-5;
        document.write("Número 1: ",num1,`<br>`);
        document.write("Número 2: ",num2,`<br>`);
        document.write(`<br>`);
        document.write(`Suma: ${num1}+${num2}=${suma}<br>`);
        document.write(`Multiplicación: ${num1}*${num2}=${multi}<br>`);
        document.write(`División: ${num1}/${num2}=${div}<br>`);
        document.write(`Resta: ${num1}-${num2}=${resta}<br>`);
    }
    saludar();
    tabla();
    calculadora();
}