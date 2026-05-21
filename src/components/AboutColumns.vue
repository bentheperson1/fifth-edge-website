<template>
  <div class="about-body">
    <div class="about-col">
      <h3>{{ leftTitle }}</h3>
      <p>{{ leftBody }}</p>
    </div>

    <div class="about-col">
      <h3>{{ rightTitle }}</h3>
      <p>{{ rightBody }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  leftTitle: String,
  leftBody: String,
  rightTitle: String,
  rightBody: String
})
</script>
