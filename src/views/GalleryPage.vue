<template>
  <div class="min-h-screen">
    <!-- Header -->
    <section class="bg-primary-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">វិចិត្រសាលរូបភាព</h1>
        <p class="text-xl text-primary-100">គ្រាដ៏គួរឱ្យចងចាំពីសាលាបឋមសិក្សាមិត្តភាពកម្ពុជាឥណ្ឌា</p>
      </div>
    </section>

    <!-- Simple Image Gallery Grid -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="(image, index) in galleryImages" 
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div class="aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-gray-700">
              <img 
                :src="image.url" 
                :alt="image.caption"
                class="w-full h-64 object-cover"
                loading="lazy"
                @error="handleImageError"
              >
            </div>
            <div class="p-4">
              <p class="text-gray-800 dark:text-gray-200 text-sm">{{ image.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import pic1 from '../assets/pic1.jpg'

export default {
  name: 'GalleryPage',
  setup() {
    // Import all images from assets
    const galleryImages = ref([
      {
        url: pic1,
        caption: 'ការចែកប័ណ្ណសរសើរដល់សិស្សានុសិស្ស'
      },
      {
        url: '/images/sandwich.jpg',
        caption: 'ការចែកអាហារសម្រន់ដល់សិស្សានុសិស្ស'
      },
      {
        url: '/images/gift.jpg',
        caption: 'សប្បុរសជនជឧបត្តម្ភថវិការដល់សាលា'
      },
      {
        url: '/images/speech.jpg',
        caption: 'លោកនាយកសាលាឡើងថ្លែងសុន្ទរកថា'
      },
      {
        url: '/images/gate.jpg',
        caption: 'ការធ្វើរបងនិងខ្លោងទ្វារថ្មីរបស់សាលា'
      },
      {
        url: '/images/meeting2.jpg',
        caption: 'ការជួបជុំរបស់សាលាជាមួយអាណាព្យាបាលសិស្ស'
      },
      {
        url: '/images/unite.jpg',
        caption: 'ការធ្វើបុណ្យផ្កាសាមគ្គីដើម្បីចាក់ដីក្នុងទីធ្លាសាលារៀន'
      },
      {
        url: '/images/gift3.jpg',
        caption: 'ការចែកអំណោយជាសម្ភារសិក្សាមកកាន់សាលា'
      }
    ])

    const handleImageError = (e) => {
      // Fallback if image doesn't load
      e.target.src = 'https://via.placeholder.com/400x300?text=Sunny+Primary'
    }

    return {
      galleryImages,
      handleImageError
    }
  }
}
</script>