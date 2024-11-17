import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome icons

createApp(App).use(router).mount('#app');
