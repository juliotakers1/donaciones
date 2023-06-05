<template>
    <div class="general">
    
    <NavbarA />
    <div class="btn-group py-2 mx-2" role="group" aria-label="Home">
      <router-link class="btn btn-dark rounded-pill" to="/gastos"><i class="fa-solid fa-arrow-left"></i> </router-link>
    </div>
      <div class="container py-2 row mx-auto">
          <form  @submit.prevent="procesarFormulario" >
               <FormGasto :gasto="gasto" />
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
import FormGasto from '@/components/formgasto/FormGasto'
import { useStore } from 'vuex';
import { ref } from 'vue';
import moment from 'moment';
    export default {
        components:{
            NavbarA,
            FormGasto
            },

        setup(){
            const store = useStore()
            const gasto = ref({
                comprobante:"",
                fecha:0,
                descripcion:"",
                total:0,
                usuario:""
            })
            const dateRe = moment(gasto.value.fecha).format('DD-MM-YYYY')

            const procesarFormulario = async() =>{
                try {
                    if(gasto.value===""){
                    console.log('vacio')
                    return
                }
                gasto.value.usuario = 'julio vasquez'
                gasto.fecha= dateRe
                await store.dispatch('guardarGastos', gasto.value)
                } catch (error) {
                    console.log(error);
                }
            }
            return{
                procesarFormulario,
                gasto
            }
        }
    }
    </script>
    
    <style scoped>
    
    .rueda{
      color: greenyellow;
    
    }
    
    </style>