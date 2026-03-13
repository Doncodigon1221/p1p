<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import DragonCard from '@/components/DragonCard.vue'
const url = 'https://dragonball-api.com/api/characters'
const {isFetching,data,error}=useFetch(url).get().json()
</script>

<template>



  <DragonCard v-for="per in data.items" :key="per.id" />
</template>

<style scoped></style>
