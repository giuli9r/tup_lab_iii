console.log("loaded");

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

let login = function () {
    let inputUser = document.getElementById("inpUsuario").value;
    if( inputUser != '') {
        if( inputUser == 'Jane Doe') {alert("Sesión ya iniciada."); return;}
        alert("Usuario no encontrado.");
        document.getElementById("inpUsuario").value = '';
    }
    else {
        alert("Por favor, ingrese un usuario.");
    }
    console.log("logueado...");
}



// BOTONES
let btnSeguir = document.getElementById("btnSeguir");
btnSeguir.addEventListener('click', followUser);

let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener('click', login);



