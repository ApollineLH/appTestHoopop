
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
 
}
*::-webkit-scrollbar {
  width: 14px;
}
*::-webkit-scrollbar-track {
  background: rgb(0, 0, 0);
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  border: 3px solid rgb(0, 0, 0);
}
</style>
