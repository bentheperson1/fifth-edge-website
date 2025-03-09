<template>
  <div class="games-container">
    <section
      v-for="game in games"
      :key="game.id"
      class="game-hero"
      :style="{ backgroundImage: `url(${game.image})` }"
    >
      <div class="overlay"></div>
      <div class="hero-content">
        <h1 class="game-title">{{ game.title }}</h1>
        <p class="game-description">{{ game.description }}</p>
        <div class="button-group">
          <a
            v-for="(btn, index) in game.buttons"
            :key="index"
            class="action-button"
            :href="btn.link"
            target="_blank"
          >
            {{ btn.title }}
          </a>
        </div>
      </div>
    </section>

    <div class="gallery">
      <h2>Screenshot Gallery</h2>
      <div class="images">
        <img
          v-for="(screenshot, index) in screenshots"
          :key="index"
          :src="screenshot"
          alt="Screenshot"
          @click="openFullscreen(screenshot)"
        />
      </div>
    </div>

    <!-- Fullscreen Modal -->
    <div class="fullscreen-modal" v-if="fullscreenImage" @click="closeFullscreen">
      <img :src="fullscreenImage" alt="Fullscreen Screenshot" />
      <button class="close-button" @click.stop="closeFullscreen">×</button>
    </div>
  </div>
</template>

<script>
import bossBreakerHeader from '@/assets/images/boss_breaker_header.png';
import owlchemistImage from '@/assets/images/owlchemist.png';
import slimecorpImage from '@/assets/images/slimecorp.png';
import pulsejumperImage from '@/assets/images/pulsejumper.jpg';

// Import screenshot images using ES module syntax
import bb01 from '@/assets/images/bb-01.png';
import pj04 from '@/assets/images/pj-04.png';
import bb02 from '@/assets/images/bb-02.png';
import owl01 from '@/assets/images/owl-01.png';
import bb03 from '@/assets/images/bb-03.png';
import pj01 from '@/assets/images/pj-01.png';
import sc01 from '@/assets/images/sc-01.png';
import bb06 from '@/assets/images/bb-06.png';
import sc02 from '@/assets/images/sc-02.png';
import owl02 from '@/assets/images/owl-02.png';
import pj03 from '@/assets/images/pj-03.png';
import bb04 from '@/assets/images/bb-04.png';
import owl04 from '@/assets/images/owl-04.png';
import sc03 from '@/assets/images/sc-03.png';
import bb05 from '@/assets/images/bb-05.png';
import pj02 from '@/assets/images/pj-02.png';

export default {
  name: "Games",
  data() {
    return {
      games: [
        {
          id: 1,
          title: "Boss Breaker",
          description:
            "A twin-stick beat 'em up about punching everything in your way in order to overthrow your corporate overlord.",
          image: bossBreakerHeader,
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
          id: 2,
          title: "Owlchemist",
          description:
            "A short precision-platformer made for the 2024 Pirate Software Game Jam.",
          image: owlchemistImage,
          buttons: [
            {
              title: "Itch.io",
              link: "https://fifthedgestudios.itch.io/owlchemist",
            },
          ],
        },
        {
          id: 3,
          title: "Slime Corp",
          description:
            "A simple top-down shooter based around collecting slime.",
          image: slimecorpImage,
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
        {
          id: 4,
          title: "Pulse Jumper",
          description: "Jump with a shotgun.",
          image: pulsejumperImage,
          buttons: [
            {
              title: "Steam",
              link: "https://store.steampowered.com/app/1397760/Pulse_Jumper/",
            },
          ],
        },
      ],
      fullscreenImage: null,
      screenshots: [
        bb01,
        pj04,
        bb02,
        owl01,
        bb03,
        pj01,
        sc01,
        bb06,
        sc02,
        owl02,
        pj03,
        bb04,
        owl04,
        sc03,
        bb05,
        pj02,
      ],
    };
  },
  methods: {
    openFullscreen(image) {
      this.fullscreenImage = image;
    },
    closeFullscreen() {
      this.fullscreenImage = null;
    },
  },
};
</script>

<style scoped>
.gallery {
  padding: 2rem 1rem;
  text-align: center;
  background-color: var(--background-color);
}

.gallery h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.images {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: center;
}

.images img {
  width: calc(25% - 1rem);
  border-radius: 12px;
  transition: transform 0.3s;
  cursor: pointer;
}

.images img:hover {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .images img {
    width: calc(50% - 1rem);
  }
}

@media (max-width: 800px) {
  .images img {
    width: calc(100% - 1rem);
  }
}

.games-container {
  overflow-x: hidden;
}

.game-hero {
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: #e03e00;
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

.fullscreen-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.fullscreen-modal img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
}
</style>
