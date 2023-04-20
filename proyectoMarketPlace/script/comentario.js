console.log("Script cargado correctamente");

let postComment = function () {

    let nombre = document.getElementById("nombre").value ? document.getElementById("nombre").value : 'Anonimo';
    let cantComentarios = document.getElementById("container-comentarios").childElementCount;
    let hoy = new Date().toLocaleDateString()
    let texto = document.getElementById("txt-msj").value ? document.getElementById("txt-msj").value : "Me dejó sin palabras..." ;
    let section = document.getElementById('container-comentario');
    
    let html1 = document.createElement( 'div' ); // add class "comentario"
    html1.classList.add('comentarios123');

    let html = `<div class="comentario">`;
    html += `<img src="images/avatar.png" style="max-height: 45px; min-width: 45px;" alt="Avatar ${cantComentarios}.">`;
    html += `<h3 class="nombre"> ${nombre} </h3>
            <p class="fecha">${hoy} </p>
            <p class="txt"> "${texto}" </p>
            </div> `;
    html += `</div> `;

    console.log(html);
    // html1.innerText = html;
    // section.appendChild(html1);
    console.log("Comentario agregado");

}

let btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener('click', postComment);

