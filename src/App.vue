<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue"

export default {
  name: 'App',
  components: {
    TodoList
  },
  data() {
    return {
      todos: [{
        id: 1,
        title: 'Todo A',
        project: 'Project A',
        done: false
      }, {
        id: 2,
        title: 'Todo B',
        project: 'Project B',
        done: true
      }, {
        id: 3,
        title: 'Todo C',
        project: 'Project C',
        done: false
      }, {
        id: 4,
        title: 'Todo D',
        project: 'Project D',
        done: false
      }]
    }
  }
}
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
