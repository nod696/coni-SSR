import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({

  base: '/coni/',
  server: {
    host: true,
    port: 4173,
    proxy: {
      '/courts/chkalovskiy': {
          target: 'https://chkalovsky--svd.sudrf.ru',
          changeOrigin: true,
         rewrite: (path) => path.replace('/courts/chkalovskiy', ''),
        },
        '/courts/verh-isetskiy': {
          target: 'https://verhisetsky--svd.sudrf.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace('/courts/verh-isetskiy', '')
        },
        '/courts/kirovskiy': {
          target: 'https://kirovsky--svd.sudrf.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace('/courts/kirovskiy', '')
        },
        '/courts/leninskiy': {
          target: 'https://leninskyeka--svd.sudrf.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace('/courts/leninskiy', '')
        },
        '/courts/ordzhonikidzevskiy': {
          target: 'https://ordzhonikidzevsky--svd.sudrf.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace('/courts/ordzhonikidzevskiy', '')
        },
        '/courts/octyabrskiy': {
          target: 'https://oktiabrsky--svd.sudrf.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace('/courts/octyabrskiy', '')
        },
        '/courts/zheleznodorozhniy': {
          target: 'https://zheleznodorozhny--svd.sudrf.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace('/courts/zheleznodorozhniy', '')
        },
  },
  },
  preview: {
    host: true,
    port: 8080,
    proxy: {
      '/courts/chkalovskiy': {
          target: 'https://chkalovsky--svd.sudrf.ru',
          changeOrigin: true,
         rewrite: (path) => path.replace('/courts/chkalovskiy', ''),
        },
        '/courts/verh-isetskiy': {
          target: 'https://verhisetsky--svd.sudrf.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace('/courts/verh-isetskiy', '')
        },
        '/courts/kirovskiy': {
          target: 'https://kirovsky--svd.sudrf.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace('/courts/kirovskiy', '')
        },
        '/courts/leninskiy': {
          target: 'https://leninskyeka--svd.sudrf.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace('/courts/leninskiy', '')
        },
        '/courts/ordzhonikidzevskiy': {
          target: 'https://ordzhonikidzevsky--svd.sudrf.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace('/courts/ordzhonikidzevskiy', '')
        },
        '/courts/octyabrskiy': {
          target: 'https://oktiabrsky--svd.sudrf.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace('/courts/octyabrskiy', '')
        },
        '/courts/zheleznodorozhniy': {
          target: 'https://zheleznodorozhny--svd.sudrf.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace('/courts/zheleznodorozhniy', '')
        },
  },
  },
  build: {

  },
  plugins: [vue()]
})
