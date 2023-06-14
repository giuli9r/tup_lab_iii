app.component('modal', {

    template:
    /*html*/
    `
    <div class="modal2c" id="modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" hidden>
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Advertencia</h5>
                  <button id="btnClose" type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div class="modal-body" id="modalbody1">
                  
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-primary" id="btnAceptar">Aceptar</button>
               </div>
            </div>
         </div>
      </div>
      

    `,
    data (){
        return {
            modal : true,
        }
    }
});