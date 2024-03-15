import { createRouter, createWebHistory } from 'vue-router';
import RestaurantListView from '../views/RestaurantListView.vue';
import RestaurantDetailView from '../views/RestaurantDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'RestaurantList',
      component: RestaurantListView
    },
    {
      path: '/restaurant/:id',
      name: 'RestaurantDetail',
      component: RestaurantDetailView,
      props: true
    }
  ]
})

export default router
