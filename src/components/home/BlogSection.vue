<script setup>
import HeadBanner from '@/components/ui/HeadBanner.vue'

import ButtonSlider from '../ButtonSlider.vue'
import PostCard from '../PostCard.vue'
</script>
<template>
  <HeadBanner
    :showButton="true"
    buttonLabel="View All Blogs"
    badgeLabel="A Knowledge Treasure Trove"
    bannerTitle="Explore FutureTech's In-Depth Blog Posts"
  />
  <ButtonSlider />
  <PostCard
    authorAvatar="https://i.pravatar.cc/600"
    authorName="John Techson"
    postCategory="Quantum Computing"
    postDate="October 15,2023"
    postType="Blog"
    title="The Quantum Leap in Computing"
    description="Explore the revolution in quantum computing, its applications, and its potential impact on various industries."
    likeCount="1.2k"
    commentCount="50"
    shareCount="18"
    link="/"
    :isLiked="true"
  />
  <PostCard
    authorAvatar="https://i.pravatar.cc/600"
    authorName="Sarah Ethicist"
    postCategory="AI Ethics"
    postDate="November 5, 2023"
    postType="Blog"
    title="The Ethical Dilemmas of AI"
    description="A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency."
    likeCount="32k"
    commentCount="72"
    shareCount="18"
    link="/"
  />
  <PostCard
    authorAvatar="https://i.pravatar.cc/600"
    authorName="Astronomer X"
    postCategory="Space Exploration"
    postDate="December 10, 2023"
    postType="Blog"
    title="The Mars Colonization Challenge"
    description="Exploring the technical and logistical challenges of human colonization on Mars."
    likeCount="20k"
    commentCount="31"
    shareCount="12"
    link="/"
  />
</template>
