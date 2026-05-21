<template>
  <nav>
    <RouterLink to="/" class="nav-logo">
      FIFTH<span class="edge-accent">/</span>EDGE<span class="edge-accent">_</span>
    </RouterLink>

    <ul class="nav-links">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/games">Games</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/connect">Connect</RouterLink>
      </li>
    </ul>

    <div class="nav-social">
      <a href="https://fifthedgestudios.itch.io/" target="_blank">itch.io</a>
      <a href="https://fifth-edge.bsky.social" target="_blank">Bluesky</a>
      <a href="https://www.instagram.com/fifthedgestudios/" target="_blank">Instagram</a>
    </div>
  </nav>
</template>
