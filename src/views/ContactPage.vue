<template>
  <div class="min-h-screen">
    <!-- Header -->
    <section class="bg-primary-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">ទំនាក់ទំនងមកយើងខ្ញុំ</h1>
        <p class="text-xl text-primary-100">យើងខ្ញុំចង់ឮពីអ្នក</p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">ទាក់ទងមកយើងខ្ញុំ</h2>
          
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                <svg class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">អាសយដ្ឋាន</h3>
                <p class="text-gray-600 dark:text-gray-300">ភូមិទ្រារស ឃុំខ្នារស ស្រុកស្រីសន្ធរ ខេត្តកំពង់ចាម</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                <svg class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">លេខទូរស័ព្ទ</h3>
                <p class="text-gray-600 dark:text-gray-300">+855 96 848 4557</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                <svg class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">អ៉ីមែល</h3>
                <p class="text-gray-600 dark:text-gray-300">trearsor@gmail.com</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                <svg class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">ម៉ោងធ្វើការ</h3>
                <p class="text-gray-600 dark:text-gray-300">ចន្ទ - សៅរ៍: 7:00 AM - 11:00 AM & 1:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">ផ្ញើសារមកយើង</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ឈ្មោះ</label>
              <input 
                type="text" 
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                placeholder="ឈ្មោះរបស់អ្នក"
              >
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">អ៉ីមែល</label>
              <input 
                type="email" 
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                placeholder="your@email.com"
              >
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">សារ</label>
              <textarea 
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                placeholder="សាររបស់អ្នក..."
              ></textarea>
            </div>

            <button 
              type="submit"
              :disabled="submitting"
              class="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ submitting ? 'កំពុងផ្ញើ...' : 'ផ្ញើសារ' }}
            </button>

            <!-- Success Message -->
            <div v-if="submitted" class="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg">
              សូមអរគុណចំពោះសាររបស់អ្នក! យើងនឹងឆ្លើយតបទៅអ្នកវិញឆាប់ៗនេះ។
            </div>
          </form>
        </div>
      </div>

      <!-- Map -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">ស្វែងរកយើងនៅលើផែនទី</h2>
        <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.374991345087!2d105.1139479402821!3d11.80898875436449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310c0359c1d20f45%3A0x19cbea1675684299!2sIndia-Cambodia%20Friendship%20School!5e0!3m2!1skm!2skh!4v1773191559825!5m2!1skm!2skh"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            class="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContactPage',
  setup() {
    const form = ref({
      name: '',
      email: '',
      message: ''
    })

    const submitting = ref(false)
    const submitted = ref(false)

    const handleSubmit = async () => {
      submitting.value = true
      submitted.value = false

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Here you would typically send the data to your backend
      console.log('Form submitted:', form.value)

      submitting.value = false
      submitted.value = true

      // Reset form
      form.value = {
        name: '',
        email: '',
        message: ''
      }

      // Hide success message after 5 seconds
      setTimeout(() => {
        submitted.value = false
      }, 5000)
    }

    return {
      form,
      submitting,
      submitted,
      handleSubmit
    }
  }
}
</script>