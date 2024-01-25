<template>
  <div id="card">
    <h3>{{ patient?.resource?.name[0]?.family }}, {{ patient?.resource?.name[0]?.given[0] }}</h3>
    <p><span>ID: </span>{{ patient?.resource?.id }}</p>
    <p>
      <span>Address: </span>
      100 Main St. E.
      Hamilton
      L8N 3W4
    </p>
    <p v-if="true">
      <span>Phone NO: </span> (437) 599-6355
    </p>
    <p v-else>
      <span>Email: </span> chaudharyd@hhsc.ca
    </p>
    <a href="#">Details</a>
  </div>
</template>


<script lang="ts" setup>
import { defineProps } from "vue";

const { patient } = defineProps(['patient'])
</script>

<style scoped>
#card {
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #ffcfd2;
}

#card h3 {
  font-weight: bolder;
  font-size: 1.5rem;
}

#card span {
  font-weight: bold;
}
</style>
