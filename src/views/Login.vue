<template>
    <div class="ui middle aligned center aligned grid">
        <div class="column">
            <img src="@/assets/logo.png" alt="Vue logo">
            <form class="ui large form" @submit.prevent="handleSubmit">
                <div class="ui message" v-if="authStatus === STATUS_LOADING">
                    <p>Logging in...</p>
                </div>
                <div class="ui message positive" v-if="authStatus === STATUS_SUCCESS">
                    <p>You are authenticated!</p>
                </div>
                <div class="ui message negative" v-if="authStatus === STATUS_ERROR">
                    <p>Invalid credentials</p>
                </div>
                <div class="ui stacked segment">
                    <div class="field">
                        <div class="ui left icon input">
                            <i class="icon user"></i>
                            <input type="text" name="username" placeholder="Username" v-model="username">
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui left icon input">
                            <i class="icon lock"></i>
                            <input type="password" name="password" placeholder="Password" v-model="password">
                        </div>
                    </div>
                    <button class="ui fluid large submit button" type="submit">Log in</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .column {
        max-width: 450px;
    }
</style>

<script>
import { mapState } from 'vuex'
import { LOGIN, STATUS_SUCCESS, STATUS_LOADING, STATUS_ERROR } from '@/store/types/auth'

export default {
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