<script setup>
import avatar1 from '@/assets/Imageavatar-1.jpg'
import avatar2 from '@/assets/Imageavatar-2.jpg'
import avatar3 from '@/assets/Imageavatar-3.jpg'
import avatar4 from '@/assets/Imageavatar-4.jpg'

import HeadBanner from '../ui/HeadBanner.vue'
import ResourceBlock from './ResourceBlock.vue'
import EbooksIcon from '../../assets/icons/e-books-icon.png'
import WhitepapersIcon from '../../assets/icons/whitepapers-icon.png'
import EbooksResourceImage from '../../assets/ebooks-resource.jpg'
import WhitepapersResourceImage from '../../assets/whitepapers-resource.png'

const avatarLinks = [avatar1, avatar2, avatar3, avatar4]
</script>
<template>
  <HeadBanner
    :showButton="true"
    buttonLabel="View All Resources"
    badgeLabel="Your Gateway to In-Depth Information"
    bannerTitle="Unlock Valuable Knowledge with FutureTech's Resources"
  />
  <ResourceBlock
    title="EBooks"
    :icon="EbooksIcon"
    description="Explore our collection of ebooks covering a wide spectrum of future technology topics."
    downloadLink="/"
    downloadCount="10k+ Users"
    :avatarLinks="avatarLinks"
    topicTitle="Variety of Topics"
    topicDescription="Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%)."
    :topicImage="EbooksResourceImage"
    topicCount="Over 100 ebooks"
    previewLink="/"
    authorExpertise="Ebooks are authored by renowned experts with an average of 15 years of experience"
  />
  <ResourceBlock
    title="Whitepapers"
    :icon="WhitepapersIcon"
    description="Dive into comprehensive reports and analyses with our collection of whitepapers."
    downloadLink="/"
    downloadCount="10k + Users"
    :avatarLinks="avatarLinks"
    topicTitle="Variety of Topics"
    topicDescription="Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%),
      AI in healthcare (15%), and renewable energy strategies (30%)."
    :topicImage="WhitepapersResourceImage"
    topicCount="Over 50 whitepapers"
    previewLink="/"
    authorExpertise="Whitepapers are authored by subject matter experts with an average of 20 years of experience."
  />
</template>

<style></style>
