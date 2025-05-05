<script setup>
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'

const route = useRoute()
</script>

<template>
  <div class="app-wrapper">
    <div class="app">
      <Navbar v-if="!route.meta.hideNavbar" />
      <router-view />
    </div>
  </div>
</template>

<style lang="scss"></style>
