
import * as VueRouter from 'vue-router';

const Index = () => import('../views/IndexPage')
const NewArticle = () => import('../views/NewArticle')
const EditArticle = () => import('../views/EditArticle')
const ShowArticle = () => import('../views/ShowArticle')


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
  
]



const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;