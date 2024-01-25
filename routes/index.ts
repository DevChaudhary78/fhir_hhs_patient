import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import PatientDetails from '@/components/PatientDetails.vue'
import App from '@/src/App.vue'

const routes = [
  {
    path: '/patient/:patientId',
    name: 'PatientDetails',
    component: PatientDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const app = createApp(App);
app.use(router)
app.mount('#app')
