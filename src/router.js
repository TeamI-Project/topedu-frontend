import { createWebHistory, createRouter } from "vue-router";
import LoginComponent from './components/LoginComponent.vue';
import MainPage from './components/MainPage.vue';
import NewMemberRegistration from './components/NewMemberRegistration.vue';

const routes = [
    {
        path: "/",
        name: "LoginComponent",
        component: LoginComponent,
    },
    {
        path: "/mainpage",
        name: "MainPage",
        component: MainPage,
    },
    {
        path: "/newmemberregistration/:member",
        name: "NewMemberRegistration",
        component: NewMemberRegistration,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 