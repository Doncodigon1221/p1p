<script setup lang="ts">
import { ref } from 'vue'
import { type Register } from '@/types/types.ts'
import { useFetch } from '@vueuse/core'
import router from '@/router'
const form = ref<Register>({
  name: '',
  lastname: '',
  email: '',
  password: '',
  cellphone: '',
})

function registrar() {
  const { data, onFetchError, onFetchResponse } = useFetch(
    'https://api.sutando-user.me/api/register',
    {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
    .post(form)
    .json()
  //se usa como evento para hacer una accion luego de aver generado la peticion
  onFetchResponse(() => {
    alert(data.value.message)
    router.push('/login')
  })
  //igual que el de arriba nomas que salta si detecta un error
  onFetchError(() => {})
}
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <h1>Crear cuenta</h1>
      <p class="subtitle">Completa tus datos para registrarte</p>

      <div class="row">
        <div class="field">
          <label for="name">Nombre</label>
          <input id="name" v-model="form.name" type="text" />
        </div>
        <div class="field">
          <label for="lastname">Apellido</label>
          <input id="lastname" v-model="form.lastname" type="text" />
        </div>
      </div>

      <div class="field">
        <label for="email">Correo electrónico</label>
        <input id="email" v-model="form.email" type="email" />
      </div>

      <div class="field">
        <label for="password">Contraseña</label>
        <input id="password" v-model="form.password" type="password" />
      </div>

      <div class="field">
        <label for="cellphone">Celular</label>
        <input id="cellphone" v-model="form.cellphone" type="tel" />
      </div>

      <button @click="registrar">Registrarse</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}
.card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 400px;
}
h1 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 0.25rem;
}
.subtitle {
  font-size: 0.875rem;
  color: #666;
  margin: 0 0 2rem;
}
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.field {
  margin-bottom: 1.25rem;
}
label {
  display: block;
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 6px;
}
input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.9rem;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s;
}
input:focus {
  border-color: #333;
}
button {
  width: 100%;
  padding: 10px;
  background: #111;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: opacity 0.2s;
}
button:hover {
  opacity: 0.85;
}
.error {
  font-size: 0.8rem;
  color: #c0392b;
  margin: 0 0 0.75rem;
}
</style>
