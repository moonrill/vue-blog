<script setup>
import Hero from '@/components/home/Hero.vue'
import Navbar from '@/components/Navbar.vue'
import HeadBanner from '@/components/ui/HeadBanner.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
import futureTechBlogIcon from '@/assets/icons/future-tech-blog-icon.png'
import researchInsightsIcon from '@/assets/icons/research-insights-blog-icon.png'
import FeatureSection from '@/components/home/FeatureSection.vue'
import ButtonSlider from '@/components/ButtonSlider.vue'
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
</template>
