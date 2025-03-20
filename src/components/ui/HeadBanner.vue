<script setup>
import Badge from './Badge.vue'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
</script>
<template lang="">
  <div class="flex flex-col px-4 py-10 gap-[30px] bg-dark-10 border border-dark-15">
    <div class="flex flex-col gap-2.5">
      <Badge />
      <h1 class="font-kumbh font-medium text-[28px] leading-[130%]">FutureTech Features</h1>
    </div>
    <router-link
      to="/"
      class="flex w-full md:w-fit bg-dark-08 border border-dark-15 rounded-lg px-5 py-3.5 justify-center items-center gap-1 text-sm 3xl:text-lg text-grey-60 hover:bg-dark-15"
    >
      <div>View All Blogs</div>
      <ArrowUpRightIcon class="size-5 dark:text-yellow-55 3xl:size-6" />
    </router-link>
  </div>
</template>
<style></style>
