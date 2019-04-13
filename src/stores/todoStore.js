import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const todoStore = new Vuex.Store({
  state: {
    todos: [],
    newTodo: ''
  },
  mutations: {
    fetchTodos (state) {
      var todo = JSON.parse(localStorage.getItem('todovue') || '[]')
      state.todos = todo
    },
    addTodo (state, { text }) {
      state.todos.push({
        title: text,
        done: false
      })
      localStorage.setItem('todovue', JSON.stringify(state.todos))
    }
  },
  actions: {
    getTodos ({commit}, todo) {
      commit('fetchTodos', todo)
    }
  }
})
