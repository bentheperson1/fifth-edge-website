<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo">
        <img
          rel="preload"
          src="../assets/images/fifth_edge_text.png"
          alt="Fifth Edge Logo"
        />
      </router-link>
      <!-- Hamburger menu icon for mobile -->
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="nav-links" :class="{ open: isOpen }">
        <li>
          <router-link to="/games" @click.native="closeMenu">Games</router-link>
        </li>
        <li>
          <router-link to="/about" @click.native="closeMenu">About</router-link>
        </li>
        <!--<li>
          <router-link to="/press" @click.native="closeMenu">Press</router-link>
        </li> -->
        <li>
          <router-link to="/contact" @click.native="closeMenu">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
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
  position: relative;
}

.logo img {
  max-width: 200px;
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

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  height: 3px;
  width: 25px;
  background: var(--text-color);
  margin-bottom: 5px;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  .nav-links {
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(58, 58, 58, 0.9);
    display: none;
    padding: 1rem 0;
  }
  .nav-links.open {
    display: flex;
  }
  .nav-links li {
    margin: 1rem 0;
  }
  .logo img {
    max-width: 120px;
  }
}
</style>
