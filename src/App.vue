<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <Counter />
        <TodoList />
    </div>
</template>

<script>
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";

export default {
    name: "App",
    components: {
        TodoList,
        Counter
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 60px;
}
</style>
