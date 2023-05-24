console.log("Script 1 cargado.");

function cargarJson() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then (jsonCargado);
}

function cargarJsonPromise() {

    let promesa = new Promise (resolver => {
        setTimeout(() => {
            
            let obj =
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };
            
            resolver(obj);
        }, 2000);

        });

        promesa.then( json => {
            jsonCargado(json)
        });
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

// cargarJson();
cargarJsonPromise();