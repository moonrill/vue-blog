<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app-wrapper">
    <div class="app">
      <Navbar />
      <div class="pt-36 md:pt-[120px]">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
