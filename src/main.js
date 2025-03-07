import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';

const app = createApp(App);
const head = createHead();

head.addHeadObjs({
  title: 'Fifth Edge Studios',
  meta: [
    { name: 'description', content: 'An indie game studio dedicated to making memorable and enjoyable 2D games.' },
    { property: 'og:title', content: 'Fifth Edge Studios' },
    { property: 'og:description', content: 'An indie game studio dedicated to making memorable and enjoyable 2D games.' },
    { property: 'og:image', content: '~@/assets/images/fifth_edge_banner.png' },
    { property: 'og:url', content: 'https://fifthedgestudios.com' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fifthedgestudios.com' }
  ],
  script: [
    {
      src: 'https://platform.twitter.com/widgets.js',
      async: true,
      defer: true,
      crossorigin: 'anonymous'
    }
  ]
});

app.use(head);
app.use(router);

// Fetch theme from server and set CSS variables for a dark, Valve-inspired theme
fetch('/api/theme')
  .then(response => response.json())
  .then(theme => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primaryColor || '#242424');
    root.style.setProperty('--secondary-color', theme.secondaryColor || '#E74C3C');
    root.style.setProperty('--background-color', theme.backgroundColor || '#121212');
    root.style.setProperty('--text-color', theme.textColor || '#ffffff');
  })
  .catch(err => {
    console.error('Failed to load theme, using defaults', err);
    const root = document.documentElement;
    root.style.setProperty('--primary-color', '#242424');
    root.style.setProperty('--secondary-color', '#E74C3C');
    root.style.setProperty('--background-color', '#121212');
    root.style.setProperty('--text-color', '#ffffff');
  });

app.mount('#app');
