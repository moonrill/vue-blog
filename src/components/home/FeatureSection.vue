<script setup>
import futureTechBlogIcon from '@/assets/icons/future-tech-blog-icon.png'
import researchInsightsIcon from '@/assets/icons/research-insights-blog-icon.png'
import HeadBanner from '@/components/ui/HeadBanner.vue'
import FeatureBlock from './FeatureBlock.vue'

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
  <FeatureBlock
    title="FutureTech Blog"
    subTitle="Stay informed with our blog section dedicated to future technology."
    :icon="futureTechBlogIcon"
    :features="futureTechFeatures"
  />
  <FeatureBlock
    title="Research Insights"
    subTitle="Dive deep into future technology concepts with our research section."
    :icon="researchInsightsIcon"
    :features="researchInsightsFeatures"
  />
</template>
