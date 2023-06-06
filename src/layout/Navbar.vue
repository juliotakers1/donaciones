<template>
    <div class="navbar navbar-dark shadow-lg  p-2 " id="nava">
     
        <img src="@/assets/fondo.png" alt="" width="90" height="60"  >
          
       <div class="d-flex  ">
      
        <button class="btn btn-success rounded-pill"  id="sal" v-if="usuarioAutenticado"
       @click="cerrarSesion"
        
       ><i class="fa-solid fa-right-from-bracket" ></i></button>
       </div>
       </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import { useStore } from 'vuex'
export default {
    name: 'DonacionesNavbar',
    computed:{
        ...mapGetters(['usuarioAutenticado']) 
    },
    methods: {
        ...mapActions(['cerrarSesion'])
    },

    setup() {
        const store = useStore()
        const user = store.state.user.role
        return {
            user
        }
    }
};
</script>

<style scoped>
#nava{
    background-color: #8bc34a;
  
  }
  #a{
    color: white;
  }
  #sal{
    border-style: solid;
    border-color: #8bc34a;
    color: yellow;
  }
</style>