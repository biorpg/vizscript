import Ast from '@/views/Ast.vue';
import Code from '@/views/Code.vue';
import Viz from '@/views/Viz.vue';
import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/code',
    name: 'code',
    component: Code
  },
  {
    path: '/viz',
    name: 'viz',
    component: Viz
  },
  {
    path: '/ast',
    name: 'ast',
    component: Ast
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: 'code'
  }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
