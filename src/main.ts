import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainContainer from './components/MainContainer.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainContainer },
    {
      path: '/patient/:patientId',
      name: 'PatientDetails',
      component: () => import('./views/PatientDetails.vue')
    }
  ]
})

createApp(App).use(router).mount('#app')
