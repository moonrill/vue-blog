<script setup>
import Hero from '@/components/Hero.vue'
import Navbar from '@/components/Navbar.vue'
import HeadBanner from '@/components/ui/HeadBanner.vue'
import { useTitle } from '@vueuse/core'

useTitle('Home | FutureTech')
</script>
<template>
  <Hero />
  <HeadBanner />
</template>
<style scoped></style>
