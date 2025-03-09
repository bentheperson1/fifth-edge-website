<template>
  <footer class="footer">
    <div class="links">
      <a href="https://discord.gg/RnfJTVMjrP" target="_blank">Discord</a>
      <a href="https://store.steampowered.com/search/?developer=Fifth%20Edge%20Studios" target="_blank">Steam</a>
      <a href="https://fifthedgestudios.itch.io" target="_blank">Itch.io</a>
      <a href="https://bsky.app/profile/fifth-edge.bsky.social" target="_blank">Bluesky</a>
    </div>
    <div class="links">
      <a href="mailto:staff@fifthedgestudios.com">staff@fifthedgestudios.com</a>
    </div>
    <p>&copy;{{ new Date().getFullYear() }} Fifth Edge Studios</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 2rem;
  text-align: center;
}
.links {
  margin-bottom: 1rem;
}
.links a {
  margin: 0 1rem;
  color: var(--secondary-color);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}
.links a:hover {
  color: var(--text-color);
}
</style>
