import { renderToString } from 'vue/server-renderer';
import { createApp } from './app';

export async function render(url){
    const { app, router } = createApp();

    await router.push(url);
    await router.isReady();

    const html = renderToString(app).then((html) => {
        return html;
    })
    return html;
}