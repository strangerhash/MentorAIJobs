import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/AppHome.vue';
import Dashboard from '../views/AppDashboard.vue';
import ResumeAnalyzer from '../views/ResumeAnalyzer.vue';
import LearningPaths from '../views/LearningPaths.vue';
import Mentors from '../views/AppMentors.vue';
import UserLogin from '../views/UserLogin.vue';
import UserRegister from '../views/UserRegister.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/resume-analyzer', name: 'ResumeAnalyzer', component: ResumeAnalyzer },
  { path: '/learning-paths', name: 'LearningPaths', component: LearningPaths },
  { path: '/mentors', name: 'Mentors', component: Mentors },
  { path: '/login', name: 'UserLogin',component: UserLogin },
  { path: '/register', name: 'UserRegister', component: UserRegister },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
