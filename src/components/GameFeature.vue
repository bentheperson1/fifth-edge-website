<template>
  <section class="game-feature" :id="game.slug">
    <div class="game-feat-visual">
      <div class="big-title" v-html="formattedTitle"></div>

      <div class="game-logo">
        <div class="game-logo-name">
          {{ game.title }}
        </div>
      </div>
    </div>

    <div class="game-feat-info">
      <div class="game-feat-tags">
        <span
          v-for="tag in game.tags"
          :key="tag"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>

      <div class="game-feat-title" v-html="formattedTitle"></div>

      <div class="game-feat-body">
        {{ game.body }}
      </div>

      <div class="game-feat-details">
        <div class="detail-item">
          <div class="detail-label">Platform</div>
          <div class="detail-val">{{ game.platform }}</div>
        </div>

        <div class="detail-item">
          <div class="detail-label">Released</div>
          <div class="detail-val">{{ game.released }}</div>
        </div>

        <div class="detail-item">
          <div class="detail-label">Details</div>
          <div class="detail-val">{{ game.extra }}</div>
        </div>
      </div>

      <div class="game-feat-actions">
        <a
          v-if="game.steam"
          :href="game.steam"
          target="_blank"
          class="btn-primary"
        >
          Steam
        </a>

        <a
          :href="game.itch"
          target="_blank"
          class="btn-outline"
        >
          itch.io
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  game: Object
})

const formattedTitle = computed(() => {
  return props.game.shortTitle.replace(/\n/g, '<br>')
})
</script>
