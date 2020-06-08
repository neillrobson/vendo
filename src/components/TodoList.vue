<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => todo.done === true).length}}</p>
        <p>Current Tasks: {{todos.filter(todo => todo.done === false).length}}</p>
        <div class="ui centered card" v-for="todo in todos" :key="todo.id">
            <div class="content">
                <div class="header">{{ todo.title }}</div>
                <div class="meta">{{ todo.project }}</div>
                <div class="extra content">
                    <span class="right floated edit icon"><i class="edit icon"></i></span>
                </div>
            </div>
            <div class="ui bottom attached basic button green" v-show="todo.done">
                Completed
            </div>
            <div class="ui bottom attached basic button red" v-show="!todo.done">
                Complete
            </div>
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