// import './assets/main.css'
import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/index";
import product from './views/SingleProductView.vue';
import products from './store/modules/product';

const app = createApp(App)

app.use(product)
app.use(store);
app.use(router).mount("#app");