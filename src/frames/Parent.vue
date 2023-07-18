<template>
    <div class="container">
        <h2>Parent Iframe</h2>
        <p>
            The children will only render if this frame's parent is the
            top-level window. We don't want scary recursion.
        </p>
        <div class="frames">
            <iframe
                v-if="parentIsTop"
                src="/vendo/frame/parent"
                frameborder="0"></iframe>
            <iframe
                v-if="parentIsTop"
                src="/vendo/frame/basic"
                frameborder="0"></iframe>
        </div>
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
.frames {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

iframe {
    width: 100%;
    height: 50vh;
    border: 1px solid black;
}
</style>
