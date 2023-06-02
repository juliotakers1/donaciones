<template>
    <div class="general">
    
    <NavbarA />
    <div class="btn-group py-2 mx-2" role="group" aria-label="Home">
      <router-link class="btn btn-dark rounded-pill" to="/materiales"><i class="fa-solid fa-arrow-left"></i> </router-link>
    </div>
      <div class="container py-2 row mx-auto">
          <form  @submit.prevent="procesarFormulario" >
               <FormMateriales :material="material" />
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
import FormMateriales from '@/components/formmaterial/FormMateriales.vue';
    export default {
        components:{
            NavbarA,
            FormMateriales
            },

        setup(){
            const store = useStore()
            const material = ref({
                cantidad:"",
                descripcion: "",
                usuario:""
            })
            material.value.usuario ='juliovasquez'
            const procesarFormulario = async() =>{
                try {
                    if(material.value===""){
                    console.log('vacio')
                    return
                }
                await store.dispatch('guardarMateriales', material.value)
                } catch (error) {
                    console.log(error);
                }
            }
            return{
                procesarFormulario,
                material
            }
        }
    }
    </script>
    
    <style scoped>
    
    .rueda{
      color: greenyellow;
    
    }
    
    </style>