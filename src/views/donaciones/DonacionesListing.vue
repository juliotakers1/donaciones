<template>
    <div>
        <NavbarA />
        <MenuDonacion />
    </div>
</template>

<script>
import MenuDonacion from '@/components/donacionmenu/MenuDonacion.vue'
import NavbarA from '@/layout/NavbarA.vue'
export default {
    name: 'DonacionesDonacionesListing',
    components:{
        MenuDonacion,
        NavbarA
    }

    
};
</script>

<style lang="scss" scoped>

</style>