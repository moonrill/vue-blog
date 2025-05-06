<script setup>
import FeatureCard from '../ui/FeatureCard.vue'
import futureTechBlogIcon from '@/assets/icons/future-tech-blog-icon.png'
import researchInsightsIcon from '@/assets/icons/research-insights-blog-icon.png'
import HeadBanner from '@/components/ui/HeadBanner.vue'

const futureTechFeatures = [
  { title: 'Quantity', subTitle: 'Over 1,000 articles on emerging tech trends and breakthroughs.' },
  {
    title: 'Variety',
    subTitle: 'Articles cover fields like AI, robotics, biotechnology, and more.',
  },
  { title: 'Frequency', subTitle: 'Fresh content added daily to keep you up to date.' },
  {
    title: 'Authoritative',
    subTitle: 'Written by our team of tech experts and industry professionals.',
  },
]

const researchInsightsFeatures = [
  { title: 'Depth', subTitle: '500+ research articles for in-depth understanding.' },
  { title: 'Graphics', subTitle: 'Visual aids and infographics to enhance comprehension.' },
  { title: 'Trends', subTitle: 'Explore emerging trends in future technology research.' },
  { title: 'Contributors', subTitle: 'Contributions from tech researchers and academics.' },
]
</script>

<template>
  <HeadBanner
    :showButton="false"
    badgeLabel="Unlock the Power of"
    bannerTitle="FutureTech Features"
  />
  <div
    class="wrapper 3xl:gap-20 border-dark-15 flex flex-col border-t 2xl:flex-row 2xl:items-center 2xl:gap-[60px]"
  >
    <div
      class="3xl:w-[520px] 3xl:gap-[50px] flex flex-col gap-5 py-[50px] 2xl:w-[415px] 2xl:gap-10 2xl:p-0"
    >
      <img
        :src="futureTechBlogIcon"
        alt="section-icon"
        class="3xl:size-20 size-[50px] lg:size-[60px]"
      />
      <div class="3xl:gap-4 flex flex-col gap-1.5 2xl:gap-2.5">
        <h2
          class="font-kumbh 3xl:text-[40px] text-2xl leading-[150%] font-semibold tracking-[-0.03em] 2xl:text-3xl"
        >
          Future Technology Blog
        </h2>
        <p class="3xl:text-lg text-grey-60 text-sm leading-[150%] tracking-[-0.03em] 2xl:text-base">
          Stay informed with our blog section dedicated to future technology.
        </p>
      </div>
    </div>
    <div
      class="3xl:py-20 3xl:ps-20 3xl:gap-[30px] border-dark-15 grid grid-cols-1 gap-2.5 border-t px-4 py-[30px] md:grid-cols-2 2xl:gap-5 2xl:border-t-0 2xl:border-l 2xl:py-[60px] 2xl:ps-[60px] 2xl:pe-0"
    >
      <FeatureCard
        v-for="(feature, index) in futureTechFeatures"
        :key="index"
        :title="feature.title"
        :subTitle="feature.subTitle"
      />
    </div>
  </div>
  <div
    class="wrapper 3xl:gap-20 border-dark-15 flex flex-col border-t 2xl:flex-row 2xl:items-center 2xl:gap-[60px]"
  >
    <div
      class="3xl:w-[520px] 3xl:gap-[50px] flex flex-col gap-5 py-[50px] 2xl:w-[415px] 2xl:gap-10 2xl:p-0"
    >
      <img
        :src="researchInsightsIcon"
        alt="section-icon"
        class="3xl:size-20 size-[50px] lg:size-[60px]"
      />
      <div class="3xl:gap-4 flex flex-col gap-1.5 2xl:gap-2.5">
        <h2
          class="font-kumbh 3xl:text-[40px] text-2xl leading-[150%] font-semibold tracking-[-0.03em] 2xl:text-3xl"
        >
          Research Insights Blogs
        </h2>
        <p class="3xl:text-lg text-grey-60 text-sm leading-[150%] tracking-[-0.03em] 2xl:text-base">
          Dive deep into future technology concepts with our research section.
        </p>
      </div>
    </div>
    <div
      class="3xl:py-20 3xl:ps-20 3xl:gap-[30px] border-dark-15 grid grid-cols-1 gap-2.5 border-t px-4 py-[30px] md:grid-cols-2 2xl:gap-5 2xl:border-t-0 2xl:border-l 2xl:py-[60px] 2xl:ps-[60px] 2xl:pe-0"
    >
      <FeatureCard
        v-for="(feature, index) in researchInsightsFeatures"
        :key="index"
        :title="feature.title"
        :subTitle="feature.subTitle"
      />
    </div>
  </div>
</template>
