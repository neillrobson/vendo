<template>
    <div>
        <button id="open-new-todo-form" class="ui basic button icon" v-on:click="openForm" v-show="!isCreating">
            <i class="plus icon"></i>
        </button>
        <div class="ui centered card" v-show="isCreating">
            <div class="content">
                <div class="ui form">
                    <div class="field">
                        <label for="new-todo-title">Title</label>
                        <input id="new-todo-title" type="text" v-model="titleText">
                    </div>
                    <div class="field">
                        <label for="new-todo-project">Project</label>
                        <input id="new-todo-project" type="text" v-model="projectText">
                    </div>
                </div>
            </div>
            <div class="extra content">
                <div class="ui two buttons">
                    <button id="create-new-todo" class="ui basic blue button" v-on:click="sendForm">Create</button>
                    <button id="close-new-todo-form" class="ui basic red button" v-on:click="closeForm">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
                this.$store.dispatch('createTodo', {title, project, done: false});
                this.titleText = '';
                this.projectText = '';
            }
            this.closeForm();
        }
    }
}
</script>