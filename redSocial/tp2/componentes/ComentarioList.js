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
        <div class="right" style="justify-content: left !important;">
            <p><font id="nombre-color">Diana Bell</font>  ¡Espero que algun dia pueda ver Tokio en persona!&nbsp;&nbsp;</p> 
            <button id="boton-eliminar" @click="deleteComentario"><font color="red">Eliminar</font></button>
        </div>
        
        <ul style="padding: 0px;" v-for="(comentario, index) of comentarios" :key="index" >
            <p style="justify-content: left !important;"><strong style="color: blue;">{{comentario.nombreUsuario}} </strong>  {{comentario.txtComentario}}
            <button id="boton-eliminar" @click="deleteComentario" ><font color="red">Eliminar</font></button></p>
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
        deleteComentario() {
            console.log("Eliminar pressiondado");
        }
    }
});
