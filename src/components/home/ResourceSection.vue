<script setup>
import avatar1 from '@/assets/Imageavatar-1.jpg'
import avatar2 from '@/assets/Imageavatar-2.jpg'
import avatar3 from '@/assets/Imageavatar-3.jpg'
import avatar4 from '@/assets/Imageavatar-4.jpg'
import { ArrowUpRightIcon, EyeIcon } from '@heroicons/vue/24/outline'
import AvatarGroup from '../AvatarGroup.vue'
import HeadBanner from '../ui/HeadBanner.vue'

const avatarLinks = [avatar1, avatar2, avatar3, avatar4]
</script>
<template>
  <HeadBanner
    :showButton="true"
    buttonLabel="View All Resources"
    badgeLabel="Your Gateway to In-Depth Information"
    bannerTitle="Unlock Valuable Knowledge with FutureTech's Resources"
  />
  <div
    class="wrapper lg:border-b-dark-15 flex flex-col gap-10 pt-10 lg:flex-row lg:items-center lg:border-b lg:pt-0 xl:gap-[60px]"
  >
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-6">
        <img
          src="../../assets/icons/e-books-icon.png"
          alt="section-icon"
          class="3xl:size-20 size-[50px] lg:size-[60px]"
        />
        <h2
          class="font-kumbh 3xl:text-[40px] text-2xl leading-[150%] font-semibold tracking-[-0.03em] 2xl:text-3xl"
        >
          EBooks
        </h2>
        <p class="text-grey-60 text-sm leading-[150%] tracking-[-0.03em] sm:text-base 2xl:text-lg">
          Explore our collection of ebooks covering a wide spectrum of future technology topics.
        </p>
        <router-link
          to="/"
          class="bg-dark-10 border-dark-15 hover:border-dark-25 text-grey-60 hover:bg-dark-15 flex w-full items-center justify-center gap-1 rounded-lg border px-5 py-[18px] text-sm whitespace-nowrap lg:max-w-[415px] xl:max-w-[520px] 2xl:text-base"
        >
          <p>Download Ebooks Now</p>
          <ArrowUpRightIcon class="dark:text-yellow-55 3xl:size-6 size-5" />
        </router-link>
      </div>
      <div
        class="bg-dark-10 border-dark-15 flex w-fit items-center justify-center gap-[30px] rounded-lg border p-5 2xl:p-[30px]"
      >
        <div class="flex flex-col gap-0.5">
          <p class="text-grey-60 text-sm lg:text-base">Dowloaded By</p>
          <p class="text-lg font-semibold text-white lg:text-xl">10k + Users</p>
        </div>
        <AvatarGroup
          :avatarLinks="avatarLinks"
          class="rounded-xl"
          imgClass="h-[40px] w-[40px] 2xl:w-[50px] 2xl:h-[50px]"
        />
      </div>
    </div>
    <div
      class="border-dark-15 flex flex-col gap-6 border-t py-10 lg:border-t-0 lg:border-l-1 lg:pl-10 xl:py-[60px] xl:pl-[60px] 2xl:gap-[30px]"
    >
      <div class="flex flex-col gap-2.5">
        <p class="text-lg font-semibold text-white lg:text-xl">Variety of Topics</p>
        <p class="text-grey-60 text-sm leading-[150%] tracking-[-0.03em] sm:text-base 2xl:text-lg">
          Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space
          exploration (25%), and biotechnology (15%).
        </p>
      </div>
      <img
        src="../../assets/ebooks-resource.jpg"
        alt="Resource Image"
        class="h-[170px] rounded-[10px] object-cover object-[30%_40%] md:h-[250px] 2xl:h-[300px]"
      />
      <div class="flex flex-col gap-4 lg:gap-6">
        <div class="flex w-full flex-col gap-4 lg:flex-row">
          <div
            class="bg-dark-10 border-dark-15 flex flex-col justify-center gap-1 rounded-lg border p-5"
          >
            <p class="text-grey-60 text-base">Total Ebooks</p>
            <p class="text-lg font-semibold text-white">Over 100 ebooks</p>
          </div>
          <div
            class="bg-dark-10 border-dark-15 flex grow items-center justify-between gap-1 rounded-lg border p-5 lg:flex"
          >
            <div>
              <p class="text-grey-60 text-base">Download Formats</p>
              <p class="text-lg font-semibold text-white">PDF format for access.</p>
            </div>
            <router-link
              :to="link"
              class="border-dark-15 bg-dark-08 hover:bg-dark-15 hover:border-dark-25 flex items-center gap-1 rounded-lg border px-5 py-3.5 2xl:gap-2.5 2xl:px-6 2xl:py-[18px]"
            >
              <div class="text-grey-60 text-sm 2xl:text-base">Preview</div>
              <EyeIcon class="dark:text-yellow-55 3xl:size-6 size-5" />
            </router-link>
          </div>
        </div>
        <div
          class="bg-dark-10 border-dark-15 flex flex-col justify-center gap-1 rounded-lg border p-5"
        >
          <p class="text-grey-60 text-base">Average Author Expertise</p>
          <p class="text-lg font-semibold text-white">
            Ebooks are authored by renowned experts with an average of 15 years of experience
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="wrapper lg:border-b-dark-15 flex flex-col gap-10 pt-10 lg:flex-row lg:items-center lg:border-b lg:pt-0 xl:gap-[60px]"
  >
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-6">
        <img
          src="../../assets/icons/e-books-icon.png"
          alt="section-icon"
          class="3xl:size-20 size-[50px] lg:size-[60px]"
        />
        <h2
          class="font-kumbh 3xl:text-[40px] text-2xl leading-[150%] font-semibold tracking-[-0.03em] 2xl:text-3xl"
        >
          EBooks
        </h2>
        <p class="text-grey-60 text-sm leading-[150%] tracking-[-0.03em] sm:text-base 2xl:text-lg">
          Explore our collection of ebooks covering a wide spectrum of future technology topics.
        </p>
        <router-link
          to="/"
          class="bg-dark-10 border-dark-15 hover:border-dark-25 text-grey-60 hover:bg-dark-15 flex w-full items-center justify-center gap-1 rounded-lg border px-5 py-[18px] text-sm whitespace-nowrap lg:max-w-[415px] xl:max-w-[520px] 2xl:text-base"
        >
          <p>Download Ebooks Now</p>
          <ArrowUpRightIcon class="dark:text-yellow-55 3xl:size-6 size-5" />
        </router-link>
      </div>
      <div
        class="bg-dark-10 border-dark-15 flex w-fit items-center justify-center gap-[30px] rounded-lg border p-5 2xl:p-[30px]"
      >
        <div class="flex flex-col gap-0.5">
          <p class="text-grey-60 text-sm lg:text-base">Dowloaded By</p>
          <p class="text-lg font-semibold text-white lg:text-xl">10k + Users</p>
        </div>
        <AvatarGroup
          :avatarLinks="avatarLinks"
          class="rounded-xl"
          imgClass="h-[40px] w-[40px] 2xl:w-[50px] 2xl:h-[50px]"
        />
      </div>
    </div>
    <div
      class="border-dark-15 flex flex-col gap-6 border-t py-10 lg:border-t-0 lg:border-l-1 lg:pl-10 xl:py-[60px] xl:pl-[60px] 2xl:gap-[30px]"
    >
      <div class="flex flex-col gap-2.5">
        <p class="text-lg font-semibold text-white lg:text-xl">Variety of Topics</p>
        <p class="text-grey-60 text-sm leading-[150%] tracking-[-0.03em] sm:text-base 2xl:text-lg">
          Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space
          exploration (25%), and biotechnology (15%).
        </p>
      </div>
      <img
        src="../../assets/ebooks-resource.jpg"
        alt="Resource Image"
        class="h-[170px] rounded-[10px] object-cover object-[30%_40%] md:h-[250px] 2xl:h-[300px]"
      />
      <div class="flex flex-col gap-4 lg:gap-6">
        <div class="flex w-full flex-col gap-4 lg:flex-row">
          <div
            class="bg-dark-10 border-dark-15 flex flex-col justify-center gap-1 rounded-lg border p-5"
          >
            <p class="text-grey-60 text-base">Total Ebooks</p>
            <p class="text-lg font-semibold text-white">Over 100 ebooks</p>
          </div>
          <div
            class="bg-dark-10 border-dark-15 flex grow items-center justify-between gap-1 rounded-lg border p-5 lg:flex"
          >
            <div>
              <p class="text-grey-60 text-base">Download Formats</p>
              <p class="text-lg font-semibold text-white">PDF format for access.</p>
            </div>
            <router-link
              :to="link"
              class="border-dark-15 bg-dark-08 hover:bg-dark-15 hover:border-dark-25 flex items-center gap-1 rounded-lg border px-5 py-3.5 2xl:gap-2.5 2xl:px-6 2xl:py-[18px]"
            >
              <div class="text-grey-60 text-sm 2xl:text-base">Preview</div>
              <EyeIcon class="dark:text-yellow-55 3xl:size-6 size-5" />
            </router-link>
          </div>
        </div>
        <div
          class="bg-dark-10 border-dark-15 flex flex-col justify-center gap-1 rounded-lg border p-5"
        >
          <p class="text-grey-60 text-base">Average Author Expertise</p>
          <p class="text-lg font-semibold text-white">
            Ebooks are authored by renowned experts with an average of 15 years of experience
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
