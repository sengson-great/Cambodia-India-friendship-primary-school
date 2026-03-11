<template>
  <div class="min-h-screen">
    <!-- Header -->
    <section class="bg-primary-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">ការប្រកាស</h1>
        <p class="text-xl text-primary-100">តាមដានព័ត៌មានថ្មីៗពីសាលាបឋមសិក្សាមិត្តភាពកម្ពុជាឥណ្ឌា</p>
      </div>
    </section>

    <!-- Announcements List -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div v-if="loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>

        <div v-else-if="announcements.length === 0" class="text-center py-12">
          <p class="text-gray-600 dark:text-gray-300">No announcements at this time.</p>
        </div>

        <div v-else class="max-w-3xl mx-auto space-y-6">
          <AnnouncementCard 
            v-for="announcement in announcements" 
            :key="announcement.id"
            :announcement="announcement"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import AnnouncementCard from '../components/AnnouncementCard.vue'
import announcementsData from '../data/announcements.json'

export default {
  name: 'AnnouncementsPage',
  components: {
    AnnouncementCard
  },
  setup() {
    const loading = ref(true)
    const announcements = ref([])

    onMounted(() => {
      // Simulate API fetch
      setTimeout(() => {
        announcements.value = announcementsData.sort((a, b) => 
          new Date(b.date) - new Date(a.date)
        )
        loading.value = false
      }, 500)
    })

    return {
      loading,
      announcements
    }
  }
}
</script>