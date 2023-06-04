import { createStore } from 'vuex'
import router from '@/router'
// const urlBase = 'http://localhost:3000/'
const urlBase = 'https://donacionesapi.herokuapp.com/'
import  axios from 'axios'
export default createStore({
  state: {
    usuarios:[],
    usuario:{
      nombre:"",
      apellido:"",
      email:"",
      pass:"",
      role:""
    },
    beneficiarios:[],
    beneficiario:{
      nombre:"",
      apellido:"",
      telefono:"",
      donacion:[],
      gasto:[],
      usuario:""
    },
    consultas:[],
    consulta:{
      direccion:"",
      fecha:"",
      descripcion:"",
      donacion:[],
      usuario:""
    },
    varios:[],
    vario:{
      nombre:"",
      medicinaalimento:"",
      cantidad:"",
      descripcion:"",
      usuario:""
    },
    materiales:[],
    material:{
      cantidad:"",
      descripcion: "",
      usuario:""
    },
    donaciones:[],
    donacion:{
      descripcion:"",
      varios:[],
      materialmedico:[],
      usuario:""
    },
    gastos:[],
    gasto:{
      fecha:0,
      descripcion:"",
      total:0,
      usuario:""
    }
  },
  mutations: {
    //usuariosmutation
    setUsuario(state,payload){
      state.usuarios.push(payload)
      router.push('/usuarios')
    },
    cargarUsuario(state,payload){
      state.usuarios = payload
    },
    eliminarUsuario(state, payload){
      state.usuarios = state.usuarios.filter(item => item._id !==payload)
    },
    tUsuario(state, payload){
      if(!state.usuarios.find(item =>item._id ===payload)){
        return
      }
      state.usuario = state.usuarios.find(item => item._id ===payload)
    },
    updateUsuario(state, payload){
      state.usuarios = state.usuarios.map(item => item._id === payload._id ? payload : item)
      router.push('/usuarios')
    },
    //beneficiariosmutation
    setBeneficiario(state,payload){
      state.beneficiarios.push(payload)
      router.push('/beneficiarios')
    },
    cargarBeneficiario(state,payload){
      state.beneficiarios = payload
    },
    eliminarBeneficiario(state, payload){
      state.beneficiarios = state.beneficiarios.filter(item => item._id !==payload)
    },
    tBeneficiario(state, payload){
      if(!state.beneficiarios.find(item =>item._id ===payload)){
        return
      }
      state.beneficiario = state.beneficiarios.find(item => item._id ===payload)
    },
    updateBeneficiario(state, payload){
      state.beneficiarios = state.beneficiarios.map(item => item._id === payload._id ? payload : item)
      router.push('/beneficiarios')
    },
    //consultamutation
    setConsulta(state,payload){
      state.consultas.push(payload)
      router.push('/consultas')
    },
    cargarConsulta(state,payload){
      state.consultas = payload
    },
    eliminarConsulta(state, payload){
      state.consultas = state.consultas.filter(item => item._id !==payload)
    },
    tConsulta(state, payload){
      if(!state.consultas.find(item =>item._id ===payload)){
        return
      }
      state.consulta = state.consultas.find(item => item._id ===payload)
    },
    updateConsulta(state, payload){
      state.consultas = state.consultas.map(item => item._id === payload._id ? payload : item)
      router.push('/consultas')
    },
    //variosmutation
    setVario(state,payload){
      state.varios.push(payload)
      router.push('/varios')
    },
    cargarVario(state,payload){
      state.varios = payload
    },
    eliminarVario(state, payload){
      state.varios = state.varios.filter(item => item._id !==payload)
    },
    tVario(state, payload){
      if(!state.varios.find(item =>item._id ===payload)){
        return
      }
      state.vario = state.varios.find(item => item._id ===payload)
    },
    updateVario(state, payload){
      state.varios = state.varios.map(item => item._id === payload._id ? payload : item)
      router.push('/varios')
    },
    //materialmutation
    setMaterial(state,payload){
      state.materiales.push(payload)
      router.push('/materiales')
    },
    cargarMaterial(state,payload){
      state.materiales = payload
    },
    eliminarMaterial(state, payload){
      state.materiales = state.materiales.filter(item => item._id !==payload)
    },
    tMaterial(state, payload){
      if(!state.materiales.find(item =>item._id ===payload)){
        return
      }
      state.material = state.materiales.find(item => item._id ===payload)
    },
    updateMaterial(state, payload){
      state.materiales = state.materiales.map(item => item._id === payload._id ? payload : item)
      router.push('/materiales')
    },
    //donacionmutation
    setDonacion(state,payload){
      state.donaciones.push(payload)
      router.push('/donaciones')
    },
    cargarDonacion(state,payload){
      state.donaciones = payload
    },
    eliminarDonacion(state, payload){
      state.donaciones = state.donaciones.filter(item => item._id !==payload)
    },
    tDonacion(state, payload){
      if(!state.donaciones.find(item =>item._id ===payload)){
        return
      }
      state.donacion = state.donaciones.find(item => item._id ===payload)
    },
    updateDonacion(state, payload){
      state.donaciones = state.donaciones.map(item => item._id === payload._id ? payload : item)
      router.push('/donaciones')
    },
    //gastomutation
    setGasto(state,payload){
      state.gastos.push(payload)
      router.push('/gastos')
    },
    cargarGasto(state,payload){
      state.gastos = payload
    },
    eliminarGasto(state, payload){
      state.gastos = state.gastos.filter(item => item._id !==payload)
    },
    tGasto(state, payload){
      if(!state.gastos.find(item =>item._id ===payload)){
        return
      }
      state.gasto = state.gastos.find(item => item._id ===payload)
    },
    updateGasto(state, payload){
      state.gastos = state.gastos.map(item => item._id === payload._id ? payload : item)
      router.push('/gastos')
    },
  },
  actions: {
    //usuariosaccion
    async obtenerUsuarios({commit}){
      const res = await axios
      .get(urlBase+'user/')
      .then(res =>{
        const datos = res.data.users
        commit('cargarUsuario',datos)
      })
    },
    async guardarUsuarios({commit},usuario){
      const respuesta = await axios
      .post(urlBase+'user/nuevo-usuario',usuario)
      commit('setUsuario',usuario)
      
    },
  verUsuario({commit},id){
    commit('tUsuario',id)
  },
  async updateUsuarios({commit},usuario,_id){
    const id = usuario._id
    const ins = await axios
    .put(urlBase+'user/'+id,usuario)
    .catch(err => {
      console.log(err)
    })
    commit('updateUsuario',usuario)
  },
  async eliminarUsuarios({commit},_id){
    const resultado = await axios
    .delete(urlBase+'user/'+ _id)
    .catch(err =>{
      console.log(err)
    })
    commit('eliminarUsuario',_id)
  },
  //beneficiarioaction
  async obtenerBeneficiarios({commit}){
    const res = await axios
    .get(urlBase+'beneficiario/')
    .then(res =>{
      const datos = res.data.beneficiarios
      commit('cargarBeneficiario',datos)
    })
  },
  async guardarBeneficiarios({commit},beneficiario){
    const respuesta = await axios
    .post(urlBase+'beneficiario',beneficiario)
    commit('setBeneficiario',beneficiario)
    
  },
verBeneficiario({commit},id){
  commit('tBeneficiario',id)
},
async updateBeneficiarios({commit},beneficiario,_id){
  const id = beneficiario._id
  const ins = await axios
  .put(urlBase+'beneficiario/_id/'+id,beneficiario)
  .catch(err => {
    console.log(err)
  })
  commit('updateBeneficiario',beneficiario)
},
async eliminarBeneficiarios({commit},_id){
  const resultado = await axios
  .delete(urlBase+'beneficiario/_id/'+ _id)
  .catch(err =>{
    console.log(err)
  })
  commit('eliminarBeneficiario',_id)
},
//consultaaction

async obtenerConsultas({commit}){
  const res = await axios
  .get(urlBase+'consulta/')
  .then(res =>{
    const datos = res.data.consultas
    commit('cargarConsulta',datos)
  })
},
async guardarConsultas({commit},consulta){
  const respuesta = await axios
  .post(urlBase+'consulta',consulta)
  commit('setConsulta',consulta)
  
},
verConsulta({commit},id){
commit('tConsulta',id)
},
async updateConsultas({commit},consulta,_id){
const id = consulta._id
const ins = await axios
.put(urlBase+'consulta/_id/'+id,consulta)
.catch(err => {
  console.log(err)
})
commit('updateConsulta',consulta)
},
async eliminarConsultas({commit},_id){
const resultado = await axios
.delete(urlBase+'consulta/_id/'+ _id)
.catch(err =>{
  console.log(err)
})
commit('eliminarConsulta',_id)
},
//variosaction
async obtenerVarios({commit}){
  const res = await axios
  .get(urlBase+'vario/')
  .then(res =>{
    const datos = res.data.varios
    commit('cargarVario',datos)
  })
},
async guardarVarios({commit},vario){
  const respuesta = await axios
  .post(urlBase+'vario',vario)
  commit('setVario',vario)
  
},
verVario({commit},id){
commit('tVario',id)
},
async updateVarios({commit},vario,_id){
const id = vario._id
const ins = await axios
.put(urlBase+'vario/_id/'+id,vario)
.catch(err => {
  console.log(err)
})
commit('updateVario',vario)
},
async eliminarVarios({commit},_id){
const resultado = await axios
.delete(urlBase+'vario/_id/'+ _id)
.catch(err =>{
  console.log(err)
})
commit('eliminarVario',_id)
},
//materialesaction
async obtenerMateriales({commit}){
  const res = await axios
  .get(urlBase+'material/')
  .then(res =>{
    const datos = res.data.materiales
    commit('cargarMaterial',datos)
  })
},
async guardarMateriales({commit},material){
  const respuesta = await axios
  .post(urlBase+'material',material)
  commit('setMaterial',material)
  
},
verMaterial({commit},id){
commit('tMaterial',id)
},
async updateMateriales({commit},material,_id){
const id = material._id
const ins = await axios
.put(urlBase+'material/_id/'+id,material)
.catch(err => {
  console.log(err)
})
commit('updateMaterial',material)
},
async eliminarMateriales({commit},_id){
const resultado = await axios
.delete(urlBase+'material/_id/'+ _id)
.catch(err =>{
  console.log(err)
})
commit('eliminarMaterial',_id)
},
//donacionaction
async obtenerDonaciones({commit}){
  const res = await axios
  .get(urlBase+'donacion/')
  .then(res =>{
    const datos = res.data.donaciones
    commit('cargarDonacion',datos)
  })
},
async guardarDonaciones({commit},donacion){
  const respuesta = await axios
  .post(urlBase+'donacion',donacion)
  commit('setDonacion',donacion)
  
},
verDonacion({commit},id){
commit('tDonacion',id)
},
async updateDonaciones({commit},donacion,_id){
const id = donacion._id
const ins = await axios
.put(urlBase+'donacion/_id/'+id,donacion)
.catch(err => {
  console.log(err)
})
commit('updateDonacion',donacion)
},
async eliminarDonaciones({commit},_id){
const resultado = await axios
.delete(urlBase+'donacion/_id/'+ _id)
.catch(err =>{
  console.log(err)
})
commit('eliminarDonacion',_id)
},
//gastoaction
async obtenerGastos({commit}){
  const res = await axios
  .get(urlBase+'gasto/')
  .then(res =>{
    const datos = res.data.gastos
    commit('cargarGasto',datos)
  })
},
async guardarGastos({commit},gasto){
  const respuesta = await axios
  .post(urlBase+'gasto',gasto)
  commit('setGasto',gasto)
  
},
verGasto({commit},id){
commit('tGasto',id)
},
async updateGastos({commit},gasto,_id){
const id = gasto._id
const ins = await axios
.put(urlBase+'gasto/_id/'+id,gasto)
.catch(err => {
  console.log(err)
})
commit('updateGasto',gasto)
},
async eliminarGastos({commit},_id){
const resultado = await axios
.delete(urlBase+'gasto/_id/'+ _id)
.catch(err =>{
  console.log(err)
})
commit('eliminarGasto',_id)
},
  },
  getters: {
  },
})
