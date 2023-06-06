<template>
    <div class="card container shadow-lg ">
            <h1 class="fw-bold text-center mt-3">Usuario</h1>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="nombre" v-model.trim="usuario.nombre">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Apellido</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="apellido" v-model.trim="usuario.apellido">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Correo</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="correo" v-model.trim="usuario.email">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Contraseña</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="contraseña" v-model.trim="usuario.pass">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Repetir Contraseña</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="repcontraseña" v-model="pass2">
                </div>
                <span v-if="usuario.pass!= pass2" class="badge text-bg-danger mt-2">Las contraseñas no son iguales</span>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Teléfono</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="telefono" v-model.trim="usuario.telefono">
                </div>
              </div>
              <div class="mb-3 row m-3">
                <label  class="col-sm-2 col-form-label">Role</label>
                <div class="col-sm-10">
                    <select class="form-select" aria-label="Administrador" v-model.trim="usuario.role">
                        <option value="ADMIN">Administrador</option>
                        <option value="ENFERMERA">Enfermera</option>
                        <option value="COLABORADOR">Colaborador</option>
                      </select>
                </div>
              </div>
              <br>
              <div class="d-flex mx-auto m-3">
                  <button type="submit" class="btn btn-primary p-3">Guardar</button>
              </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'DonacionesFormUsuario',
    props:{
        usuario: Object
    },
    setup(){
        const pass2 = ref('')

        return{
            pass2
        }
    }
   
};
</script>

<style scoped>

</style>