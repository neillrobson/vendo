<template>
    <div>
        <button id="open-new-todo-form" class="button icon" v-on:click="openForm" v-show="!isCreating">
            <font-awesome-icon icon="plus" />
        </button>
        <div class="card" v-show="isCreating">
            <div class="p-4">
                <label for="new-todo-title">Title</label>
                <input id="new-todo-title" type="text" v-model="titleText">
                <label for="new-todo-project">Project</label>
                <input id="new-todo-project" type="text" v-model="projectText">
            </div>
            <div class="divider m-0"></div>
            <div class="p-4">
                <div class="buttons">
                    <button id="create-new-todo" class="blue button" v-on:click="sendForm">Create</button>
                    <button id="close-new-todo-form" class="red button" v-on:click="closeForm">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { CREATE_TODO } from '@/store/types/todo'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

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
                this.$store.dispatch(CREATE_TODO, {title, project, done: false});
                this.titleText = '';
                this.projectText = '';
            }
            this.closeForm();
        }
    }
}
</script>