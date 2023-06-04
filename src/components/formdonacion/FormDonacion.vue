<template>
    <div class="card container shadow-lg ">
            <h1 class="fw-bold text-center mt-3">Donacion</h1>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Descripcion</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="descripcion" v-model.trim="donacion.descripcion">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Varios</label>
                <div class="col-sm-10">
                  <button type="button" class="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#variosmodal">Agregar Varios</button>
                </div>
               
                <h2 class="fw-bold text-center mt-2">Varios</h2>
                <table class="table  table-warning text-center my-3" >
                  <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Medicina Alimento</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Descripcion</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="it in donacion.varios" :key="it._id">
                      <td>{{ it.nombre }}</td>
                      <td>{{ it.medicinaalimento }}</td>
                      <td>{{ it.cantidad }}</td>
                      <td>{{ it.descripcion }}</td>
                      <td> <button type="button" class="btn btn-danger" @click="eliminarVarios(it)">
                        Eliminar
                      </button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr>

              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Material Médico</label>
                <div class="col-sm-10">
                  <button type="button" class="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#materialmodal">Agregar Material Médico</button>
                </div>
                
                <h2 class="fw-bold text-center mt-2" >Material</h2>
                <table class="table table-info text-center my-3" >
                  <thead>
                    <tr>
                      <th scope="col">Descripcion</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="it in donacion.materialmedico" :key="it._id">
                      <td>{{ it.descripcion }}</td>
                      <td>{{ it.cantidad }}</td>
                      <td><button type="button" class="btn btn-danger" @click="eliminarMaterial(it)">
                        Eliminar
                      </button></td>
                    </tr>
                  </tbody>
                </table>
              </div>

<!-- Modal para "varios" -->
<!-- Modal -->
<div class="modal fade modal-lg" id="variosmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Varios</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table class="table table-striped text-center my-3" style="border-radius: 5px;">
          <thead>
              <tr class="ta-head"> 
                
              <!-- <th scope="col" >ID</th> -->
              
              <th scope="col">Nombre</th>
              <th scope="col">Medicina Alimento</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Acciones</th>
              </tr>
          </thead>
          
          <tbody >
              <tr class="" v-for="item in varios" :key="item._id">
                <!-- <td>{{ item._id }}</td> -->
               <td>{{ item.nombre }}</td>
                <td>{{ item.medicinaalimento }}</td>
              <td>
                  <input type="number" v-model="item.cantidad" class="form-control" @input="actualizarCantidad(item)">
              </td>
              <td>{{ item.descripcion }}</td>
              
                <td>
                  
                      <button type="button" 
                      class="btn btn-primary ms-1"
                      @click="agregarVarios(item)"
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

<!-- Modal para "materialmedico" -->
<div class="modal fade modal-lg" id="materialmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="width: 100%;">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Material Médico</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table class="table table-striped text-center my-3" style="border-radius: 5px;">
          <thead>
              <tr class="ta-head"> 
                
              <!-- <th scope="col" >ID</th> -->
              
              <th scope="col">Cantidad</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Acciones</th>
              </tr>
          </thead>
          
          <tbody >
              <tr class="" v-for="item in materiales" :key="item._id">
                <!-- <td>{{ item._id }}</td> -->
               <td ><input type="number" v-model="item.cantidad" class="form-control" @input="actualizarCantidadMaterial(item)">
               </td>
               <!-- contenteditable="true" para editar tabla -->
                <td>{{ item.descripcion }}</td>
        
                <td>
                    
                      <button type="button" 
                      class="btn btn-primary ms-1"
                      @click="agregarDato(item)"
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
    name: 'DonacionesFormDonacion',
    props:{
        donacion: Object
    },
    setup(props){
      const store = useStore()
        const materiales = computed(() => store.state.materiales)
        const varios = computed(() => store.state.varios)
        const donacion = toRef(props, 'donacion');
        
        const actualizarCantidad = (item) => {
  // Validar que la cantidad sea un número válido
        const cantidad = parseFloat(item.cantidad);
        if (isNaN(cantidad) || cantidad <= 0) {
          // Mostrar un mensaje de error o realizar alguna acción apropiada
          return;
        }

        // Actualizar la cantidad en el objeto donacion.materialmedico
        const variosIndex = props.donacion.varios.findIndex((m) => m._id === item._id);
        if (variosIndex !== -1) {
          props.donacion.varios[variosIndex].cantidad = cantidad;
        }
      };
      const actualizarCantidadMaterial = (item) => {
  // Validar que la cantidad sea un número válido
        const cantidad = parseFloat(item.cantidad);
        if (isNaN(cantidad) || cantidad <= 0) {
          // Mostrar un mensaje de error o realizar alguna acción apropiada
          return;
        }

        // Actualizar la cantidad en el objeto donacion.materialmedico
        const materialIndex = props.donacion.materialmedico.findIndex((m) => m._id === item._id);
        if (materialIndex !== -1) {
          props.donacion.materialmedico[materialIndex].cantidad = cantidad;
        }
      };


        const agregarDato = (item) => {
      // Agregar el material seleccionado a un array
      
      props.donacion.materialmedico.push(item);

      // O agregar el material seleccionado directamente a donacion.varios
      // props.donacion.varios = item;

      console.log(props.donacion.materialmedico);
    };
    const agregarVarios = (item) => {
      // Agregar el material seleccionado a un array
  
      props.donacion.varios.push(item);

      // O agregar el material seleccionado directamente a donacion.varios
      // props.donacion.varios = item;

      console.log(props.donacion.varios);
    };
    const eliminarVarios = (item) => {
      const index = donacion.value.varios.findIndex((v) => v._id === item._id);
      if (index !== -1) {
        donacion.value.varios.splice(index, 1);
      }
    };
    const eliminarMaterial = (item) => {
      const index = donacion.value.materialmedico.findIndex((m) => m._id === item._id);
      if (index !== -1) {
        donacion.value.materialmedico.splice(index, 1);
      }
    };

        onMounted(async() => {
                await store.dispatch('obtenerMateriales')
                await store.dispatch('obtenerVarios')
            })

      return {
        eliminarVarios,
        eliminarMaterial,
        materiales,
        agregarDato,
        agregarVarios,
        varios,
        actualizarCantidad,
        actualizarCantidadMaterial
      }
    }
   
};
</script>

<style scoped>

</style>