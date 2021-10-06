<template>
    <div class="card">
        <div
            v-show="!isEditing"
            class="p-4">
            <div class="font-bold text-lg my-1">
                {{ title }}
            </div>
            <div class="text-sm text-gray-600">
                {{ project }}
            </div>
            <div class="divider" />
            <div class="buttons">
                <button
                    :id="makeId('edit-todo')"
                    class="button icon"
                    @click="showForm">
                    <font-awesome-icon
                        icon="edit"
                        fixed-width />
                </button>
                <button
                    :id="makeId('delete-todo')"
                    class="button icon"
                    @click="deleteTodo(todo.id)">
                    <font-awesome-icon
                        icon="trash"
                        fixed-width />
                </button>
            </div>
        </div>
        <div
            v-show="isEditing"
            class="p-4">
            <label
                :id="`label-${titleInputId}`"
                :for="titleInputId">Title</label>
            <input
                :id="titleInputId"
                v-model="title"
                type="text">
            <label
                :id="`label-${projectInputId}`"
                :for="projectInputId">Project</label>
            <input
                :id="projectInputId"
                v-model="project"
                type="text">
            <button
                :id="makeId('todo-edit-close')"
                class="blue button"
                @click="hideForm">
                Close
            </button>
        </div>
        <div
            v-show="todo.done"
            :id="makeId('todo-completed')"
            class="button attached green">
            Completed
        </div>
        <div
            v-show="!todo.done"
            :id="makeId('todo-complete')"
            class="button attached red"
            @click="completeTodo(todo.id)">
            Complete
        </div>
    </div>
</template>

<script>
import { COMPLETE_TODO, DELETE_TODO, EDIT_TODO } from '@/store/types/todo';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faTrash);

export default {
    components: {
        FontAwesomeIcon
    },

    props: {
        todo: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            isEditing: false
        };
    },

    computed: {
        title: {
            get() {
                return this.todo.title;
            },
            set(title) {
                this.editTodo(Object.assign({}, this.todo, { title }));
            }
        },
        project: {
            get() {
                return this.todo.project;
            },
            set(project) {
                this.editTodo(Object.assign({}, this.todo, { project }));
            }
        },
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

        editTodo(todo) {
            this.$store.dispatch(EDIT_TODO, todo);
        },

        deleteTodo(id) {
            this.$store.dispatch(DELETE_TODO, id);
        },

        completeTodo(id) {
            this.$store.dispatch(COMPLETE_TODO, id);
        }
    }
};
</script>
