app.component('nav-input', {

    template:
    /*html */
    `<div  id="c1">
        <img src="imagenes/undefined - Imgur.jpg.png" alt="Globo" id="imgGlobo"> 
    </div>
    <div  id="c2">
        <input type="text" placeholder="Ingresa tu usuario..." id="inpUsuario" @keyup="updateUsuario" v-model="nombreUsuario">
        <button class="login" id="btnLogin" hidden>Ingresar</button>
    </div>
    `,
    data() {
        return {
            nombreUsuario: ""
        }
    },
    methods : {
        updateUsuario(){
            this.$emit('guarda-user', this.nombreUsuario);
        }
    }
});