<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => todo.done === true).length}}</p>
        <p>Current Tasks: {{todos.filter(todo => todo.done === false).length}}</p>
        <Todo v-for="todo in todos" :todo="todo" :key="todo.id" />
    </div>
</template>

<script>
import Todo from "./Todo"

export default {
    props: ["todos"],
    components: {
        Todo
    }
}
</script>