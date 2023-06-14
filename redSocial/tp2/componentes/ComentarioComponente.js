app.component('container-comentar', {
    template: 
    /*html */
    `<form class="container-comentar" @submit.prevent="onSubmit" >
        <div class="right">
            <textarea rows="4" cols="50" id="txtComentario" v-model="txtComentario" placeholder="Deja tu comentario..."  ></textarea>
            <button class="colorAzulClaro" id="boton-comentar" type="submit" >Comentar</button>
        </div>
    </form>`
    ,
    data() {
        return {
            nombreUsuario: '',
            txtComentario: '',
        }
    },
    methods: {
        onSubmit() {
            let comentarioNuevo = {
                txtComentario: this.txtComentario
            }
            this.$emit('comentario-agregado', comentarioNuevo);

            this.txtComentario= ''
        }
    }

});