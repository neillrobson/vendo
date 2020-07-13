<template>
    <div class="w-64 mx-auto my-4 shadow-card rounded">
        <div class="p-4" v-show="!isEditing">
            <div class="font-bold text-lg my-1">{{ todo.title }}</div>
            <div class="text-sm text-gray-600">{{ todo.project }}</div>
            <div class="border-t border-gray-400 my-4"></div>
            <div class="ui buttons basic icon">
                <button :id="makeId('edit-todo')" class="ui button" @click="showForm">
                    <i class="edit icon"></i>
                </button>
                <button :id="makeId('delete-todo')" class="ui button" @click="deleteTodo(todo)">
                    <i class="trash icon"></i>
                </button>
            </div>
        </div>
        <div class="content" v-show="isEditing">
            <div class="ui form">
                <div class="field"><label :for="titleInputId">Title</label><input :id="titleInputId" type="text" v-model="todo.title"></div>
                <div class="field"><label :for="projectInputId">Project</label><input :id="projectInputId" type="text" v-model="todo.project"></div>
                <button :id="makeId('todo-edit-close')" class="ui basic blue button" @click="hideForm">
                    Close
                </button>
            </div>
        </div>
        <div :id="makeId('todo-completed')" class="ui bottom attached basic button green" v-show="todo.done">
            Completed
        </div>
        <div :id="makeId('todo-complete')" class="ui bottom attached basic button red" v-show="!todo.done" v-on:click="completeTodo(todo)">
            Complete
        </div>
    </div>
</template>

<script>
import { COMPLETE_TODO, DELETE_TODO } from '@/store/types/todo'

export default {
    props: ['todo'],

    data() {
        return {
            isEditing: false
        };
    },

    computed: {
        titleInputId() {
            return this.makeId('todo-title-input');
        },
        projectInputId() {
            return this.makeId('todo-project-input');
        }
    },

    methods: {
        makeId(prefix) {
            return prefix + '-' + this.todo.id;
        },

        showForm() {
            this.isEditing = true;
        },

        hideForm() {
            this.isEditing = false;
        },

        deleteTodo(todo) {
            this.$store.dispatch(DELETE_TODO, todo);
        },

        completeTodo(todo) {
            this.$store.dispatch(COMPLETE_TODO, todo);
        }
    }
}
</script>