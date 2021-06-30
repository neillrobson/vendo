<template>
    <div class="container">
        <h1>Create an Account</h1>
        <p v-if="errors.length">
            <strong>Please correct the following error(s):</strong>
            <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </p>
        <p v-if="successes.length">
            <strong>Succeeded registering a new user. Status code(s):</strong>
            <ul>
                <li v-for="(success, index) in successes" :key="index">{{ success }}</li>
            </ul>
        </p>
        <label for="username">Username (Visitor ID)</label>
        <input id="username" type="text" v-model="username">
        <label for="role">Role (Account ID)</label>
        <input id="role" type="text" v-model="role">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
        <label for="password-retype">Retype</label>
        <input id="password-retype" type="password" v-model="passwordRetype">
        <button class="button primary" type="submit" @click="submit">Submit</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { REGISTER } from '@/store/types/auth';

export default {
    data() {
        return {
            errors: [],
            successes: [],
            username: '',
            role: '',
            password: '',
            passwordRetype: ''
        };
    },
    mounted() {
        this.resetForm();
    },
    methods: {
        ...mapActions({
            register: REGISTER
        }),
        resetForm() {
            this.username = '';
            this.role = '';
            this.password = '';
            this.passwordRetype = '';
            this.currentPassword = '';
        },
        submit() {
            if (!this.validate()) {
                return;
            }
            const body = {
                username: this.username,
                role: this.role,
                password: this.password
            };
            this.register(body).then((response) => {
                this.successes.push(`${this.username}: ${response}`);
                this.resetForm();
            }, err => {
                const res = err.response;
                if (res) {
                    this.errors.push(`Server returned ${res.status}: ${res.data}`);
                }
            });
        },
        validate() {
            this.errors = [];
            if (this.password !== this.passwordRetype) {
                this.errors.push('Password fields do not match');
                return false;
            }
            return true;
        }
    }
};
</script>
