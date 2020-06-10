<template>
    <div>
        <p>Completed Tasks: {{ completedCount }}</p>
        <p>Current Tasks: {{ currentCount }}</p>
        <Todo
            v-for="todo in todos"
            :todo="todo"
            :key="todo.id"
            />
        <CreateTodo />
    </div>
</template>

<script>
import Todo from "./Todo"
import CreateTodo from "./CreateTodo"

export default {
    computed: {
        todos() {
            return this.$store.state.todos;
        },

        completedCount() {
            return this.$store.state.todos.filter(todo => todo.done).length;
        },

        currentCount() {
            return this.$store.state.todos.filter(todo => !todo.done).length;
        }
    },

    components: {
        Todo,
        CreateTodo
    }
}
</script>