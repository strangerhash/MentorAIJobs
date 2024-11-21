import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/AppHome.vue';
import Dashboard from '../views/AppDashboard.vue';
import ResumeAnalyzer from '../views/ResumeAnalyzer.vue';
import LearningPaths from '../views/LearningPaths.vue';
import Mentors from '../views/AppMentors.vue';
import UserLogin from '../views/UserLogin.vue';
import UserRegister from '../views/UserRegister.vue';
import AdminDashboard from '../views/admin/AdminDashboard.vue';
import UserDashboard from '../views/users/UserDashboard.vue';

import BlogList from "../views/BlogList.vue";
import BlogDetail from "../views/BlogDetail.vue";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/resume-analyzer', name: 'ResumeAnalyzer', component: ResumeAnalyzer },
  { path: '/learning-paths', name: 'LearningPaths', component: LearningPaths },
  { path: '/mentors', name: 'Mentors', component: Mentors },
  { path: '/login', name: 'UserLogin', component: UserLogin },
  { path: '/register', name: 'UserRegister', component: UserRegister },
  { path: '/admin-dashboard', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/user-dashboard', name: 'UserDashboard', component: UserDashboard },

  {
    path: "/blogs",
    name: "BlogList",
    component: BlogList,
  },
  {
    path: "/blog/:id",
    name: "BlogDetail",
    component: BlogDetail,
    props: true,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guards
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (to.meta.requiresAuth && !token) {
    next({ name: 'UserLogin' });
  } else if (to.meta.role && to.meta.role !== role) {
    next({ name: 'UserLogin' }); // Redirect unauthorized users
  } else {
    next();
  }
});

export default router;
