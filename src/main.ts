import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import type {Router, RouteRecordRaw} from 'vue-router'
import App from '@/App.vue'
import MainContainer from '@/components/MainContainer.vue'

const routes: RouteRecordRaw[] = [
    { path: '/', component: MainContainer },
    {
      path: '/patient/:patientId',
      name: 'PatientDetails',
      component: () => import('@/views/PatientDetails.vue')
    },
    {
      path: '/create',
      name: 'CreatePatient',
      component: () => import('@/views/CreatePatient.vue')
    }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.provide('router', router)
app.mount('#app')
