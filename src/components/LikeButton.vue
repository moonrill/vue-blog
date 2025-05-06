<script setup>
import BaseInteractionButton from './ui/BaseInteractionButton.vue'
import { HeartIcon as HeartIconOutline } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'

defineProps({
  liked: { type: Boolean, default: false },
  count: String,
})
</script>
<template>
  <BaseInteractionButton :count="count">
    <HeartIconOutline
      v-if="!liked"
      class="text-dark-40 size-5 group-hover:text-red-500 2xl:size-6"
    />
    <HeartIconSolid v-else class="size-5 text-red-500 2xl:size-6" />
  </BaseInteractionButton>
</template>
