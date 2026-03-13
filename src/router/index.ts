import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DragonView from '../views/DragonView.vue'
import ShowGroupsView from '../views/showGroupsView.vue'
import GroupTargect from "@/components/GroupTargect.vue";
import GroupForm from "@/components/GroupForm.vue";
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
