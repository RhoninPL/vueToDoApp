<template>
  <div class="todo">
    <input class="new-todo"
      autofocus autocomplete="off"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo" />
    <button class="active" v-on:click="filterActive">Active</button>
    <button v-on:click="filterAll">All ToDos</button>
    <button class="active" v-on:click="clearCompleted">Clear completed</button>
    <ToDoList :todos=todosFiltered></ToDoList>

  </div>
</template>

<script>
import ToDoList from './todo/ToDoList'

export default {
  name: 'ToDo',

  data () {
    return {
      filterType: 'all'
    }
  },

  computed: {
    todos () {
      return this.$store.state.todos
    },

    todosFiltered: function () {
      var todos = this.todos
      todos = this.filterToDos(todos)
      return todos
    }
  },

  components: {
    ToDoList
  },

  methods: {
    filterToDos: function (todos) {
      var filtertype = this.filterType
      todos = todos.filter(function (element) {
        if (filtertype === 'active') {
          return element.done === false
        }
        if (filtertype === 'all') {
          return element
        }
      })

      return todos
    },

    addTodo: function (e) {
      var text = e.target.value
      if (text.trim()) {
        this.$store.commit('addTodo', { text })
      }
      e.target.value = ''
    },

    filterActive: function () {
      this.filterType = 'active'
      this.$forceUpdate()
    },

    filterAll: function () {
      this.filterType = 'all'
      this.$forceUpdate()
    },

    clearCompleted: function () {
      this.todos = this.todos.filter(function (todo) {
        return !todo.done
      })
    }
  }
}
</script>

<style scoped>
.todo {
  width: 800px;
  margin: auto;
}
</style>
