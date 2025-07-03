const a = 14;
const b = -25;

const aMultiplo7 = verificarMultiplo7(a);
const bMultiplo7 = verificarMultiplo7(b);

const aNegativo = verificarNegativo(a);
const bNegativo = verificarNegativo(b);

imprimirResultados(a, aMultiplo7, aNegativo);
imprimirResultados(b, bMultiplo7, bNegativo);

function verificarMultiplo7(n) {
    return n % 7 === 0;
 }

 function verificarNegativo(n){
    return n < 0;
 }

 function imprimirResultados(n, esMultiplo7, esNegativo){
    console.log(`n: ${n}`);
    console.log(`es multiplo de 7: ${esMultiplo7}`);
    console.log(`es negativo: ${esNegativo}`);
    
    
    
 }