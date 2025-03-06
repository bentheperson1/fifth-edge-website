<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo">
        <img rel="preload" src="../assets/images/fifth_edge_text.png" alt="Fifth Edge Logo" />
      </router-link>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/games">Games</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(58, 58, 58, 0.8);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}
.logo img {
  max-width: 150px;
}
.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}
.nav-links li {
  margin-left: 2rem;
  font-family: 'Poppins Bold';
}
.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s;
}
.nav-links a:hover {
  color: var(--secondary-color);
}
</style>
