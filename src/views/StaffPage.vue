<template>
  <div class="min-h-screen">
    <!-- Header -->
    <section class="bg-primary-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">បុគ្គលិករបស់សាលា</h1>
        <p class="text-xl text-primary-100">ជួបជាមួយក្រុមការងារដែលខិតខំប្រឹងប្រែងនៅពីក្រោយសាលាបឋមសិក្សាមិត្តភាពកម្ពុជាឥណ្ឌា</p>
      </div>
    </section>

    <!-- Filter Buttons -->
    <!-- <section class="py-8 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="flex justify-center space-x-4">
          <button 
            v-for="filter in filters" 
            :key="filter.value"
            @click="selectedFilter = filter.value"
            class="px-6 py-2 rounded-lg transition"
            :class="selectedFilter === filter.value 
              ? 'bg-primary-600 text-white' 
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section> -->

    <!-- Staff Grid -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div v-if="loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>

        <div v-else-if="filteredStaff.length === 0" class="text-center py-12">
          <p class="text-gray-600 dark:text-gray-300">No staff members found.</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <StaffCard 
            v-for="member in filteredStaff" 
            :key="member.id"
            :staff="member"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import StaffCard from '../components/StaffCard.vue'
import staffData from '../data/staff.json'

export default {
  name: 'StaffPage',
  components: {
    StaffCard
  },
  setup() {
    const loading = ref(true)
    const staff = ref([])
    const selectedFilter = ref('all')

    const filters = [
      { label: 'All Staff', value: 'all' },
      { label: 'Teachers', value: 'teacher' },
      { label: 'Administration', value: 'admin' }
    ]

    const filteredStaff = computed(() => {
      if (selectedFilter.value === 'all') {
        return staff.value
      }
      return staff.value.filter(member => member.role === selectedFilter.value)
    })

    onMounted(() => {
      // Simulate API fetch
      setTimeout(() => {
        staff.value = staffData
        loading.value = false
      }, 500)
    })

    return {
      loading,
      staff,
      filters,
      selectedFilter,
      filteredStaff
    }
  }
}
</script>