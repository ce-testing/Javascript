const aceleración = 100.5032;
const masa = 76.1265;

const fuerza = calcularFuerza(masa, aceleración);
imprimirResultados(masa, aceleración, fuerza);

function calcularFuerza(masa, aceleración){
    return masa * aceleración;
}

function imprimirResultados(masa, aceleración){
       console.log(`masa es: ${masa.toFixed(2)}`);
       console.log(`aceleración es: ${aceleración.toFixed(2)}`);
       console.log(`fuerza es: ${fuerza.toFixed(4)}`);  
}