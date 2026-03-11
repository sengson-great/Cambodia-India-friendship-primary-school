<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
    <div class="aspect-w-3 aspect-h-4 bg-gray-200 dark:bg-gray-700">
      <img 
        :src="staff.photo" 
        :alt="staff.name"
        class="object-cover w-full h-[430px]"
        @error="handleImageError"
      >
    </div>
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ staff.name }}</h3>
      <p class="text-primary-600 dark:text-primary-400 text-sm font-medium">{{ staff.position }}</p>
      <p class="mt-2 text-gray-600 dark:text-gray-300 text-sm">{{ staff.bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaffCard',
  props: {
    staff: {
      type: Object,
      required: true
    }
  },
  setup() {
    const handleImageError = (e) => {
      e.target.src = '/images/placeholder.jpg'
    }

    return {
      handleImageError
    }
  }
}
</script>