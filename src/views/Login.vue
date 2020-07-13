<template>
    <div class="container mx-auto px-6">
        <img class="mx-auto" src="@/assets/logo.png" alt="Vue logo">
        <form @submit.prevent="handleSubmit">
            <div class="message" v-if="authStatus === STATUS_LOADING">
                Logging in...
            </div>
            <div class="message positive" v-if="authStatus === STATUS_SUCCESS">
                You are authenticated!
            </div>
            <div class="message negative" v-if="authStatus === STATUS_ERROR">
                Invalid credentials
            </div>
            <div class="card p-4">
                <div class="icon input">
                    <font-awesome-icon icon="user" />
                    <input type="text" name="username" placeholder="Username" v-model="username">
                </div>
                <div class="icon input">
                    <font-awesome-icon icon="lock" />
                    <input type="password" name="password" placeholder="Password" v-model="password">
                </div>
                <button class="primary button" type="submit">Log in</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.container {
    max-width: 450px;
}

.message {
    @apply p-3 mb-3 text-center rounded border bg-gray-100;
}

.message.positive {
    @apply bg-green-100 border-green-500 text-green-700;
}

.message.negative {
    @apply bg-red-100 border-red-500 text-red-700;
}

.icon.input {
    @apply relative mb-3;
}

.icon.input svg {
    @apply w-8 p-2 absolute h-full pointer-events-none left-0 opacity-50;
}

.icon.input input {
    @apply m-0 pl-8;
}
</style>

<script>
import { mapState } from 'vuex'
import { LOGIN, STATUS_SUCCESS, STATUS_LOADING, STATUS_ERROR } from '@/store/types/auth'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faLock)

export default {
    components: {
        FontAwesomeIcon
    },

    data() {
        return {
            username: "",
            password: "",
            STATUS_SUCCESS,
            STATUS_LOADING,
            STATUS_ERROR
        }
    },
    computed: mapState({
        authStatus: state => state.auth.status
    }),
    methods: {
        handleSubmit() {
            let username = this.username,
                password = this.password;
            this.$store.dispatch(LOGIN, {username, password}).then(() => {
                if (this.$route.params.nextUrl != null) {
                    this.$router.push(this.$route.params.nextUrl);
                } else {
                    this.$router.push('/');
                }
            }, () => {});
        }
    }
}
</script>