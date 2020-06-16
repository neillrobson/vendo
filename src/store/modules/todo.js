import {
    COMPLETE_TODO,
    COMPLETE_TODO_INDEX,
    CREATE_TODO,
    DELETE_TODO,
    DELETE_TODO_INDEX,
    ADD_TODO
} from '../types/todo'

export default {
    state: {
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
        newTodoId: state => state.todos.map(todo => todo.id).reduce((a, b) => Math.max(a, b), 0) + 1
    },
    mutations: {
        [DELETE_TODO_INDEX](state, index) {
            state.todos.splice(index, 1);
        },
        [ADD_TODO](state, todo) {
            state.todos.push(todo);
        },
        [COMPLETE_TODO_INDEX](state, index) {
            state.todos[index].done = true;
        }
    },
    actions: {
        [DELETE_TODO](context, todo) {
            const i = context.getters.todoIndex(todo);
            context.commit(DELETE_TODO_INDEX, i);
        },
        [CREATE_TODO](context, todo) {
            todo.id = context.getters.newTodoId;
            context.commit(ADD_TODO, todo);
        },
        [COMPLETE_TODO](context, todo) {
            const i = context.getters.todoIndex(todo);
            context.commit(COMPLETE_TODO_INDEX, i);
        }
    }
}