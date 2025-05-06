<script setup>
import BaseInteractionButton from './ui/BaseInteractionButton.vue'
import { ChatBubbleOvalLeftIcon } from '@heroicons/vue/24/outline'

import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'

defineProps({
  count: String,
})
</script>
<template>
  <BaseInteractionButton :count="count">
    <PaperAirplaneIcon class="text-dark-40 size-5 group-hover:text-blue-400 2xl:size-6" />
  </BaseInteractionButton>
</template>
