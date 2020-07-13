<template>
    <div class="container mx-auto px-6 text-center">
        <img class="mx-auto" alt="Vue logo" src="../assets/logo.png">
        <TodoList />
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
    components: {
        TodoList
    }
}
</script>

<style lang="postcss" scoped>
.container {
    max-width: 450px;
}
</style>