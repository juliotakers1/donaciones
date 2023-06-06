import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','ENFERMERA','COLABORADOR']
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/sesiones/Login.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/usuarios/TodosUsuarios.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN']
    }
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/usuarios/AgregarUsuario.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN']
    }
  },
  {
    path: '/usuario/:_id',
    name: 'EditarUsuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/usuarios/EditarUsuario.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN']
    }
  },
  {
    path: '/beneficiarios',
    name: 'Beneficiarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/beneficiarios/TodosBeneficiarios.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','COLABORADOR']
    }
  },
  {
    path: '/beneficiario',
    name: 'Beneficiario',
    component: () => import(/* webpackChunkName: "about" */ '../views/beneficiarios/AgregarBeneficiario.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','COLABORADOR']
    }
  },
  {
    path: '/beneficiario/:_id',
    name: 'EditarBeneficiario',
    component: () => import(/* webpackChunkName: "about" */ '../views/beneficiarios/EditarBeneficiario.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN']
    }
  },
  {
    path: '/donacion-menu',
    name: 'MenuDonacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/donaciones/DonacionesListing.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','ENFERMERA']
    }
  },
  {
    path: '/donaciones',
    name: 'Donaciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/donaciones/TodasDonaciones.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','ENFERMERA']
    }
  },
  {
    path: '/donacion',
    name: 'Donacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/donaciones/AgregarDonacion.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','ENFERMERA']
    }
  },
  {
    path: '/donacion/:_id',
    name: 'EditarDonacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/donaciones/EditarDonacion.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN']
    }
  },
  {
    path: '/varios',
    name: 'Varios',
    component: () => import(/* webpackChunkName: "about" */ '../views/varios/TodosVarios.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','ENFERMERA']
    }
  },
  {
    path: '/vario',
    name: 'Vario',
    component: () => import(/* webpackChunkName: "about" */ '../views/varios/AgregarVarios.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','ENFERMERA']
    }
  },
  {
    path: '/varios/:_id',
    name: 'EditarVarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/varios/EditarVarios.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN']
    }
  },
  {
    path: '/materiales',
    name: 'Materiales',
    component: () => import(/* webpackChunkName: "about" */ '../views/materiales/TodosMateriales.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','ENFERMERA']
    }
  },
  {
    path: '/material',
    name: 'Material',
    component: () => import(/* webpackChunkName: "about" */ '../views/materiales/AgregarMateriales.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','ENFERMERA']
    }
  },
  {
    path: '/materiales/:_id',
    name: 'EditarMateriales',
    component: () => import(/* webpackChunkName: "about" */ '../views/materiales/EditarMateriales.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN']
    }
  },
  {
    path: '/consultas',
    name: 'Consultas',
    component: () => import(/* webpackChunkName: "about" */ '../views/consultas/TodasConsultas.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','ENFERMERA']
    }
  },
  {
    path: '/consulta',
    name: 'Consulta',
    component: () => import(/* webpackChunkName: "about" */ '../views/consultas/AgregarConsulta.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','ENFERMERA']
    }
  },
  {
    path: '/consulta/:_id',
    name: 'EditarConsultas',
    component: () => import(/* webpackChunkName: "about" */ '../views/consultas/EditarConsultas.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN']
    }
  },
  {
    path: '/gastos',
    name: 'Gastos',
    component: () => import(/* webpackChunkName: "about" */ '../views/gastos/TodosGastos.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','COLABORADOR']
    }
  },
  {
    path: '/gasto',
    name: 'Gasto',
    component: () => import(/* webpackChunkName: "about" */ '../views/gastos/AgregarGastos.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','COLABORADOR']
    }
  },
  {
    path: '/gasto/:_id',
    name: 'EditarGastos',
    component: () => import(/* webpackChunkName: "about" */ '../views/gastos/EditarGastos.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN']
    }
  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/pacientes/TodosPacientes.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','ENFERMERA','COLABORADOR']
    }
  },
  {
    path: '/paciente',
    name: 'Paciente',
    component: () => import(/* webpackChunkName: "about" */ '../views/pacientes/AgregarPacientes.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN','ENFERMERA','COLABORADOR']
    }
  },
  {
    path: '/paciente/:_id',
    name: 'EditarPacientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/pacientes/EditarPacientes.vue'),
    meta: {requiredAuthorization: true,
      roles: ['ADMIN']
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => { 
  
  const user = store.state.user.role
  
   if (to.meta.requiredAuthorization) {
    console.log(user);
      if (to.meta?.roles?.includes(user)) { //creo que esta haciendo la el if porque si tiene los 2 roles entonces tengo que poner los 
        return  next()
      } else {
        return next('/')
      }
   } else {
       return next()
   }
})

export default router
