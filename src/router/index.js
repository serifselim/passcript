import { createRouter, createWebHistory } from "vue-router";
import { ListView, HomeView, GenerateView, HideView } from "../views";

const routes = [
    { path: '/', component: HomeView },
    { path: '/generate', component: GenerateView },
    { path: '/hide', component: HideView },
    { path: '/list', component: ListView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router