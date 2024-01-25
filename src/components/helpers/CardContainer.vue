<template>
  <div id="card">
    <h3>{{ patient?.resource?.name[0]?.family }}, {{ patient?.resource?.name[0]?.given[0] }}</h3>
    <p><span>ID: </span>{{ patient?.resource?.id }}</p>

    <!-- Address -->
    <p v-if="patient.resource.address" class="address_container">
      <span>Address: </span>
      {{ patient.resource.address[0].line[0] }}, {{ patient.resource.address[0].city }},
      {{ patient.resource.address[0].state }}, {{ patient.resource.address[0].country }},
      {{ patient.resource.address[0].postalCode }}
    </p>
    <p v-else>
      <span>Address: </span>
      N/A
    </p>

    <!-- Contact -->
    <p
      v-if="
        patient.resource &&
        patient.resource.telecom &&
        patient.resource.telecom[0] &&
        patient.resource.telecom[0].system === 'phone'
      "
    >
      <span>Phone NO: </span>
      {{ patient.resource.telecom[0].value }}
    </p>
    <p v-else-if="patient.resource && patient.resource.telecom && patient.resource.telecom[0]">
      <span>Email: </span>
      {{ patient.resource.telecom[0].value }}
    </p>
    <p v-else>
      <span>No contact information available</span>
    </p>

    <router-link :to="{ name: 'PatientDetails', params: { patientId: patient?.resource?.id } }"
      >Details</router-link
    >
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const { patient } = defineProps(['patient'])
</script>

<style scoped>
.address_container {
  text-align: center;
}

#card {
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #8ecae6;
}

#card:hover {
  scale: 1.02;
  cursor: pointer;
  background: #219ebc;
  color: white;
}

#card h3 {
  font-weight: bolder;
  font-size: 1.5rem;
}

#card span {
  font-weight: bold;
}
</style>
