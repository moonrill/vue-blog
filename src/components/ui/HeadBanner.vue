<script setup>
import Badge from './Badge.vue'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'

defineProps({
  badgeLabel: { type: String, required: true },
  bannerTitle: { type: String, required: true },
  showButton: { type: Boolean, default: false },
  buttonLabel: { type: String, default: 'Button' },
  buttonLink: { type: String, default: '#' },
})
</script>
<template lang="">
  <div
    class="flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 2xl:px-20 3xl:px-[162px] py-10 xl:py-20 gap-[30px] lg:gap-[200px] bg-dark-10 border-y border-dark-15"
  >
    <div class="flex flex-col gap-2.5">
      <Badge :label="badgeLabel" />
      <h1 class="font-kumbh font-medium text-[28px] lg:text-[44px] 3xl:text-[58px] leading-[130%]">
        {{ bannerTitle }}
      </h1>
    </div>
    <router-link
      v-if="showButton"
      :to="buttonLink"
      class="flex w-full md:w-fit bg-dark-08 border hover:bg-dark-15 hover:border-dark-25 border-dark-15 rounded-lg px-5 py-3.5 justify-center items-center gap-1 text-sm 3xl:text-lg text-grey-60 whitespace-nowrap"
    >
      <div>{{ buttonLabel }}</div>
      <ArrowUpRightIcon class="size-5 dark:text-yellow-55 3xl:size-6" />
    </router-link>
  </div>
</template>
<style></style>
