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


// btnSeguir
let btnSeguir = document.getElementById("btnSeguir");
btnSeguir.addEventListener('click', followUser);




