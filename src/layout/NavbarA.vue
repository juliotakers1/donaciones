<template>
 
    <div class="navbar navbar-dark shadow-lg  p-2   d-flex justify-content-between" id="nava"  >
    
    <div>
      <router-link to="/" class="navbar-brand rounded-pill ms-3">
        <img src="../assets/fondo.png" alt="" width="90" height="60"  >
      </router-link>
    </div>
  
    <div >
      <router-link class="btn btn-primary  me-2  fw-bold" id="rla"  to="/usuarios">
      <i class="fa-solid fa-user-plus me-1"></i>USUARIOS
      </router-link>
    </div>
  
    <div >
      <router-link class="btn  btn-primary  me-2  fw-bold" id="rla" to="/donacion-menu">
      <i class="fa-solid fa-praying-hands me-1"></i>DONACIONES
      </router-link>
    </div>
  
    <div>
      <router-link class="btn  btn-primary  me-2  fw-bold" id="rla" to="/beneficiarios">
      <i class="fa-solid fa-users me-1"></i>BENEFICIARIOS
      </router-link>
    </div>
  
    <div>
      <router-link class="btn  btn-primary  me-2  fw-bold" id="rla" to="/gastos">
      <i class="fa-solid fa-laptop-medical me-1"></i>GASTOS
      </router-link>
    </div>
   
    <div>
      <button class="btn btn-success rounded-pill"  id="sal" v-if="usuarioAutenticado" @click="cerrarSesion">
        <i class="fa-solid fa-right-from-bracket" ></i>
      </button>
    </div>
    
    </div>
  </template>
  
  <script>
  // import {mapGetters, mapActions, useStore} from 'vuex'
  export default {
      setup() {
          // const store = useStore()
          // const user = store.state.user.role
  
          // return {
          //     user
          // }
      },
      // computed:{
      //     ...mapGetters(['usuarioAutenticado'])
      // },
      // methods: {
      //     ...mapActions(['cerrarSesion'])
      // },
  }
  </script>
  
  <style>
  #nava{
       background-color: #8bc34a;
  
   }
   #rla{
          background-color: #8bc34a;
          border: none;
   }
   #sal{
       border-style: solid;
       border-color: #8bc34a;
       color: yellow;
   }
  </style>