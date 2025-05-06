<script setup>
defineProps({
  count: {
    type: String,
    default: '0',
  },
})
defineEmits(['click'])
</script>
<template>
  <button
    class="border-dark-20 text-grey-60 font-kumbh group hover:bg-dark-15 hover:border-dark-25 group: flex w-fit cursor-pointer items-center justify-center gap-0.5 rounded-full border px-3 py-1.5 text-sm 2xl:gap-1 2xl:px-4 2xl:py-2 2xl:text-base"
    @click="$emit('click')"
  >
    <slot />
    <span>{{ count }}</span>
  </button>
</template>
