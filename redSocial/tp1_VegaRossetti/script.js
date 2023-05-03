console.log("Script loaded");  // init

// VARIABLES GLOBALES
var _pressedBtnMeGusta = false;

// FUNCIONES
let followUser = function () {

    if( btnSeguir.textContent == "Seguir") {
        btnSeguir.textContent = "Dejar de seguir";
        btnSeguir.className = "unfollow";
    }
    else {
        btnSeguir.textContent = "Seguir";
        btnSeguir.className = "following";
    }
    console.log("siguiendo...");
}

let sombrear = function(){
    btnSeguir.classList.add("shadow");
}
let aclarar = function(){
    btnSeguir.classList.remove("shadow");
}

let login = function () {
    let inputUser = document.getElementById("inpUsuario").value;
    if( inputUser != '') {
        if( inputUser == 'Jane Doe') {alert("Sesión ya iniciada."); document.getElementById("inpUsuario").value = ''; return; }
        alert("Usuario no encontrado.");
        document.getElementById("inpUsuario").value = '';
    }  else {
        alert("Por favor, ingrese un usuario.");
    }
}

let modalTextoVacio = function(){

}

let modalUserVacio = function(){

}


let agregarComentario = function (evento) {
    //Evito que recargue la página
    evento.preventDefault();

    //Obtengo los valores ingresados
    let textoComentario =  document.getElementById('txtComentario').value.trim();
    let inputUser = document.getElementById("inpUsuario").value;

    if (textoComentario == '') {
        modalTextoVacio(); 
        return;
    }

    if (inputUser == '') {
        modalUserVacio(); 
        return;
    }

    //Agrego el feedback a la página
    let texto = document.createTextNode('Anónimo - ' + textoComentario);
    let parrafo = document.createElement('p')
    parrafo.appendChild(texto);
    document.getElementById('parteComentarios').appendChild(parrafo);
    document.getElementById('txtComentario').value = '';
}

let incrementaMeGusta = function () {

    if (!_pressedBtnMeGusta) {
        let resultado = parseInt((document.getElementById('likes')).innerText.match(/\d+/)[0]) + 1;
        document.getElementById('likes').innerText = resultado + ' likes';
        _pressedBtnMeGusta = true;
    }
}

// BOTONES
let btnSeguir = document.getElementById("btnSeguir");
btnSeguir.addEventListener('click', followUser);
btnSeguir.addEventListener('mouseover', sombrear);
btnSeguir.addEventListener('mouseout', aclarar);

let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener('click', login);

let btnComentar = document.getElementById('boton-comentar');
btnComentar.addEventListener('click', agregarComentario);

let btnMeGusta = document.getElementById('btnMeGusta');
btnMeGusta.addEventListener('click', incrementaMeGusta);
