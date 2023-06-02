<template>
    <div>
        <NavbarA />
        <div class="container card shadow-lg" style="margin-top: 50px;">
            <div class="form-container d-flex justify-content-left p-3">
                <router-link class="btn btn-add me-2 fw-bold text-white shadow-lg" to="/usuario">Agregar Nuevo</router-link>
              </div>
            <div class="table-responsive " style="height: 500px;overflow: scroll;">
                <h2 class="text-center fw-bold mb-2">Usuarios</h2>
                
                <table class="table table-striped text-center my-3" style="border-radius: 5px;">
                  <thead>
                      <tr class="ta-head"> 
                        
                      <th scope="col" >ID</th>
                      
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">Correo</th>
                      <th scope="col">Telefono</th>
                      <th scope="col">Role</th>
                      <th scope="col">Acciones</th>
                      </tr>
                  </thead>
                  
                  <tbody >
                      <tr class="" v-for="item in usuarios" :key="item._id">
                        <td>{{ item._id }}</td>
                       <td>{{ item.nombre }}</td>
                        <td>{{ item.apellido }}</td>
                      <td>{{ item.email }}</td>
                      <td>{{ item.telefono }}</td>
                      <td>{{ item.role }}</td>
                        <td>
                            <router-link :to="item._id ? {
                                name: 'EditarUsuario',
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
        const usuarios = computed(() => store.state.usuarios)

        const  eliminarDatos = async(_id) => {
            await store.dispatch('eliminarUsuarios', _id)  
          }

        onMounted(async() => {
                await store.dispatch('obtenerUsuarios')
            })

        return{
            usuarios,
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