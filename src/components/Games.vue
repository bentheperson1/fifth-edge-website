<!-- src/components/Games.vue -->
<template>
  <section class="games">
    <div class="container">
      <h2>Our Games</h2>
      <div class="game-list">
        <div class="game" v-for="game in games" :key="game.id">
          <div class="game-images">
            <img :src="game.image" :alt="game.title + ' main image'" />
            <img v-if="game.image2" :src="game.image2" :alt="game.title + ' extra image'" />
          </div>
          <h3>{{ game.title }}</h3>
          <p>{{ game.description }}</p>
          <p class="overview">{{ game.overview }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Games",
  data() {
    return {
      games: [
        {
          id: 1,
          title: "Game One",
          description: "An exciting adventure game.",
          overview: "Explore vast worlds and overcome challenges.",
          image: "https://via.placeholder.com/300x200?text=Game+One+Main",
          image2: "https://via.placeholder.com/300x200?text=Game+One+Extra",
        },
        {
          id: 2,
          title: "Game Two",
          description: "A thrilling action game.",
          overview: "Experience fast-paced combat and epic battles.",
          image: "https://via.placeholder.com/300x200?text=Game+Two+Main",
          image2: "https://via.placeholder.com/300x200?text=Game+Two+Extra",
        },
      ],
    };
  },
};
</script>

<style scoped>
.games {
  padding: 4rem 1rem;
  text-align: center;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}
.game-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.game {
  background: var(--primary-color);
  color: var(--text-color);
  padding: 1.5rem;
  border-radius: 8px;
  width: 300px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.game:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}
.game-images {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.game-images img {
  width: 100%;
  border-radius: 5px;
}
.overview {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
