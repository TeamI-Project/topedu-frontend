import { createWebHistory, createRouter } from "vue-router";
import LoginComponent from './components/LoginComponent.vue';
import MainPage from './components/MainPage.vue';
import NewMemberRegistration from './components/NewMemberRegistration.vue';
import StudentDetailPage from './components/StudentDetailPage.vue';
import DetailComponent5Update from './components/DetailComponent5Update.vue';
import DetailComponent4Update from './components/DetailComponent4Update.vue';
import DetailComponent3Update from './components/DetailComponent3Update.vue';
import DetailComponent2Update from './components/DetailComponent2Update.vue';
import DetailComponent1Update from './components/DetailComponent1Update.vue';


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
    },
    {
        path: "/studentdetailpage/:id",
        name: "StudentDetailPage",
        component: StudentDetailPage,
    },
    {
        path: "/DetailComponent1Update",
        name: "DetailComponent1Update",
        component: DetailComponent1Update,
    },
    {
        path: "/DetailComponent2Update",
        name: "DetailComponent2Update",
        component: DetailComponent2Update,
    },
    {
        path: "/DetailComponent3Update",
        name: "DetailComponent3Update",
        component: DetailComponent3Update,
    },
    {
        path: "/DetailComponent4Update",
        name: "DetailComponent4Update",
        component: DetailComponent4Update,
    },
    {
        path: "/DetailComponent5Update",
        name: "DetailComponent5Update",
        component: DetailComponent5Update,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 