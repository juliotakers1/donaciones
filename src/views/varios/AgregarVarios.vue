<template>
    <div class="general">
    
    <NavbarA />
    <div class="btn-group py-2 mx-2" role="group" aria-label="Home">
      <router-link class="btn btn-dark rounded-pill" to="/varios"><i class="fa-solid fa-arrow-left"></i> </router-link>
    </div>
      <div class="container py-2 row mx-auto">
          <form  @submit.prevent="procesarFormulario" >
               <FormVarios :vario="vario" />
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
import FormVarios from '@/components/formvarios/FormVarios.vue';
import { ref } from 'vue';
   
    export default {
        components:{
            NavbarA,
            FormVarios
            },

        setup(){
            const store = useStore()
            const vario = ref({
                nombre:"",
                medicinaalimento:"",
                cantidad:"",
                descripcion:"",
                usuario:""
            })
            vario.value.usuario ="julio vasquez"
            const procesarFormulario = async() =>{
                try {
                    if(vario.value===""){
                    console.log('vacio')
                    return
                }
                await store.dispatch('guardarVarios', vario.value)
                } catch (error) {
                    console.log(error);
                }
            }
            return{
                procesarFormulario,
                vario
            }
        }
    }
    </script>
    
    <style scoped>
    
    .rueda{
      color: greenyellow;
    
    }
    
    </style>