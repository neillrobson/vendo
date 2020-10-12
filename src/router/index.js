import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/todo-app',
        name: 'Todo Application',
        component: () => import(/* webpackChunkName: "todo-application" */ '../views/TodoApplication.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, _from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isLoggedIn) {
        next({
            name: 'Login',
            params: { nextUrl: to.fullPath }
        });
    } else {
        next();
    }
});

export default router;