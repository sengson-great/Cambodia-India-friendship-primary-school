<template>
  <div class="min-h-screen">
    <!-- Header -->
    <section class="bg-primary-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Upcoming Events</h1>
        <p class="text-xl text-primary-100">Join us for these exciting activities</p>
      </div>
    </section>

    <!-- Events List -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div v-if="loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>

        <div v-else-if="upcomingEvents.length === 0" class="text-center py-12">
          <p class="text-gray-600 dark:text-gray-300">No upcoming events at this time.</p>
        </div>

        <div v-else class="max-w-3xl mx-auto space-y-4">
          <EventCard 
            v-for="event in upcomingEvents" 
            :key="event.id"
            :event="event"
          />
        </div>
      </div>
    </section>

    <!-- Past Events (Optional) -->
    <section v-if="pastEvents.length > 0" class="py-12 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Past Events</h2>
        <div class="max-w-3xl mx-auto space-y-4 opacity-75">
          <EventCard 
            v-for="event in pastEvents" 
            :key="event.id"
            :event="event"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import EventCard from '../components/EventCard.vue'
import eventsData from '../data/events.json'

export default {
  name: 'EventsPage',
  components: {
    EventCard
  },
  setup() {
    const loading = ref(true)
    const events = ref([])

    const upcomingEvents = computed(() => {
      const today = new Date()
      return events.value
        .filter(event => new Date(event.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
    })

    const pastEvents = computed(() => {
      const today = new Date()
      return events.value
        .filter(event => new Date(event.date) < today)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    })

    onMounted(() => {
      // Simulate API fetch
      setTimeout(() => {
        events.value = eventsData
        loading.value = false
      }, 500)
    })

    return {
      loading,
      events,
      upcomingEvents,
      pastEvents
    }
  }
}
</script>