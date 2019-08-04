import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CreateCustomer from '@/components/CreateCustomer.vue';
import EditCustomer from '@/components/EditCustomer.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/create',
      name: 'create-customer',
      component: CreateCustomer,
    },
    {
      path: '/edit/:id',
      name: 'edit-customer',
      component: EditCustomer,
    },
  ],
});
