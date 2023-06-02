<template>
    <div>
        <NavbarA />
        <div class="container card shadow-lg" style="margin-top: 50px;">
            <div class="form-container d-flex justify-content-left p-3">
                <router-link class="btn btn-add me-2 fw-bold text-white shadow-lg" to="/donacion">Agregar Nueva</router-link>
              </div>
            <div class="table-responsive " style="height: 500px;overflow: scroll;">
                <h2 class="text-center fw-bold mb-2">Donaciones</h2>
                
                <table class="table table-striped text-center my-3" style="border-radius: 5px;">
                  <thead>
                      <tr class="ta-head"> 
                        
                      <th scope="col" >ID</th>
                      
                      <th scope="col">Descripcion</th>
                      <th scope="col">Varios</th>
                      <th scope="col">Material Medico</th>
                      <th scope="col">Acciones</th>
                      </tr>
                  </thead>
                  
                  <tbody >
                      <tr class="" v-for="item in donaciones" :key="item._id">
                        <td>{{ item._id }}</td>
                       <td>{{ item.descripcion }}</td>
                        <td>
                            <table class="table table-striped text-center my-3">
                                <thead class="bg-primary text-white">
                                    <!-- <th scope="col">ID</th> -->
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Medicina</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Descripcion</th>
                                </thead>
                                <tbody>
                                    <tr v-for="variot in item.varios" :key="variot._id" >
                                        <!-- <td > {{ variot._id }}</td> -->
                                        <td>{{ variot.nombre }}</td>
                                        <td>{{ variot.medicinaalimento }}</td>
                                        <td>{{ variot.cantidad }}</td>
                                        <td>{{ variot.descripcion }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                      <td>
                        <table class="table table-striped text-center my-3">
                            <thead class="bg-success text-white">
                                <!-- <th scope="col">ID</th> -->
                                <th scope="col">Descripcion</th>
                                <th scope="col">Cantidad</th>
                            </thead>
                            <tbody>
                                <tr v-for="materia in item.materialmedico" :key="materia._id" >
                                    <!-- <td > {{ materia._id }}</td> -->
                                    <td>{{ materia.descripcion }}</td>
                                    <td>{{ materia.cantidad }}</td>
                                </tr>
                            </tbody>
                        </table>
                      </td>
                     
                        <td>
                            <router-link :to="item._id ? {
                                name: 'EditarDonacion',
                                params: { _id: item._id }
                                } : '/usuarios'"
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
    name: "DonacionesTodosUsuarios",
    components: {  NavbarA },
    setup(){
        const store = useStore()
        const donaciones = computed(() => store.state.donaciones)

        const  eliminarDatos = async(_id) => {
            await store.dispatch('eliminarDonaciones', _id)  
          }

        onMounted(async() => {
                await store.dispatch('obtenerDonaciones')
            })

        return{
            donaciones,
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