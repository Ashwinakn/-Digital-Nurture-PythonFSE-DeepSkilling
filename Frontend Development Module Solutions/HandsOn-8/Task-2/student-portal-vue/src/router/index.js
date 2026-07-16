// Step 113: Define routes using createRouter and createWebHistory
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesView from '../views/CoursesView.vue'
import ProfileView from '../views/ProfileView.vue'

// Step 113: routes array — each entry maps a path to a component
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/courses', name: 'courses', component: CoursesView },
    { path: '/profile', name: 'profile', component: ProfileView },
  ],
})

export default router
