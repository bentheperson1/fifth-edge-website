<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-accent"></div>

    <div style="position: relative">
      <div class="hero-title">
        <img
            rel="preload"
            :src=logo
            alt="Fifth Edge Logo"
            class="hero-logo"
          />
      </div>

      <div class="hero-sub">
        We Make Games And Break Things.
      </div>

      <div class="hero-cta">
        <RouterLink to="/games" class="btn-primary">
          View Our Work
        </RouterLink>

        <RouterLink to="/about" class="btn-outline">
          About Us
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import logoimg from "@/assets/images/fifth_edge_logo.png"

export default {
  data() {
    return {
      logo: logoimg
    }
  }
};
</script>
