<script setup>
defineProps({
  title: String,
  subTitle: String,
  icon: String,
  features: Array,
})
</script>
<template>
  <div
    class="wrapper 3xl:gap-20 border-dark-15 flex flex-col border-t 2xl:flex-row 2xl:items-center 2xl:gap-[60px]"
  >
    <div
      class="3xl:w-[520px] 3xl:gap-[50px] flex flex-col gap-5 py-[50px] 2xl:w-[415px] 2xl:gap-10 2xl:p-0"
    >
      <img :src="icon" alt="section-icon" class="3xl:size-20 size-[50px] lg:size-[60px]" />
      <div class="3xl:gap-4 flex flex-col gap-1.5 2xl:gap-2.5">
        <h2
          class="font-kumbh 3xl:text-[40px] text-2xl leading-[150%] font-semibold tracking-[-0.03em] 2xl:text-3xl"
        >
          {{ title }}
        </h2>
        <p class="3xl:text-lg text-grey-60 text-sm leading-[150%] tracking-[-0.03em] 2xl:text-base">
          {{ subTitle }}
        </p>
      </div>
    </div>
    <div
      class="3xl:py-20 3xl:ps-20 3xl:gap-[30px] border-dark-15 grid grid-cols-1 gap-2.5 border-t px-4 py-[30px] md:grid-cols-2 2xl:gap-5 2xl:border-t-0 2xl:border-l 2xl:py-[60px] 2xl:ps-[60px] 2xl:pe-0"
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
<style></style>
