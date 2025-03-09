<template>
  <div class="brand-guidelines-page">
    <section class="brand-guidelines">
      <h1>Brand Guidelines</h1>
      <br>
      <div class="logo-section">
        <h2>Logos</h2>
        <img :src="companyLogo" alt="Company Logo" class="brand-logo" />
      </div>

      <div class="colors-section">
        <h2>Color Palette</h2>
        <div class="colors">
          <div class="color-item">
            <div class="color-square" :style="{ backgroundColor: theme.primaryColor }"></div>
            <span>{{ theme.primaryColor }}</span>
          </div>
          <div class="color-item">
            <div class="color-square" :style="{ backgroundColor: theme.secondaryColor }"></div>
            <span>{{ theme.secondaryColor }}</span>
          </div>
          <div class="color-item">
            <div class="color-square" :style="{ backgroundColor: theme.backgroundColor }"></div>
            <span>{{ theme.backgroundColor }}</span>
          </div>
          <div class="color-item">
            <div class="color-square" :style="{ backgroundColor: theme.textColor }"></div>
            <span>{{ theme.textColor }}</span>
          </div>
        </div>
      </div>

      <div class="download-section">
        <a href="/downloads/brand-assets.zip" class="download-button" download>
          Download All Brand Assets
        </a>
      </div>
    </section>

    <section class="press-kits">
      <h2>Game Press Kits</h2>
      <div v-for="game in games" :key="game.id" class="press-kit">
        <div class="press-kit-header">
          <img :src="game.logo" :alt="game.title" class="game-logo large-logo" />
        </div>
        <div class="press-kit-content">
          <p class="overview">
            <strong>Overview:</strong> {{ game.overview }}
          </p>
          <p class="in-depth">
            <strong>Description:</strong> {{ game.inDepthDescription }}
          </p>
          <p class="release-date">
            <strong>Release Date:</strong> {{ game.releaseDate }}
          </p>

          <!-- Additional Press Kit Content -->
          <div class="press-release">
            <h4>Press Release</h4>
            <p>{{ game.pressRelease }}</p>
          </div>

          <div class="visual-assets">
            <h4>Visual Assets</h4>
            <div class="assets">
              <div class="screenshots">
                <div
                  v-for="(screenshot, index) in game.visualAssets.screenshots"
                  :key="index"
                  class="screenshot"
                >
                  <img :src="screenshot" alt="Screenshot" />
                </div>
              </div>
              <div class="key-art" v-if="game.visualAssets.keyArt">
                <img :src="game.visualAssets.keyArt" alt="Key Art" />
              </div>
              <div class="video" v-if="game.visualAssets.video">
                <a :href="game.visualAssets.video" target="_blank">Watch Trailer</a>
              </div>
            </div>
          </div>

          <div class="fact-sheet">
            <h4>Fact Sheet</h4>
            <p>{{ game.factSheet }}</p>
          </div>

          <div class="technical-details">
            <h4>Technical Details</h4>
            <p>{{ game.technicalDetails }}</p>
          </div>

          <div class="company-info">
            <h4>Company &amp; Team Information</h4>
            <p>{{ game.companyInfo }}</p>
            <p>{{ game.teamInfo }}</p>
          </div>

          <div class="additional-materials">
            <h4>Additional Materials</h4>
            <p>{{ game.additionalMaterials }}</p>
          </div>

          <div class="buy-links">
            <h4>Where to Buy:</h4>
            <div class="buy-buttons">
              <button
                v-for="(btn, index) in game.buttons"
                :key="index"
                class="buy-button"
                @click="openLink(btn.link)"
              >
                {{ btn.title }}
              </button>
            </div>
          </div>
          <div class="download-presskit">
            <a :href="game.downloadZip" class="download-button" download>
              Download Press Kit
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import companyLogo from '@/assets/images/fifth_edge_logo.png';
import bossBreakerLogo from '@/assets/images/boss_breaker_logo.png';
import owlchemistLogo from '@/assets/images/owlchemist_logo.png';
import slimecorpLogo from '@/assets/images/slimecorp_logo.png';
import pulsejumperLogo from '@/assets/images/pulsejumper_logo.png';

export default {
  name: "MediaKit",
  data() {
    return {
      companyLogo,
      theme: {
        primaryColor: '#242424',
        secondaryColor: '#E74C3C',
        backgroundColor: '#121212',
        textColor: '#ffffff'
      },
      games: [
        {
          id: 1,
          title: "Boss Breaker",
          logo: bossBreakerLogo,
          overview: "A twin-stick beat 'em up game.",
          inDepthDescription:
            "Boss Breaker is a fast-paced twin-stick beat 'em up where players punch their way through hordes of enemies to overthrow a corporate regime. Experience dynamic combat and strategic challenges in every level.",
          releaseDate: "2024-06-01",
          pressRelease:
            "Announcing Boss Breaker, a new twin-stick beat 'em up that redefines fast-paced combat and strategic gameplay.",
          visualAssets: {
            screenshots: [
              "/downloads/boss_breaker_ss1.png",
              "/downloads/boss_breaker_ss2.png"
            ],
            keyArt: "/downloads/boss_breaker_keyart.png",
            video: "https://www.youtube.com/watch?v=boss_breaker_trailer"
          },
          factSheet:
            "Genre: Beat 'em up, Platforms: Steam, GX.Games, Release Date: 2024-06-01",
          technicalDetails: "Minimum: Windows 10, 4GB RAM, 2GHz CPU",
          companyInfo: "Developed by Fifth Edge Studios, a leader in innovative gaming.",
          teamInfo: "Team includes award-winning developers with experience in high-octane titles.",
          additionalMaterials:
            "Awarded Best Indie Game 2023, featured on top gaming blogs.",
          buttons: [
            {
              title: "Steam",
              link: "https://store.steampowered.com/app/2869030/Boss_Breaker/"
            },
            {
              title: "GX.Games",
              link: "https://gx.games/games/5t65sb/boss-breaker/tracks/d7b6bbc6-99b8-497b-a300-28548874c67e/"
            }
          ],
          downloadZip: "/downloads/boss_breaker_presskit.zip"
        },
        {
          id: 2,
          title: "Owlchemist",
          logo: owlchemistLogo,
          overview: "A precision-platformer game.",
          inDepthDescription:
            "Owlchemist is a short, precision-platformer crafted for the 2024 Pirate Software Game Jam. With intricate level design and challenging gameplay, it tests the limits of your reflexes.",
          releaseDate: "2024-04-15",
          pressRelease:
            "Introducing Owlchemist, a precision-platformer crafted to challenge your reflexes and creativity.",
          visualAssets: {
            screenshots: [
              "/downloads/owlchemist_ss1.png",
              "/downloads/owlchemist_ss2.png"
            ],
            keyArt: "/downloads/owlchemist_keyart.png",
            video: "https://www.youtube.com/watch?v=owlchemist_trailer"
          },
          factSheet:
            "Genre: Platformer, Platforms: Itch.io, Release Date: 2024-04-15",
          technicalDetails: "Minimum: Windows 10, 2GB RAM, 1.5GHz CPU",
          companyInfo: "Developed by Fifth Edge Studios.",
          teamInfo: "A small but dedicated team of creative developers.",
          additionalMaterials:
            "Winner of the 2024 Pirate Software Game Jam, rave reviews from indie gamers.",
          buttons: [
            {
              title: "Itch.io",
              link: "https://fifthedgestudios.itch.io/owlchemist"
            }
          ],
          downloadZip: "/downloads/owlchemist_presskit.zip"
        },
        {
          id: 3,
          title: "Slime Corp",
          logo: slimecorpLogo,
          overview: "A top-down shooter collecting slime.",
          inDepthDescription:
            "Slime Corp is a simple yet addictive top-down shooter that challenges players to collect slime while fending off increasingly difficult waves of enemies. Strategic gameplay meets fast action in this unique shooter.",
          releaseDate: "2024-08-20",
          pressRelease:
            "Slime Corp is here to redefine top-down shooters with its unique slime-collecting mechanics and action-packed gameplay.",
          visualAssets: {
            screenshots: [
              "/downloads/slimecorp_ss1.png",
              "/downloads/slimecorp_ss2.png"
            ],
            keyArt: "/downloads/slimecorp_keyart.png",
            video: "https://www.youtube.com/watch?v=slimecorp_trailer"
          },
          factSheet:
            "Genre: Shooter, Platforms: Steam, Itch.io, GX.Games, Release Date: 2024-08-20",
          technicalDetails: "Minimum: Windows 10, 4GB RAM, 2.5GHz CPU",
          companyInfo: "Developed by Fifth Edge Studios.",
          teamInfo: "Expert team focused on fast-paced and engaging gameplay.",
          additionalMaterials:
            "Featured in top gaming magazines, multiple awards for gameplay innovation.",
          buttons: [
            {
              title: "Steam",
              link: "https://store.steampowered.com/app/1949750/Slime_Corp/"
            },
            {
              title: "Itch.io",
              link: "https://fifthedgestudios.itch.io/slime-corp"
            },
            {
              title: "GX.Games",
              link: "https://gx.games/games/iygssc/slime-corp/"
            }
          ],
          downloadZip: "/downloads/slimecorp_presskit.zip"
        },
        {
          id: 4,
          title: "Pulse Jumper",
          logo: pulsejumperLogo,
          overview: "An action-packed platformer.",
          inDepthDescription:
            "Pulse Jumper is a unique platformer where players navigate challenging levels with a twist—using a shotgun to jump. Experience high-octane action and innovative gameplay mechanics in this daring title.",
          releaseDate: "2024-09-30",
          pressRelease:
            "Pulse Jumper offers a fresh take on platformers with its innovative shotgun jump mechanic.",
          visualAssets: {
            screenshots: [
              "/downloads/pulsejumper_ss1.png",
              "/downloads/pulsejumper_ss2.png"
            ],
            keyArt: "/downloads/pulsejumper_keyart.png",
            video: "https://www.youtube.com/watch?v=pulsejumper_trailer"
          },
          factSheet:
            "Genre: Platformer, Platforms: Steam, Release Date: 2024-09-30",
          technicalDetails: "Minimum: Windows 10, 3GB RAM, 2GHz CPU",
          companyInfo: "Developed by Fifth Edge Studios.",
          teamInfo: "A passionate team dedicated to creating innovative gaming experiences.",
          additionalMaterials:
            "Recognized for creative gameplay mechanics, featured in indie game showcases.",
          buttons: [
            {
              title: "Steam",
              link: "https://store.steampowered.com/app/1397760/Pulse_Jumper/"
            }
          ],
          downloadZip: "/downloads/pulsejumper_presskit.zip"
        },
      ]
    };
  },
  methods: {
    openLink(link) {
      window.open(link, '_blank');
    }
  }
};
</script>

<style scoped>
.brand-guidelines-page {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

.brand-guidelines {
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  max-width: 800px;
  background-color: var(--background-color);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.brand-guidelines h1,
.brand-guidelines h2 {
  color: ghostwhite;
  text-align: center;
}

.logo-section {
  text-align: center;
  margin-bottom: 2rem;
}

.brand-logo {
  max-width: 200px;
  margin: 0 auto;
}

.colors-section {
  margin-bottom: 2rem;
}

.colors {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.color-item {
  display: flex;
  align-items: center;
  margin: 0.5rem;
}

.color-square {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  margin-right: 0.5rem;
  border-radius: 4px;
}

.download-section {
  text-align: center;
  margin-top: 1rem;
}

.download-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--secondary-color);
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s, transform 0.3s;
}

.download-button:hover {
  background-color: #e03e00;
  transform: scale(1.05);
}

.press-kits {
  padding: 2rem;
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  max-width: 800px;
  margin: 2rem auto;
  background-color: var(--background-color);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.press-kit {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--secondary-color);
}

.press-kit:last-child {
  border-bottom: none;
}

.press-kit-header {
  text-align: center;
  margin-bottom: 1rem;
}

.game-logo.large-logo {
  max-width: 500px;
  width: 100%;
  display: block;
  margin: 0 auto 50px;
}

.press-kit-content {
  margin-top: 1rem;
}

.press-kit-content p {
  margin: 0.5rem 0;
}

.press-kit-content h4 {
  margin-top: 1rem;
  color: #E74C3C;
}

.assets {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.screenshot img,
.key-art img {
  max-width: 100%;
  border-radius: 4px;
}

.video a {
  color: var(--secondary-color);
  text-decoration: underline;
}

.buy-links {
  margin-top: 1rem;
}

.buy-buttons {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.buy-button {
  padding: 0.5rem 1rem;
  background-color: var(--secondary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.buy-button:hover {
  background-color: #e03e00;
  transform: scale(1.05);
}

.download-presskit {
  text-align: center;
  margin-top: 2rem;
}
</style>
