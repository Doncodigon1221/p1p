<script setup lang="ts">
import { ref } from 'vue'
import{useFetch} from '@vueuse/core'
const planet = ref('')
const color = ref('')
const moons = ref(0)
const solar_system_id = ref(0)

async function guardarPlaneta() {

  const response = await useFetch('http://localhost:8000/api/planets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      planet: planet.value,
      color: color.value,
      moons: moons.value,
      solar_system_id: solar_system_id.value
    })
  })

  const data = await response.json()
  console.log(data)
}
</script>

<template>

  <input v-model="planet" placeholder="Planeta">
  <input v-model="color" placeholder="Color">
  <input v-model.number="moons" type="number" placeholder="Lunas">
  <input v-model.number="solar_system_id" type="number" placeholder="Sistema solar">

  <button @click="guardarPlaneta">
    Guardar
  </button>

</template>
