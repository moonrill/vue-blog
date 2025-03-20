<script setup>
import Hero from '@/components/Hero.vue'
import Navbar from '@/components/Navbar.vue'
import { useTitle } from '@vueuse/core'

useTitle('Home | FutureTech')
</script>
<template>
  <Hero />
  <div class="h-[100px]"></div>
</template>
<style scoped></style>
