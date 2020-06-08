<template>
    <div class="ui centered card">
        <div class="content">
            <div class="header">{{ todo.title }}</div>
            <div class="meta">{{ todo.project }}</div>
            <div class="extra content">
                <span class="right floated edit icon"><i class="edit icon"></i></span>
            </div>
        </div>
        <div class="ui bottom attached basic button green" v-show="todo.done">
            Completed
        </div>
        <div class="ui bottom attached basic button red" v-show="!todo.done">
            Complete
        </div>
    </div>
</template>

<script>
export default {
    props: ['todo']
}
</script>