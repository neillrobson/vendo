<template>
    <div>
        <button
            v-show="!isCreating"
            id="open-new-todo-form"
            class="button icon"
            @click="openForm">
            <font-awesome-icon icon="plus" />
        </button>
        <div
            v-show="isCreating"
            class="card">
            <div class="p-4">
                <label
                    id="new-todo-title-label"
                    for="new-todo-title">Title</label>
                <input
                    id="new-todo-title"
                    v-model="titleText"
                    type="text">
                <label
                    id="new-todo-project-label"
                    for="new-todo-project">Project</label>
                <input
                    id="new-todo-project"
                    v-model="projectText"
                    type="text">
            </div>
            <div class="divider m-0" />
            <div class="p-4">
                <div class="buttons">
                    <button
                        id="create-new-todo"
                        class="blue button"
                        @click="sendForm">
                        Create
                    </button>
                    <button
                        id="close-new-todo-form"
                        class="red button"
                        @click="closeForm">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { CREATE_TODO } from '@/store/types/todo';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus);

export default {
    components: {
        FontAwesomeIcon
    },

    data() {
        return {
            titleText: '',
            projectText: '',
            isCreating: false
        };
    },

    methods: {
        openForm() {
            this.isCreating = true;
        },

        closeForm() {
            this.isCreating = false;
        },

        sendForm() {
            if (this.titleText.length > 0 && this.projectText.length > 0) {
                const title = this.titleText;
                const project = this.projectText;
                this.$store.dispatch(CREATE_TODO, { title, project, done: false });
                this.titleText = '';
                this.projectText = '';
            }
            this.closeForm();
        }
    }
};
</script>
