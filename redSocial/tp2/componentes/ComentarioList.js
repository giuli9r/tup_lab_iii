app.component('comentario-list', {
    props: {
        comentarios: {
            type: Array,
            required: true,
        }
    },
    template:
    /*html*/
    `
    <div id="parteComentarios" class='comentario-container'>
        <p>Comentarios</p>
        <p><strong>Juan Perez</strong>  ¡Wow, esa foto de Tokio es impresionante!</p>
        <p><strong>Kathleen J Rennie</strong>  ¡Esta foto de Tokio es simplemente espectacular! Me Trae tantos recuerdos.</p>
        
        <ul style="padding: 0px;" v-for="(comentario, index) of comentarios" :key="index" >
            <p style="justify-content: left !important;"><strong style="color: blue;">{{comentario.nombreUsuario}} </strong>  {{comentario.txtComentario}}
            <button id="boton-eliminar" @click="deleteComentario(index)" ><font color="red">Eliminar</font></button></p>
            <br>
        </ul>

    </div>
    `,
    data() {
        return {
            nombre: "Yo"
        }
    },
    methods: {
        deleteComentario(index) {
            this.comentarios.splice(index, 1);
            this.$emit('eliminar-main' , index);
        }
    }
});
