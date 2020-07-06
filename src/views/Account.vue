<template>
    <div class="ui container form">
        <p v-if="errors.length">
            <strong>Please correct the following error(s):</strong>
            <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        <div class="field">
            <label for="username">Username (Visitor ID)</label>
            <input id="username" type="text" v-model="formUsername">
        </div>
        <div class="field">
            <label for="role">Role (Account ID)</label>
            <input id="role" type="text" v-model="formRole">
        </div>
        <div class="two fields">
            <div class="field">
                <label for="new-password">New Password</label>
                <input id="new-password" type="password" v-model="newPassword">
            </div>
            <div class="field">
                <label for="new-password-retype">Retype</label>
                <input id="new-password-retype" type="password" v-model="newPasswordRetype">
            </div>
        </div>
        <div class="field">
            <label for="current-password">Current Password</label>
            <input id="current-password" type="password" v-model="currentPassword">
        </div>
        <button class="ui button" type="submit" @click="submit">Submit</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
    methods: {
        submit() {
            if (this.validate()) {
                alert("You're all good!");
            }
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