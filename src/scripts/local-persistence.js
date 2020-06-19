export default function (store, moduleName, mutationPrefix, localStorageId) {
    store.subscribe((mutation, state) => {
        if (mutation.type.startsWith(mutationPrefix)) {
            localStorage.setItem(localStorageId, JSON.stringify(state[moduleName]));
        }
    });
}