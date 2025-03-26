import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Đúng cú pháp
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
const pinia = createPinia(); // Khởi tạo Pinia

app.use(pinia) // Đăng ký Pinia đúng cách
  .use(store)
  .use(router)
  .mount('#app');
