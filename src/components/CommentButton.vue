<script setup>
import BaseInteractionButton from './ui/BaseInteractionButton.vue'
import { ChatBubbleOvalLeftIcon } from '@heroicons/vue/24/outline'

defineProps({
  count: String,
})
</script>
<template>
  <BaseInteractionButton :count="count">
    <ChatBubbleOvalLeftIcon class="text-dark-40 group-hover:text-yellow-55 size-5 2xl:size-6" />
  </BaseInteractionButton>
</template>
