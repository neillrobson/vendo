<template>
    <div class="container mx-auto px-6">
        <h1>Welcome to Vendo</h1>
        <p>
            Vendo is a programming sandbox that
            <a href="https://neillrobson.com">Neill</a> is using to learn about
            <a href="https://vuejs.org">Vue</a> and
            <a href="https://pendo.io">Pendo</a>.
        </p>
        <p>
            You might notice the fairly rigorous user authentication functionality implemented on this site. Rest assured, it is all
            <strong>completely bogus</strong>: all user data is getting stored quite simply in the browser's local storage, and the "backend server" is simply a Javascript file mocking an API. The only true server receiving any data is operated by Pendo itself.
        </p>
        <p>
            That said, have fun hacking around with abandon. Please break this site and
            <a href="https://github.com/neillrobson/vendo/issues">let me know about it</a>, so that I can learn and grow!
        </p>
        <h2>Housekeeping</h2>
        <div class="grid grid-cols-2 items-center">
            <div>
                <button class="button primary" @click="resetUsers">Reset Users</button>
            </div>
            <div>
                Clear current user data and add the user
                <code>nerob</code> with password
                <code>letmein</code>.
            </div>
        </div>
    </div>
</template>

<script>
import { LOCAL_STORAGE_KEY } from '@/scripts/mock-backend.js';
import bcrypt from 'bcryptjs';

const DEFAULT_USERS = {
    nerob: {
        username: 'nerob',
        password: bcrypt.hashSync('letmein', 10),
        role: 'user'
    }
};

export default {
    methods: {
        resetUsers() {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
        }
    }
};
</script>
