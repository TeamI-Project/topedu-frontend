import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import "v-calendar/dist/style.css";
import VCalendar from "v-calendar";

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(router).use(vuetify).use(VCalendar, {}).mount('#app');
