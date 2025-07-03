const trabajador = require("./trabajador.json");
let estadoCivil;

if(trabajador.isMarried){
    estadoCivil = "CASADO";
}else{
    estadoCivil ="SOLTERO";
}

console.log(`Estado Civil: ${estadoCivil}`);

const cantidadLenguajesProgramación = trabajador["programming languages"].length;
console.log(`Cantidad de lenguajes de programación: ${cantidadLenguajesProgramación}`);

const cardInfo = trabajador.bank.cardInfo;
console.log(`Información tarjeta: ${JSON.stringify(cardInfo, null, 2)}`);

const cantidadDigitosTarjeta = trabajador.bank.cardInfo.number.length;
console.log(`Cantidad de digitos de la tarjeta: ${cantidadDigitosTarjeta}`);

const tercerHobby = trabajador.hobbies[2];
console.log(`Tercer hobby: ${JSON.stringify(tercerHobby, null, 2)}`);