
let numeroSecreto = 0;
let intentos= 1;
let numeroSorteado=[];
let numeroMaximo= 10;

function asignarTexto(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); //parseint para que solo acepte numeros, el .value sirve para optener el valor del input
   // console.log(typeof(numeroUsuario)); para saber el tipo de dato de la variable
   console.log(intentos);
   if (numeroUsuario === numeroSecreto) {
        asignarTexto('p',`Correcto, acertaste en ${intentos} ${(intentos==1) ? "vez" : "veces"} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acerto
        if (numeroUsuario> numeroSecreto) {
            asignarTexto('p',`El numero secreto es menor`)
        } else{
            asignarTexto('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;   
}
function limpiarCaja() {
    let valorCaja=document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numeroSorteado);
    //Si ya sorteamos todos los numeros   
    if (numeroSorteado.length==numeroMaximo) {
        asignarTexto('p','Ya se sortearon todos los numeros'); 
     } else{
    if (numeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    //si el numero ya esta en la lista o acaba de salir entra de nuevo y da un random diferente
    }else{
        numeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales() {  
        //indicar ensaje de inicio
    asignarTexto('h1','Juego del numero Secreto');
    asignarTexto('p',`Indica un numero del 1 al ${numeroMaximo}`);
        //generar el num aleatorio
    numeroSecreto=generarNumeroSecreto();
        //intentos inicializarlo
    intentos=1;
}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    condicionesIniciales();
    //dehabilitar el de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();