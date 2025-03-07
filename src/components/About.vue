<template>
  <section class="about">
    <div class="about-container">
      <h2>About Us</h2>
      <p>
        Hey there! We're a team of gamers and developers who love making fun, engaging 2D pixel-styled games. We kicked off this adventure in 2019, and it's been a fantastic ride ever since.
      </p>
      <p>
        Our entire crew is completely remote, which means we work from all corners of the globe. This mix of backgrounds really sparks our creativity and keeps our projects fresh.
      </p>
      <p>
        Over the years, we've released several games that we're super proud of. Every game is a project we pour our hearts into, and we love sharing our passion with you.
      </p>
      <p>
        Thanks for dropping by and learning a bit about us. We hope you enjoy our games as much as we enjoy making them!
      </p>
      <p>
        - Ben (Founder of Fifth Edge)
      </p>
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
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
.about-image {
  width: 100%;
  border-radius: 8px;
}
</style>
