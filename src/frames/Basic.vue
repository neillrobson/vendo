<template>
    <div class="container">
        <h2>Basic Iframe</h2>
        <p>Hello World</p>
        <iframe
            v-if="parentIsTop"
            src="/vendo/frame/basic"
            frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    },
    computed: {
        parentIsTop() {
            return window.parent === window.top;
        }
    },
    watch: {},
    methods: {}
};
</script>

<style lang="postcss" scoped>
iframe {
    margin: auto;
    width: 80%;
    height: 50vh;
    border: 1px solid black;
}
</style>
