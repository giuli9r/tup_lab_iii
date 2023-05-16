
function cargarJson() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then (jsonCargado);
}
    
let jsonCargado = function (json) {
    console.log(json);
    let title = document.getElementById('title');
    let body = document.getElementById('body');
    let user = document.getElementById('user');

    title.innerText = json.title;
    body.innerText = json.body;
    user.innerText = json.userId;
}

cargarJson();