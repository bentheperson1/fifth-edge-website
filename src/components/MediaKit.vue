<template>
  <div class="press-page">
    <header class="press-header">
      <h1>Press Kit</h1>
      <p class="lede">
        Everything you need to write about Fifth Edge Studios and our games. Assets here may be used for
        editorial coverage. For keys, interviews, or anything missing, email
        <a href="mailto:staff@fifthedgestudios.com">staff@fifthedgestudios.com</a>.
      </p>
    </header>

    <section class="block">
      <h2>Studio</h2>
      <div class="split">
        <dl class="facts">
          <div><dt>Developer</dt><dd>Fifth Edge Studios</dd></div>
          <div><dt>Founded</dt><dd>2019</dd></div>
          <div><dt>Team size</dt><dd>3</dd></div>
          <div><dt>Website</dt><dd><a href="https://fifthedgestudios.com">fifthedgestudios.com</a></dd></div>
          <div><dt>Press contact</dt><dd><a href="mailto:staff@fifthedgestudios.com">staff@fifthedgestudios.com</a></dd></div>
          <div>
            <dt>Social</dt>
            <dd>
              <a href="https://bsky.app/profile/fifth-edge.bsky.social" target="_blank" rel="noopener">Bluesky</a>,
              <a href="https://discord.gg/RnfJTVMjrP" target="_blank" rel="noopener">Discord</a>,
              <a href="https://fifthedgestudios.itch.io" target="_blank" rel="noopener">itch.io</a>
            </dd>
          </div>
        </dl>
        <div class="description">
          <p>
            Fifth Edge Studios is a small independent team making fast, 2D pixel-art games. Since 2019 the
            studio has released titles on Steam, itch.io, and GX.Games, including the twin-stick beat 'em up
            Boss Breaker and the free top-down shooter Slime Corp. Its next game, Runner Overdrive, is in
            development.
          </p>
        </div>
      </div>
    </section>

    <section class="block">
      <h2>Logos</h2>
      <div class="logo-grid">
        <figure v-for="logo in logos" :key="logo.file" class="logo-tile">
          <div class="logo-art">
            <img :src="logo.file" :alt="logo.name" loading="lazy" />
          </div>
          <figcaption>
            {{ logo.name }}
            <a :href="logo.file" download>PNG</a>
          </figcaption>
        </figure>
      </div>

      <h3>Colors</h3>
      <ul class="swatches">
        <li v-for="color in colors" :key="color.hex">
          <span class="swatch" :style="{ backgroundColor: color.hex }"></span>
          <span>{{ color.name }}</span>
          <code>{{ color.hex }}</code>
        </li>
      </ul>
    </section>

    <section v-for="game in games" :key="game.slug" :id="game.slug" class="block game">
      <h2 class="game-heading">
        <img v-if="game.logo" :src="game.logo" :alt="game.title" class="game-logo" loading="lazy" />
        <span v-else>{{ game.title }}</span>
      </h2>
      <div class="split">
        <dl class="facts">
          <div><dt>Release date</dt><dd>{{ game.release }}</dd></div>
          <div><dt>Platforms</dt><dd>{{ game.platforms }}</dd></div>
          <div><dt>Genre</dt><dd>{{ game.genre }}</dd></div>
          <div v-if="game.price"><dt>Price</dt><dd>{{ game.price }}</dd></div>
          <div>
            <dt>Store pages</dt>
            <dd>
              <template v-for="(store, i) in game.stores" :key="store.name">
                <a :href="store.link" target="_blank" rel="noopener">{{ store.name }}</a><span v-if="i < game.stores.length - 1">, </span>
              </template>
            </dd>
          </div>
        </dl>
        <div class="description">
          <p v-for="(paragraph, i) in game.description" :key="i">{{ paragraph }}</p>
        </div>
      </div>

      <h3>{{ game.media.length > 1 ? 'Screenshots' : 'Key art' }}</h3>
      <div class="shots">
        <a
          v-for="(shot, i) in game.media"
          :key="i"
          :href="shot.full"
          :download="`${game.slug}-${i + 1}.png`"
          class="shot"
        >
          <img :src="shot.thumb" :alt="`${game.title} screenshot ${i + 1}`" loading="lazy" decoding="async" width="640" height="360" />
        </a>
      </div>
      <p class="hint">Click an image to download it at full resolution.</p>
    </section>
  </div>
</template>

<script>
// Small web thumbnails are shown; the originals are linked for download
const thumbs = import.meta.glob('../assets/optimized/*-640.webp', { eager: true, import: 'default' });
const originals = import.meta.glob(
  ['../assets/images/{bb,owl,sc}-*.png', '../assets/images/runner.png'],
  { eager: true, query: '?url', import: 'default' }
);

const media = (...names) =>
  names.map((name) => ({
    thumb: thumbs[`../assets/optimized/${name}-640.webp`],
    full: originals[`../assets/images/${name}.png`],
  }));

export default {
  name: "MediaKit",
  data() {
    return {
      logos: [
        { name: "Logo", file: "/press/fifth-edge-logo.png" },
        { name: "Wordmark", file: "/press/fifth-edge-wordmark.png" },
        { name: "Mark", file: "/press/fifth-edge-mark.png" },
      ],
      colors: [
        { name: "Edge Red", hex: "#B4202A" },
        { name: "Black", hex: "#121212" },
        { name: "White", hex: "#FFFFFF" },
      ],
      games: [
        {
          slug: "runner-overdrive",
          title: "Runner Overdrive",
          logo: null,
          release: "Coming soon",
          platforms: "Windows",
          genre: "2D platformer, movement shooter",
          stores: [
            { name: "Steam", link: "https://store.steampowered.com/app/4507450/Runner_Overdrive/" },
            { name: "itch.io", link: "https://fifthedgestudios.itch.io/runner-overdrive" },
          ],
          description: [
            "Keep the world running, one delivery at a time.",
            "Runner Overdrive is a fast-paced 2D platformer and movement shooter set in a post-apocalyptic world, where you meet unusual characters and enemies while investigating the cause of the collapse.",
          ],
          media: media("runner"),
        },
        {
          slug: "boss-breaker",
          title: "Boss Breaker",
          logo: "/press/boss-breaker-logo.png",
          release: "October 31, 2024",
          platforms: "Windows, browser (GX.Games)",
          genre: "Twin-stick beat 'em up",
          stores: [
            { name: "Steam", link: "https://store.steampowered.com/app/2869030/Boss_Breaker/" },
            { name: "GX.Games", link: "https://gx.games/games/5t65sb/boss-breaker/tracks/d7b6bbc6-99b8-497b-a300-28548874c67e/" },
          ],
          description: [
            "A twin-stick beat 'em up in which a low-ranking employee tries to uncover the truth and win their freedom from an underground corporate facility.",
            "Punch everything in your way and overthrow your corporate overlord.",
          ],
          media: media("bb-01", "bb-02", "bb-03", "bb-04", "bb-05", "bb-06"),
        },
        {
          slug: "owlchemist",
          title: "Owlchemist",
          logo: "/press/owlchemist-logo.png",
          release: "July 2024",
          platforms: "Windows, browser (itch.io)",
          genre: "Precision platformer",
          stores: [
            { name: "itch.io", link: "https://fifthedgestudios.itch.io/owlchemist" },
          ],
          description: [
            "A short 2D precision platformer about an alchemist who was kicked out of his tower. Your goal is to take it back.",
            "Made for the 2024 Pirate Software Game Jam.",
          ],
          media: media("owl-01", "owl-02", "owl-03", "owl-04"),
        },
        {
          slug: "slime-corp",
          title: "Slime Corp",
          logo: "/press/slime-corp-logo.png",
          release: "May 24, 2022",
          platforms: "Windows, browser (itch.io, GX.Games)",
          genre: "Top-down shooter",
          price: "Free",
          stores: [
            { name: "Steam", link: "https://store.steampowered.com/app/1949750/Slime_Corp/" },
            { name: "itch.io", link: "https://fifthedgestudios.itch.io/slime-corp" },
            { name: "GX.Games", link: "https://gx.games/games/iygssc/slime-corp/" },
          ],
          description: [
            "A minimalist top-down shooter about collecting slime.",
          ],
          media: media("sc-01", "sc-02", "sc-03"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.press-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 1.5rem 5rem;
}

.press-header {
  padding-bottom: 1.5rem;
  border-bottom: 4px solid var(--secondary-color);
}
.press-header h1 {
  font-family: 'Poppins Bold', 'Poppins', sans-serif;
  font-size: 2.5rem;
  margin: 0 0 1rem;
}
.lede {
  max-width: 720px;
  color: #dcdcdc;
  line-height: 1.7;
  margin: 0;
}

a {
  color: var(--link-color);
}

.block {
  scroll-margin-top: 80px;
  padding: 3rem 0;
  border-bottom: 1px solid #262626;
}
.block:last-child {
  border-bottom: none;
}
.block h2 {
  font-family: 'Poppins Bold', 'Poppins', sans-serif;
  font-size: 1.75rem;
  margin: 0 0 1.5rem;
}
.block h3 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted-text);
  margin: 2.5rem 0 1rem;
}

.split {
  display: grid;
  grid-template-columns: minmax(260px, 1fr) 2fr;
  gap: 2.5rem;
}

.facts {
  margin: 0;
}
.facts > div {
  padding: 0.6rem 0;
  border-bottom: 1px solid #262626;
}
.facts > div:first-child {
  padding-top: 0;
}
.facts dt {
  font-size: 0.8rem;
  color: var(--muted-text);
}
.facts dd {
  margin: 0.15rem 0 0;
}

.description p {
  margin: 0 0 1rem;
  line-height: 1.7;
  color: #dcdcdc;
}

.logo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
.logo-tile {
  margin: 0;
}
.logo-art {
  background: #1e1e1e;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  box-sizing: border-box;
}
.logo-art img {
  max-width: 100%;
  max-height: 100%;
}
.logo-tile figcaption {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0;
  font-size: 0.9rem;
}

.swatches {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 2.5rem;
}
.swatches li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.swatch {
  width: 48px;
  height: 48px;
  border: 1px solid #3a3a3a;
}
.swatches code {
  color: var(--muted-text);
}

.game-heading {
  min-height: 60px;
  display: flex;
  align-items: center;
}
.game-logo {
  max-height: 110px;
  max-width: 100%;
}

.shots {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.75rem;
}
.shot img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: opacity 0.2s;
}
.shot:hover img {
  opacity: 0.8;
}
.hint {
  font-size: 0.85rem;
  color: var(--muted-text);
  margin: 0.75rem 0 0;
}

@media (max-width: 768px) {
  .split {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
