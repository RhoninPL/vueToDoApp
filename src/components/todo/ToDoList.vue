<template>
  <div class="todolist">
    <div class="todo-list">
      <div v-for="todo in todos">
      <input class="toggle" type="checkbox" v-model="todo.done" />
      {{ todo.title }}
      <button class="destroy" @click="removeTodo(todo)"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todolist',

  props: {
    msg: {
      default: 'nope'
    },
    todos: {
      default: [{
        title: 'List is empty',
        done: false
      }]
    }
  },

  data () {
    return {
    }
  },

  methods: {
    removeTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    }
  }
}
</script>

<style scoped>
.todolist {
  background-color: #EEE;
}

button {
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	font-size: 100%;
	vertical-align: baseline;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	-webkit-appearance: none;
	appearance: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.destroy {
	position: absolute;
	width: 20px;
	height: 20px;
	font-size: 20px;
	color: #af5b5e;
	transition: color 0.2s ease-out;
}

.destroy:after {
	content: 'x';
}
</style>
