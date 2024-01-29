<template>
  <div id="create_container">
    <form @submit.prevent="createPatient">
      <div id="personal">
        <h3>Personal Information</h3>
        <div class="first">
          <label for="first_name">First Name: </label>
          <input type="text" id="first_name" placeholder="John" v-model="patientInfo.firstName" required> *
        </div>
        <div class="last">
          <label for="last_name">Last Name: </label>
          <input type="text" id="last_name" placeholder="Doe" v-model="patientInfo.lastName" required> *
        </div>
        <div class="gender">
          <label for="gender">Gender: </label>
          <select name="gender" id="gender" v-model="patientInfo.gender">
            <option value="" selected hidden disabled>Choose</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select> *
        </div>
        <div class="dob">
          <label for="dob">Birth Date: </label>
          <input type="date" id="dob" v-model="patientInfo.dob" required> *
        </div>
      </div>

      <div id="contact">
        <h3>Contact</h3>
        <div class="email">
          <label for="email">Email: </label>
          <input type="email" id="email" placeholder="john@doe.ca" v-model="patientInfo.email" required> *
        </div>

        <div class="phone">
          <label for="phone">Phone: </label>
          <input type="tel" id="phone" placeholder="1234567890" v-model="patientInfo.phone" required> *
        </div>
      </div>

      <div id="address">
        <h3>Address</h3>
        <div class="street">
          <label for="street">Street: </label>
          <input type="text" id="street" placeholder="188 Queen St. S." v-model="patientInfo.street" required> *
        </div>
        <div class="city">
          <label for="city">City: </label>
          <input type="text" id="city" placeholder="San Jose" v-model="patientInfo.city" required> *
        </div>
        <div class="state">
          <label for="state">State/Province: </label>
          <input type="text" id="state" placeholder="California" v-model="patientInfo.state" required> *
        </div>
        <div class="postal">
          <label for="postal">Postal/Zip Code: </label>
          <input type="text" id="postal" placeholder="L9P3T9 / 342112" v-model="patientInfo.postal" required> *
        </div>
        <div class="country">
          <label for="postal">Country: </label>
          <select name="country" id="country" v-model="patientInfo.country">
            <option value="" selected hidden disabled>Choose</option>
            <option value="CA" selected>Canada</option>
            <option value="IN">India</option>
            <option value="US">USA</option>
          </select> *
        </div>
      </div>

      <div id="identifier">
        <h3>Identifier</h3>
        <label for="identifier">Identifier: </label>
        <input type="text" id="identifier" v-model="patientInfo.identifier" placeholder="AnyStringYouLike3">
      </div>

      <input type="submit" value="Submit" id="submit">
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import type { Router } from 'vue-router'
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const router: Router = inject('router') as Router;

const patientInfo = ref({
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
  email: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  postal: '',
  country: '',
  identifier: '',
})


const createPatient = async () => {
  try {
    const patient = {
      "resourceType": "Patient",
      "identifier": [{
        "system": "https://example.org/fhir/sid/us-ssn",
        "value": patientInfo.value.identifier
      }],
      "name": [{
        "use": "official",
        "family": patientInfo.value.lastName,
        "given": [patientInfo.value.firstName]
      }],
      "telecom": [
        {
          "system": "phone",
          "value": patientInfo.value.phone
        },
        {
          "system": "email",
          "value": patientInfo.value.email
        }
      ],
      "gender": patientInfo.value.gender,
      "birthDate": patientInfo.value.dob,
      "address": [{
        "use": "work",
        "line": [patientInfo.value.street],
        "city": patientInfo.value.city,
        "state": patientInfo.value.state,
        "postalCode": patientInfo.value.postal,
        "country": patientInfo.value.country
      }]
    }
    const response = await axios.post('https://hapi.fhir.org/baseR4/Patient', patient, {
      headers: {
        'Content-Type': 'application/fhir+json'
      }
    })
    toast(`User Created with ID: ${response.data.id}`, {
      "theme": "colored",
      "type": "success",
      "dangerouslyHTMLString": true
    })
    setTimeout(() => {
      router.push({ path: `/patient/${response.data.id}` })
    }, 6000);

  } catch (error) {
    toast(`Error creating user: ${error}`, {
      "theme": "colored",
      "type": "error",
      "dangerouslyHTMLString": true
    })
  }
}
</script>

<style scoped>
#create_container {
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--main-container-bg);
}

form {
  display: flex;
  flex-direction: column;
  background: white;
  width: 40vw;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#submit {
  width: 10rem;
  height: 2rem;
  font-weight: bold;
  border: none;
  background: #415a77;
  color: #e0e1dd;
  border-radius: 0.3rem;
  margin: 1rem;
}

h3 {
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

form>div>div {
  margin: 1rem;
}

input {
  height: 1.7rem;
  padding: 0.3rem;
}
</style>
