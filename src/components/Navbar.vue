<script setup>
import { Bars3BottomRightIcon } from '@heroicons/vue/24/outline'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import laptopLogoUrl from '../assets/logo/laptop-logo.png'
import mobileLogoUrl from '../assets/logo/mobile-logo.png'
import TopBanner from './TopBanner.vue'

const { width } = useWindowSize()
const route = useRoute()

const logoUrl = computed(() => (width.value > 768 ? laptopLogoUrl : mobileLogoUrl))

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'Podcasts', path: '/podcasts' },
  { name: 'Resources', path: '/resources' },
]
</script>

<template>
  <header>
    <TopBanner />
    <nav
      class="py-4 px-5 2xl:py-5 2xl:px-20 3xl:px-[162px] dark:bg-dark-10 border-y-1 dark:border-y-dark-15"
    >
      <div class="flex justify-between items-center">
        <router-link to="/">
          <img :src="logoUrl" alt="logo" />
        </router-link>
        <div class="md:flex items-center gap-1 hidden">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            :class="route.path === link.path ? 'bg-dark-08 border border-dark-20' : 'text-grey-50'"
            class="text-sm 3xl:text-base font-medium px-[18px] py-2.5 rounded-lg"
          >
            {{ link.name }}
          </router-link>
        </div>
        <router-link
          to="/"
          class="text-sm 3xl:text-base font-medium px-3.5 py-2.5 bg-yellow-55 text-dark-08 rounded-lg hidden md:flex justify-center items-center hover:bg-yellow-400"
        >
          Contact Us
        </router-link>
        <Bars3BottomRightIcon class="size-[34px] md:hidden" />
      </div>
    </nav>
  </header>
</template>
