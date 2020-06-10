<template>
    <div class="ui centered card">
        <div class="content" v-show="!isEditing">
            <div class="header">{{ todo.title }}</div>
            <div class="meta">{{ todo.project }}</div>
            <div class="ui divider"></div>
            <div class="ui buttons basic icon">
                <button class="ui button" @click="showForm">
                    <i class="edit icon"></i>
                </button>
                <button class="ui button" @click="deleteTodo(todo)">
                    <i class="trash icon"></i>
                </button>
            </div>
        </div>
        <div class="content" v-show="isEditing">
            <div class="ui form">
                <div class="field"><label for="">Title</label><input type="text" v-model="todo.title"></div>
                <div class="field"><label for="">Project</label><input type="text" v-model="todo.project"></div>
                <button class="ui basic blue button" v-on:click="hideForm">
                    Close
                </button>
            </div>
        </div>
        <div class="ui bottom attached basic button green" v-show="todo.done">
            Completed
        </div>
        <div class="ui bottom attached basic button red" v-show="!todo.done" v-on:click="completeTodo(todo)">
            Complete
        </div>
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
            this.$store.dispatch('deleteTodo', todo);
        },

        completeTodo(todo) {
            this.$store.dispatch('completeTodo', todo);
        }
    }
}
</script>