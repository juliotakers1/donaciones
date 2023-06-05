<template>
    <div class="card container shadow-lg ">
            <h1 class="fw-bold text-center mt-3">Aparatos para Movilidad Asistida</h1>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Cantidad</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="cantidad" v-model.trim="material.cantidad">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Descripcion</label>
                <div class="form-floating col-sm-10">
                  <textarea class="form-control" placeholder="Leave a comment here" id="descripcion" style="height: 100px" v-model.trim="material.descripcion"></textarea>
                  
                </div>
              </div>
              
            
              <br>
              <div class="d-flex mx-auto m-3">
                  <button type="submit" class="btn btn-primary p-3">Guardar</button>
              </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'DonacionesFormMaterial',
    props:{
        material: Object
    },
    setup(){
        

        return{
            
        }
    }
   
};
</script>

<style scoped>

</style>