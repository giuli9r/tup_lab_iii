console.log("Archivo receta cargado");

// Objetos: Receta de cocina
// Cree un objeto para guardar la información de tu receta favorita. Debe tener como propiedades:
// titulo: string
// porciones: number
// ingredientes: array de strings

// En líneas separadas (o usando un console.log para cada uno),  
// mostrar la información de la receta para que muestre algo como:
// Pizza
// 8 porciones
// Ingredientes: harina, queso, jamón.

class Receta {


    constructor(titulo, porciones, ingredientes, preparacion){
        this.titulo = titulo;
        this.porciones = porciones;
        this.ingredientes = ingredientes;
        this.preparacion = preparacion;
    }

    titulo_ () {
        return `Hoy tenemos ${this.titulo}`;
    };
    ingredientes_ () {
        console.log(`Vamos a necesitar: `);
        this.ingredientes.forEach(i => {
            console.log(`@ ${i}`);
        });
    }
    preparacion_() { 
        return this.preparacion;
    };

}

let preparacionFajitas = `Mezaclar todo y amasar hasta obtener una masa tierna. Dividir en partes iguales, dar forma de bollo y amasar. Cocinar de ambos lados en una sarten sin aceite. Acompañar! `;
const fajitas = new Receta("Fajitas", 8, ["Harina", "Agua", "Sal", "Aceite"], preparacionFajitas );

console.log(fajitas.titulo_());
fajitas.ingredientes_();
console.log(fajitas.preparacion_());