<script setup>
import Hero from '@/components/Hero.vue'
import Navbar from '@/components/Navbar.vue'
import { useTitle } from '@vueuse/core'

useTitle('Home | FutureTech')
</script>
<template>
  <Hero />
</template>
<style scoped></style>
