<template>
  <div>
    <HeroSection />

    <section class="games-strip">
      <SectionLabel text="Games" />

      <div class="games-grid">
        <GameCard
          v-for="game in games"
          :key="game.id"
          :game="game"
        />
      </div>
    </section>

    <section class="studio-section">
      <section style="padding: 5rem 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; border-top: 1px solid var(--gray-mid); align-items: center;">
        <div>
          <div class="section-label">Who We Are</div>
          <div style="font-family: var(--font-display); font-size: clamp(2rem,4vw,3.5rem); letter-spacing: 0.04em; line-height: 1.1; color: var(--white);">INDEPENDENT.<br><span style="color:var(--red);">RELENTLESS.</span><br>EXPERIMENTAL.</div>
        </div>
        <div>
          <p style="font-size: 0.95rem; line-height: 1.8; color: var(--gray-light);">Fifth Edge Studios is a small independent game studio building arcade-inspired, action-heavy games with personality. We build the games we want to play — tight, fast, and full of secrets.</p>
          <button class="btn-outline" style="margin-top: 1.5rem;" onclick="showPage('about')">Learn More</button>
        </div>
      </section>
    </section>

    <section class="social-section">
      <SectionLabel text="Find Us Online" />

      <div class="social-grid">
        <SocialCard
          v-for="social in socials"
          :key="social.name"
          :social="social"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import games from '../data/games'
import socials from '../data/socials'

import HeroSection from '../components/HeroSection.vue'
import SectionLabel from '../components/SectionLabel.vue'
import GameCard from '../components/GameCard.vue'
import SocialCard from '../components/SocialCard.vue'
</script>
