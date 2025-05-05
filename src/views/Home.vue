<script setup>
import futureTechBlogIcon from '@/assets/icons/future-tech-blog-icon.png'
import researchInsightsIcon from '@/assets/icons/research-insights-blog-icon.png'
import ButtonSlider from '@/components/ButtonSlider.vue'
import FeatureSection from '@/components/home/FeatureSection.vue'
import Hero from '@/components/home/Hero.vue'
import HeadBanner from '@/components/ui/HeadBanner.vue'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import { useTitle } from '@vueuse/core'

useTitle('Home | FutureTech')
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
  <div class="pt-36 md:pt-[120px]">
    <Hero />
    <HeadBanner
      :showButton="false"
      badgeLabel="Unlock the Power of"
      bannerTitle="FutureTech Features"
    />
    <FeatureSection
      :icon="futureTechBlogIcon"
      title="Future Technology Blog"
      description="Stay informed with our blog section dedicated to future technology."
      :features="futureTechFeatures"
    />
    <FeatureSection
      :icon="researchInsightsIcon"
      title="Research Insights Blogs"
      description="Dive deep into future technology concepts with our research section."
      :features="researchInsightsFeatures"
    />
    <HeadBanner
      :showButton="true"
      buttonLabel="View All Blogs"
      badgeLabel="A Knowledge Treasure Trove"
      bannerTitle="Explore FutureTech's In-Depth Blog Posts"
    />
    <ButtonSlider />

    <div class="flex flex-col gap-[30px] px-4 py-10">
      <div class="flex h-fit items-center justify-between">
        <div class="flex items-center gap-2">
          <img
            src="@/assets/Imageavatar-1.jpg"
            alt="Avatar"
            class="h-[60px] w-[60px] rounded-full"
          />
          <div>
            <h4 class="text-lg leading-[150%] font-semibold tracking-[-0.03em]">John Techson</h4>
            <p class="text-grey-60 text-sm leading-[150%] tracking-[-0.03em]">Quantum Computing</p>
          </div>
        </div>
        <router-link
          to="/"
          class="border-dark-15 bg-dark-08 flex h-fit items-center justify-center gap-1 rounded-lg border px-5 py-3.5 lg:hidden"
        >
          <div class="text-grey-60 text-sm">View Blog</div>
          <ArrowUpRightIcon class="dark:text-yellow-55 3xl:size-6 size-5" />
        </router-link>
      </div>
      <div class="flex flex-col gap-5">
        <h4 class="text-grey-60 font-semibold">October 15,2023</h4>
        <div class="flex flex-col gap-1">
          <h3 class="text-lg font-semibold">The Quantum Leap in Computing</h3>
          <p class="text-grey-60 text-sm">
            Explore the revolution in quantum computing, its applications, and its potential impact
            on various industries.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
