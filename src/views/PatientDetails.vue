<template>
  <div id="summary_container">

    <div class="patient-summary">
      <div class="header">

        <h2 v-if="patient?.name">{{ patient?.name[0]?.given[0] }} {{ patient?.name[0]?.family }}</h2>
        <h2 v-else>Name Not Specified</h2>

        <p v-if="patient?.identifier">Identifier: {{ patient?.identifier[0].value }}</p>
        <p v-else>Identifier: Not Specified</p>

      </div>
      <div class="body">
        <div class="section">
          <h3>Contact Information</h3>

          <p v-if="patient?.telecom"><strong>Phone:</strong> {{ patient?.telecom[0].value }}</p>
          <p v-else><strong>Phone:</strong> Not Specified</p>

        </div>
        <div class="section">
          <h3>Address</h3>

          <p v-if="patient?.address">
            {{ patient?.address[0].line[0] }}, {{ patient?.address[0].city }},
            {{ patient?.address[0].state }} {{ patient?.address[0].postalCode }},
            {{ patient?.address[0].country }}
          </p>
          <p v-else>Not Specifed</p>

        </div>
        <div class="section">
          <h3>Personal Information</h3>

          <p v-if="patient?.gender"><strong>Gender:</strong> {{ patient?.gender }}</p>
          <p v-else><strong>Gender:</strong> Not Specified</p>

          <p v-if="patient?.birthDate"><strong>Date of Birth:</strong> {{ patient?.birthDate }}</p>
          <p v-else><strong>Date of Birth:</strong> Not Specified</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios'

import type { Patient } from '../assets/interfaces/Patient.ts'

const patient = ref<Patient>()
const route = useRoute();

watch(() => route.params.patientId, () => {
  fetchPatient();
})

onMounted(() => {
  fetchPatient();
})

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
#summary_container {
  height: 85vh;
  background: var(--main-container-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.patient-summary {
  margin: 0 auto;
  min-width: 50vh;
  min-height: 60vh;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: white;
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

