<script setup>
import FeatureCard from '../ui/FeatureCard.vue'
defineProps({
  icon: String,
  title: String,
  description: String,
  features: Array,
})
</script>

<template>
  <div
    class="wrapper flex flex-col 2xl:gap-[60px] 3xl:gap-20 2xl:flex-row 2xl:items-center border-t border-dark-15"
  >
    <div
      class="2xl:w-[415px] 3xl:w-[520px] py-[50px] 2xl:p-0 flex flex-col gap-5 2xl:gap-10 3xl:gap-[50px]"
    >
      <img :src="icon" alt="section-icon" class="size-[50px] lg:size-[60px] 3xl:size-20" />
      <div class="flex flex-col gap-1.5 2xl:gap-2.5 3xl:gap-4">
        <h2
          class="font-kumbh font-semibold text-2xl 2xl:text-3xl 3xl:text-[40px] leading-[150%] tracking-[-0.03em]"
        >
          {{ title }}
        </h2>
        <p class="text-sm 2xl:text-base 3xl:text-lg leading-[150%] tracking-[-0.03em] text-grey-60">
          {{ description }}
        </p>
      </div>
    </div>
    <div
      class="py-[30px] px-4 2xl:py-[60px] 3xl:py-20 2xl:ps-[60px] 3xl:ps-20 2xl:pe-0 grid grid-cols-1 md:grid-cols-2 gap-2.5 2xl:gap-5 3xl:gap-[30px] border-t 2xl:border-l 2xl:border-t-0 border-dark-15"
    >
      <FeatureCard
        v-for="(feature, index) in features"
        :key="index"
        :title="feature.title"
        :subTitle="feature.subTitle"
      />
    </div>
  </div>
</template>
