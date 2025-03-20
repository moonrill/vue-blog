<script setup>
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useWindowSize } from '@vueuse/core'
import { computed, ref, onMounted, onUnmounted } from 'vue'
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

const isMenuOpen = ref(false)
const scrollY = ref(0)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const menuIcon = computed(() => (isMenuOpen.value ? XMarkIcon : Bars3BottomRightIcon))

const updateScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})

const navbarClasses = computed(() => ({
  'backdrop-blur-lg bg-dark-08/80 shadow-md': scrollY.value > 10,
  'bg-dark-10': scrollY.value <= 10,
}))
</script>

<template>
  <header class="fixed left-0 right-0 z-[100] transition-all duration-300" :class="navbarClasses">
    <TopBanner />
    <nav class="py-4 px-4 2xl:py-5 2xl:px-20 3xl:px-[162px] border-y-1 dark:border-y-dark-15">
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
          v-if="width >= 768"
          to="/contact"
          class="text-sm 3xl:text-base px-3.5 py-2.5 bg-yellow-55 text-dark-08 rounded-lg hidden md:flex justify-center items-center hover:bg-yellow-400"
        >
          Contact Us
        </router-link>

        <component
          :is="menuIcon"
          class="size-[34px] md:hidden cursor-pointer transition-transform duration-300 ease-in-out"
          :class="{ 'rotate-180': isMenuOpen }"
          @click="toggleMenu"
        />
      </div>
    </nav>

    <div
      class="md:hidden w-full absolute bg-dark-08 shadow overflow-hidden transition-all duration-300 ease-in-out"
      :style="{
        maxHeight: isMenuOpen ? '300px' : '0',
        opacity: isMenuOpen ? '1' : '0',
        transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
      }"
    >
      <div class="flex flex-col gap-4 p-5">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :class="route.path === link.path ? 'text-yellow-55' : 'text-grey-50'"
          class="text-lg font-medium transition-all duration-300"
          @click="toggleMenu"
        >
          {{ link.name }}
        </router-link>
        <router-link
          to="/contact"
          class="text-dark-08 bg-yellow-55 px-4 py-3 rounded-lg text-center hover:bg-yellow-400 transition-all duration-300 mt-4"
          @click="toggleMenu"
        >
          Contact Us
        </router-link>
      </div>
    </div>
  </header>
</template>
