<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="brand">
        <router-link to="/" class="brand-logo">
          <img src="../assets/images/fifth_edge_text.png" alt="Fifth Edge Studios" width="191" height="34" loading="lazy" />
        </router-link>
        <p class="tagline">We make fast, punchy pixel-art games.</p>
        <a class="email" href="mailto:staff@fifthedgestudios.com">staff@fifthedgestudios.com</a>
      </div>

      <nav class="columns" aria-label="Footer">
        <div class="column">
          <h2>Studio</h2>
          <router-link to="/games">Games</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/press">Press Kit</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="column">
          <h2>Follow</h2>
          <a href="https://store.steampowered.com/search/?developer=Fifth%20Edge%20Studios" target="_blank" rel="noopener">Steam</a>
          <a href="https://fifthedgestudios.itch.io" target="_blank" rel="noopener">itch.io</a>
          <a href="https://bsky.app/profile/fifth-edge.bsky.social" target="_blank" rel="noopener">Bluesky</a>
          <a href="https://discord.gg/RnfJTVMjrP" target="_blank" rel="noopener">Discord</a>
        </div>
        <div class="column">
          <h2>Legal</h2>
          <router-link to="/privacy">Privacy Policy</router-link>
          <router-link to="/terms">Terms of Use</router-link>
        </div>
      </nav>
    </div>

    <div class="legal-line">
      <p>&copy; {{ year }} Fifth Edge Studios and contributors.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: var(--footer-background);
  border-top: 1px solid #262626;
  color: var(--text-color);
  padding: 3.5rem 2rem 2rem;
  font-size: 0.95rem;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;
}

.brand-logo img {
  display: block;
  height: auto;
}
.tagline {
  color: var(--muted-text);
  margin: 1rem 0 0.25rem;
}
.email {
  color: var(--text-color);
  text-decoration: none;
}
.email:hover {
  color: var(--link-color);
}

.columns {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  min-width: 120px;
}
.column h2 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted-text);
  margin: 0 0 0.4rem;
}
.column a {
  color: var(--text-color);
  text-decoration: none;
}
.column a:hover {
  color: var(--link-color);
}

.legal-line {
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid #262626;
  color: #8a8a8a;
  font-size: 0.8rem;
}
.legal-line p {
  margin: 0.25rem 0;
}

@media (max-width: 768px) {
  .footer {
    padding: 2.5rem 1.25rem 1.5rem;
  }
  .columns {
    gap: 2rem 3rem;
  }
}
</style>
