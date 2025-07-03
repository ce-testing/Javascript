const velocidadInicial = 15.24;
const aceleración = 3.75;
const tiempo = 5;

const velocidadFinal = calcularVelocidadFinal(velocidadInicial, aceleración, tiempo);
imprimirResultados(velocidadInicial, aceleración, tiempo, velocidadFinal);


function calcularVelocidadFinal(velocidadInicial, aceleración, tiempo){
    return velocidadInicial +aceleración * tiempo;

}

function imprimirResultados(velocidadInicial, aceleración, tiempo, velocidadFinal){
    console.log(`velocidad inicial: ${velocidadFinal}`);
    console.log(`aceleración: ${aceleración}`);
    console.log(`tiempo: ${tiempo}`);
    console.log(`velocidad final: ${velocidadFinal}`);
         
}