import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    editMode: false,
    activeChildren: []
  },
  mutations: {
    change(state, editMode) {
      state.editMode = editMode;
    },
    addChildren(state, child) {
      state.activeChildren.push(child);
    },
    removeChildren(state, index) {
      state.activeChildren.splice(index, 1);
    }
  },
  getters: {
    editMode: state => state.editMode,

    activeChildren: state => state.activeChildren
  }
});
