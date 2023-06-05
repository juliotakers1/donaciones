<template>

    <div>
      <div class="bct" style="padding-top: 50px;">
      <!-- <h2 class="text-center mb-3">Sistema de Administración</h2> -->
        <div class="container form-container d-flex mx-auto mt-3 row">    
          <router-link class=" col-lg-6 col-md-6 col-sm-12" to="/varios"  style="text-decoration: none;">
            <button type="button" class="btn btn-lg btn-block  mb-3" style="font-size:25px; display: block; width:100%; height: 290px; background-color: #15BE4C; color: black; border-radius: 10px;">
              <i class="fas fas fa-toolbox mb-3" style="font-size:100px; color: white;"></i>
    
              <br>
              <strong>Varios</strong>
            </button>
          </router-link>
    
          <router-link class=" col-lg-6 col-md-6 col-sm-12" to="/materiales"  style="text-decoration: none;">
            <button type="button" class="btn btn-lg btn-block  mb-3 " style="font-size:25px; display: block; width: 100%; height: 290px; background-color: #15BE4C; color: black; border-radius: 10px;">
              <i class="fas fa-people-carry mb-3" style="font-size:100px; color: white;"></i><br>
              <strong>Aparatos para Movilidad Asistida</strong>
            </button>
          </router-link>
    
          <router-link class=" col-lg-6 col-md-6 col-sm-12" to="/donaciones"  style="text-decoration: none;" >
            <!-- v-if="user !== 'USER'" -->
            <button type="button" class="btn btn-lg btn-block  mb-3" style="font-size:25px; display: block; width:100%; height: 290px; background-color: #15BE4C; color: black; border-radius: 10px;">
              <i class="fas fa-praying-hands mb-3" style="font-size:100px; color: white;"></i>
              <br>
              <strong>Donaciones</strong>
            </button>
          </router-link>

          <router-link class=" col-lg-6 col-md-6 col-sm-12" to="/consultas"  style="text-decoration: none;" >
            <button type="button" class="btn btn-lg btn-block  mb-3 " style="font-size:25px; display: block; width: 100%; height: 290px; background-color: #15BE4C; color: black; border-radius: 10px;">
              <i class="fas fa-laptop-medical mb-3" style="font-size:100px; color: white;"></i>
              
              <br>
              
              <strong>Consultas</strong>
            </button>
          </router-link>
        </div>
            <br>       
      </div>
    </div>
    </template>
    
    <script>
    // import { useStore } from 'vuex'
    export default {
        name: 'DashboardMenu',
    // setup() {
    //   const store = useStore()
    //   const user = store.state.user.role
    //   return {
    //     user
    //   }
    // }
    }
    </script>
    
    <style scoped>
     
    </style>