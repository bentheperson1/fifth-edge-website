// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Games from '../components/Games.vue';
import About from '../components/About.vue';
import MediaKit from '../components/MediaKit.vue';
import Contact from '../components/Contact.vue';
import PrivacyPolicy from '../components/PrivacyPolicy.vue';
import TermsOfUse from '../components/TermsOfUse.vue';
import NotFound from '../components/NotFound.vue';

const SITE = 'Fifth Edge Studios';
const ORIGIN = 'https://fifthedgestudios.com';

// All page code is ~13 KB gzipped, so it ships in one bundle: navigation never waits on a
// network round trip. Images still load only when their page renders.
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      description: 'Fifth Edge Studios is an independent game studio making fast, punchy 2D pixel-art games, including Boss Breaker, Slime Corp, and Runner Overdrive.',
    },
  },
  {
    path: '/games',
    name: 'Games',
    component: Games,
    meta: {
      title: 'Games',
      description: 'Runner Overdrive, Boss Breaker, Owlchemist, and Slime Corp: games by Fifth Edge Studios on Steam and itch.io.',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About',
      description: 'Fifth Edge Studios is a small team making 2D pixel-art games since 2019. Meet the team.',
    },
  },
  {
    path: '/press',
    name: 'Press Kit',
    component: MediaKit,
    meta: {
      title: 'Press Kit',
      description: 'Press kit for Fifth Edge Studios: fact sheets, screenshots, logos, and press contact.',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact',
      description: 'Get in touch with Fifth Edge Studios for press, business, and general inquiries.',
    },
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    component: PrivacyPolicy,
    meta: {
      title: 'Privacy Policy',
      description: 'How Fifth Edge Studios handles personal information on this website.',
    },
  },
  {
    path: '/terms',
    name: 'Terms of Use',
    component: TermsOfUse,
    meta: {
      title: 'Terms of Use',
      description: 'Terms governing use of the Fifth Edge Studios website.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: NotFound,
    meta: { title: 'Page Not Found', noindex: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

router.afterEach((to) => {
  const title = to.meta.title ? `${to.meta.title} | ${SITE}` : SITE;
  const url = ORIGIN + to.path;
  document.title = title;
  document.head.querySelector('link[rel="canonical"]').setAttribute('href', url);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:url', url);
  setMeta('name', 'twitter:title', title);
  if (to.meta.description) {
    setMeta('name', 'description', to.meta.description);
    setMeta('property', 'og:description', to.meta.description);
    setMeta('name', 'twitter:description', to.meta.description);
  }
  setMeta('name', 'robots', to.meta.noindex ? 'noindex' : 'index, follow');
});

export default router;
