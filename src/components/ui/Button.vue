<script setup>
const props = defineProps({
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  to: { type: String, default: '#' },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
  },
})
</script>

<template>
  <router-link v-if="props.type === 'link'" :to="props.to"><slot></slot></router-link>

  <button v-else :disabled="props.disabled || props.loading"><slot></slot></button>
</template>

<style scoped></style>
