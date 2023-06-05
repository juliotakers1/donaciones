<template>
    <div class="card container shadow-lg ">
            <h1 class="fw-bold text-center mt-3">Beneficiario</h1>
            <div class="mb-3 row m-3">
              <label  class="col-sm-2 col-form-label">Paciente</label>
              <div class="col-sm-10"> 
                <button type="button" class="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#pacientemodal">Agregar Paciente</button>
                <h2 class="fw-bold text-center mt-2">Paciente</h2>
              <table class="table  table-warning text-center my-3" >
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">Telefono</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="it in beneficiario.paciente" :key="it._id">
                    <td>{{ it.nombre }}</td>
                    <td>{{ it.apellido }}</td>
                    <td>{{ it.direccion }}</td>
                    <td>{{ it.telefono }}</td>
                    
                    <!-- <td>{{ it.descripcion }}</td> -->
                    <td> <button type="button" class="btn btn-danger" @click="eliminarPaciente(it)">
                      Eliminar
                    </button></td>
                  </tr>
                </tbody>
              </table>
              </div>
          </div>
          <!-- modal paciente -->
          <!-- Modal -->
<div class="modal fade modal-lg" id="pacientemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Pacientes</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table class="table table-striped text-center my-3" style="border-radius: 5px;">
          <thead>
              <tr class="ta-head"> 
                
              <!-- <th scope="col" >ID</th> -->
              
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Dirección </th>
              <th scope="col">Telefono</th>
              <th scope="col">Acciones</th>
              </tr>
          </thead>
          
          <tbody >
              <tr class="" v-for="item in pacientes" :key="item._id">
                <!-- <td>{{ item._id }}</td> -->
               <td>{{ item.nombre }}</td>
               <td>{{ item.apellido }}</td>
               <td>{{ item.direccion }}</td>
               <td>{{ item.telefono }}</td>
                <td>
                  
                      <button type="button" 
                      class="btn btn-primary ms-1"
                      @click="agregarPaciente(item)"
                      >
                      <i class="fas fa-plus"></i>
                    </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>
             
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Donación</label>
                <div class="col-sm-10">
                  <button type="button" class="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#donacionmodal">Agregar Donación</button>
                  <h2 class="fw-bold text-center mt-2">Donación</h2>
                <table class="table  table-warning text-center my-3" >
                  <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Medicina Alimento</th>
                      <th scope="col">Cantidad</th>
                      
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="it in beneficiario.donacion" :key="it._id">
                      <td>{{ it.descripcion }}</td>
                      <td>
                        <table class="table table-striped text-center my-3">
                          <thead class="bg-primary text-white">
                              <!-- <th scope="col">ID</th> -->
                              <th scope="col">Nombre</th>
                              <th scope="col">Medicina</th>
                              <th scope="col">Cantidad</th>
                              <th scope="col">Descripcion</th>
                          </thead>
                          <tbody>
                              <tr v-for="variot in it.varios" :key="variot._id" >
                                  <!-- <td > {{ variot._id }}</td> -->
                                  <td>{{ variot.nombre }}</td>
                                  <td>{{ variot.medicinaalimento }}</td>
                                  <td>{{ variot.cantidad }}</td>
                                  <td>{{ variot.descripcion }}</td>
                              </tr>
                          </tbody>
                      </table>
                      </td>
                      <td>
                        <table class="table table-striped text-center my-3">
                        <thead class="bg-success text-white">
                            <!-- <th scope="col">ID</th> -->
                            <th scope="col">Descripcion</th>
                            <th scope="col">Cantidad</th>
                        </thead>
                        <tbody>
                            <tr v-for="materia in it.materialmedico" :key="materia._id" >
                                <!-- <td > {{ materia._id }}</td> -->
                                <td>{{ materia.descripcion }}</td>
                                <td>{{ materia.cantidad }}</td>
                            </tr>
                        </tbody>
                    </table>
                  </td>
                      <!-- <td>{{ it.descripcion }}</td> -->
                      <td> <button type="button" class="btn btn-danger" @click="eliminarDonacion(it)">
                        Eliminar
                      </button></td>
                    </tr>
                  </tbody>
                </table>
                </div>
            </div>
            <!-- Modal para donacion -->
<!-- Modal -->
<div class="modal fade modal-lg" id="donacionmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Donaciones</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table class="table table-striped text-center my-3" style="border-radius: 5px;">
          <thead>
              <tr class="ta-head"> 
                
              <!-- <th scope="col" >ID</th> -->
              
              <th scope="col">Descripción</th>
              <th scope="col">Varios</th>
              <th scope="col">Material Médico</th>
              <!-- <th scope="col">Descripcion</th> -->
              <th scope="col">Acciones</th>
              </tr>
          </thead>
          
          <tbody >
              <tr class="" v-for="item in donaciones" :key="item._id">
                <!-- <td>{{ item._id }}</td> -->
               <td>{{ item.descripcion }}</td>
                <td>
                  <table class="table table-striped text-center my-3">
                    <thead class="bg-primary text-white">
                        <!-- <th scope="col">ID</th> -->
                        <th scope="col">Nombre</th>
                        <th scope="col">Medicina</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Descripcion</th>
                    </thead>
                    <tbody>
                        <tr v-for="variot in item.varios" :key="variot._id" >
                            <!-- <td > {{ variot._id }}</td> -->
                            <td>{{ variot.nombre }}</td>
                            <td>{{ variot.medicinaalimento }}</td>
                            <td>{{ variot.cantidad }}</td>
                            <td>{{ variot.descripcion }}</td>
                        </tr>
                    </tbody>
                </table>
                </td>
                <td>
                  <table class="table table-striped text-center my-3">
                    <thead class="bg-success text-white">
                        <!-- <th scope="col">ID</th> -->
                        <th scope="col">Descripcion</th>
                        <th scope="col">Cantidad</th>
                    </thead>
                    <tbody>
                        <tr v-for="materia in item.materialmedico" :key="materia._id" >
                            <!-- <td > {{ materia._id }}</td> -->
                            <td>{{ materia.descripcion }}</td>
                            <td>{{ materia.cantidad }}</td>
                        </tr>
                    </tbody>
                </table>
                </td>
              
                <td>
                  
                      <button type="button" 
                      class="btn btn-primary ms-1"
                      @click="agregarDonacion(item)"
                      >
                      <i class="fas fa-plus"></i>
                    </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>
              
<!-- gasto -->
<div class="mb-3 row m-3">
  <label  class="col-sm-2 col-form-label">Gasto</label>
  <div class="col-sm-10">
    <button type="button" class="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#gastomodal">Agregar Gasto</button>
    <h2 class="fw-bold text-center mt-2">Gasto</h2>
  <table class="table  table-warning text-center my-3" >
    <thead>
      <tr>
        <th scope="col">Fecha</th>
        <th scope="col"> Descripción</th>
        <th scope="col">Total</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="it in beneficiario.gasto" :key="it._id">
        <td>{{ it.fecha }}</td>
        <td>{{ it.descripcion }}</td>
        <td>{{ it.total }}</td>
        <!-- <td>{{ it.descripcion }}</td> -->
        <td> <button type="button" class="btn btn-danger" @click="eliminarGasto(it)">
          Eliminar
        </button></td>
      </tr>
    </tbody>
  </table>
  </div>
</div>

<!-- modalgasto -->
<div class="modal fade modal-lg" id="gastomodal" tabindex="-1" aria-labelledby="gastoModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Gastos</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table class="table table-striped text-center my-3" style="border-radius: 5px;">
          <thead>
              <tr class="ta-head"> 
                
              <!-- <th scope="col" >ID</th> -->
              
              <th scope="col">Fecha</th>
              <th scope="col">Descripción</th>
              <th scope="col"> Total</th>
              <!-- <th scope="col">Descripcion</th> -->
              <th scope="col">Acciones</th>
              </tr>
          </thead>
          
          <tbody >
              <tr class="" v-for="item in gastos" :key="item._id">
                <!-- <td>{{ item._id }}</td> -->
               <td>{{ item.fecha }}</td>
               <td>{{ item.descripcion }}</td>
               <td>{{ item.total }}</td>
                <td>
                  
                      <button type="button" 
                      class="btn btn-primary ms-1"
                      @click="agregarGasto(item)"
                      >
                      <i class="fas fa-plus"></i>
                    </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>


             
              <br>
              <div class="d-flex mx-auto m-3">
                  <button type="submit" class="btn btn-primary p-3">Guardar</button>
              </div>
    </div>
</template>

<script>
import { computed, onMounted, ref, toRef } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'DonacionesFormBeneficiario',
    props:{
        beneficiario: Object
    },
    setup(props){
      const store = useStore()
      const donaciones = computed(() => store.state.donaciones)
      const gastos = computed(() => store.state.gastos)
      const pacientes = computed(() => store.state.pacientes)
      const beneficiario = toRef(props, 'beneficiario');

      const agregarDonacion = (item) => {
   
      props.beneficiario.donacion.push(item);
      
    };

    const eliminarDonacion = (item) => {
      const index = beneficiario.value.donacion.findIndex((v) => v._id === item._id);
      if (index !== -1) {
        beneficiario.value.donacion.splice(index, 1);
      }
    };
    const agregarGasto = (item) => {
   
   props.beneficiario.gasto.push(item);
 };

 const eliminarGasto = (item) => {
   const index = beneficiario.value.gasto.findIndex((v) => v._id === item._id);
   if (index !== -1) {
     beneficiario.value.gasto.splice(index, 1);
   }
 };

 const agregarPaciente = (item) => {
   
   props.beneficiario.paciente.push(item);
 };

 const eliminarPaciente = (item) => {
   const index = beneficiario.value.paciente.findIndex((v) => v._id === item._id);
   if (index !== -1) {
     beneficiario.value.paciente.splice(index, 1);
   }
 };
 onMounted(async() =>{
        await store.dispatch('obtenerDonaciones')
        await store.dispatch('obtenerGastos')
        await store.dispatch('obtenerPacientes')
      })

        return{
            beneficiario,
            donaciones,
            agregarDonacion,
            eliminarDonacion,
            agregarGasto,
            eliminarGasto,
            gastos,
            eliminarPaciente,
            agregarPaciente,
            pacientes
        }
    }
   
};
</script>

<style scoped>

</style>