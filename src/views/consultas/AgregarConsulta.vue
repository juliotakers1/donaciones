<template>
    <div class="general">
    
    <NavbarA />
    <div class="btn-group py-2 mx-2" role="group" aria-label="Home">
      <router-link class="btn btn-dark rounded-pill" to="/consultas"><i class="fa-solid fa-arrow-left"></i> </router-link>
    </div>
      <div class="container py-2 row mx-auto">
          <form  @submit.prevent="procesarFormulario" >
               <FormConsulta :consulta="consulta" />
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
import { useStore } from 'vuex';
import { ref } from 'vue';
import FormConsulta from '@/components/formconsulta/FormConsulta.vue';
   
    export default {
        components:{
    NavbarA,
    FormConsulta
},

        setup(){
            const store = useStore()
            const consulta = ref({
                encargado:"",
                direccion:"",
                fecha:"",
                descripcion:"",
                donacion:"",
                usuario:""
            })

            const procesarFormulario = async() =>{
                try {
                    if(consulta.value===""){
                    console.log('vacio')
                    return
                }
                await store.dispatch('guardarConsultas', consulta.value)
                } catch (error) {
                    console.log(error);
                }
            }
            return{
                procesarFormulario,
                consulta
            }
        }
    }
    </script>
    
    <style scoped>
    
    .rueda{
      color: greenyellow;
    
    }
    
    </style>