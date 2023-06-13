// console.log("loaded");
const app = Vue.createApp ({
    data () {
        return {
            colorBG : "white",
            statusCode: 1,
            mensaje1: " ← ←",
            mensaje2: " Clicks gratis! Sigue asi... ",
            mensaje3: " $ 10 / Click",
            alerta: "Descargado correctamente!",
            estudiante: true,
            nombre_alumno: "Giuliano Rossetti",
            nacionalidad: "Argentino" ,
            info_contacto: ['Calle Iturraspe 20XX, 2400, San Francisco Córdoba', 'giuli.rossetti9@gmail.com', '3564 100000' ],
            perfil: `Buscando un desarrollo profesional en el backend.`,
            educacion: [ { id: 1 , institucion: "Universidad Nacional de Córdoba - FCEFyN", enCurso: false, carrera: "Ingenieria Civil" }, 
                        { id: 2 , institucion: "Universidad Nacional de Córdoba - FAMAF", enCurso: false, carrera: "Analista en Sistemas"} , 
                        { id: 3 , institucion: "Universidad Técnologica Nacional - FRSFco", enCurso: true, carrera: "Tecnicatura en Programación"} ]
        }
    },
    methods: {
        alertFn (){
            alert(this.alerta);
        },
        pressBtn (){
            this.statusCode += 1;
            console.log("Pressed");
        },
        updateThis () {
            this.colorBG= "grey";
        },
        updateWhite () {
            this.colorBG= "white";
        },
        

    }
});