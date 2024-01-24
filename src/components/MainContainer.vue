<template>
  <main>
    <form id="search">
      <input type="text" placeholder="Search Patient">
      <button type="submit">Search</button>
    </form>
    <div v-if="loading">Loading ...</div>
    <div v-else id="card_container">
      <Card v-for="patient in patients" :patient="patient" :key="patient.resource.id" />
    </div>
    <nav id="pagination">
      <ul>
        <a href="#">
          <li>Prev</li>
        </a>
        <a href="#">
          <li>1</li>
        </a>
        <a href="#">
          <li>2</li>
        </a>
        <a href="#">
          <li>3</li>
        </a>
        <a href="#">
          <li>4</li>
        </a>
        <a href="#">
          <li>Next</li>
        </a>
      </ul>
    </nav>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import Card from "./helpers/CardContainer.vue";

interface ApiResponse {
  entry: []
}

interface Patient {
  resource: {
    id: string
  }
}

const patients = ref<Patient[]>([]);
const loading = ref(true);


const fetchPatients = async () => {
  try {
    const response = await axios.get<ApiResponse>("https://hapi.fhir.org/baseR4/Patient");
    patients.value = response.data.entry;
    loading.value = false;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

onMounted(() => {
  fetchPatients();
})

</script>

<style scoped>
main {
  background: #fde4cf;
  height: 85%;
}

main #search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5%;
}

#search input {
  height: 2rem;
  width: 20rem;
  border: none;
  padding: 0.7rem;
  font-weight: bold;
  border-radius: 0.3rem;
}

#search button {
  height: 2rem;
  width: 4rem;
  border-radius: 0.3rem;
  border: none;
  margin: 0 0.3rem;
  font-weight: bold;
  background: #a3c4f3;
  cursor: pointer;
}

#search button:hover {
  background: #90dbf4;
}

main>#card_container {
  height: 90%;
  display: grid;
  padding: 1rem;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

nav ul {
  display: flex;
  margin: 0 auto;
  width: 10%;
  justify-content: space-around;
}

nav ul a {
  text-decoration: none;
  padding: 0.4rem;
}

nav ul a:hover {
  background: #b9fbc0;
  border-radius: 0.2rem;
}

nav ul a li {
  list-style: none;
}
</style>
