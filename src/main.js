import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
// 使用#http替代axios
app.config.globalProperties.$http = axios;
app.use(router);
app.use(store);
app.use(Antd);
app.mount('#app');
