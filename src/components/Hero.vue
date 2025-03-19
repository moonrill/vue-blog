<script setup>
import abstractImgUrl from '@/assets/abstract-2.png'
import avatar1 from '@/assets/Imageavatar-1.jpg'
import avatar2 from '@/assets/Imageavatar-2.jpg'
import avatar3 from '@/assets/Imageavatar-3.jpg'
import avatar4 from '@/assets/Imageavatar-4.jpg'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
</script>
<template>
  <div class="flex flex-col xl:flex-row border border-dark-15">
    <div
      class="flex flex-col gap-[30px] xl:gap-[100px] xl:basis-[60%] 2xl:basis-[60%] 3xl:basis-[58%]"
    >
      <div
        class="pt-10 md:pt-[100px] 3xl:pt-[150px] px-4 2xl:px-0 2xl:ps-20 3xl:ps-[162px] 2xl:pe-10 3xl:pe-[50px]"
      >
        <div class="flex flex-col gap-3.5 2xl:gap-5 3xl:gap-[30px]">
          <h2
            class="font-kumbh font-medium dark:text-dark-40 leading-[120%] tracking-[-0.03em] text-lg md:text-[22px] 3xl:text-3xl"
          >
            Your Journey to Tomorrow Begins Here
          </h2>
          <div class="flex flex-col gap-2.5 3xl:gap-5">
            <h1
              class="font-kumbh font-medium leading-[120%] tracking-[-0.03em] text-3xl xl:text-5xl 2xl:text-[55px] 3xl:text-[70px]"
            >
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <h3
              class="text-sm 2xl:text-base 3xl:text-lg text-grey-50 leading-[150%] tracking-[-0.03em]"
            >
              Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a
              world where machines think, learn, and reshape the future.
              <div class="hidden 3xl:inline">
                Join us on this visionary expedition into the heart of AI.
              </div>
            </h3>
          </div>
        </div>
        <div></div>
      </div>
      <div class="grid grid-cols-3">
        <div
          class="flex items-center border border-b-0 border-dark-15 px-4 2xl:ps-20 3xl:ps-[162px]"
        >
          <div class="py-5 2xl:py-[30px] 3xl:gap-2.5 gap-0.5 flex flex-col">
            <h1 class="font-semibold text-2xl 2xl:text-3xl 3xl:text-[40px] leading-[150%]">
              300<span class="text-yellow-55">+</span>
            </h1>
            <p class="text-sm 3xl:text-lg text-grey-60 leading-[150%]">Resources available</p>
          </div>
        </div>
        <div class="flex items-center border border-b-0 border-dark-15 px-4 2xl:px-10">
          <div class="py-5 2xl:py-[30px] 3xl:gap-2.5 gap-0.5 flex flex-col">
            <h1 class="font-semibold text-2xl 2xl:text-3xl 3xl:text-[40px] leading-[150%]">
              12k<span class="text-yellow-55">+</span>
            </h1>
            <p class="text-sm 3xl:text-lg text-grey-60 leading-[150%]">Total Downloads</p>
          </div>
        </div>
        <div class="flex items-center border border-b-0 border-dark-15 px-4 2xl:px-10">
          <div class="py-5 2xl:py-[30px] 3xl:gap-2.5 gap-0.5 flex flex-col">
            <h1 class="font-semibold text-2xl 2xl:text-3xl 3xl:text-[40px] leading-[150%]">
              10k<span class="text-yellow-55">+</span>
            </h1>
            <p class="text-sm 3xl:text-lg text-grey-60 leading-[150%]">Active Users</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative w-full xl:basis-[40%] 2xl:basis-[40%] 3xl:basis-[42%] 2xl:border-l 2xl:border-dark-15 px-10 pt-[100px] md:pt-[150px] xl:pt-[250px] pb-10"
    >
      <div class="flex flex-col gap-5 xl:gap-[30px] relative">
        <div class="relative z-50 flex p-2 bg-dark-08 border border-dark-15 w-fit rounded-full">
          <img
            :src="avatar1"
            alt="avatar"
            class="w-[50px] h-[50px] 3xl:w-[60px] 3xl:h-[60px] rounded-full border-2 border-dark-40"
          />
          <img
            :src="avatar2"
            alt="avatar"
            class="w-[50px] h-[50px] 3xl:w-[60px] 3xl:h-[60px] rounded-full border-2 border-dark-40 -ml-3"
          />
          <img
            :src="avatar3"
            alt="avatar"
            class="w-[50px] h-[50px] 3xl:w-[60px] 3xl:h-[60px] rounded-full border-2 border-dark-40 -ml-3"
          />
          <img
            :src="avatar4"
            alt="avatar"
            class="w-[50px] h-[50px] 3xl:w-[60px] 3xl:h-[60px] rounded-full border-2 border-dark-40 -ml-3"
          />
        </div>

        <div class="flex flex-col gap-1">
          <h4 class="font-medium text-lg leading-[150%] tracking-[-0.03em] xl:text-2xl">
            Explore 1000+ resources
          </h4>
          <p class="text-sm xl:text-lg text-grey-60">
            Over 1,000 articles on emerging tech trends and breakthroughs.
          </p>
        </div>

        <router-link
          to="/"
          class="flex w-full md:w-fit border border-dark-15 rounded-lg px-5 py-3.5 justify-center items-center gap-1 text-sm xl:text-lg text-grey-60 hover:bg-dark-15"
        >
          <div>Explore Resources</div>
          <ArrowUpRightIcon class="size-5 dark:text-yellow-55 3xl:size-6" />
        </router-link>
      </div>

      <img
        :src="abstractImgUrl"
        alt="abstract"
        class="w-[400px] h-[286px] md:w-[622px] md:h-[422px] 3xl:w-[894px] 3xl:h-[606px] absolute top-0 left-[-20px] xl:left-0 z-[-10]"
      />
    </div>
  </div>
</template>
<style lang=""></style>
