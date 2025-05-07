<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'

defineProps({
  authorAvatar: String,
  authorName: String,
  title: String,
  description: String,
  postDate: String,
  postCategory: String,
  postType: String,
  link: String,
  likeCount: String,
  commentCount: String,
  shareCount: String,
  isLiked: { type: Boolean, default: false },
})
</script>
<template>
  <div
    class="3xl:gap-[50px] border-dark-15 wrapper flex flex-col gap-[30px] border-b py-10 lg:flex-row 2xl:gap-[40px]"
  >
    <div class="flex h-fit items-center justify-between lg:w-[305px] 2xl:w-[390px]">
      <div class="flex items-center gap-2 lg:gap-2.5 xl:gap-4">
        <img
          :src="authorAvatar"
          alt="Avatar"
          class="3xl:h-20 3xl:w-20 h-[60px] w-[60px] rounded-full"
        />
        <div>
          <h4 class="text-lg leading-[150%] font-semibold tracking-[-0.03em]">{{ authorName }}</h4>
          <p class="text-grey-60 text-sm leading-[150%] tracking-[-0.03em] 2xl:text-base">
            {{ postCategory }}
          </p>
        </div>
      </div>
      <router-link
        :to="link"
        class="border-dark-15 bg-dark-08 flex h-fit items-center justify-center gap-1 rounded-lg border px-5 py-3.5 lg:hidden"
      >
        <div class="text-grey-60 text-sm">View {{ postType }}</div>
        <ArrowUpRightIcon class="dark:text-yellow-55 3xl:size-6 size-5" />
      </router-link>
    </div>
    <div class="flex w-full items-center justify-between xl:gap-[40px] 2xl:gap-[50px]">
      <div class="3xl:gap-[30px] flex flex-col gap-5 2xl:gap-6">
        <h4 class="text-grey-60 font-semibold 2xl:text-lg">{{ postDate }}</h4>
        <div class="3xl:gap-2.5 flex flex-col gap-1 2xl:gap-1.5">
          <h3 class="3xl:text-[26px] text-lg font-semibold 2xl:text-[22px]">
            {{ title }}
          </h3>
          <p class="text-grey-60 3xl:text-lg text-sm 2xl:text-base">
            {{ description }}
          </p>
        </div>
        <div class="flex gap-2 2xl:gap-2.5">
          <LikeButton :count="likeCount" :liked="isLiked" />
          <CommentButton :count="commentCount" />
          <ShareButton :count="shareCount" />
        </div>
      </div>
      <router-link
        :to="link"
        class="border-dark-15 bg-dark-08 hover:bg-dark-15 hover:border-dark-25 hidden h-fit items-center justify-center gap-1 rounded-lg border px-5 py-3.5 lg:flex 2xl:gap-2.5 2xl:px-6 2xl:py-[18px]"
      >
        <div class="text-grey-60 2xl:text-base">View {{ postType }}</div>
        <ArrowUpRightIcon class="dark:text-yellow-55 3xl:size-6 size-5" />
      </router-link>
    </div>
  </div>
</template>
