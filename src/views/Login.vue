<template>
    <div class="container">
        <img
            class="mx-auto"
            src="@/assets/logo.png"
            alt="Vue logo">
        <form @submit.prevent="handleSubmit">
            <div
                v-if="authStatus === STATUS_LOADING"
                class="message">
                Logging in...
            </div>
            <div
                v-if="authStatus === STATUS_SUCCESS"
                class="message positive">
                You are authenticated!
            </div>
            <div
                v-if="authStatus === STATUS_ERROR"
                class="message negative">
                Invalid credentials
            </div>
            <div class="card p-4">
                <div class="icon input">
                    <font-awesome-icon icon="user" />
                    <input
                        v-model="username"
                        type="text"
                        name="username"
                        placeholder="Username">
                </div>
                <div class="icon input">
                    <font-awesome-icon icon="lock" />
                    <input
                        v-model="password"
                        type="password"
                        name="password"
                        placeholder="Password">
                </div>
                <button
                    class="primary button"
                    type="submit">
                    Log in
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { LOGIN, STATUS_SUCCESS, STATUS_LOADING, STATUS_ERROR } from '@/store/types/auth';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faLock);

export default {
    components: {
        FontAwesomeIcon
    },

    data() {
        return {
            username: '',
            password: '',
            STATUS_SUCCESS,
            STATUS_LOADING,
            STATUS_ERROR
        };
    },
    computed: mapState({
        authStatus: state => state.auth.status
    }),
    methods: {
        ...mapActions({
            login: LOGIN
        }),
        async handleSubmit() {
            try {
                await this.login();

                if (this.$route.params.nextUrl != null) {
                    this.$router.push(this.$route.params.nextUrl);
                } else {
                    this.$router.push('/');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style lang="postcss" scoped>
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
