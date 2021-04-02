import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import NewPassword from '../views/NewPassword.vue';
import ReadingList from '../views/ReadingList.vue';
import AddBook from '../views/AddBook.vue';

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/cadastro', name: 'Register', component: Register },
  { path: '/novaSenha', name: 'NewPassword', component: NewPassword },
  { path: '/lista', name: 'ReadingList', component: ReadingList },
  { path: '/adicionar', name: 'AddBook', component: AddBook },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
