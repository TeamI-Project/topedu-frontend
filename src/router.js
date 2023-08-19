import { createWebHistory, createRouter } from "vue-router";
import LoginComponent from './components/LoginComponent.vue';
import MainPage from './components/MainPage.vue';

const routes = [
    {
        path: "/",
        component: LoginComponent,
    },
    {
        path: "/mainpage",
        component: MainPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 