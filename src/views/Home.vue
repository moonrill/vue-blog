<script setup>
import FeatureSection from '@/components/home/FeatureSection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import { useTitle } from '@vueuse/core'
import BlogSection from '../components/home/BlogSection.vue'

useTitle('Home | FutureTech')
</script>

<template>
  <div class="pt-36 md:pt-[120px]">
    <HeroSection />
    <FeatureSection />
    <BlogSection />
  </div>
</template>
