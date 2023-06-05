<template>
    <div class="card container shadow-lg ">
            <h1 class="fw-bold text-center mt-3">Paciente</h1>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="nombre" v-model.trim="paciente.nombre">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Apellido</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="apellido" v-model.trim="paciente.apellido">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Dirección</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="correo" v-model.trim="paciente.direccion">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Teléfono</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="telefono" v-model.trim="paciente.telefono">
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
    name: 'DonacionesFormPaciente',
    props:{
        paciente: Object
    },
    setup(){
        
    }
   
};
</script>

<style scoped>

</style>