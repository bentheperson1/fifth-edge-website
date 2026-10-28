<template>
  <div>
    <section class="home">
      <div class="hero">
        <div class="hero-background">
          <video
            class="video"
            ref="video"
            :poster="poster"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            aria-hidden="true"
          >
            <source src="@/assets/optimized/hero-loop.mp4" type="video/mp4" />
          </video>
          <div class="hero-transition"></div>
        </div>
        <div class="hero-overlay">
          <h1 class="visually-hidden">Fifth Edge Studios</h1>
          <img
            :src="logo"
            alt="Fifth Edge Studios"
            class="hero-logo"
            width="640"
            height="450"
            fetchpriority="high"
          />
          <h2>We make fast, punchy pixel-art games.</h2>
          <a
            class="btn"
            href="https://store.steampowered.com/app/4507450/Runner_Overdrive/"
            target="_blank"
            rel="noopener"
          >
            Wishlist Runner Overdrive on Steam
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import logoimg from "@/assets/images/fifth_edge_logo.png"
import posterimg from "@/assets/optimized/hero-loop-poster.webp"

export default {
  name: "Home",
  data() {
    return {
      logo: logoimg,
      poster: posterimg
    }
  },
  mounted() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.$refs.video.pause();
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: -80px;
  opacity: 0;
  animation: fadeIn 2s forwards;
  animation-delay: 0.25s;
}

.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.video {
  width: 100%;
  height: 100%;
  filter: brightness(0.6) blur(20px);
  object-fit: cover;
}

.hero-overlay {
  position: relative;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-color);
  padding: 0 1rem;
}

.hero-overlay h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-logo {
  max-width: 700px;
  width: 100%;
  height: auto;
  margin-bottom: -2rem;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  background-color: var(--secondary-color);
  color: var(--text-color);
  padding: 1rem 2rem;
  text-decoration: none;
  font-family: 'Poppins Bold', 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-size: 1rem;
}

.btn:hover {
  background-color: var(--secondary-hover);
}

.hero-transition {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to bottom, transparent, var(--primary-color));
  z-index: 1;
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

@media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 100vh;
  }
  .hero-overlay {
    top: auto;
    transform: translateY(0);
    padding: 1rem;
  }
  .hero-overlay h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .hero-logo {
    max-width: 90%;
    margin-bottom: 1rem;
  }
  .video {
    filter: brightness(0.7) blur(10px);
  }
  .hero-transition {
    height: 100px;
  }
  .home {
    margin-top: 0;
  }
}
</style>
