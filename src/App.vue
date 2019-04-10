<template>
  <div id="app">
    // nav
    <HelloWorld/> //pages
    // footer
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

// app.scss

<style lang="scss" src="./styles/App.scss"></style>
