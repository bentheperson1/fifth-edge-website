<template>
  <RouterLink :to="'/games#' + game.slug" class="game-card">
    <div class="game-num">
      {{ String(game.id).padStart(2, '0') }}
    </div>

    <div class="game-genre">
      {{ game.genre }}
    </div>

    <div class="game-title">
      {{ game.title }}
    </div>

    <div class="game-desc">
      {{ game.description }}
    </div>

    <div class="game-link">
      See Details
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  game: Object
})
</script>
