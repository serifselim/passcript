import { createRouter, createWebHistory } from "vue-router";
import { HomeView, GenerateView, HideView } from "../views";

const routes = [
    { path: '/', component: HomeView },
    { path: '/generate', component: GenerateView },
    { path: '/hide', component: HideView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router