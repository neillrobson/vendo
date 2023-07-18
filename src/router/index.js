import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import Nav from '@/layouts/Nav';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: {
            layout: Nav
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import(/* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: {
            layout: Nav
        }
    },
    {
        path: '/todo-app',
        name: 'Todos',
        component: () =>
            import(
                /* webpackChunkName: "todo-application" */ '../views/TodoApplication.vue'
            ),
        meta: {
            layout: Nav,
            requiresAuth: true
        }
    },
    {
        path: '/account',
        name: 'Account',
        component: () =>
            import(/* webpackChunkName: "account" */ '../views/Account.vue'),
        meta: {
            layout: Nav,
            requiresAuth: true
        }
    },
    {
        path: '/timezone',
        name: 'Timespans',
        component: () => import('../views/Timezone.vue'),
        meta: {
            layout: Nav
        }
    },
    {
        path: '/guide',
        name: 'Guide Sandbox',
        component: () => import('../views/GuideSandbox.vue'),
        meta: {
            layout: Nav
        }
    },
    {
        path: '/frame/basic',
        name: 'Basic Iframe',
        component: () => import('../frames/Basic.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, _from, next) => {
    if (
        to.matched.some((record) => record.meta.requiresAuth) &&
        !store.getters.isLoggedIn
    ) {
        next({
            name: 'Login',
            params: { nextUrl: to.fullPath }
        });
    } else {
        next();
    }
});

export default router;
