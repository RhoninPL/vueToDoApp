<template>
  <div id="app">
    <ol>
      <ul><router-link to="Home">Home</router-link></ul>
      <ul><router-link to="ToDo">To Do List</router-link></ul>
    </ol>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
