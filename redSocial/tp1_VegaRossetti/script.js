console.log("Script loaded");

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
    console.log("logueado...");
}

let agregarComentario = function (evento) {
    //Evito que recargue la página
    evento.preventDefault();

    //Obtengo los valores ingresados
    let textoComentario =  document.getElementById('txtComentario').value.trim();
    if (textoComentario == '') return;
    //Agrego el feedback a la página
    let texto = document.createTextNode('Anónimo - ' + textoComentario);
    let parrafo = document.createElement('p')
    parrafo.appendChild(texto);
    document.getElementById('parteComentarios').appendChild(parrafo);
    document.getElementById('txtComentario').value = '';
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
