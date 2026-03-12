<template>
  <footer class="bg-gray-800 text-white mt-12">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- School Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">
            សាលាបឋមសិក្សាមិត្តភាពកម្ពុជាឥណ្ឌា
          </h3>
          <p class="text-gray-300 text-sm">
            ផ្តល់ការអប់រំប្រកបដោយគុណភាពដល់កុមារទាំងអស់ចាប់តាំងពីឆ្នាំ ១៩៧៩។
          </p>
          <div class="mt-4 flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61573423725572"
              class="text-gray-300 hover:text-white transition"
            >
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">តំណភ្ជាប់រហ័ស</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <router-link
                :to="link.path"
                class="text-gray-300 hover:text-white text-sm"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">ទាក់ទងពួកយើង</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li class="flex items-start space-x-2">
              <svg
                class="h-5 w-5 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>ភូមិទ្រារស ឃុំខ្នារស ស្រុកស្រីសន្ធរ ខេត្តកំពង់ចាម</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+855 96 848 4557</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>trearsor@gmail.com</span>
            </li>
          </ul>
        </div>

        <!-- Hours -->
        <div>
          <h3 class="text-lg font-semibold mb-4">ម៉ោងសិក្សា</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li class="flex justify-between">
              <span>ចន្ទ - សៅរ៍:</span>
              <span>7:00 AM - 11:00 AM & 1:00 PM - 5:00 PM</span>
            </li>
            <li class="flex justify-between">
              <span>អាទិត្យ:</span>
              <span>បិទ</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400"
      >
        <p>
          &copy; {{ currentYear }} Cambodia India Friendship Primary School. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Footer",
  setup() {
    const currentYear = computed(() => new Date().getFullYear());

    const quickLinks = [
      { name: "ទំព័រដើម", path: "/" },
      { name: "អំពីយើង", path: "/about" },
      { name: "បុគ្គលិក", path: "/staff" },
      { name: "ការប្រកាស", path: "/announcements" },
      { name: "វិចិត្រសាល", path: "/gallery" },
      { name: "ទំនាក់ទំនង", path: "/contact" },
    ];

    return {
      currentYear,
      quickLinks,
    };
  },
};
</script>
