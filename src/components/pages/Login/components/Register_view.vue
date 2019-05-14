<template>
  <div class="register_view">
    <h1>Aanmelden</h1>
    <input placeholder="email" type="text" v-model="email">
    <input placeholder="password" type="password" v-model="password">
    <button v-on:click="sendRegisterForm">Register</button>
  </div>
</template>

<script>
export default {
  name: "register_view",
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>
