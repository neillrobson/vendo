<template>
    <div>
        <b-button outlined v-show="!isCreating" @click="openForm" icon-right="plus" />
        <div class="card" v-show="isCreating">
            <div class="card-content">
                <b-field label="Title"><b-input v-model="titleText" /></b-field>
                <b-field label="Project"><b-input v-model="projectText" /></b-field>
                <b-button type="is-info" outlined @click="sendForm">Create</b-button>
                <b-button type="is-danger" outlined @click="closeForm">Cancel</b-button>
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
                this.$emit('create-todo', {
                    title,
                    project,
                    done: false
                });
                this.titleText = '';
                this.projectText = '';
            }
            this.closeForm();
        }
    }
}
</script>