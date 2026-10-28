<template>
  <div class="games-container">
    <section
      v-for="(game, index) in games"
      :key="game.id"
      class="game-hero"
    >
      <img
        class="hero-image"
        :src="game.image.src"
        :srcset="game.image.srcset"
        sizes="100vw"
        alt=""
        :loading="index === 0 ? 'eager' : 'lazy'"
        :fetchpriority="index === 0 ? 'high' : 'auto'"
        decoding="async"
      />
      <div class="overlay"></div>
      <div class="hero-content">
        <h1 class="game-title">{{ game.title }}</h1>
        <p class="game-description">{{ game.description }}</p>
        <div class="button-group">
          <a
            v-for="(btn, i) in game.buttons"
            :key="i"
            class="action-button"
            :href="btn.link"
            target="_blank"
            rel="noopener"
          >
            {{ btn.title }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import runner960 from '@/assets/optimized/runner-banner-960.webp';
import runner1920 from '@/assets/optimized/runner-banner-1920.webp';
import bossBreaker960 from '@/assets/optimized/boss_breaker_header-960.webp';
import bossBreaker1920 from '@/assets/optimized/boss_breaker_header-1920.webp';
import owlchemist960 from '@/assets/optimized/owlchemist-960.webp';
import owlchemist1920 from '@/assets/optimized/owlchemist-1920.webp';
import slimecorp640 from '@/assets/optimized/slimecorp-640.webp';

const responsive = (small, smallW, large, largeW) => ({
  src: large,
  srcset: `${small} ${smallW}w, ${large} ${largeW}w`,
});

export default {
  name: "Games",
  data() {
    return {
      games: [
        {
          id: 1,
          title: "Runner Overdrive",
          description: "Keep the world running, one delivery at a time.",
          image: responsive(runner960, 960, runner1920, 1920),
          buttons: [
            {
              title: "Wishlist on Steam",
              link: "https://store.steampowered.com/app/4507450/Runner_Overdrive/",
            },
            {
              title: "Itch.io",
              link: "https://fifthedgestudios.itch.io/runner-overdrive",
            },
          ],
        },
        {
          id: 2,
          title: "Boss Breaker",
          description:
            "A twin-stick beat 'em up about punching everything in your way in order to overthrow your corporate overlord.",
          image: responsive(bossBreaker960, 960, bossBreaker1920, 1920),
          buttons: [
            {
              title: "Steam",
              link: "https://store.steampowered.com/app/2869030/Boss_Breaker/",
            },
            {
              title: "GX.Games",
              link: "https://gx.games/games/5t65sb/boss-breaker/tracks/d7b6bbc6-99b8-497b-a300-28548874c67e/",
            },
          ],
        },
        {
          id: 3,
          title: "Owlchemist",
          description:
            "A short precision-platformer made for the 2024 Pirate Software Game Jam.",
          image: responsive(owlchemist960, 960, owlchemist1920, 1920),
          buttons: [
            {
              title: "Itch.io",
              link: "https://fifthedgestudios.itch.io/owlchemist",
            },
          ],
        },
        {
          id: 4,
          title: "Slime Corp",
          description:
            "A simple top-down shooter based around collecting slime.",
          image: { src: slimecorp640, srcset: null },
          buttons: [
            {
              title: "Steam",
              link: "https://store.steampowered.com/app/1949750/Slime_Corp/",
            },
            {
              title: "Itch.io",
              link: "https://fifthedgestudios.itch.io/slime-corp",
            },
            {
              title: "GX.Games",
              link: "https://gx.games/games/iygssc/slime-corp/",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.games-container {
  overflow-x: hidden;
}

.game-hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  text-align: center;
  color: #fff;
  max-width: 600px;
  padding: 0 1.5rem;
  opacity: 0;
  animation: fadeIn 2s forwards;
  animation-delay: 0.1s;
}

.game-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.game-description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.action-button {
  padding: 1rem 2rem;
  background: var(--secondary-color);
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background 0.3s;
}

.action-button:hover {
  background: var(--secondary-hover);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
