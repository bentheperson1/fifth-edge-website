<template>
  <div>
    <AppNavbar />

    <main class="content">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>
