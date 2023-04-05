// alert("Bienvenido a la Calculadora 101");

let suma = (num1, num2) => num1 + num2;
let resta = (num1, num2) => num1 - num2;
let producto = (num1, num2) => num1 * num2;
let div = (num1, num2) => num1 / num2;

function mostrar () {
    let num1Input = document.getElementById("num1").value;
    let num2Input = document.getElementById("num2").value;
    let operacion = document.getElementById("num2").value;
    console.log(num2Input, num1Input);
    alert("Ingresado: " + num1Input + ' ' +num2Input);
}
let button = document.getElementById("btnCal");

button.addEventListener('click', mostrar);

