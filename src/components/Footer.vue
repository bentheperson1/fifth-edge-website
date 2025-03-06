<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="links">
      <a href="https://discord.com/invite/yourserver" target="_blank">Discord</a>
      <a href="https://steamcommunity.com/id/yourprofile" target="_blank">Steam</a>
      <a href="https://yourcompany.itch.io" target="_blank">Itch.io</a>
      <a href="https://blueskyweb.xyz/yourprofile" target="_blank">Bluesky</a>
    </div>
    <p>&copy; {{ new Date().getFullYear() }} Fifth Edge Studios</p>
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
  padding: 1.5rem;
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
