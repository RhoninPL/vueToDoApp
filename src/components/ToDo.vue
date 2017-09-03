<template>
  <div class="todo">
    <input class="new-todo"
      autofocus autocomplete="off"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo" />
    <button class="active" v-on:click="filterActive">Active</button>
    <button v-on:click="filterAll">All ToDos</button>
    <button class="active" v-on:click="clearCompleted">Clear completed</button>
    <ToDoList :todos=todosFiltered></ToDoList>
  </div>
</template>

<script>
import ToDoList from './todo/ToDoList'

var STORAGE_KEY = 'todovue'

export default {
  name: 'ToDo',

  watch: {
    todos: {
      handler: function (todo) {
        this.save(todo)
      },
      deep: true
    }
  },

  data () {
    return {
      todos: this.fetch(),
      newTodo: '',
      filterType: 'all'
    }
  },

  computed: {
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

    addTodo: function () {
      var value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }

      this.todos.push({
        title: value,
        done: false
      })

      this.newTodo = ''
    },

    fetch: function () {
      var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      return todos
    },

    save: function (todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
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
