// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Games from '../components/Games.vue';
import Contact from '../components/Contact.vue';
import MediaKit  from '@/components/MediaKit.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/games', name: 'Games', component: Games },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/press', name: 'Press Kit', component: MediaKit}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
