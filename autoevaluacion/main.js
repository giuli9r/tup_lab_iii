// console.log("loaded");
const app = Vue.createApp ({
    data () {
        return {
            alerta: "Descargado correctamente!",
            estudiante: true,
            nombre_alumno: "Giuliano Rossetti",
            nacionalidad: "Argentino" ,
            info_contacto: ['Calle Iturraspe 20XX, 2400, San Francisco Córdoba', 'giuli.rossetti9@gmail.com', '3564 100000' ],
            perfil: `Estudiante buscando enriquecer los conocimientos técnicos 
            Tengo la curiosidad para aprender de mucha fuentes.
            Me interesa aprender desarrollo back-end y Ciencia de Datos`,
            educacion: [ { id: 1 , institucion: "Universidad Nacional de Córdoba - FCEFyN", enCurso: false, carrera: "Ingenieria Civil" }, 
                        { id: 2 , institucion: "Universidad Nacional de Córdoba - FAMAF", enCurso: false, carrera: "Analista en Sistemas"} , 
                        { id: 3 , institucion: "Universidad Técnologica Nacional - FRSFco", enCurso: true, carrera: "Tecnicatura en Programación"} ]
        }
    },
    methods: {
        alertFn (){
            alert(this.alerta);
        }
    }
});