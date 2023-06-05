import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/sesiones/Login.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/usuarios/TodosUsuarios.vue')
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/usuarios/AgregarUsuario.vue')
  },
  {
    path: '/usuario/:_id',
    name: 'EditarUsuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/usuarios/EditarUsuario.vue')
  },
  {
    path: '/beneficiarios',
    name: 'Beneficiarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/beneficiarios/TodosBeneficiarios.vue')
  },
  {
    path: '/beneficiario',
    name: 'Beneficiario',
    component: () => import(/* webpackChunkName: "about" */ '../views/beneficiarios/AgregarBeneficiario.vue')
  },
  {
    path: '/beneficiario/:_id',
    name: 'EditarBeneficiario',
    component: () => import(/* webpackChunkName: "about" */ '../views/beneficiarios/EditarBeneficiario.vue')
  },
  {
    path: '/donacion-menu',
    name: 'MenuDonacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/donaciones/DonacionesListing.vue')
  },
  {
    path: '/donaciones',
    name: 'Donaciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/donaciones/TodasDonaciones.vue')
  },
  {
    path: '/donacion',
    name: 'Donacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/donaciones/AgregarDonacion.vue')
  },
  {
    path: '/donacion/:_id',
    name: 'EditarDonacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/donaciones/EditarDonacion.vue')
  },
  {
    path: '/varios',
    name: 'Varios',
    component: () => import(/* webpackChunkName: "about" */ '../views/varios/TodosVarios.vue')
  },
  {
    path: '/vario',
    name: 'Vario',
    component: () => import(/* webpackChunkName: "about" */ '../views/varios/AgregarVarios.vue')
  },
  {
    path: '/varios/:_id',
    name: 'EditarVarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/varios/EditarVarios.vue')
  },
  {
    path: '/materiales',
    name: 'Materiales',
    component: () => import(/* webpackChunkName: "about" */ '../views/materiales/TodosMateriales.vue')
  },
  {
    path: '/material',
    name: 'Material',
    component: () => import(/* webpackChunkName: "about" */ '../views/materiales/AgregarMateriales.vue')
  },
  {
    path: '/materiales/:_id',
    name: 'EditarMateriales',
    component: () => import(/* webpackChunkName: "about" */ '../views/materiales/EditarMateriales.vue')
  },
  {
    path: '/consultas',
    name: 'Consultas',
    component: () => import(/* webpackChunkName: "about" */ '../views/consultas/TodasConsultas.vue')
  },
  {
    path: '/consulta',
    name: 'Consulta',
    component: () => import(/* webpackChunkName: "about" */ '../views/consultas/AgregarConsulta.vue')
  },
  {
    path: '/consulta/:_id',
    name: 'EditarConsultas',
    component: () => import(/* webpackChunkName: "about" */ '../views/consultas/EditarConsultas.vue')
  },
  {
    path: '/gastos',
    name: 'Gastos',
    component: () => import(/* webpackChunkName: "about" */ '../views/gastos/TodosGastos.vue')
  },
  {
    path: '/gasto',
    name: 'Gasto',
    component: () => import(/* webpackChunkName: "about" */ '../views/gastos/AgregarGastos.vue')
  },
  {
    path: '/gasto/:_id',
    name: 'EditarGastos',
    component: () => import(/* webpackChunkName: "about" */ '../views/gastos/EditarGastos.vue')
  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/pacientes/TodosPacientes.vue')
  },
  {
    path: '/paciente',
    name: 'Paciente',
    component: () => import(/* webpackChunkName: "about" */ '../views/pacientes/AgregarPacientes.vue')
  },
  {
    path: '/paciente/:_id',
    name: 'EditarPacientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/pacientes/EditarPacientes.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
