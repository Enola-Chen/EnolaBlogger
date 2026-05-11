import { createRouter, createWebHistory } from 'vue-router';
import PortfolioLayout from '@/layouts/PortfolioLayout.vue';
import HomeView from '@/views/HomeView.vue';
import ProjectDetailView from '@/views/ProjectDetailView.vue';
import WorksView from '@/views/WorksView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PortfolioLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'projects/:slug',
          name: 'project-detail',
          component: ProjectDetailView,
          props: true,
        },
        {
          path: 'works',
          name: 'works',
          component: WorksView,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 0,
      };
    }
    return { top: 0 };
  },
});

export default router;
