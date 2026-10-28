<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo">
        <img
          src="../assets/images/fifth_edge_text.png"
          alt="Fifth Edge Studios"
          width="200"
          height="36"
        />
      </router-link>
      <!-- Hamburger menu icon for mobile -->
      <button
        class="hamburger"
        type="button"
        aria-label="Menu"
        :aria-expanded="isOpen"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links" :class="{ open: isOpen }">
        <li>
          <router-link to="/games" @click="closeMenu">Games</router-link>
        </li>
        <li>
          <router-link to="/about" @click="closeMenu">About</router-link>
        </li>
        <li>
          <router-link to="/press" @click="closeMenu">Press</router-link>
        </li>
        <li>
          <router-link to="/contact" @click="closeMenu">Contact</router-link>
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
  padding: 0 2rem;
  min-height: 68px;
  position: relative;
}

.logo img {
  display: block;
  max-width: 200px;
  height: auto;
}

/* links fill the full bar height so the whole area is clickable, not just the text */
.nav-links {
  list-style: none;
  display: flex;
  align-self: stretch;
  margin: 0 -1rem 0 0;
  padding: 0;
}

.nav-links li {
  display: flex;
  font-family: 'Poppins Bold';
}

.nav-links a {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--link-color);
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: 0;
  padding: 0.25rem;
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
    margin: 0;
    padding: 0.5rem 0;
  }
  .nav-links.open {
    display: flex;
  }
  .nav-links li {
    width: 100%;
  }
  .nav-links a {
    flex: 1;
    justify-content: center;
    padding: 1rem;
  }
  .logo img {
    max-width: 120px;
  }
}
</style>
