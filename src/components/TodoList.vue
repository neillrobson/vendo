<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => todo.done === true).length}}</p>
        <p>Current Tasks: {{todos.filter(todo => todo.done === false).length}}</p>
        <div class="ui centered card" v-for="todo in todos" :key="todo.id">
            <div class="content">
                <div class="header">{{ todo.title }}</div>
                <div class="meta">{{ todo.project }}</div>
                <div class="extra content"></div>
            </div>
            <div class="button"></div>
            <div class="button"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["todos"]
}
</script>

<style>

</style>