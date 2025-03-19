<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import { useDark } from '@vueuse/core'

const isDark = useDark()
console.log(isDark.value)
</script>
<template>
  <div
    class="dark:bg-dark-08 pt-10 pb-3.5 sm:py-3 3xl:py-4 px-6 border-b-1 dark:border-b-dark-10 flex items-center justify-center"
  >
    <router-link
      to="/"
      class="flex w-full xs:w-fit items-center justify-between xs:justify-center gap-2.5 border border-transparent hover:border-b-1 dark:hover:border-b-yellow-55"
    >
      <p
        class="text-xs 2xl:text-sm 3xl:text-base dark:text-grey-60 leading-[150%] tracking-[-0.03em] dark:hover:text-grey-70"
      >
        Subscribe to our Newsletter For
        <span class="hidden sm:inline-block">New & latest</span> Blogs and Resources
      </p>
      <ArrowUpRightIcon class="size-5 dark:text-yellow-55 3xl:size-6" />
    </router-link>
  </div>
</template>
