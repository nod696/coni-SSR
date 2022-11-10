import express from 'express';
import fs from 'node:fs';
import path from 'node:path';

import { createServer as createViteServer } from 'vite';

const server = express();

const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
});


server.use(vite.middlewares);

server.use('*', async(req,res) => {
    let template;
    const url = req.originalUrl;
    template = fs.readFileSync(
        path.resolve('index.html'),
        'utf-8'
    );
    template = await vite.transformIndexHtml(url, template);

    const {render} = await vite.ssrLoadModule('/src/server-entry.js');
    const appHtml = await render(url);
    const html = template.replace(`<!--SSR-->`, appHtml);
    res.status(200).set({'Content-Type': 'text/html'}).end(html);
});

server.listen(3000, () => {
    console.log('ready');
});

