<template>
    <div class="card container shadow-lg ">
            <h1 class="fw-bold text-center mt-3">Varios</h1>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="nombre" v-model.trim="vario.nombre">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Tipo</label>
                <div class="col-sm-10">
                  <!-- <input type="text" class="form-control" id="medicina" v-model.trim="vario.medicinaalimento"> -->
                  <div class="form-check">
                    <input class="form-check-input me-2" type="radio" value="Alimento" id="alimento" v-model.trim="vario.medicinaalimento">
                    <label class="form-check-label" for="alimento">
                      Medicina
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input me-2" type="radio" value="Medicina" id="medicina" v-model.trim="vario.medicinaalimento">
                    <label class="form-check-label" for="medicina">
                      Alimento
                    </label>
                  </div>
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Cantidad</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="descripcion" v-model.trim="vario.cantidad">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Descripcion</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="descripcion" v-model.trim="vario.descripcion">
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
    name: 'DonacionesFormVario',
    props:{
        vario: Object
    },
    setup(){
        

        return{
            
        }
    }
   
};
</script>

<style scoped>

</style>