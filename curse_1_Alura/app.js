//Declaracion de variables

alert('Juego numero secreto')
let numeroMaximo=prompt('Asigna un numero maximo para jugar el juego del 1 al ??');
let NumeroSecreto=Math.floor(Math.random()*numeroMaximo)+1;
console.log(NumeroSecreto);
let NumeroUsuario=0;
let intentos=1;
let maximoIntento=9;

//let palabraVeces='vez';

while (NumeroUsuario != NumeroSecreto) {
    NumeroUsuario=parseInt(prompt (`Indicame un numero del 1 al ${numeroMaximo}`));

    //console in browser

    console.log( NumeroUsuario);

//realization of the condition and comparison
    if (NumeroUsuario == NumeroSecreto) {
        alert(`Acertaste el numero el numero secreto es ${NumeroSecreto}. lo hiciste en ${intentos} ${intentos==1 ? 'vez' : 'veces'}`);

//Item ? symbolizes if is the comparison, the: symbolizes the else that happens if it is not is known as the ternary operator '?'
//el ? simboliza if es la comparacion ,el : simbolisa el else que pasa si no es se conoce como operador ternario '?' 

    } else if (NumeroUsuario>NumeroSecreto){
        alert('El numero secreto es menor');
    } else{
        alert('El numero secreto es mayor')
    }
    
//attempt counter
//intentos=intentos+1;

    intentos++;
    palabraVeces='veces';

    if (intentos>maximoIntento) {
        alert(`Se exedio el numero de intentos : ${intentos} intentos realizados `);
        break;
    }
}