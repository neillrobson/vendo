<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => todo.done === true).length}}</p>
        <p>Current Tasks: {{todos.filter(todo => todo.done === false).length}}</p>
        <Todo v-on:delete-todo="deleteTodo" v-for="todo in todos" :todo="todo" :key="todo.id" />
        <CreateTodo v-on:create-todo="createTodo" />
    </div>
</template>

<script>
import Todo from "./Todo"
import CreateTodo from "./CreateTodo"

export default {
    props: ["todos"],

    components: {
        Todo,
        CreateTodo
    },

    methods: {
        deleteTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },

        createTodo(todo) {
            const newId = this.todos.map(todo => todo.id).reduce((a,b) => Math.max(a,b)) + 1;
            todo.id = newId;
            this.todos.push(todo);
        }
    }
}
</script>