<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
  title: String,
  subTitle: String,
  description: String,
  icon: String,
  link: String,
})
</script>
<template>
  <router-link
    class="3xl:py-[50px] 3xl:gap-[30px] border-dark-15 group flex w-full cursor-pointer flex-col gap-2.5 border-y py-[30px] xl:gap-5 xl:border-y-0 2xl:py-[40px]"
    :to="props.link"
  >
    <div class="3xl:gap-[30px] flex flex-col gap-4 xl:gap-5">
      <img :src="props.icon" alt="Icon" class="3xl:size-[50px] size-[30px] xl:size-[40px]" />
      <div class="3xl:gap-5 flex items-center gap-3.5">
        <div class="w-full">
          <h5 class="3xl:text-xl leading-[150%] font-medium tracking-[-0.03em] xl:text-lg">
            {{ props.title }}
          </h5>
          <p
            class="3xl:text-lg text-grey-50 text-sm leading-[150%] tracking-[-0.03em] xl:text-base"
          >
            {{ props.subTitle }}
          </p>
        </div>
        <button class="3xl:p-3.5 bg-yellow-55 rounded-full p-2.5 group-hover:bg-yellow-400 xl:p-3">
          <ArrowUpRightIcon class="3xl:size-6 size-5 dark:text-black" />
        </button>
      </div>
    </div>
    <p
      class="3xl:text-lg font-kumbh text-grey-50 text-sm leading-[150%] tracking-[-0.03em] xl:text-base"
    >
      {{ props.description }}
    </p>
  </router-link>
</template>
<style></style>
