// console.log("loaded");
const app = Vue.createApp ({
    data () {
        return {
            estudiante: true,
            nombre_alumno: "Giuliano Rossetti",
            nacionalidad: "Argentino" ,
            info_contacto: ['Calle Iturraspe 20XX, 2400, San Francisco Córdoba', 'giuli.rossetti9@gmail.com', '3564 100000' ],
            perfil: `Estudiante buscando enriquecer los conocimientos técnicos 
            Tengo la curiosidad para aprender de mucha fuentes.
            Me interesa aprender desarrollo back-end y Ciencia de Datos`
        }
    }
});