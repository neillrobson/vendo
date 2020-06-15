<template>
  <div class="home ui center aligned container">
    <img alt="Vue logo" src="../assets/logo.png">
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'Home',
  components: {
    TodoList
  }
}
</script>
