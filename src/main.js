import { createApp } from 'vue'
import App from './App.vue'
import ContentCard from './components/UI/ContentCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseModal from './components/UI/BaseModal.vue';

const app = createApp(App);

app.component('content-card', ContentCard);
app.component('base-button', BaseButton);
app.component('base-modal', BaseModal);

app.mount('#app');