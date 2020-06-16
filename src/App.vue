<template>
    <div id="app">
        <div id="nav">
            <router-link :to="{ name: 'Home' }">Home</router-link>
            | <router-link :to="{ name: 'Todo Application' }">Todo List</router-link>
            | <router-link :to="{ name: 'Account' }">My Account</router-link>
            <span v-if="!isLoggedIn">
                | <router-link :to="{ name: 'Login' }">Log In</router-link>
            </span>
            <span v-if="isLoggedIn">
                | <a @click="logOut">Log Out</a>
            </span>
        </div>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#nav {
    text-align: center;
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>

<script>
import { LOGOUT } from "./store/types/auth";
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters([
        'isLoggedIn'
    ]),
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