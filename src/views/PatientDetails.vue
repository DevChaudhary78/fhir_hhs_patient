<template>
  <div class="patient-summary">
    <div class="header">
      <h2>{{ patient?.name[0].given[0] }} {{ patient?.name[0].family }}</h2>
      <p>Identifier: {{ patient?.identifier[0].value }}</p>
    </div>
    <div class="body">
      <div class="section">
        <h3>Contact Information</h3>
        <p><strong>Phone:</strong> {{ patient?.telecom[0].value }}</p>
      </div>
      <div class="section">
        <h3>Address</h3>
        <p>
          {{ patient?.address[0].line[0] }}, {{ patient?.address[0].city }},
          {{ patient?.address[0].state }} {{ patient?.address[0].postalCode }},
          {{ patient?.address[0].country }}
        </p>
      </div>
      <div class="section">
        <h3>Personal Information</h3>
        <p><strong>Gender:</strong> {{ patient?.gender }}</p>
        <p><strong>Date of Birth:</strong> {{ patient?.birthDate }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios'

import type { Patient } from '../assets/interfaces/Patient.ts'

const patient = ref<Patient>()

onMounted(() => {
  fetchPatient();
})
const route = useRoute();

const fetchPatient = async () => {
  try {
    const patientId = route.params.patientId
    const response = await axios.get(`https://hapi.fhir.org/baseR4/Patient/${patientId}`)
    patient.value = response.data
  } catch (error) {
    console.error(`Error fetching data: ${error}`)
  }
}
</script>

<style scoped>
.patient-summary {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 85vh;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.body {
  display: flex;
  flex-direction: column;
}

.section {
  margin-bottom: 20px;
}

h3 {
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
</style>

