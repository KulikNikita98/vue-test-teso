import Vue from 'vue';
import VueRouter from 'vue-router';
import BookAddPage from '@/pages/BookAddPage.vue';
import BookEditPage from '@/pages/BookEditPage.vue';
import MainPage from '@/pages/MainPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },

  {
    path: '/add',
    name: 'add',
    component: BookAddPage,
  },

  {
    path: '/edit/:id',
    name: 'edit',
    component: BookEditPage,
  },

  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFoundPage,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
