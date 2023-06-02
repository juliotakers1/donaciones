<template>
    <div class="general">
    
    <NavbarA />
    <div class="btn-group py-2 mx-2" role="group" aria-label="Home">
      <router-link class="btn btn-dark rounded-pill" to="/usuarios"><i class="fa-solid fa-arrow-left"></i> </router-link>
    </div>
      <div class="container py-2 row mx-auto">
          <form  @submit.prevent="procesarFormulario" >
               <FormUsuario :usuario="usuario" />
          </form>
          <!-- <div class="d-flex justify-content-center" style="padding-top: 20vh; padding-bottom: 25vh;" v-else>
          <div class="spinner-border rueda " role="status" style="width: 5rem; height: 5rem;">
            <span class="visually-hidden">Cargando...</span>
          </div>
        </div> -->

      </div>
        </div> <!--fin div general-->
    </template>
    
    <script>
import NavbarA from '@/layout/NavbarA.vue';
import FormUsuario from '@/components/formusuario/FormUsuario'
import { useStore } from 'vuex';
import { ref } from 'vue';
   
    export default {
        components:{
            NavbarA,
            FormUsuario
            },

        setup(){
            const store = useStore()
            const usuario = ref({
                nombre:"",
                apellido:"",
                email:"",
                pass:"",
                role:""
            })

            const procesarFormulario = async() =>{
                try {
                    if(usuario.value===""){
                    console.log('vacio')
                    return
                }
                await store.dispatch('guardarUsuarios', usuario.value)
                } catch (error) {
                    console.log(error);
                }
            }
            return{
                procesarFormulario,
                usuario
            }
        }
    }
    </script>
    
    <style scoped>
    
    .rueda{
      color: greenyellow;
    
    }
    
    </style>