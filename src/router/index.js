
import * as VueRouter from 'vue-router';

const Index = () => import('../views/IndexPage')
const NewArticle = () => import('../views/NewArticle')
const EditArticle = () => import('../views/EditArticle')
const ShowArticle = () => import('../views/ShowArticle')
const LoginPage = () => import('../views/LoginPage')
const RegisterPage = () => import('../views/RegisterPage')


const routes= [
    
  {
    path: '/', 
    name: 'index', 
    component: Index
  },
  {
    path: '/new',
    name: 'new article',
    component: NewArticle
  },
  {
    path: '/article/:id',
    name: 'edit article',
    component: EditArticle
  },
  {
    path: '/show/:id',
    name: 'show',
    component: ShowArticle,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  }
  
]



const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;