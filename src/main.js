import { createApp } from 'vue'
import App from './App.vue'
import ContentCard from './components/UI/ContentCard.vue';

const app = createApp(App);

app.component('content-card', ContentCard);

app.mount('#app');