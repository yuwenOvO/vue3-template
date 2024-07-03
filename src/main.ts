import './assets/style/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import i18n from './lang';
import customComponents from './components/index';

import 'virtual:svg-icons-register';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(customComponents);

app.mount('#app');
