<template>
  <div class="page-container">
    <!-- About Section -->
    <section class="about-section">
      <div class="about-content">
        <h1>About</h1>
        <p>
          Hey there! We're a team of gamers and developers who love making fun, engaging 2D pixel-styled games. We kicked off this adventure in 2019, and it's been a fantastic ride ever since.
        </p>
        <p>
          Over the years, we've released several games that we're super proud of. Every game is a project we pour our hearts into, and we love sharing our passion with you.
        </p>
        <p>
          Thanks for dropping by and learning a bit about us. We hope you enjoy our games as much as we enjoy making them!
        </p>
        <p>
          - Ben
        </p>
      </div>
    </section>

    <!-- Team Members in a horizontal row -->
    <section class="team-section">
      <h2>The Team</h2>
      <div class="team-grid">
        <div
          class="team-member"
          v-for="(member, index) in teamMembers"
          :key="index"
        >
          <img :src="member.image" :alt="member.name" class="member-image" width="200" height="200" loading="lazy" />
          <h3 class="titles">{{ member.name }}</h3>
          <p class="titles">
            <span v-for="(title, i) in member.titles" :key="i">
              {{ title }}<span v-if="i < member.titles.length - 1"> / </span>
            </span>
          </p>
          <div class="socials">
            <a
              v-for="(social, i) in member.socials"
              :key="i"
              :href="social.link"
              target="_blank"
              rel="noopener"
            >
              {{ social.platform }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import benPicture from "@/assets/images/ben.png";
import adenPicture from "@/assets/images/aden.png";
import snowyPicture from "@/assets/optimized/snowy-384.webp";

export default {
  name: "About",
  data() {
    return {
      teamMembers: [
        {
          name: "Ben",
          image: benPicture,
          titles: ["Director & Lead Developer"],
          games: ["Boss Breaker", "Owlchemist", "Slime Corp", "Pulse Jumper"],
          socials: [
            { platform: "Portfolio", link: "https://benholland.xyz/" },
            { platform: "LinkedIn", link: "https://www.linkedin.com/in/benholland07/" }
          ]
        },
        {
          name: "Aden",
          image: adenPicture,
          titles: ["Character & Environmental Artist"],
          games: ["Retro Quest"],
          socials: [
            { platform: "Itch.io", link: "https://ajtheapple.itch.io/" },
            { platform: "Twitter", link: "https://x.com/AJTheApple" }
          ]
        },
        {
          name: "Snowy",
          image: snowyPicture,
          titles: ["Composer & Sound Designer"],
          games: ["Arcade Frenzy"],
          socials: [
            { platform: "SoundCloud", link: "https://soundcloud.com/synthmints" },
            { platform: "Youtube", link: "https://www.youtube.com/@SynthMints" }
          ]
        },
      ]
    };
  }
};
</script>

<style scoped>
/* 1. Constrain the entire page to a max width */
.page-container {
  max-width: 1200px; /* adjust as desired */
  margin: 0 auto;
  padding: 0 1rem;
}

/* About Section */
.about-section {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 4rem 0;
  justify-content: center;
}
.about-content {
  flex: 1;
  min-width: 300px;
  max-width: 900px;
  margin-right: 2rem;
}
.about-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.about-content p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.team-section {
  padding: 4rem 0;
  text-align: center;
}
.team-section h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.team-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.team-member {
  background-color: var(--primary-color);
  padding: 2rem;
  border-radius: 1rem;
  width: 300px;
  text-align: center;
}

.member-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  object-fit: cover;
}

.titles {
  font-weight: bold;
  margin: 0.5rem 0;
}
h3.titles {
  font-size: 1.5rem;
}

.game {
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.socials a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: var(--link-color);
  transition: color 0.3s;
}
.socials a:hover {
  color: var(--text-color);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
    align-items: center;
  }
  .about-content {
    margin-right: 0;
    margin-bottom: 2rem;
  }
}
</style>
