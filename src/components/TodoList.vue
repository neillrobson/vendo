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
import { mapState } from 'vuex'
import Todo from "./Todo"
import CreateTodo from "./CreateTodo"

export default {
    computed: {
        ...mapState({
            todos: state => state.todo.todos
        }),

        completedCount() {
            return this.todos.filter(todo => todo.done).length;
        },

        currentCount() {
            return this.todos.filter(todo => !todo.done).length;
        }
    },

    components: {
        Todo,
        CreateTodo
    }
}
</script>