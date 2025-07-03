const x = 5000;
const y = 15000;
const z = 20000;

const mensajeX = verificarCredito(x);
const mensajeY = verificarCredito(y);
const mensajeZ = verificarCredito(z);

imprimirResultados(x, mensajeX);
imprimirResultados(y, mensajeY);
imprimirResultados(z, mensajeZ);


function verificarCredito(n){
    if(n > 15000){
        return "APROBADO";
    }else{
        return "DESAPROBADO";
    }
}
function imprimirResultados(n, mensaje){
    console.log(`valor: ${n}`);
    console.log(`mensaje: ${mensaje}`);
        
}