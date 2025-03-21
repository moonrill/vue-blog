<script setup>
defineProps({
  label: String,
})
</script>
<template>
  <div class="px-2 py-1 bg-dark-20 flex justify-center items-center w-fit rounded">
    <p class="text-sm text-white font-medium lg:text-base">{{ label || 'Badge' }}</p>
  </div>
</template>
<style></style>
