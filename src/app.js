import { createSSRApp } from "vue";
import App from './App.vue';
import { createRouter } from "./router/index";

export function createApp(){
    const app = createSSRApp(App);
    const router = createRouter();
    app.use(router);
    return {app, router};
}