<script setup lang="ts">
import { ref } from 'vue'
import { type Login } from '@/types/types.ts'
import { useFetch } from '@vueuse/core'
import { useAuthStore } from '@/stores/authStore.ts'
import router from '@/router'
const uas = useAuthStore()
const credentials = ref<Login>({
  email: '',
  password: '',
})
function login() {
  const { data, onFetchError, onFetchResponse } = useFetch('https://sutando-user.me/api/login', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .post(credentials)
    .json()
  /*aqui saco la data y se la mando al store y que lo aterrise en el
  localstorage con el metodo que ingresa datos*/
  onFetchResponse(() => {
    uas.setCredentials(data.value.data)
    router.push('/dashboard')
  })
  onFetchError(() => {})
}
</script>
<template>
  <div class="wrapper">
    <div class="card">
      <h1>Iniciar sesión</h1>
      <p class="subtitle">Ingresa tus credenciales</p>

      <div class="field">
        <label for="email">Correo electrónico</label>
        <input
          id="email"
          v-model="credentials.email"
          type="email"
          placeholder="correo@ejemplo.com"
        />
      </div>

      <div class="field">
        <label for="password">Contraseña</label>
        <input
          id="password"
          v-model="credentials.password"
          type="password"
          placeholder="••••••••"
        />
      </div>

      <button @click="login">Iniciar sesión</button>

      <p class="register-link">¿No tienes cuenta? <a href="/register">Regístrate</a></p>
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
  max-width: 360px;
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
.register-link {
  text-align: center;
  font-size: 0.8rem;
  color: #666;
  margin-top: 1.25rem;
}
.register-link a {
  color: #111;
  font-weight: 500;
  text-decoration: none;
}
.register-link a:hover {
  text-decoration: underline;
}
</style>
