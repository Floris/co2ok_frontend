<template>
  <div class="login_view">
    <h1>Registreren</h1>
    <input placeholder="email" type="text" v-model="email">
    <input placeholder="password" type="password" v-model="password">
    <button v-on:click="sendLoginForm">Aanmelden</button>
  </div>
</template>

<script>
export default {
  name: "login_view",
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>

