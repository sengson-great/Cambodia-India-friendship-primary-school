<template>
  <div 
    class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-1 flex flex-col h-full will-change-transform"
    data-aos="fade-up"
    :data-aos-delay="delay"
    data-aos-duration="800"
    data-aos-once="true"
  >
    <!-- Image with smooth zoom animation on hover -->
    <div class="overflow-hidden rounded-t-lg">
      <img 
        :src="announcement.image" 
        :alt="announcement.title" 
        class="w-full h-64 object-cover transition-transform duration-700 ease-out hover:scale-105"
        @error="handleImageError"
        loading="lazy"
      >
    </div>
    
    <!-- Content area -->
    <div class="p-6 flex flex-col flex-grow">
      <!-- Date badge -->
      <div class="mb-3">
        <span class="inline-block bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs font-semibold px-3 py-1 rounded-full">
          {{ announcement.date }}
        </span>
      </div>
      
      <!-- Title -->
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
        {{ announcement.title }}
      </h3>
      
      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-300 mb-6 line-clamp-4 flex-grow">
        {{ announcement.description }}
      </p>
      
      <!-- Read more button -->
      <!-- <div class="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <router-link 
          :to="`/announcements/${announcement.id}`" 
          class="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 group"
        >
          អានបន្ថែម
          <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'AnnouncementCard',
  props: {
    announcement: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const delay = computed(() => {
      return (props.index * 100) + 200
    })

    const handleImageError = (e) => {
      e.target.src = '/images/placeholder.jpg'
      // Add fade-in for placeholder
      e.target.classList.add('fade-in')
    }

    return {
      delay,
      handleImageError
    }
  }
}
</script>

<style scoped>
/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}

/* Hardware acceleration for smoother animations */
.will-change-transform {
  will-change: transform, box-shadow;
}

/* Smooth shadow transition */
.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.5s ease-out;
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Smooth scale transition */
.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}

/* Image zoom */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Fade in animation for images */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

/* Prevent layout shift */
img {
  background-color: #f3f4f6;
}

.dark img {
  background-color: #374151;
}
</style>