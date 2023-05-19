// alert("Bienvenido a la Calculadora 101");

// let suma = (num1, num2) => num1 + num2;
// let resta = (num1, num2) => num1 - num2;
// let producto = (num1, num2) => num1 * num2;
// let div = (num1, num2) => num1 / num2;

const errorModal = document.getElementById('errorModal');
const operacionDiv = document.getElementById('container-resultado');


function mostrar () {

    let num1Input = parseFloat(document.getElementById("num1").value);
    let num2Input = parseFloat(document.getElementById("num2").value);
      
    let operacion = document.querySelector('input[name="operacion"]:checked').value;
    let resultado = 0;
    let textError = '';

    switch (operacion) {
        case 'suma':
            resultado = num1Input + num2Input;
            break;
        case 'resta':
            resultado = num1Input - num2Input;
            break;
        case 'producto':
            resultado = num1Input * num2Input;
            break;
        case 'division':
            if (num2Input === 0) {
                textError = 'Error: Division por cero es indefinido!';
                mostrarError(textError);
                return;}
            resultado =  num1Input / num2Input;
            break;

        default:
            break;
    }

    mostrarResultado(resultado);
}

let mostrarResultado = function(res) {
    

    let resultadoTxtNode = document.createTextNode(`El resultado de la operacion es ${res}`);
    let parrafo = document.createElement('p')
    parrafo.classList.add('p-resultado');
    parrafo.appendChild(resultadoTxtNode);

    operacionDiv.appendChild(parrafo);
    btnCalcular.disabled = true;
    btnActualizar.disabled = false;
}

let mostrarError = function(textError){
    let resultadoTxtNode = document.createTextNode(textError);
    let parrafo = document.createElement('p')
    parrafo.appendChild(resultadoTxtNode);
    operacionDiv.appendChild(parrafo);

    btnCalcular.disabled = true;
    btnActualizar.disabled = false;

}

let actualizar = function () {
    btnCalcular.classList.remove('display-off');
    btnCalcular.classList.add('display-on');

    btnActualizar.classList.remove('display-off');
    btnActualizar.classList.add('display-on');

    btnCalcular.disabled = false;
    btnActualizar.disabled = false;
    document.getElementById('container-resultado').innerText = '';
    
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("num1").focus();
}

let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener('click', mostrar);
let btnActualizar = document.getElementById("btnActualizar");
btnActualizar.addEventListener('click', actualizar);

