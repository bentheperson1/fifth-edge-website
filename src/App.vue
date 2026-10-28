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
  src: url('/fonts/Poppins-Bold.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Poppins';
  src: url('/fonts/Poppins-Medium.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

:root {
  --primary-color: #242424;
  /* logo red: use for fills; it's too dark for small text on black */
  --secondary-color: #b4202a;
  --secondary-hover: #8f1820;
  /* logo red lifted to pass contrast as text on the dark background */
  --link-color: #e8434d;
  --background-color: #121212;
  --text-color: #ffffff;
  --muted-text: #a8a8a8;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: var(--background-color);
  color: var(--text-color);
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

/* Long-form text pages (privacy, terms) */
.doc {
  max-width: 760px;
  margin: 0 auto;
  padding: 4rem 1.5rem 5rem;
  line-height: 1.7;
}
.doc h1 {
  font-family: 'Poppins Bold', 'Poppins', sans-serif;
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0 0 0.5rem;
}
.doc .updated {
  color: var(--muted-text);
  margin: 0 0 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 4px solid var(--secondary-color);
}
.doc h2 {
  font-family: 'Poppins Bold', 'Poppins', sans-serif;
  font-size: 1.25rem;
  margin: 2.5rem 0 0.75rem;
}
.doc p,
.doc li {
  color: #dcdcdc;
}
.doc ul {
  padding-left: 1.25rem;
}
.doc a {
  color: var(--link-color);
}
</style>
