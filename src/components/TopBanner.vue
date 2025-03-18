<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import { useDark } from '@vueuse/core'

const isDark = useDark()
console.log(isDark.value)
</script>
<template>
  <div
    class="flex w-full items-center justify-between sm:justify-center dark:bg-dark-08 gap-2.5 pt-10 pb-3.5 sm:py-3 3xl:py-5 px-6 border-b-1 dark:border-b-dark-10"
  >
    <p class="text-xs 2xl:text-sm 3xl:text-lg dark:text-grey-60 leading-[150%] tracking-[-0.03em]">
      Subscribe to our Newsletter For <span class="hidden sm:inline-block">New & latest</span> Blogs
      and Resources
    </p>
    <ArrowUpRightIcon class="size-5 dark:text-yellow-55 3xl:size-6" />
  </div>
</template>
