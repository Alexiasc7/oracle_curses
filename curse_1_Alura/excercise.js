/*PRIMER REPASO
alert('Bienvenida y bienvenido a nuestro sitio web');
let nombre;
let edad;
let numreoDeVentas=50;
let saldoDisponible=1000;
let mensajeDeError='ERROR! Completa odos los campos';
alert (mensajeDeError);
alert('La venta numero '+numreoDeVentas+' Tuvo una ganancia total de: '+saldoDisponible);
nombre=prompt('Cual es tu nombre?');
edad=prompt('Cual es tu edad');
alert('Compra realizada por '+nombre+' de edad de : '+edad)

if (edad>=18) {
    alert('Puedes obtener tu licencia de conducir');   
}
else{
    alert('No puedes tener tu licencia de conducir');
}*/

/*Segundo repaso 
let diaSemana;
diaSemana =prompt('Que dia de la semana es?: ');

if (diaSemana=='sabado') {
    alert('buen fin de semana');
} else if (diaSemana=='domingo') {
    alert('Buen fin de semana')
} else{
    alert("Buena semana");
}

let numero=prompt('Ingresa un numero positivo o negativo');

if (numero>=0) {
    alert(`el numero es positivo ${numero}`);
}else {
    alert(`El numero es negatiivo ${numero}`);
} 
let puntuacion=prompt('Ingresa tu puntuacion ');

if (puntuacion>=100) {
    alert(`Felicidades has ganado con una puntuacion de: ${puntuacion}`);
}else {
    alert(`Intenta nuevamente para ganar tu puntuacion fue de: ${puntuacion}`);
}
let nameUsua=prompt('proporciona tu nombre porfavor');
alert(`Tu nombre de usuario es ${nameUsua} Holaaa`);   

//Ejercicio contador hasta el 10
let contador=1;
while (contador>0) {
    alert(`El numero ahora es el ${contador}`);
    contador=contador+1;
    if (contador==10) {
        alert(`Numero final es ${contador}`);
        contador=-1;
    }
}
//Ejercicio contador de 10 al 0
let contador=10;
while (contador<11) {
    alert(`El numero ahora es el ${contador}`);
    contador=contador-1;
    if (contador==0) {
        alert(`Numero final es ${contador}`);
        contador=12;
    }
 }
//Numero del 0 al dado por el usuario
let numeroUsuario=prompt('Dame un numero');
let contador=0;
while (contador!=numeroUsuario) {
    alert(`El numero ahora es  ${contador}`);
    contador=contador+1;
 } alert(`El numero final dado por el usuario fue ${contador}`);
  
 let nombre='Alex';
 console.log(`Hola ${nombre}`);
 alert(`Hola ${nombre}`);
let mensaje=prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(mensaje);
let val1=5,val2=6,resultado;

sum=val1+val2;
res=val1-val2;
console.log(`la suma de ${val1} y ${val2} tiene como resultado ${sum}`);
console.log(`la resta de ${val1} y ${val2} tiene como resultado ${res}`); 

let numeroDado=parseInt(prompt('Proporciona un numero porfavor'));

if (numeroDado==0) {
    console.log('El numero proporcionado fue cero');
} else if(numeroDado>0){
    console.log('El numero dado es positivo');
} else{
    console.log('El numero dado es negativo');
}*/ 

alert('Generador de numero random');
let numeroRandom=Math.floor(Math.random()*1000);
alert(`El numero random es ${numeroRandom}`)