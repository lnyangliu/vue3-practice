import { createApp } from 'vue';
import { DatePicker } from 'ant-design-vue';
import App from './App.vue';
import router from './routes/index';

const app = createApp(App);
app.use(router);
app.use(DatePicker);
app.mount('#app');
