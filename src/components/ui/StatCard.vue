<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  number: String,
  label: String,
  duration: { type: Number, default: 1000 },
})

const displayNumber = ref(0)

onMounted(() => {
  const target = parseInt(props.number)
  const duration = props.duration
  const frameRate = 60

  const totalFrames = Math.round(duration / (1000 / frameRate))
  let frame = 0

  const counter = setInterval(() => {
    frame++
    displayNumber.value = Math.round((target * frame) / totalFrames)

    if (frame === totalFrames) {
      clearInterval(counter)
      displayNumber.value = target
    }
  }, 1000 / frameRate)
})
</script>
<template>
  <div class="flex">
    <div class="py-5 2xl:py-[30px] 3xl:py-[50px] flex flex-col">
      <h1 class="font-semibold text-2xl xl:text-3xl">
        {{ displayNumber }}<span class="text-yellow-55">+</span>
      </h1>
      <p class="text-sm xl:text-lg text-grey-60">{{ label }}</p>
    </div>
  </div>
</template>
