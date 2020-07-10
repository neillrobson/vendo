<template>
  <div class="container mx-auto px-6 text-center">
    <img class="mx-auto" alt="Vue logo" src="../assets/logo.png">
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'

export default {
  components: {
    TodoList
  }
}
</script>
