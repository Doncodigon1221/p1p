<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import GroupTargect from '@/components/GroupTargect.vue'

const url = "https://sutando-user.me/api/groups"

const { data, error, isFetching } = useFetch(url, {
  method: 'GET',
  headers: {
    'ngrok-skip-browser-warning': 'true',
    'Accept': 'application/json'
  }
}).json()
</script>

<template>
  <div class="page-container">
    <header class="page-header">
      <div class="header-content">
        <h1>Explorar Grupos</h1>
        <p v-if="data">Mostrando {{ data.data.length }} grupos académicos registrados</p>
      </div>
    </header>

    <div v-if="isFetching" class="loading-state">
      <div class="spinner"></div>
      <p>Cargando plataforma...</p>
    </div>

    <div v-if="error" class="error-banner">
      <span class="icon">⚠</span>
      <p>Error al conectar con el servidor: {{ error }}</p>
    </div>

    <div v-if="data && data.data" class="groups-grid">
      <GroupTargect
        v-for="group in data.data"
        :key="group.id"
        :group="group"
      />
    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal con padding para que no toque los bordes */
.page-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background-color: #f8fafc;
}

/* Diseño del Título */
.page-header {
  margin-bottom: 40px;
  border-left: 8px solid #667eea;
  padding-left: 20px;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0;
  text-transform: capitalize;
}

.page-header p {
  color: #64748b;
  font-size: 1.1rem;
  margin-top: 5px;
}

/* LA MAGIA: El Grid Responsivo */
.groups-grid {
  display: grid;
  /* Crea columnas automáticas de mínimo 380px (el ancho de tu tarjeta) */
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 30px; /* Espacio entre tarjetas */
  justify-items: center; /* Centra las tarjetas si sobra espacio */
}

/* Estado de carga decorativo */
.loading-state {
  text-align: center;
  padding: 100px;
  color: #667eea;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Banner de error */
.error-banner {
  background-color: #fee2e2;
  color: #b91c1c;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 600;
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 450px) {
  .groups-grid {
    grid-template-columns: 1fr; /* Una sola columna en celulares */
  }

  .page-header h1 {
    font-size: 1.8rem;
  }
}
</style>
