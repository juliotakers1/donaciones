<template>
    <div class="general">
    
    <NavbarA />
    <div class="btn-group py-2 mx-2" role="group" aria-label="Home">
      <router-link class="btn btn-dark rounded-pill" to="/donaciones"><i class="fa-solid fa-arrow-left"></i> </router-link>
    </div>
      <div class="container py-2 row mx-auto">
          <form  @submit.prevent="procesarFormulario" >
               <FormDonacion :donacion="donacion" />
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
import { onMounted, ref } from 'vue';
import FormDonacion from '@/components/formdonacion/FormDonacion.vue';   
    export default {
        components:{
    NavbarA,
    FormDonacion
},

        setup(){
            const store = useStore()
            const donacion = ref({
                descripcion:"",
                varios:[],
                cantidadmaterial:"",
                cantidadvarios:"",
                materialmedico:[],
                usuario:""
            })
           
            donacion.value.usuario = "juliovasquez"
            donacion.value.varios.cantidad = donacion.value.cantidadvarios
            donacion.value.materialmedico.cantidad = donacion.value.cantidadmaterial
            const procesarFormulario = async() =>{
                try {
                    if(donacion.value===""){
                    console.log('vacio')
                    return
                }
                
                await store.dispatch('guardarDonaciones', donacion.value)
                console.log(donacion.value.varios, 'estevarios');
                await store.dispatch('updateVariosStock', donacion.value.varios, donacion.cantidadvarios )
                } catch (error) {
                    console.log(error);
                }
            }

            
            return{
                procesarFormulario,
                donacion,
                
            }
        }
    }
    </script>
    
    <style scoped>
    
    .rueda{
      color: greenyellow;
    
    }
    
    </style>