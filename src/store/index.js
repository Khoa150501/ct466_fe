// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedCheckboxes: [], // Lưu trữ các checkbox đã chọn
  },
  mutations: {
    setSelectedCheckboxes(state, checkboxes) {
      state.selectedCheckboxes = checkboxes;
    },
  },
  actions: {
    saveSelectedCheckboxes({ commit }, checkboxes) {
      commit('setSelectedCheckboxes', checkboxes);
    },
  },
});