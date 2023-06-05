<template>
    <div class="general">
    
    <NavbarA />
    <div class="btn-group py-2 mx-2" role="group" aria-label="Home">
      <router-link class="btn btn-dark rounded-pill" to="/pacientes"><i class="fa-solid fa-arrow-left"></i> </router-link>
    </div>
      <div class="container py-2 row mx-auto">
          <form  @submit.prevent="procesarFormulario" >
               <FormPaciente :paciente="paciente" />
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
    import { useRoute } from 'vue-router';
    import {
        useStore
    } from 'vuex'
    import FormPaciente from '@/components/formpaciente/FormPaciente.vue';
    import NavbarA from '@/layout/NavbarA.vue';
    import {
        computed,
        onMounted
    } from 'vue';
    export default {
        components: {
            NavbarA,
            FormPaciente
        },
        setup() {
            const store = useStore()
            const route = useRoute()
            const paciente = computed(() => store.state.paciente)
    
            const procesarFormulario = async () => {
                await store.dispatch('updatePacientes', paciente.value)
            }
    
            onMounted(async () => {
                await store.dispatch('verPaciente', route.params._id)
                
            })
            return {
                paciente,
                procesarFormulario
            }
        }
    
    }
    </script>
        
        
    <style>
        </style>
    