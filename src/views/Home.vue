<script setup>
import BlogSection from '@/components/home/BlogSection.vue'
import FeatureSection from '@/components/home/FeatureSection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import ResourceSection from '@/components/home/ResourceSection.vue'
import { useTitle } from '@vueuse/core'

useTitle('Home | FutureTech')
</script>

<template>
  <div class="pt-36 md:pt-[120px]">
    <HeroSection />
    <FeatureSection />
    <BlogSection />
    <ResourceSection />
  </div>
</template>
