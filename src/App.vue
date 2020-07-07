<template>
    <div id="app">
        <div id="nav" class="p-8 text-center">
            <router-link :to="{ name: 'Home' }" class="router-link">Home</router-link>
            | <router-link :to="{ name: 'Todo Application' }" class="router-link">Todo List</router-link>
            | <router-link :to="{ name: 'Account' }" class="router-link">My Account</router-link>
            <span v-if="!isLoggedIn">
                | <router-link :to="{ name: 'Login' }" class="router-link">Log In</router-link>
            </span>
            <span v-if="isLoggedIn">
                | <a @click="logOut" class="router-link">Log Out</a>
            </span>
        </div>
        <router-view />
    </div>
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
    @apply font-sans;
    @apply antialiased;
    @apply text-gray-800;
}

#nav .router-link {
    @apply font-bold;
    @apply cursor-pointer;
}

#nav .router-link.router-link-exact-active {
    @apply text-green-500;
}
</style>

<script>
import { LOGOUT, PENDO_IDENTIFY } from "./store/types/auth";
import { mapGetters, mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState({
            token: state => state.auth.token
        }),
        ...mapGetters([
            'isLoggedIn'
        ])
    },
    methods: {
        ...mapActions({
            pendoIdentify: PENDO_IDENTIFY
        }),
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
    },
    mounted() {
        if (this.isLoggedIn) {
            this.pendoIdentify();
        }
    }
};
</script>