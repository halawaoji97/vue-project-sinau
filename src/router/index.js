import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailUser from '@/components/DetailUser.vue';
import CreateEditUser from '@/components/CreateEditUser.vue';
import CreateEditUserPost from '@/components/CreateEditUserPost.vue';
// import ModalConfirm from '@/components/ModalConfirm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/view/:id',
      name: 'View',
      component: DetailUser,
      props: true,
    },
    {
      path: '/user/create',
      name: 'Create',
      component: CreateEditUser,
      props: true,
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: CreateEditUser,
      props: true,
    },
    {
      path: '/create-user-post',
      name: 'CreateUserPost',
      component: CreateEditUserPost,
      props: true,
    },
    {
      path: '/users',
      name: 'Users',
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   console.log(to);
//   console.log(from);
//   next();
// });

export default router;
