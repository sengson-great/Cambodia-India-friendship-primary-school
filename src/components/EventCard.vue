<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition">
    <div class="flex items-start space-x-4">
      <!-- Date Box -->
      <div class="flex-shrink-0 text-center">
        <div class="bg-primary-100 dark:bg-primary-900 rounded-lg p-3 w-16">
          <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">{{ day }}</div>
          <div class="text-xs text-gray-600 dark:text-gray-300 uppercase">{{ month }}</div>
        </div>
      </div>
      
      <!-- Event Details -->
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ event.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">{{ event.description }}</p>
        <div class="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span class="flex items-center">
            <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ event.time }}
          </span>
          <span class="flex items-center">
            <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ event.location }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const day = computed(() => {
      const date = new Date(props.event.date)
      return date.getDate()
    })

    const month = computed(() => {
      const date = new Date(props.event.date)
      return date.toLocaleString('default', { month: 'short' })
    })

    return {
      day,
      month
    }
  }
}
</script>