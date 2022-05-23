const currentHour = 5;
let message;

if (currentHour >=22){
    console.log("Não deveríamos comer nada, é hora de dormir")
}
else if (currentHour>=18 && currentHour<22) {
    console.log("Rango da noite, vamos jantar :D")
}
else if (currentHour>=14 && currentHour<18) {
    console.log("Vamos fazer um bolo pro café da tarde?")
}
else if (currentHour<14 && currentHour >=11) {
    console.log("Hora do almoço!!!")
}
else {
    console.log("Hmmm, cheiro de café recém passado")
}

message = console.log(currentHour);

return message;


//falta imprimir o valor do console log em outra variável

