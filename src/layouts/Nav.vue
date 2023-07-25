<template>
    <div id="layout-nav">
        <div id="nav" class="p-8 text-center">
            <router-link :to="{ name: 'Home' }" class="router-link">
                Home
            </router-link>
            |
            <router-link :to="{ name: 'O\'Rly' }" class="router-link">
                O'Rly Generator
            </router-link>
            |
            <router-link :to="{ name: 'Timespans' }" class="router-link">
                Timespans
            </router-link>
            |
            <router-link :to="{ name: 'Guide Sandbox' }" class="router-link">
                Guide Sandbox
            </router-link>
            |
            <router-link :to="{ name: 'Account' }" class="router-link">
                My Account
            </router-link>
            <span v-if="!isLoggedIn">
                |
                <router-link :to="{ name: 'Login' }" class="router-link"
                    >Log In</router-link
                >
            </span>
            <span v-if="isLoggedIn">
                | <a class="router-link" @click="logOut">Log Out</a> |
                <span class="user">{{ visitorId }}</span>
                <span class="account">{{ accountId }}</span>
            </span>
        </div>
        <slot />
    </div>
</template>

<script>
import { LOGOUT } from '@/store/types/auth';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['isLoggedIn', 'visitorId', 'accountId'])
    },
    methods: {
        logOut() {
            this.$store.dispatch(LOGOUT).then(() => {
                if (this.$route.meta.requiresAuth) {
                    this.$router.push({
                        name: 'Login',
                        params: { nextUrl: this.$route.fullPath }
                    });
                }
            });
        }
    }
};
</script>

<style lang="postcss" scoped>
@import '@/style/main.css';
@import '@/style/colors.css';

.router-link {
    @apply font-bold cursor-pointer;
    color: inherit;
}

.router-link-exact-active {
    @apply text-green-500;
}
</style>
