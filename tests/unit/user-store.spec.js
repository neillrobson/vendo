import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import user from '@/store/modules/user';
import persist from '@/scripts/local-persistence'
import { SET_USERNAME, USER_MUTATION_PREFIX, LOCAL_STORAGE_USER_ID } from '../../src/store/types/user';

const spySetItem = jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    user
  }
});
persist(store, "user", USER_MUTATION_PREFIX, LOCAL_STORAGE_USER_ID);

describe('User Store', () => {
  it('Persists to localStorage on mutation', () => {
    store.commit(SET_USERNAME, "Neill");
    expect(spySetItem).toHaveBeenCalled();
  })
})
