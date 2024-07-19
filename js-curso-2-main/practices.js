//EJERCICIOS DE PRACTICA
/*let BuyItem=ParseInt(prompt("Da el precio de lo que vas a comprar"));
alert("Calculando tu total de compra....");
let iva,totalCompra;
iva=(BuyItem/100)*21;
totalCompra=(BuyItem+iva);
alert(`Tu total de compra con IVA de 21% es de ${totalCompra} pesos`);
//
alert('Calculare el area y perimetro de un caudrado');
let lado=parseInt(prompt('Dame la medida del lado del cuadrado'));
let perimetro,area;
area=lado*lado;
perimetro=lado*4;
alert(`El Area de tu figura dada es de ${area} y el perimetro es de ${perimetro}`);
//
alert('A continuacion te pedire que me des un valor para 3 numeros');
let n1,n2,n3,total;
n1=parseInt(prompt('Valor del primero numero'));
n2=parseInt(prompt('Valor del segundo numero'));
n3=parseInt(prompt('Valor del tercer numero'));
total=(n1+n2+n3)/3;
alert(`La media de los numeros proporcionados es de: ${total}`);
//
alert('Teclea la info que se pide a continuacion');
let kilometros=parseInt(prompt('Teclea el numero de Kilometros recorridos'));
let litros=parseInt(prompt('Tecle el numero de litros consumidos'));
let consumo=litros/kilometros;
alert(`Tu consumo de combustible ah sido de ${consumo} lt por km`)
//
let numero=parseInt(prompt('Ingresa el nuumero'));
let unidades,decenas;
unidades=numero%10;
decenas=parseInt(numero/10);
alert(`El total de decenas es de: ${decenas} y el total de unidades es ${unidades}`);

let listaGenerica=[];
let lenguajesProgramacion=['javaScript','C','C++','Kotlin','Python'];//generar un array
lenguajesProgramacion.push('Java','Ruby','Golag');//agregar al array

function mostrar() {
    console.log(lenguajesProgramacion);
}
mostrar();

function mostrarLenguagesSeparadamente() {        //Mientras i sea menor al length del array se imprimira lo del array x separado
    for (let i = 0; i < lenguajesProgramacion.length; i++) {
      console.log(lenguajesProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();

  function mostrarLenguagesReversoSeparadamente() {  // mientras i es mayor a length del array se ejecutara e imprimira en cada i
    for (let i = lenguajesProgramacion.length - 1; i >= 0; i--) { // el ser -1 en el length imprime del ultimo al primero
      console.log(lenguajesProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente(); 

  function calcularMedia(lista) {          //i inicia el 0 mietras sea menor al length del array se iran sumando 
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {  //cuando el length llegue a ser menor a 0 la suma de todos se restara entre el length del array
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];  //parametros en forma de array a pasar
let media = calcularMedia(numeros);  //parasar parametro a la funcion
console.log('Média:', media); //resultado de la funcion   

function encontrarMayorMenor(lista) {
  let mayor = lista[0];     
  let menor = lista[0];     //Se inicializa en el primer elemento en este caso Mayro y Menor valdran 15 q es el primer elemento

  for (let i = 1; i < lista.length; i++) {  //se analizara hastta que i osea 1 sea menor que el length del array
    if (lista[i] > mayor) {     //se compara, como el primero elemento seria 15, se compara con el siguiente, si no es mayor se pasa al de abajo
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];        //si es menor se compara con 15 q es el primero del array y si si es se queda ahi en la lista y se compara con los sigientes
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);   


function sumaElemntos(numeros) {
  let suma =0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}
let numeros =[10,10,30,5];
let resultado = sumaElemntos(numeros);
console.log(resultado);   

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) { //comparara mientras 1 sea menor a length del array
    if (lista[i] === elemento) {   //compara cada elemento recorrido hasta que sea uno igual al parametro elemento
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

let array=[10,20,30,40,50];  //lista de numeros
let elemnt=40; //el elemento  encontrar
let resultado=encontrarIndiceElemento(array,elemnt); //pasar los parametros a la funcion
console.log(`El elemento que quieres encontrar se encuentra en el numero ${resultado} del array`); */

