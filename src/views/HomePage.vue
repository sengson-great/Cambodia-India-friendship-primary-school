<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-gray-600 to-gray-800 text-white">
      <div class="absolute inset-0 overflow-hidden">
        <img 
            src="/images/cischool.jpeg" 
            alt="School Building"
            class="w-full h-full object-cover opacity-20">
      </div>
      <div class="relative container mx-auto px-4 py-24">
        <div class="max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
          <h1 class="text-4xl md:text-4xl font-bold mb-4">
            ស្វាគមន៍មកកាន់សាលាបឋមសិក្សាមិត្តភាពកម្ពុជាឥណ្ឌា
          </h1>
          <p class="text-xl mb-8 text-primary-100" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            សាលាផ្តល់ជូននូវបរិយាកាសសប្បាយរីករាយ សុវត្ថិភាព និងទាក់ទាញសម្រាប់សិស្សានុសិស្សទាំងអស់។
          </p>
          <div class="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <router-link 
              to="/about" 
              class="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              ស្វែងយល់បន្ថែម
            </router-link>
            <router-link 
              to="/contact" 
              class="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition transform hover:scale-105"
            >
              ទាក់ទងសាលា
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Announcements -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8" data-aos="fade-right" data-aos-duration="800">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">ការប្រកាសចុងក្រោយបំផុត</h2>
          <router-link to="/announcements" class="text-primary-600 dark:text-primary-400 hover:underline">
            មើលទាំងអស់ →
          </router-link>
        </div>
        
        <div v-if="loading" class="text-center py-8">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnnouncementCard 
                v-for="(announcement, index) in latestAnnouncements" 
                :key="announcement.id"
                :announcement="announcement"
                :index="index"
            />
        </div>
      </div>
    </section>

    <!-- School Features -->
    <section class="py-12 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12" data-aos="fade-down" data-aos-duration="800">
          ហេតុអ្វីជ្រើសរើសសាលាបឋមសិក្សាមិត្តភាពកម្ពុជាឥណ្ឌា?
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="feature.title" 
            class="text-center"
            :data-aos="index === 0 ? 'fade-right' : (index === 1 ? 'zoom-in' : 'fade-left')"
            :data-aos-delay="index * 200"
            data-aos-duration="800"
          >
            <div class="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4 transform transition hover:scale-110 hover:rotate-6">
              <component :is="feature.icon" class="h-8 w-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import AnnouncementCard from '../components/AnnouncementCard.vue'
import announcementsData from '../data/announcements.json'
import { AcademicCapIcon, BuildingLibraryIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'HomePage',
  components: {
    AnnouncementCard,
    AcademicCapIcon,
    BuildingLibraryIcon,
    ShieldCheckIcon
  },
  setup() {
    const loading = ref(true)
    const latestAnnouncements = ref([])

    const features = [
      {
        title: 'គ្រូបង្រៀនដែលមានគុណភាព',
        description: 'អ្នកអប់រំដែលមានបទពិសោធ និងមានការប្ដេជ្ញាចិត្ត ដែលយកចិត្តទុកដាក់ចំពោះភាពជោគជ័យរបស់សិស្សម្នាក់ៗ។',
        icon: 'AcademicCapIcon'
      },
      {
        title: 'គ្រឿងបរិក្ខារទំនើបៗ',
        description: 'ថ្នាក់រៀនដែលបំពាក់យ៉ាងល្អ បណ្ណាល័យ និងសួនកុមារ។',
        icon: 'BuildingLibraryIcon'
      },
      {
        title: 'បរិស្ថានសុវត្ថិភាព',
        description: 'បរិវេណសាលាមានសុវត្ថិភាព ជាមួយនឹងបុគ្គលិកដែលយកចិត្តទុកដាក់ និងបរិយាកាសសិក្សាវិជ្ជមាន។',
        icon: 'ShieldCheckIcon'
      }
    ]

    onMounted(() => {
      // Initialize AOS
      AOS.init({
        once: true, // Whether animation should happen only once
        mirror: false, // Whether elements should animate out while scrolling past them
        duration: 800, // Default duration
        easing: 'ease-in-out', // Default easing
      })

      // Simulate API fetch
      setTimeout(() => {
        latestAnnouncements.value = announcementsData.slice(0, 3)
        loading.value = false
        // Refresh AOS after content loads
        setTimeout(() => {
          AOS.refresh()
        }, 100)
      }, 500)
    })

    return {
      loading,
      latestAnnouncements,
      features
    }
  }
}
</script>

<style>
/* Optional custom animation classes */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.hover-float:hover {
  animation: float 2s ease-in-out infinite;
}
</style>