<template>
    <div class="ui container segment">
        <p>Counter value: {{ count }}</p>
        <div class="ui buttons">
            <button class="ui button icon" @click="decrement">
                <i class="minus icon"></i>
            </button>
            <button class="ui button icon" @click="increment">
                <i class="plus icon"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        increment() {
            this.$store.commit("increment");
        },
        decrement() {
            this.$store.commit("decrement");
        }
    }
};
</script>