import { defineStore } from 'pinia'
import {ref} from "vue";
import{type SessionData} from "@/types/types";

export const useAuthStore = defineStore('auth', () => {
 /*creo una variable de interface que guarde solo lo de data ya que data tiene
el token y el user*/
  const credentials = ref<SessionData | null>(
    JSON.parse(localStorage.getItem('useAuthStore') ?? 'null')
  )

  function setCredentials(data: SessionData) {
    credentials.value = data
    localStorage.setItem('useAuthStore', JSON.stringify(data))
  }


  function logout() {
    credentials.value = null
    localStorage.removeItem('useAuthStore')
  }
  return { credentials, setCredentials, logout}
})
