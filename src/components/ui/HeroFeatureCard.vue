<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
  title: String,
  subTitle: String,
  description: String,
  icon: String,
})
</script>
<template>
  <div
    class="w-full py-[30px] 2xl:py-[40px] 3xl:py-[50px] flex flex-col gap-2.5 xl:gap-5 3xl:gap-[30px] border-y xl:border-y-0 border-dark-15"
  >
    <div class="flex flex-col gap-4 xl:gap-5 3xl:gap-[30px]">
      <img :src="props.icon" alt="Icon" class="size-[30px] xl:size-[40px] 3xl:size-[50px]" />
      <div class="flex gap-3.5 3xl:gap-5 items-center">
        <div class="w-full">
          <h5 class="font-medium leading-[150%] tracking-[-0.03em] xl:text-lg 3xl:text-xl">
            {{ props.title }}
          </h5>
          <p
            class="text-sm xl:text-base 3xl:text-lg text-grey-50 leading-[150%] tracking-[-0.03em]"
          >
            {{ props.subTitle }}
          </p>
        </div>
        <div class="p-2.5 xl:p-3 3xl:p-3.5 rounded-full bg-yellow-55">
          <ArrowUpRightIcon class="size-5 dark:text-black 3xl:size-6" />
        </div>
      </div>
    </div>
    <p
      class="text-sm xl:text-base 3xl:text-lg font-kumbh text-grey-50 leading-[150%] tracking-[-0.03em]"
    >
      {{ props.description }}
    </p>
  </div>
</template>
<style></style>
