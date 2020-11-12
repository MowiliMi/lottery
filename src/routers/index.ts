import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Homepage from '@views/page/Homepage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/:lottery',
    name: 'Lottery',
    component: () => import('@views/page/LotteryDetails.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes,
});

export default router;
