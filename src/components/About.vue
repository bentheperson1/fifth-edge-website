<!-- src/components/About.vue -->
<template>
  <section class="about">
    <div class="about-container">
      <h2>About Us</h2>
      <p>
        We are a passionate team dedicated to crafting unforgettable gaming experiences.
        Our focus is on creativity, innovation, and community engagement.
      </p>
      <img class="about-image" src="../assets/images/fifth-edge-translucent-bg.png" alt="About Us" />
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  padding: 4rem 1rem;
  text-align: center;
}
.about-container {
  max-width: 900px;
  margin: 0 auto;
}
.about h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.about p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}
.about-image {
  width: 100%;
  border-radius: 8px;
}
</style>
