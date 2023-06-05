console.log("api cargada");

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


function cargarJson2() {
    fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1')
    .then(response => response.json())
    .then (jsonDevuelto);
}
let jsonDevuelto = function (json) {
    console.log(json);
    
    let title = json.title;
    let description = document.createTextNode(json.description);
    let parrafoDescription = document.createElement('p')
    parrafoDescription.appendChild(description);
    document.getElementById('description').innerText = '';
    document.getElementById('description').appendChild(parrafoDescription);

    let price = document.createTextNode(json.notebooksTypes[0].price);
    let image_url = document.createElement('image_url');
    
    document.getElementById('title-a').innerText = title;
}

cargarJson2();
