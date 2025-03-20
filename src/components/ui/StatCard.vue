<script setup>
defineProps({
  number: String,
  label: String,
})
</script>
<template>
  <div class="flex px-4 xl:px-10">
    <div class="py-5 2xl:py-[30px] 3xl:py-[50px] flex flex-col">
      <h1 class="font-semibold text-2xl xl:text-3xl">
        {{ number }} <span class="text-yellow-55">+</span>
      </h1>
      <p class="text-sm xl:text-lg text-grey-60">{{ label }}</p>
    </div>
  </div>
</template>
