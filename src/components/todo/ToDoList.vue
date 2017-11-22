<template>
  <div class="todolist">
    <div class="todo-list">
      <div v-for="todo in todos" class="todo-list-item">
        <input class="toggle" type="checkbox" v-model="todo.done" />
        <font-awesome-icon icon="check" />
        <div>{{ todo.title }}</div>
        <button class="destroy" @click="removeTodo(todo)"></button>
      </div>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'todolist',

  data () {
    return {
      todos: this.$store.state.todos
    }
  },

  methods: {
    removeTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.todolist {
  background-color: #EEE;
}

.todo-list-item {
      display: flex;
}

.todo-list-item input {
  width: 15px;
  height: 15px;
  display: block;
}

.todo-list-item div {
  flex-grow: 100;
}

.todo-list-item button {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

button {
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	font-size: 100%;
	vertical-align: baseline;
	-webkit-appearance: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.destroy {
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
