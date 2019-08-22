import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    editMode: false,
    activeChildren: [],
    editor: false
  },
  mutations: {
    change(state, editMode) {
      state.editMode = editMode;
    },

    showEditor(state, editor) {
      state.editor = editor;
    },
    addChildren(state, child) {
      state.activeChildren.push(child);
    },
    setChildren(state, children) {
      console.log(children);
      state.activeChildren = children;
    },
    removeChildren(state, index) {
      state.activeChildren.splice(index, 1);
    }
  },
  getters: {
    editMode: state => state.editMode,

    activeChildren: state => state.activeChildren,

    editor: state => state.editor
  }
});
