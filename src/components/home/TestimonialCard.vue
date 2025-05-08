<script setup>
import { StarIcon } from '@heroicons/vue/24/solid'

defineProps({
  avatar: String,
  name: String,
  location: String,
  review: String,
})
</script>
<template>
  <div
    class="border-dark-15 flex flex-col gap-[30px] border-b py-10 lg:border-b-0 xl:py-[60px] 2xl:py-20"
  >
    <div class="flex items-center justify-center gap-2.5">
      <img :src="avatar" alt="User Avatar" class="size-[50px] rounded-full xl:size-[60px]" />
      <div class="flex flex-col">
        <h5 class="text-lg font-medium text-white xl:text-xl">{{ name }}</h5>
        <p class="text-dark-40 xl:text-lg">{{ location }}</p>
      </div>
    </div>
    <div
      class="bg-dark-10 border-dark-15 relative flex flex-1 items-center rounded-[10px] border px-5 pt-[30px] pb-5 xl:px-6 xl:pt-10 xl:pb-6 2xl:px-[30px] 2xl:pt-[50px] 2xl:pb-[30px]"
    >
      <div
        class="bg-dark-08 border-dark-15 absolute top-0 right-0 left-0 mx-auto flex h-fit w-fit translate-y-[-50%] gap-1 rounded-full border px-3 py-2"
      >
        <StarIcon v-for="n in 5" class="size-5 text-[#FFCE22] lg:size-6" />
      </div>
      <p class="text-center text-sm leading-[150%] font-light text-white xl:text-base 2xl:text-lg">
        {{ review }}
      </p>
    </div>
  </div>
</template>
