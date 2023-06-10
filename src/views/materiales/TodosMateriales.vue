<template>
    <div>
        <NavbarA />
        <div class="container card shadow-lg" style="margin-top: 50px;">
            <div class="form-container d-flex justify-content-left p-3">
                <router-link class="btn btn-add me-2 fw-bold text-white shadow-lg" to="/material">Agregar Nuevo</router-link>
              </div>
            <div class="table-responsive " style="height: 500px;overflow: scroll;">
                <h2 class="text-center fw-bold mb-2">Aparatos para Movilidad Asistida</h2>
                <button @click="exportExcel" class="btn btn-danger fw-bold mx-auto">

                    Generar Excel
                  </button>
                <table class="table table-striped text-center my-3" style="border-radius: 5px;">
                  <thead>
                      <tr class="ta-head"> 
                        
                      <th scope="col" >ID</th>
                      
                      <th scope="col">Cantidad</th>
                      <th scope="col">Descripcion</th>
                      <th scope="col">Acciones</th>
                      </tr>
                  </thead>
                  
                  <tbody >
                      <tr class="" v-for="item in materiales" :key="item._id">
                        <td>{{ item._id }}</td>
                       <td>{{ item.cantidad }}</td>
                        <td>{{ item.descripcion }}</td>
                
                        <td>
                            <router-link :to="item._id ? {
                                name: 'EditarMateriales',
                                params: { _id: item._id }
                                } : '/materiales'"
                                class="btn btn-warning me-2">
                  
                                  <i class="fa-solid fa-pen"></i></router-link>
              
                        
                              <button type="button" 
                              class="btn btn-danger ms-1"
                              @click="eliminarDatos(item._id)" 
                              >
                              <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>

        </div>
    </div>
</template>

<script>

import NavbarA from '@/layout/NavbarA.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { Grid } from '@progress/kendo-vue-grid';
import { saveExcel } from '@progress/kendo-vue-excel-export';
export default {
    name: "DonacionesTodosMateriales",
    components: {  NavbarA },
    setup(){
        const store = useStore()
        const materiales = computed(() => store.state.materiales)

        const  eliminarDatos = async(_id) => {
            await store.dispatch('eliminarMateriales', _id)  
          }

          const exportExcel =() =>{
          saveExcel({
            data: materiales.value,
            fileName: "materiales",
            columns: [
              { field: '_id'},
              { field: 'cantidad', title: 'Cantidad' },
              { field: 'descripcion', title: 'Descripcion' },
              
            ]
          });
        }

        onMounted(async() => {
                await store.dispatch('obtenerMateriales')
            })

        return{
            materiales,
            eliminarDatos,
            exportExcel
        }
    }
};
</script>

<style scoped>
.ta-head{
    background: #15BE4C;
    color: #ffffff;
}
.btn-add{
    background: #F39001;
}
</style>