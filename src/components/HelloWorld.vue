<template>
  <div class="helloWorld">
    <h1 class="msg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

// import style here
<style lang="scss" src="./../styles/HelloWorld.scss"></style>
