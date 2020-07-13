<template>
    <div class="w-64 mx-auto my-4 border border-gray-400 shadow rounded">
        <div class="p-4" v-show="!isEditing">
            <div class="font-bold text-lg my-1">{{ todo.title }}</div>
            <div class="text-sm text-gray-600">{{ todo.project }}</div>
            <div class="border-t border-gray-400 my-4"></div>
            <div class="border border-gray-400 rounded inline-flex">
                <button :id="makeId('edit-todo')" class="p-2 text-sm opacity-75 hover:opacity-100" @click="showForm">
                    <font-awesome-icon icon="edit" fixed-width />
                </button>
                <button :id="makeId('delete-todo')" class="p-2 text-sm opacity-75 hover:opacity-100 border-l border-gray-400" @click="deleteTodo(todo)">
                    <font-awesome-icon icon="trash" fixed-width />
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
        <div :id="makeId('todo-completed')" class="py-2 text-sm text-green-500 border border-green-500 rounded-b -m-px cursor-pointer" v-show="todo.done">
            Completed
        </div>
        <div :id="makeId('todo-complete')" class="py-2 text-sm text-red-600 border border-red-600 rounded-b -m-px cursor-pointer" v-show="!todo.done" v-on:click="completeTodo(todo)">
            Complete
        </div>
    </div>
</template>

<script>
import { COMPLETE_TODO, DELETE_TODO } from '@/store/types/todo'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faTrash)

export default {
    components: {
        FontAwesomeIcon
    },

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