import { createRouter as _createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import MainPage from "../components/main/main-page.vue"


const routes: {path: string, name: string, component: Object}[] = [
  {
    path: "/coni/",
    name: "Main",
    component: MainPage,
  },
  {
    path: '/courts',
    name: 'Courts',
    component: () => import('../components/courts/courts-compo.vue'),
  },
  {
    path: '/samples',
    name: 'Samples',
    component: () => import('../components/samples/samples-compo.vue'),
  },
  {
    path: '/samples/:routing',
    name: 'Sample',
    component: () => import('../components/samples/sample-compo.vue'),
  },
  {
    path: '/loads',
    name: 'Load',
    component: () => import('../components/load/load-compo.vue'),
  },
  {
    path: '/courts/:routing',
    name: "CourtCompo",
    component: () => import('../components/courts/court-compo.vue'),
  }
]

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR
      ? createMemoryHistory('/')
      : createWebHistory('/'),
    routes
  })
}
