app.component( 'comentario', {
    template: 
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Enviar un mensaje</h3>

      <label for="name">Nombre:</label>
      <input id="name" v-model="name">
    
      <label for="review">Mensaje:</label>      
      <textarea id="review" v-model="text"></textarea>

      <input class="button" type="submit" value="Enviar">  
    
    </form>
  `,
  data () {
    return
  }
});