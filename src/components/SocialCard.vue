<template>
  <a :href="social.url" target="_blank" class="social-card">
    <div class="social-platform">
      {{ social.platform }}
    </div>

    <div class="social-name">
      {{ social.name }}
    </div>

    <div class="social-handle">
      {{ social.handle }}
    </div>
  </a>
</template>

<script setup>
defineProps({
  social: Object
})
</script>
