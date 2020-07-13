<template>
    <div class="container mx-auto px-6">
        <p v-if="errors.length">
            <strong>Please correct the following error(s):</strong>
            <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </p>
        <label for="username">Username (Visitor ID)</label>
        <input id="username" type="text" v-model="formUsername">
        <label for="role">Role (Account ID)</label>
        <input id="role" type="text" v-model="formRole">
        <label for="new-password">New Password</label>
        <input id="new-password" type="password" v-model="newPassword">
        <label for="new-password-retype">Retype</label>
        <input id="new-password-retype" type="password" v-model="newPasswordRetype">
        <label for="current-password">Current Password</label>
        <input id="current-password" type="password" v-model="currentPassword">
        <button class="button primary" type="submit" @click="submit">Submit</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { UPDATE } from '@/store/types/auth';

export default {
    data() {
        return {
            errors: [],
            formUsername: "",
            formRole: "",
            newPassword: "",
            newPasswordRetype: "",
            currentPassword: ""
        }
    },
    computed: mapGetters(['username', 'role']),
    mounted () {
        this.prefillUserData();
    },
    methods: {
        ...mapActions({
            editUser: UPDATE
        }),
        prefillUserData() {
            this.formUsername = this.username;
            this.formRole = this.role;
            this.newPassword = "";
            this.newPasswordRetype = "";
            this.currentPassword = "";
        },
        submit() {
            if (!this.validate()) {
                return;
            }
            const body = {
                currentPassword: this.currentPassword,
                userInfo: {
                    username: this.formUsername,
                    role: this.formRole,
                    password: this.newPassword
                }
            };
            this.editUser(body).then(() => {
                this.prefillUserData();
            }, err => {
                let res = err.response;
                if (res) {
                    this.errors.push(`Server returned ${res.status}: ${res.data}`);
                }
            });
        },
        validate() {
            this.errors = [];
            if (this.newPassword !== this.newPasswordRetype) {
                this.errors.push("Password fields do not match");
                return false;
            }
            return true;
        }
    }
}
</script>