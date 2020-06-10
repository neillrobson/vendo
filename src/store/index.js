import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
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
  },
  getters: {
    todoIndex: state => todo => state.todos.indexOf(todo),
    newTodoId: state => state.todos.map(todo => todo.id).reduce((a,b) => Math.max(a,b), 0) + 1
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    deleteTodoIndex(state, index) {
      state.todos.splice(index, 1);
    },
    createTodo(state, todo) {
      state.todos.push(todo);
    },
    completeTodoIndex(state, index) {
      state.todos[index].done = true;
    }
  },
  actions: {
    deleteTodo(context, todo) {
      const i = context.getters.todoIndex(todo);
      context.commit('deleteTodoIndex', i);
    },
    createTodo(context, todo) {
      todo.id = context.getters.newTodoId;
      context.commit('createTodo', todo);
    },
    completeTodo(context, todo) {
      const i = context.getters.todoIndex(todo);
      context.commit('completeTodoIndex', i);
    }
  },
  modules: {
  }
})
