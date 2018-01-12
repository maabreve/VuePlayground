// ./src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Cart from '@/components/Cart';

// Admin Components
import Index from '@/components/admin/Index'
import New from '@/components/admin/New'
import Products from '@/components/admin/Products'
import Edit from '@/components/admin/Edit'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'Admin',

      // Parent routes still has a component
      component: Index,

      // Child routes
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    }
  ]
});