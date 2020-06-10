<template>
    <div id="app" class="ui center aligned container">
        <img alt="Vue logo" src="./assets/logo.png" />
        <TodoList />
    </div>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
    name: "App",
    components: {
        TodoList
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-top: 60px;
}
</style>
