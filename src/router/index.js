import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import DataView from '@/views/DataView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/data',
    name: 'data',
    component: DataView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' });
  } else if (to.name === 'login' && isAuthenticated) {
    next(false);
  } else {
    next();
  }
});

export default router;
