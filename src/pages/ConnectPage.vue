<template>
  <div>
    <div class="page-header">
      <SectionLabel text="Links" />

      <div class="page-title">
        CONNECT WITH US
      </div>
    </div>

    <div style="padding: 4rem 3rem;">
      <div class="section-label">Storefronts</div>
      <div class="social-grid" style="grid-template-columns: 1fr 1fr;">
        <a href="https://store.steampowered.com/developer/FifthEdgeStudios" target="_blank" class="social-card" style="padding: 2.5rem;">
          <div class="social-platform">Purchase</div>
          <div class="social-name">STEAM</div>
          <div class="social-handle">Fifth Edge Studios on Steam — Boss Breaker, Slime Corp, and more</div>
        </a>
        <a href="https://fifthedgestudios.itch.io/" target="_blank" class="social-card" style="padding: 2.5rem;">
          <div class="social-platform">Purchase / Free Play</div>
          <div class="social-name">ITCH.IO</div>
          <div class="social-handle">fifthedgestudios.itch.io — all games including free browser titles</div>
        </a>
      </div>
    </div>

    <div style="padding: 0 3rem 4rem; border-top: 1px solid var(--gray-mid); padding-top: 4rem;">
      <div class="section-label">Social Media</div>
      <div class="social-grid" style="grid-template-columns: repeat(3, 1fr);">
        <a href="https://www.instagram.com/fifthedgestudios/" target="_blank" class="social-card" style="padding: 2.5rem;">
          <div class="social-platform">Instagram</div>
          <div class="social-name">INSTAGRAM</div>
          <div class="social-handle">@fifthedgestudios</div>
        </a>
        <a href="https://fifth-edge.bsky.social" target="_blank" class="social-card" style="padding: 2.5rem;">
          <div class="social-platform">Bluesky</div>
          <div class="social-name">BLUESKY</div>
          <div class="social-handle">@fifth-edge.bsky.social</div>
        </a>
        <a href="https://gx.games/studios/3a428ae1-53f0-4e93-9dd1-33f64e0e50f5/" target="_blank" class="social-card" style="padding: 2.5rem;">
          <div class="social-platform">GameMaker / Opera GX</div>
          <div class="social-name">GX.GAMES</div>
          <div class="social-handle">Fifth Edge Studios on GX.games</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionLabel from '../components/SectionLabel.vue'
</script>
