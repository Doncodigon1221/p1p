<script setup lang="ts">
import {useAuthStore} from "@/stores/authStore.ts";
const ua=useAuthStore()
function logout(){
  ua.logout()
}
</script>

<template>
  <h1>Dashboard</h1>
  <button @click="logout" >cerrar sesion</button>
</template>

<style scoped></style>
