<script setup>
import abstractImgUrl from '@/assets/abstract-2.png'
import icon1 from '@/assets/icons/icon-1.png'
import icon2 from '@/assets/icons/icon-2.png'
import icon3 from '@/assets/icons/icon-3.png'
import avatar1 from '@/assets/Imageavatar-1.jpg'
import avatar2 from '@/assets/Imageavatar-2.jpg'
import avatar3 from '@/assets/Imageavatar-3.jpg'
import avatar4 from '@/assets/Imageavatar-4.jpg'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import AvatarGroup from '../AvatarGroup.vue'
import StatCard from '../ui/StatCard.vue'
import HeroFeatureCard from './HeroFeatureCard.vue'

const avatarLinks = [avatar1, avatar2, avatar3, avatar4]
</script>
<template>
  <div class="border- border-dark-15 flex flex-col xl:flex-row">
    <div
      class="3xl:basis-[58%] flex flex-col gap-[30px] xl:basis-[60%] xl:gap-[100px] 2xl:basis-[60%]"
    >
      <div
        class="3xl:pt-[240px] 3xl:ps-[162px] 3xl:pe-[50px] px-4 pt-10 md:pt-[100px] 2xl:px-0 2xl:ps-20 2xl:pe-10"
      >
        <div class="3xl:gap-[30px] flex flex-col gap-3.5 2xl:gap-5">
          <h2
            class="font-kumbh dark:text-dark-40 3xl:text-3xl text-lg leading-[120%] font-medium tracking-[-0.03em] md:text-[22px]"
          >
            Your Journey to Tomorrow Begins Here
          </h2>
          <div class="3xl:gap-5 flex flex-col gap-2.5">
            <h1
              class="font-kumbh 3xl:text-[70px] text-3xl leading-[120%] font-medium tracking-[-0.03em] text-wrap xl:text-5xl 2xl:text-[55px]"
            >
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <h3
              class="3xl:text-lg text-grey-50 text-sm leading-[150%] tracking-[-0.03em] 2xl:text-base"
            >
              Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a
              world where machines think, learn, and reshape the future.
              <div class="3xl:inline hidden">
                Join us on this visionary expedition into the heart of AI.
              </div>
            </h3>
          </div>
        </div>
        <div></div>
      </div>
      <div class="border-dark-15 border-t">
        <div class="divide-dark-15 3xl:ps-[162px] grid grid-cols-3 divide-x px-4 2xl:ps-20">
          <StatCard number="300" label="Resources available" :duration="800" />
          <StatCard
            number="12K"
            label="Total Downloads"
            class="ps-5 lg:ps-[50px]"
            :duration="900"
          />
          <StatCard number="10K" label="Active Users" class="ps-5 lg:ps-[50px]" :duration="1000" />
        </div>
      </div>
    </div>
    <div
      class="3xl:basis-[42%] 2xl:border-dark-15 3xl:pt-[300px] relative w-full px-10 pt-[100px] pb-10 md:pt-[150px] xl:basis-[40%] 2xl:basis-[40%] 2xl:border-l 2xl:pt-[250px]"
    >
      <div class="relative flex h-full flex-col justify-end gap-5 xl:gap-[30px]">
        <AvatarGroup
          :avatarLinks="avatarLinks"
          class="border-dark-15 rounded-full border"
          imgClass="h-[50px] w-[50px] 3xl:w-[60px] 3xl:h-[60px]"
        />

        <div class="flex flex-col gap-1">
          <h4 class="text-lg leading-[150%] font-medium tracking-[-0.03em] xl:text-2xl">
            Explore 1000+ resources
          </h4>
          <p class="text-grey-60 text-sm xl:text-lg">
            Over 1,000 articles on emerging tech trends and breakthroughs.
          </p>
        </div>

        <router-link
          to="/"
          class="border-dark-15 3xl:text-lg text-grey-60 hover:bg-dark-15 flex w-full items-center justify-center gap-1 rounded-lg border px-5 py-3.5 text-sm md:w-fit"
        >
          <div>Explore Resources</div>
          <ArrowUpRightIcon class="dark:text-yellow-55 3xl:size-6 size-5" />
        </router-link>
      </div>

      <img
        :src="abstractImgUrl"
        alt="abstract"
        class="3xl:w-[894px] 3xl:h-[606px] absolute top-0 left-[-20px] z-[-10] h-[286px] w-[400px] md:h-[422px] md:w-[622px] xl:left-0"
      />
    </div>
  </div>
  <div class="border-dark-15 w-full border">
    <div
      class="3xl:px-[162px] divide-dark-15 3xl:gap-20 grid grid-cols-1 px-4 lg:divide-x xl:grid-cols-3 xl:gap-[50px] 2xl:px-20"
    >
      <HeroFeatureCard
        title="Latest News Updates"
        subTitle="Stay Current"
        description="Over 1,000 articles published monthly"
        :icon="icon1"
        class="3xl:pe-20 xl:pe-[50px]"
        link="/about"
      />
      <HeroFeatureCard
        title="Expert Contributors"
        subTitle="Trusted Insights"
        description="50+ renowned AI experts on our team"
        :icon="icon2"
        class="3xl:pe-20 xl:pe-[50px]"
        link="/"
      />
      <HeroFeatureCard
        title="Global Readership"
        subTitle="Worldwide Impact"
        description="2 million monthly readers"
        :icon="icon3"
        link="/"
      />
    </div>
  </div>
</template>
<style lang=""></style>
