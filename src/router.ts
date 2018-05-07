import Vue from 'vue';
import Router from 'vue-router';
import Edatailers from '@/views/Edetailers.vue';
import Emails from '@/views/Emails.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Edatailers',
      component: Edatailers,
    },
    {
      path: '/emails',
      name: 'Emails',
      component: Emails,
    },
  ],
});
