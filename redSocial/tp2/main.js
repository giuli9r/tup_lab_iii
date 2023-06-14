const app = Vue.createApp ({
    data() {
        return {

            algo: "algo",
            nombre : "Jane Doe",
            email : " ",
            fecha_nacimiento: " ",
            telefono: " ",
            ciudad : " ",
            image: "./imagenes/99qgQJy.jpeg", 
            parrafo_sobremi: `¡Hola a todos! Soy Jane, y actualmente vivo en la vibrante y emocionante ciudad de Tokio, Japon. Me Encanta capturar la zona urbana
            a traves de mi lente, explorando  el contraste entre la arquitectura moderna y las tradiciones centenarias que conviven con esta
            metropolis unida. Desde rascacielos delumbrantes y calles bulliciosas hasta templos serenos y jardines tranquilos, encuentro inspiracion
            en cada rincon de esta increible ciudad.`,
            nombreUsuario: "Anónimo",
            siguiendo: false,
            btnSeguirText: "Seguir",
            styleBtnSeguir : { 'background-color': 'blue', 'box-shadow': '5px 5px 10px 2px MediumSlateBlue'},
            liked: false,
            btnMeGustaText: "Me Gusta",
            cantidadLikes : 200,
            shadow: {},
            comentarios: [ { nombreUsuario : "Diana Bell" , txtComentario: "¡Espero que algun dia pueda ver Tokio en persona!"  }],

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
        addComentario(comentario) {
            this.comentarios.push(comentario);
        }, 
        guardaUserMain(nombre){
            this.nombreUsuario = nombre;
        },
        eliminarMain(index){
            this.comentarios.splice(index, 1);
        }

    }
});
