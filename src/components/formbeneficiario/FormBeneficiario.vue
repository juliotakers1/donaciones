<template>
    <div class="card container shadow-lg ">
            <h1 class="fw-bold text-center mt-3">Beneficiario</h1>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="nombre" v-model.trim="beneficiario.nombre">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Apellido</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="apellido" v-model.trim="beneficiario.apellido">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Telefono</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="telefono" v-model.trim="beneficiario.telefono">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Donacion</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="donacion" v-model.trim="beneficiario.donacion">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Gasto</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="gasto" v-model="beneficiario.gasto">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <input type="file" class="form-control" id="foto"  aria-label="Upload">
                <!-- <button class="btn btn-outline-secondary" type="button" id="btnfoto">Button</button> -->
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
    name: 'DonacionesFormBeneficiario',
    props:{
        beneficiario: Object
    },
    setup(){
        

        return{
            
        }
    }
   
};
</script>

<style scoped>

</style>