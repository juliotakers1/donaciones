<template>
  <router-view/>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  components:{
       
  },
  computed:{
        ...mapGetters(['usuarioAutenticado']) 
    },
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created() {
    this.cargarLocalStorage()
  },
}
</script>
<style>

</style>
