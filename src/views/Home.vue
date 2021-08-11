<template>
    <div class="container">
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
                <button class="button primary cursor-not-allowed" disabled>Reset Users</button>
            </div>
            <div>
                Clear current user data and add the user
                <code>nerob</code> with password
                <code>letmein</code>.
                Currently, this action is unnecessary because we use fake user data from <a href="//ramdomuser.me">the Random User API</a>.
            </div>
        </div>
    </div>
</template>
