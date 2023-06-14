const app = Vue.createApp ({
    data() {
        return {

            algo: "algo",
            nombre : "Jane Doe",
            email : " ",
            fecha_nacimiento: " ",
            telefono: " ",
            ciudad : " ",
            image: "/ruta",

            parrafo_sobremi: "",
            
            siguiendo: false,
            btnSeguirText: "Seguir",
            styleBtnSeguir : { 'background-color': 'blue', 'box-shadow': '5px 5px 10px 2px MediumSlateBlue'},
            liked: false,
            btnMeGustaText: "Me Gusta",
            cantidadLikes : 200,
            shadow: {},
            comentarios: [],


        }
    },
    methods: {
        someMethod(){
            // code here..
        },
        shadowEffect(){
            this.shadow = {
                'filter': 'drop-shadow(0 0 0.75rem cornflowerblue)'
            }
        },
        shadowDelete(){
            this.shadow = { }
        },
        updateBtnSeguir() {
            if ( !this.siguiendo ) {
                this.btnSeguirText = "Dejar de seguir";
                // bind class
                this.styleBtnSeguir = {
                    'font-size': "14px",
                    'background-color': 'red'
                    };
            } else {
                this.btnSeguirText = "Seguir";
                // bind class
                this.styleBtnSeguir = {
                    'background-color': 'blue',
                    'box-shadow': '5px 5px 10px 2px MediumSlateBlue'
                    
                };
            }
            this.siguiendo = !this.siguiendo;
        },
        controlarLikes() {
            if (!this.liked) {
                this.cantidadLikes++;
                this.liked = true;
                this.btnMeGustaText = 'No me gusta';
            }
            else{
                this.cantidadLikes--;
                this.liked = false;
                this.btnMeGustaText = 'Me Gusta';
            }
        },
        agregarComentario(comentario) {
            this.comentarios.push(comentario);
        }, 
        
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