<template>
    <div class="card">
        <div class="card-content" v-show="!isEditing">
            <div class="title">{{ todo.title }}</div>
            <div class="subtitle">{{ todo.project }}</div>
            <div class="extra content">
                <b-icon icon="edit" @click.native="showForm" />
                <b-icon icon="trash" @click.native="deleteTodo(todo)" />
            </div>
        </div>
        <div class="card-content" v-show="isEditing">
            <b-field label="Title"><b-input v-model="todo.title" /></b-field>
            <b-field label="Project"><b-input v-model="todo.project" /></b-field>
            <b-button type="is-info" @click="hideForm">Close</b-button>
        </div>
        <b-button type="is-danger" outlined v-show="!todo.done" @click="completeTodo(todo)">Complete</b-button>
        <b-button type="is-success" outlined v-show="todo.done">Completed</b-button>
    </div>
</template>

<script>
export default {
    props: ['todo'],

    data() {
        return {
            isEditing: false
        };
    },

    methods: {
        showForm() {
            this.isEditing = true;
        },

        hideForm() {
            this.isEditing = false;
        },

        deleteTodo(todo) {
            this.$emit('delete-todo', todo);
        },

        completeTodo(todo) {
            this.$emit('complete-todo', todo);
        }
    }
}
</script>