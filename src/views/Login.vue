<template>
    <div class="ui middle aligned center aligned grid">
        <div class="column">
            <img src="@/assets/logo.png" alt="Vue logo">
            <form class="ui large form">
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
                    <button class="ui fluid large submit button" @click="handleSubmit">Log in</button>
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
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();

            if (this.password.length > 0) {
                this.$http.post('login', {
                    username: this.username,
                    password: this.password
                }).then(response => {
                    console.log(response);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    localStorage.setItem('jwt', response.data.token);

                    if (localStorage.getItem('jwt') != null && this.$route.params.nextUrl != null) {
                        this.$router.push(this.$route.params.nextUrl);
                    }
                }).catch(error => {
                    console.error(error.response);
                })
            }
        }
    }
}
</script>