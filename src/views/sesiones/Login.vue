<template>
    <div class="formu" id="ingreso"  >
      <form class="  p-3 form card shadow-lg" style="border-radius: 15px;" @submit.prevent="login" v-if="!cargando">
          <img src="@/assets/fondo.png" alt="" width="150" class="mx-auto mb-3">
          <h2 class="text-center">Iniciar Sesión </h2>
          
          <label  class="form-label  my-2 ">Usuario:</label>    
          <input type="email"
          placeholder="Ingrese su e-mail"
          class=" form-control   mb-3  "
          v-model.trim="usuario.email"
          >
          <label  class="form-label">Contraseña:</label>  
          <input type="password"
          placeholder="Ingrese su contraseña"
          class="form-control my-2 mb-5"
          v-model.trim="usuario.pass"
          >
            <div class="text-center mt-2 mb-3" v-if="error">
              <span>
                 <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                  <div>
                      <strong>Usuario</strong> y/o <strong>contraseña</strong> invalido.
                  </div>
                  </div>
              </span>
          </div>
              <!-- <button type="submit" class="btn boton btn-block fw-bold"  >Ingresar</button> -->
  
              <button type="submit">
    <div class="svg-wrapper-1">
      <div class="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
        </svg>
      </div>
    </div>
    <span>Ingresar</span>
  </button>
  
      </form>
      
      <div class="loader" v-else>
      <span class="fw-bold ">Cargando...</span>
      </div>
       <!-- <div class="d-flex justify-content-center" style="padding-top: 20vh; padding-bottom: 25vh;" v-else>
        <div class="spinner-border rueda " role="status" style="width: 5rem; height: 5rem;">
          <span class="visually-hidden">Cargando...</span>
        </div>
      </div> -->
    
  </div>
  </template>
  
  <script>

import { mapActions } from 'vuex';

  
  export default {
   name:'LoginUsuario',
   data() {
        return {
            usuario: {email: '', pass: ''},
            error: '',
            cargando:false
        }
    },
    computed:{
        bloquear(){
            if(!this.email.includes('@')){
                return true
            }
            if(this.pass.length > 5){
                return false
            }
        }
    },
    methods:{
        ...mapActions(['ingresoUsuario']),
        async login(){
            try {
                this.cargando = true
                await this.ingresoUsuario(this.usuario)
            } catch (error) {
                this.error = error
                console.log(error);
                
            }finally{
                 this.cargando = false
            }
            
        }
    }
  
  }
  </script>
  
  <style scoped>
  #ingreso {
    background: #8bc34a;
}
    .formu{
     display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh; 
  }
  .form{
      width: 400px;
      background: #e0e0e0; 
      
      
  } 
  
  input[type="email"]{
     background:white;
     color: black;
  }
  input[type="email"]::placeholder{
     background:white;
     color: black;
  }
  input[type="password"]::placeholder{
     background:white;
     color: black;
  }
  input[type="password"]{
     background:white;
     color: black;
  }
  
  /* .boton{
      background: green;
      color: white;
  }
  .boton:hover{
      background: greenyellow;
      color: black;
  } */
  .rueda{
    color: #ffffff;
  
  }
  /* From uiverse.io by @mobinkakei */
  .loader {
    width: 120px;
    height: 120px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 10px solid #ffffff;
    position: relative;
    animation: load 2s linear infinite;
  }
  
  .loader::before,.loader::after {
    content: '';
    width: 120px;
    height: 120px;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: 50%;
  }
  
  .loader::before {
    border-top: 10px solid green;
    transform: rotate(120deg);
  }
  
  .loader::after {
    border-top: 10px solid #3477db;
    transform: rotate(240deg);
  }
  
  .loader span {
    position: absolute;
    font-size: small;
    width: 100px;
    height: 100px;
    color: #fff;
    text-align: center;
    line-height: 100px;
    animation: a2 2s linear infinite;
  }
  
  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes a2 {
    to {
      transform: rotate(-360deg);
    }
  }
  /* From uiverse.io by @adamgiebl */
  button {
   font-family: inherit;
   font-size: 20px;
   background: green;
   color: white;
   padding: 0.7em 1em;
   padding-left: 0.9em;
   display: flex;
   align-items: center;
   border: none;
   border-radius: 16px;
   overflow: hidden;
   transition: all 0.2s;
  }
  
  button span {
   display: block;
   margin-left: 0.3em;
   transition: all 0.3s ease-in-out;
  }
  
  button svg {
   display: block;
   transform-origin: center center;
   transition: transform 0.3s ease-in-out;
  }
  
  button:hover .svg-wrapper {
   animation: fly-1 0.6s ease-in-out infinite alternate;
  }
  
  button:hover svg {
   transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }
  
  button:hover span {
   transform: translateX(5em);
  }
  
  button:active {
   transform: scale(0.95);
  }
  
  @keyframes fly-1 {
   from {
    transform: translateY(0.1em);
   }
  
   to {
    transform: translateY(-0.1em);
   }
  }
  
  
  </style>