<script setup>
defineProps({
  avatarLinks: Array,
  imgClass: String,
})
</script>
<template>
  <div class="bg-dark-08 relative z-50 flex w-fit p-2">
    <img
      v-for="(link, index) in avatarLinks"
      :key="index"
      :src="link"
      alt="avatar"
      class="border-dark-40 rounded-full border-2"
      :class="(index !== 0 ? '-ml-3' : '') + ' ' + imgClass"
    />
  </div>
</template>
