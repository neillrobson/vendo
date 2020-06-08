<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => todo.done === true).length}}</p>
        <p>Current Tasks: {{todos.filter(todo => todo.done === false).length}}</p>
        <Todo v-on:delete-todo="deleteTodo" v-for="todo in todos" :todo="todo" :key="todo.id" />
    </div>
</template>

<script>
import Todo from "./Todo"

export default {
    props: ["todos"],

    components: {
        Todo
    },

    methods: {
        deleteTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        }
    }
}
</script>