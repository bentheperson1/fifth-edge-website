<!-- src/App.vue -->
<template>
  <div id="app">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { NavBar, Footer },
};
</script>

<style>
@font-face {
  font-family: 'Poppins Bold';
  src: url('./assets/fonts/Poppins-Bold.ttf');
  font-weight: bold;
  font-style: bold;
}

@font-face {
  font-family: 'Poppins';
  src: url('./assets/fonts/Poppins-Medium.ttf');
  font-weight: normal;
  font-style: normal;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 80px;
}
</style>
