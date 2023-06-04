<template>
    <div>
        <NavbarA />
        <div class="container card shadow-lg" style="margin-top: 50px;">
            <div class="form-container d-flex justify-content-left p-3">
                <router-link class="btn btn-add me-2 fw-bold text-white shadow-lg" to="/gasto">Agregar Nuevo</router-link>
              </div>
            <div class="table-responsive " style="height: 500px;overflow: scroll;">
                <h2 class="text-center fw-bold mb-2">Gastos</h2>
                
                <table class="table table-striped text-center my-3" style="border-radius: 5px;">
                  <thead>
                      <tr class="ta-head"> 
                        
                      <!-- <th scope="col" >ID</th> -->
                      
                      <th scope="col">Fecha</th>
                      <th scope="col">Descripción</th>
                      <th scope="col">Total</th>
                      <!-- <th scope="col">Telefono</th>
                      <th scope="col">Role</th> -->
                      <th scope="col">Acciones</th>
                      </tr>
                  </thead>
                  
                  <tbody >
                      <tr class="" v-for="item in gastos" :key="item._id">
                        <!-- <td>{{ item._id }}</td> -->
                       <td>{{ item.fecha }}</td>
                       <td>{{ item.descripcion }}</td>
                       <td>{{ item.total }}</td>
                        <td>
                            <router-link :to="item._id ? {
                                name: 'EditarGastos',
                                params: { _id: item._id }
                                } : '/gastos'"
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

export default {
    name: "DonacionesTodosGastos",
    components: {  NavbarA },
    setup(){
        const store = useStore()
        const gastos = computed(() => store.state.gastos)

        const  eliminarDatos = async(_id) => {
            await store.dispatch('eliminarGastos', _id)  
          }

        onMounted(async() => {
                await store.dispatch('obtenerGastos')
            })

        return{
            gastos,
            eliminarDatos
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