console.log("Archivo peliculas cargado");

// CONSTRUCCION LITERAL DE UN OBJETO
const Pelicula1 = {
    nombre: "El Padrino II",
    id: 100,
    duracion:120,
    reproducir() {
    return `Reproduciendo ... ${this.nombre}. Duracion: ${this.duracion} minutos.`;
    }
}

// CONSTRUCCION A TRAVES DE UNA CLASE
class Media {

    constructor(nombre, id, duracion){
        this.nombre = nombre;
        this.id = id;
        this.duracion = duracion;
    }
 
    reproducir() {
        return `Reproduciendo ${this.nombre}. Duracion ${this.duracion}`;
    }

}
const harryP = new Media("Harry Potter", 101, 122);
const isla = new Media("La Isla Siniestra", 102, 109);

// console.log(harryP.reproducir());
// console.log(isla.reproducir());

// HERENCIA
class Serie extends Media {
    
    constructor(nombre, id, duracion, capitulo) {
        super(nombre, id, duracion);
        this.capitulo = capitulo;
    }

    reproduciendoCapitulo(){
        return `Reproduciendo capitulo numero ${this.capitulo}, ${this.nombre}`;
    }
} 
const dexter = new Serie("Dexter", 101, 122, 184);
console.log(dexter.reproducir());
console.log(dexter.reproduciendoCapitulo());
