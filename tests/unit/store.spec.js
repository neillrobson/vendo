import todoModule from '@/store/modules/todo';
import { EDIT_TODO_INDEX } from '@/store/types/todo';

const { mutations } = todoModule;

test('only changes title and project properties when editing todo', () => {
    const OLD_ID = 18;
    const NEW_TITLE = 'new title';
    const NEW_PROJECT = 'new project';
    const state = {
        todos: [{
            id: OLD_ID,
            title: 'hello',
            project: 'world',
            done: false
        }]
    };
    mutations[EDIT_TODO_INDEX](state, 0, {
        title: NEW_TITLE,
        project: NEW_PROJECT,
        id: 3,
        done: true,
        new_prop: 'cats'
    });
    expect(state.todos[0].title).toBe(NEW_TITLE);
    expect(state.todos[0].project).toBe(NEW_PROJECT);
    expect(state.todos[0].id).toBe(18);
    expect(state.todos[0].done).toBeFalsy();
    expect(state.todos[0].new_prop).toBeUndefined();
});
