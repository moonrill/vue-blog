<script setup>
defineProps({
  title: String,
  subTitle: String,
})
</script>
<template>
  <div
    class="flex flex-col p-6 2xl:p-[30px] 3xl:p-10 border border-dark-15 rounded-[10px] gap-1 2xl:gap-4 3xl:gap-5 2xl:max-w-[445px]"
  >
    <h5 class="font-medium text-lg 2xl:text-xl 3xl:text-2xl leading-[150%] tracking-[-0.03em]">
      {{ title }}
    </h5>
    <p class="text-sm 2xl:text-base 3xl:text-lg leading-[150%] tracking-[-0.03em] text-grey-60">
      {{ subTitle }}
    </p>
  </div>
</template>
