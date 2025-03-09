<template>
  <div>
    <section class="home">
      <div class="hero">
        <div class="hero-background">
          <video class="video" ref="video" autoplay muted loop playsinline>
            <source src="@/assets/videos/BossBreakerTrailer.mp4" type="video/mp4" />
          </video>
          <div class="hero-transition"></div>
        </div>
        <div class="hero-overlay">
          <img
            rel="preload"
            :src=logo
            alt="Fifth Edge Logo"
            class="hero-logo"
          />
          <h2>We make games sometimes.</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import logoimg from "@/assets/images/fifth_edge_logo.png"

export default {
  name: "Home",
  data() {
    return {
      logo: logoimg
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
  margin-bottom: -2rem;
}

.btn {
  background-color: var(--secondary-color);
  color: var(--background-color);
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: 1rem;
}

.btn:hover {
  background-color: var(--primary-color);
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
