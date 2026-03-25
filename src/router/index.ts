import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DragonView from '../views/DragonView.vue'
import ShowGroupsView from '../views/showGroupsView.vue'
import GroupForm from '@/components/GroupForm.vue'
import RegisterView from '@/views/RegisterView.vue'
import loginView from '@/views/loginVIew.vue'
import DashboardAdminView from '@/views/dashboardAdminView.vue'
import { useAuthStore } from '@/stores/authStore.ts'
import DashboardStudentView from '@/views/dashboardStudentView.vue'
import dashboardTeacherView from "@/views/dashboardTeacherView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/dragon',
      name: 'Dragon',
      component: DragonView,
    },
    {
      path: '/dashboardstudent',
      name: 'dashboardtudent',
      component: DashboardStudentView,
      meta: { requiresAuth: true, rol: 3 },
    },
    {
      path: '/showgroups',
      name: 'showgroups',
      component: ShowGroupsView,
      meta: { requiresAuth: true, rol:1 },
    },

    {
      path: '/creategroup',
      name: 'creategroup',
      component: GroupForm,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: loginView,
    },
    {
      path: '/dashboardteacherview',
      name: 'dashboardteacherview',
      component: dashboardTeacherView,
      meta: { requiresAuth: true, rol: 2},
    },

    {
      path: '/dashboardadmin',
      name: 'dashboardadmin',
      component: DashboardAdminView,
      meta: { requiresAuth: true, rol: 1 },
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  // Comprobar si la ruta tiene la propiedad 'requiresAuth'
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Si no hay token, redirigir al login
    if (!authStore.credentials) {
      next({ name: 'login' })
    } else {
      if (to.matched.some((record) => record.meta.rol)) {
        if (authStore.credentials.user.role.id == to.meta.rol) {
          next() // Permitir acceso
        } else {
          next({ name: 'login' })
        }
      } else {
        next() // Permitir acceso
      }
    }
  } else if (to.name === 'login' && authStore.credentials) {
    // Si ya está logueado e intenta ir al login, mandarlo al dashboard
    next({ name: 'dashboard' })
  } else {
    next() // Rutas públicas
  }
})

export default router
