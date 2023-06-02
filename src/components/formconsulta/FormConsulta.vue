<template>
    <div class="card container shadow-lg ">
            <h1 class="fw-bold text-center mt-3">Consulta</h1>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Encargado</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="encargado" v-model.trim="consulta.encargado">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Dirección</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="direccion" v-model.trim="consulta.direccion">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Fecha</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="fecha" v-model.trim="consulta.fecha">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Descripcion</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="donacion" v-model.trim="consulta.descripcion">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Donación</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="donacion" v-model="donacion.donacion">
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
    name: 'DonacionesFormConsulta',
    props:{
        consulta: Object
    },
   
};
</script>

<style scoped>

</style>