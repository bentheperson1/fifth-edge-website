<template>
  <div>
    <div class="page-header">
      <SectionLabel text="Catalog" />

      <div class="page-title">
        OUR GAMES
      </div>

      <div class="page-subtitle">
        Action-Driven — Arcade-Inspired — Made with GameMaker
      </div>
    </div>

    <GameFeature
      v-for="game in games"
      :key="game.id"
      :game="game"
    />
  </div>
</template>

<script setup>
import games from '../data/games'

import SectionLabel from '../components/SectionLabel.vue'
import GameFeature from '../components/GameFeature.vue'
</script>
