<template>
  <div class="home">
    <Navbar />
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '@/layout/Dashboard.vue';
import Navbar from '@/layout/Navbar.vue';


export default {
  name: 'HomeView',
  components: {
    Navbar,
    Dashboard
}
}
</script>
<style scoped>

</style>
