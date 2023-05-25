console.log("api cargada");

/**
 En la pantalla principal, donde se encuentra toda la lista de productos, agregarás un nuevo campo arriba en donde 
 se indicará la cantidad de notebooks que actualmente están en ventas. ¿Cómo obtendrás ese dato?
 Si accedes a https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics podrás ver que retorna un JSON,
 el cual tiene un campo amount_of_products, que indica la cantidad de productos en oferta. Es por eso que, cuando cargues la página, 
 deberás hacer una consulta GET a dicha URL, obtener la cantidad total de productos, y mostrarla en tu HTML.
 */

function cargarJson() {
    fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics')
    .then(response => response.json())
    .then (jsonCargado);
}
    
let jsonCargado = function (json) {
    console.log(json);
    let span = document.getElementById('cantidad-articulos');
    span.innerText = json.amount_of_products;
}
cargarJson();
