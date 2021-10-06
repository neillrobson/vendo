<template>
    <div class="container">
        <p v-if="errors.length">
            <strong>Please correct the following error(s):</strong>
            <ul>
                <li
                    v-for="(error, index) in errors"
                    :key="index">
                    {{ error }}
                </li>
            </ul>
        </p>
        <label for="username">Username (Visitor ID)</label>
        <input
            id="username"
            v-model="formUsername"
            type="text">
        <label for="role">Role (Account ID)</label>
        <input
            id="role"
            v-model="formRole"
            type="text">
        <label for="new-password">New Password</label>
        <input
            id="new-password"
            v-model="newPassword"
            type="password">
        <label for="new-password-retype">Retype</label>
        <input
            id="new-password-retype"
            v-model="newPasswordRetype"
            type="password">
        <label for="current-password">Current Password</label>
        <input
            id="current-password"
            v-model="currentPassword"
            type="password">
        <button
            class="button primary"
            type="submit"
            @click="submit">
            Submit
        </button>
        <hr class="my-4">
        <div class="flex gap-1">
            <span
                v-for="id in accounts"
                :key="id"
                :class="id"
                class="box link flex-auto border cursor-pointer text-center">{{ id }}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ACCOUNTS } from '@/store/constants';

export default {
    data() {
        return {
            errors: [],
            formUsername: '',
            formRole: '',
            newPassword: '',
            newPasswordRetype: '',
            currentPassword: '',
            accounts: ACCOUNTS
        };
    },
    computed: mapGetters(['visitorId', 'accountId']),
    mounted() {
        this.prefillUserData();
    },
    methods: {
        prefillUserData() {
            this.formUsername = this.visitorId;
            this.formRole = this.accountId;
            this.newPassword = '';
            this.newPasswordRetype = '';
            this.currentPassword = '';
        },
        submit() {
            if (!this.validate()) {
                return;
            }
            this.prefillUserData();
        },
        validate() {
            this.errors = [];
            if (this.newPassword !== this.newPasswordRetype) {
                this.errors.push('Password fields do not match');
                return false;
            }
            return true;
        }
    }
};
</script>
