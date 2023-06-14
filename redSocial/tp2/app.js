const app = Vue.createApp ({
    data() {
        return {

            algo: "algo",
            nombre : "Jane Doe",
            email : "jane_doe@email.com",
            fecha_nacimiento: "01/05/1996",
            telefono: " 918-936-9585",
            ciudad : " Tokyo, Japon",
            imageJaneDoe: "imagenes/99qgQJy.jpeg",

            parrafo_sobremi: `¡Hola a todos! Soy Jane, y actualmente vivo en la vibrante y emocionante ciudad de Tokio, Japon. Me Encanta capturar la zona urbana
            a traves de mi lente, explorando  el contraste entre la arquitectura moderna y las tradiciones centenarias que conviven con esta
            metropolis unida. Desde rascacielos delumbrantes y calles bulliciosas hasta templos serenos y jardines tranquilos, encuentro inspiracion
            en cada rincon de esta increible ciudad.`
            
        }
    },
    methods: {
        someMethod(){
            // code here..
        }
    }
});


/**

 * VARIABLES GLOBALES
var _pressedBtnMeGusta = false;

 * FUNCIONES
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

    var element = document.getElementById("modal2");
    element.removeAttribute("hidden");
    
    let modalbody = document.getElementById('modalbody1');
    let texto = document.createTextNode( "No puede ingresar un comentario vacío.");
    let parrafo = document.createElement('p')
    parrafo.appendChild(texto);
    modalbody.appendChild(parrafo);
    goTo();
}

let modalUserVacio = function(){

    let modalbody = document.getElementById('modalbody1');
    let texto = document.createTextNode( "No puede comentar en forma anónima, necesita ingresar un Usuario.");
    let parrafo = document.createElement('p')
    parrafo.appendChild(texto);
    modalbody.appendChild(parrafo);
    
    var element = document.getElementById("modal2");
    element.removeAttribute("hidden");
    goTo();
}

let esconderModal = function () {
    var element = document.getElementById("modal2");
    element.setAttribute("hidden", "");
    
    var modalbody = document.getElementById("modalbody1");
    modalbody.innerHTML = "";

}

function goTo() {
    $('html,body').scrollTop(0);
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
    let texto = document.createTextNode(inputUser + ' - ' + textoComentario);
    let parrafo = document.createElement('p')
    parrafo.appendChild(texto);
    document.getElementById('parteComentarios').appendChild(parrafo);
    document.getElementById('txtComentario').value = '';
    document.getElementById('inpUsuario').value = '';
}

let incrementaMeGusta = function () {

    if (!_pressedBtnMeGusta) {
        let resultado = parseInt((document.getElementById('likes')).innerText.match(/\d+/)[0]) + 1;
        document.getElementById('likes').innerText = resultado + ' likes';
        _pressedBtnMeGusta = true;
    }
}

let eliminarComentario = function () {
    let btnEliminar = document.getElementById('boton-eliminar');
    btnEliminar.parentElement.remove();
}


 * BOTONES
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

let btnAceptar = document.getElementById('btnAceptar');
btnAceptar.addEventListener('click', esconderModal);

let btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click', esconderModal);

let btnEliminar = document.getElementById('boton-eliminar');
btnEliminar.addEventListener('click', eliminarComentario)
 */