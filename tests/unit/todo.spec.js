import { shallowMount } from '@vue/test-utils';
import Todo from '@/components/Todo.vue';

describe('Todo.vue', () => {
    it('renders props.msg when passed', () => {
        const title = 'Hello World';
        const project = 'New Project';
        const wrapper = shallowMount(Todo, {
            propsData: {
                todo: {
                    title,
                    project
                }
            }
        });
        expect(wrapper.props().todo.title).toMatch(title);
    });
});
