<template>
    <div class="general">
    
    <NavbarA />
    <div class="btn-group py-2 mx-2" role="group" aria-label="Home">
      <router-link class="btn btn-dark rounded-pill" to="/beneficiarios"><i class="fa-solid fa-arrow-left"></i> </router-link>
    </div>
      <div class="container py-2 row mx-auto">
          <form  @submit.prevent="procesarFormulario" >
               <FormBeneficiario :beneficiario="beneficiario" />
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
    import FormBeneficiario from '@/components/formbeneficiario/FormBeneficiario'
    import NavbarA from '@/layout/NavbarA.vue';
    import {
        computed,
        onMounted
    } from 'vue';
    export default {
        components: {
            NavbarA,
            FormBeneficiario
        },
        setup() {
            const store = useStore()
            const route = useRoute()
            const beneficiario = computed(() => store.state.beneficiario)
    
            const procesarFormulario = async () => {
                await store.dispatch('updateBeneficiarios', beneficiario.value)
            }
    
            onMounted(async () => {
                await store.dispatch('verBeneficiario', route.params._id)
                
            })
            return {
                beneficiario,
                procesarFormulario
            }
        }
    
    }
    </script>
        
        
    <style>
        </style>
    