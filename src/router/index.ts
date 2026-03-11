import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import StaffPage from '../views/StaffPage.vue'
import AnnouncementsPage from '../views/AnnouncementsPage.vue'
import ContactPage from '../views/ContactPage.vue'
import GalleryPage from '../views/GalleryPage.vue'

export const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/staff', name: 'Staff', component: StaffPage },
  { path: '/announcements', name: 'Announcements', component: AnnouncementsPage },
//   { path: '/events', name: 'Events', component: EventsPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/gallery', name: 'Gallery', component: GalleryPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top
    return { top: 0 }
  }
})

export default router