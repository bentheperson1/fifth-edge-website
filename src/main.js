// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

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

app.use(router);
app.mount('#app');
