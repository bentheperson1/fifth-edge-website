<template>
  <section class="doc not-found">
    <p class="code">404</p>
    <h1>This page doesn't exist.</h1>
    <p>It may have moved, or the link might be wrong.</p>
    <p>
      <router-link to="/">Back to the homepage</router-link>
      &nbsp;/&nbsp;
      <router-link to="/games">See our games</router-link>
    </p>
  </section>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  padding-top: 8rem;
  min-height: 40vh;
}
.code {
  font-family: 'Poppins Bold', 'Poppins', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.2em;
  color: var(--link-color);
  margin: 0 0 0.5rem;
}
</style>
