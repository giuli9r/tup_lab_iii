
console.log("Variables definidas: ")
let txt = "String!";
let boolean = true;
let nullVar = null;
let objVal = {
    "marca" : "Ford"
};

let honda = {
    color : "Rojo",
    marca : "Honda",
    arrancar(){
        console.log('Arrancando la '+ this.marca);
    }
}
let yamaha = {
    color : "amarilla",
    marca : "Yamaha ",
    arrancar(){
        console.log('Arrancando la '+ this.marca + this.color);
    }
}

// console.log('123'); console.log(txt); console.log(boolean); console.log(nullVar); console.log(objVal);
honda.arrancar();
yamaha.arrancar();

// long separator comment long separator comment long separator comment

let parrafo = document.createElement('p');
let text = document.createTextNode("texto insertado por javascript usando appenChild");

parrafo.appendChild(text);
document.getElementById('resultado').appendChild(parrafo);