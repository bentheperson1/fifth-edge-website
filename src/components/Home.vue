<!-- src/components/Home.vue -->
<template>
  <section class="home">
    <div class="hero">
      <div class="hero-background"></div>
      <div class="hero-overlay">
        <h1>FIFTH EDGE STUDIOS</h1>
        <p>Crafting experiences, dedicated to every pixel.</p>
        <router-link to="/games" class="btn">Explore Our Games</router-link>
      </div>
    </div>
    <div class="gallery">
      <h2>Gallery</h2>
      <div class="images">
        <img src="" alt="Screenshot 1" />
        <img src="" alt="Screenshot 2" />
        <img src="" alt="Screenshot 3" />
        <img src="" alt="Screenshot 4" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  text-align: center;
}
.hero {
  position: relative;
  height: 80vh;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
}
.hero-overlay {
  position: relative;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-color);
  padding: 0 1rem;
}
.hero-overlay h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.hero-overlay p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
.btn {
  background-color: var(--secondary-color);
  color: var(--background-color);
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: 1rem;
}
.btn:hover {
  background-color: var(--primary-color);
}
.gallery {
  padding: 2rem 1rem;
}
.gallery h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.images {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.images img {
  width: calc(25% - 1rem);
  border-radius: 8px;
  transition: transform 0.3s;
}
.images img:hover {
  transform: scale(1.05);
}
@media (max-width: 768px) {
  .images img {
    width: calc(50% - 1rem);
  }
}
</style>
