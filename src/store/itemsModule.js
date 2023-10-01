export const itemsState = () => ({
  items: [],
});

export const mutations = {
  setItems(state, data) {
    state.items = data;
  },
};

export const actions = {
  async getItems({ commit }) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => commit('setItems', response))
      .catch((error) => alert(error));
  },
  addItem({ commit, state }, data) {
    state.items = [...state.items, data];
    commit('setItems', state.items);
  },
  deleteItems({ commit, state }, data) {
    state.items = state.items.filter((item) => !data.includes(item.id));
    commit('setItems', state.items);
  },
  updateItem({ commit, state }, data) {
    const index = state.items.findIndex((item) => item.id === data.id);
    state.items.splice(index, 1, data);
    commit('setItems', state.items);
  },
};

export default {
  namespaced: true,
  state: itemsState,
  mutations,
  actions,
  strict: true,
};
