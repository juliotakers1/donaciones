<template>
    <div class="card container shadow-lg ">
            <h1 class="fw-bold text-center mt-3">Gasto</h1>
            <div class="mb-3 row m-3">
              <label  class="col-sm-2 col-form-label">No. Comprobante</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="comprobante" v-model.trim="gasto.comprobante">
              </div>
            </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Fecha</label>
                <div class="col-sm-10">
                  <input type="date" class="form-control" id="fecha" v-model.trim="gasto.fecha">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Descripción</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="descripcion" v-model.trim="gasto.descripcion">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Total</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="total" v-model.trim="gasto.total" step="any">
                </div>
              </div>
             
              <br>
              <div class="d-flex mx-auto m-3">
                  <button type="submit" class="btn btn-primary p-3">Guardar</button>
              </div>
    </div>
</template>

<script>
import { computed, onMounted, ref, toRef } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'DonacionesFormGasto',
    props:{
        gasto: Object
    },
    setup(props){
      const store = useStore()
      const donaciones = computed(() => store.state.donaciones)
      const gasto = toRef(props, 'gasto');

      const agregarDonacion = (item) => {
   
      props.gasto.donacion.push(item);

    };

    const eliminarDonacion = (item) => {
      const index = gasto.value.donacion.findIndex((v) => v._id === item._id);
      if (index !== -1) {
        gasto.value.donacion.splice(index, 1);
      }
    };
      onMounted(async() =>{
        await store.dispatch('obtenerDonaciones')
      })
      return {
        donaciones,
        agregarDonacion,
        gasto,
        eliminarDonacion
      }
    }
   
};
</script>

<style scoped>

</style>