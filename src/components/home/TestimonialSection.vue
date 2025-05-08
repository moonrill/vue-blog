<script setup>
import avatar1 from '@/assets/Imageavatar-1.jpg'
import avatar2 from '@/assets/Imageavatar-2.jpg'
import avatar3 from '@/assets/Imageavatar-3.jpg'
import avatar4 from '@/assets/Imageavatar-4.jpg'
</script>
<template>
  <HeadBanner
    :showButton="true"
    buttonLabel="View All Testimonials"
    badgeLabel="What Our Readers Say"
    bannerTitle="Real Words from Real Readers"
  />
  <div class="wrapper border-dark-15 grid border-b lg:grid-cols-3">
    <TestimonialCard
      :avatar="avatar1"
      name="Sarah Thompson"
      location="San Francisco, USA"
      review="The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
      class="lg:pr-10 2xl:pr-[50px]"
    />
    <TestimonialCard
      :avatar="avatar2"
      name="Raj Patel"
      location="Mumbai, India"
      review="The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis."
      class="lg:border-x lg:px-10 2xl:px-[50px]"
    />
    <TestimonialCard
      :avatar="avatar3"
      name="Emily Adams"
      location="London, UK"
      review="The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care."
      class="lg:pl-10 2xl:pl-[50px]"
    />
  </div>
  <div class="wrapper border-dark-15 grid border-b lg:grid-cols-3">
    <TestimonialCard
      :avatar="avatar4"
      name="Alan Jackson"
      location="Houston, USA"
      review="The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view."
      class="lg:pr-10 2xl:pr-[50px]"
    />
    <TestimonialCard
      :avatar="avatar5"
      name="Jessica Miller"
      location="Boston, USA"
      review="The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics."
      class="lg:border-x lg:px-10 2xl:px-[50px]"
    />
    <TestimonialCard
      :avatar="avatar6"
      name="Diego Lopez"
      location="Barcelona, Spain"
      review="The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability."
      class="lg:pl-10 2xl:pl-[50px]"
    />
  </div>
</template>
