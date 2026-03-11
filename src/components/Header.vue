<template>
  <header class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo and School Name -->
        <router-link to="/" class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full flex items-center justify-center">
            <img src="/images/ciLogo.png" alt="" class="w-full">
          </div>
          <span class="text-xl font-bold text-gray-800 dark:text-white">សាលាបឋមសិក្សាមិត្តភាពកម្ពុជាឥណ្ឌា</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-6">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            :class="{ 'text-primary-600 dark:text-primary-400 font-semibold': isActive(link.path) }"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Right Side: Dark Mode Toggle & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <button 
            @click="toggleDarkMode"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-2">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          :class="{ 'text-primary-600 dark:text-primary-400 font-semibold': isActive(link.path) }"
          @click="mobileMenuOpen = false"
        >
          {{ link.name }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../../public/images/ciLogo.png'

export default {
  name: 'Header',
  setup() {
    const route = useRoute()
    const mobileMenuOpen = ref(false)
    const isDark = ref(false)

    const navLinks = [
      { name: 'ទំព័រដើម', path: '/' },
      { name: 'អំពីយើង', path: '/about' },
      { name: 'បុគ្គលិក', path: '/staff' },
      { name: 'ការប្រកាស', path: '/announcements' },
    //   { name: 'ព្រឹត្តិការណ៍', path: '/events' },
      { name: 'វិចិត្រសាល', path: '/gallery' },
      { name: 'ទំនាក់ទំនង', path: '/contact' }
    ]

    const isActive = (path) => {
      return route.path === path  // Now route is defined
    }

    const toggleDarkMode = () => {
      isDark.value = !isDark.value
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }

    onMounted(() => {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'dark') {
        isDark.value = true
        document.documentElement.classList.add('dark')
      }
    })

    return {
      navLinks,
      mobileMenuOpen,
      isActive,
      isDark,
      toggleDarkMode
    }
  }
}
</script>