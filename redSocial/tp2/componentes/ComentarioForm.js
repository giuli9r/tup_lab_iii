app.component('comentario-form', {
    template: 
    /*html */
    `<form class="comentario-form" @submit.prevent="onSubmit" >
        <div class="right">
            <textarea rows="4" cols="50" id="txtComentario" v-model="txtComentario" placeholder="Deja tu comentario..."  ></textarea>
            <button class="colorAzulClaro" id="boton-comentar" type="submit" >Comentar</button>
        </div>
    </form>`
    ,
    data() {
        return {
            nombreUsuario: 'Giuliano',
            txtComentario: '',
        }
    },
    methods: {
        onSubmit() {

            let comentarioNuevo = {
                nombreUsuario: this.nombreUsuario,
                txtComentario: this.txtComentario
            }
            this.$emit('comentario-submitted', comentarioNuevo);
            this.txtComentario= ''
        },
        guardaUserComentario(nombre){
            this.nombreUsuario = nombre;
        }
    }

});