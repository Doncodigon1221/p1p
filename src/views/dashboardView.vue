<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore.ts'
import { useRouter } from 'vue-router'

const ua = useAuthStore()
const router = useRouter()

function logout() {
  ua.logout()
  router.push('/login')
}
</script>

<template>
  <div class="dash">
    <header class="topbar">
      <div class="topbar-left">
        <span class="logo">Mi plataforma</span>
        <span class="badge">{{ ua.credentials?.user.role.description }}</span>
      </div>
      <div class="topbar-right">
        <div class="avatar">
          {{ ua.credentials?.user.name.charAt(0) }}{{ ua.credentials?.user.lastname.charAt(0) }}
        </div>
        <button class="logout-btn" @click="logout">Cerrar sesión</button>
      </div>
    </header>

    <main class="main">
      <div class="greeting">
        <h1>Bienvenido, {{ ua.credentials?.user.name }}</h1>
      </div>

      <div class="content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.dash {
  min-height: 100vh;
  background-color: #f8fafc;
}
.topbar {
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.topbar-left, .topbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo {
  font-size: 18px;
  font-weight: 500;
}
.badge {
  font-size: 13px;
  background: #e6f1fb;
  color: #185fa5;
  padding: 3px 10px;
  border-radius: 20px;
}
.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #e1f5ee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: #0f6e56;
}
.logout-btn {
  font-size: 14px;
  color: #a32d2d;
  background: none;
  border: 1px solid #f09595;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.2s;
}
.logout-btn:hover { background: #fcebeb; }
.main { padding: 2.5rem; }
.greeting { margin-bottom: 2rem; }
.greeting h1 { font-size: 1.75rem; font-weight: 500; margin: 0 0 4px; }
.greeting p { font-size: 1rem; color: #666; margin: 0; }
</style>
