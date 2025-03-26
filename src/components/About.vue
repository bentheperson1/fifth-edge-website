<template>
  <div class="page-container">
    <!-- About Section with Slideshow -->
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
      <!-- <div class="slideshow">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="{ active: index === activeSlide }"
        >
          <img :src="slide.image" :alt="slide.alt" />
        </div>
      </div> -->
    </section>

    <!-- Team Members in a horizontal row -->
    <section class="team-section">
      <h2>Team</h2>
      <div class="team-grid">
        <div
          class="team-member"
          v-for="(member, index) in teamMembers"
          :key="index"
        >
          <img :src="member.image" :alt="member.name" class="member-image" />
          <h1 class="titles">{{ member.name }}</h1>
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
import snowyPicture from "@/assets/images/snowy.png";
import lucaPicture from "@/assets/images/luca.png";
import antonPicture from "@/assets/images/anton.png";
import jackPicture from "@/assets/images/jack.png";

import about1 from "@/assets/images/about1.jpg"

export default {
  name: "About",
  data() {
    return {
      slides: [
        { image: about1, alt: "Screenshot 1" },
      ],
      activeSlide: 0,
      teamMembers: [
        {
          name: "Ben",
          image: benPicture,
          titles: ["Founder", "Lead Developer"],
          games: ["Boss Breaker", "Owlchemist", "Slime Corp", "Pulse Jumper"],
          socials: [
            { platform: "Portfolio", link: "https://benholland.xyz/" },
            { platform: "LinkedIn", link: "https://www.linkedin.com/in/benholland07/" }
          ]
        },
        {
          name: "Aden",
          image: adenPicture,
          titles: ["Character & Environment Artist"],
          games: ["Retro Quest"],
          socials: [
            { platform: "Itch.io", link: "https://ajtheapple.itch.io/" },
            { platform: "Twitter", link: "https://x.com/AJTheApple" }
          ]
        },
        {
          name: "Jack",
          image: jackPicture,
          titles: ["Business Development Manager"],
          games: ["Retro Quest"],
          socials: [
            { platform: "Bluesky", link: "https://bsky.app/profile/fifth-edge.bsky.social/" },
          ]
        },
        {
          name: "Antonello",
          image: antonPicture,
          titles: ["Boss Breaker Composer"],
          games: ["Arcade Frenzy"],
          socials: [
            { platform: "Portfolio", link: "https://www.antonellosgnaolin.com/" },
            { platform: "Instagram", link: "https://www.instagram.com/antynator"}
          ]
        },
        {
          name: "Snowy",
          image: snowyPicture,
          titles: ["Composer", "Sound Designer"],
          games: ["Arcade Frenzy"],
          socials: [
            { platform: "SoundCloud", link: "https://soundcloud.com/synthmints" },
            { platform: "Youtube", link: "https://www.youtube.com/@SynthMints" }
          ]
        },
        {
          name: "Luca",
          image: lucaPicture,
          titles: ["Boss Breaker Sound Designer"],
          games: ["Arcade Frenzy"],
          socials: [
            { platform: "Youtube", link: "https://www.youtube.com/@lucaborroni8985" }
          ]
        }
      ]
    };
  },
  mounted() {
    // Simple automatic slideshow (cycles every 3 seconds)
    setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }, 3000);
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

.slideshow {
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  position: relative;
  overflow: hidden;
}
.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.slide.active {
  opacity: 1;
  position: relative;
}
.slide img {
  width: 100%;
  border-radius: 8px;
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

.game {
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.socials a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: #0077cc;
  transition: color 0.3s;
}
.socials a:hover {
  color: #005fa3;
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
