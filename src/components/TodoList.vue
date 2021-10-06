<template>
    <div>
        <p>Completed Tasks: {{ completedCount }}</p>
        <p>Current Tasks: {{ currentCount }}</p>
        <Todo
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo" />
        <CreateTodo />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Todo from './Todo';
import CreateTodo from './CreateTodo';

export default {
    components: {
        Todo,
        CreateTodo
    },
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
    }
};
</script>
