import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DragonView from '../views/DragonView.vue'
import ShowGroupsView from '../views/showGroupsView.vue'
import GroupForm from '@/components/GroupForm.vue'
import RegisterView from '@/views/RegisterView.vue'
import loginView from '@/views/loginVIew.vue'
import dashboardView from '@/views/dashboardView.vue'
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
      path: '/showgroups',
      name: 'showgroups',
      component: ShowGroupsView,
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
      path: '/dashboard',
      name: 'dashboard',
      component: dashboardView,
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

export default router
