<template>
  <div class="login_view">
    <h1>Aanmelden</h1>
    <input class="input" placeholder="email" type="text" v-model="email">
    <input class="input" placeholder="password" type="password" v-model="password">
    <button class="button green" v-on:click="sendLoginForm">Aanmelden</button>
    <a v-on:click="goToRegister">Ik heb nog GEEN account</a>
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
  },
  methods: {
    sendLoginForm() {
      console.log("sendLoginForm");

      // check if email
      if (this.email.length <= 0) {
        this.$emit("errorMessage", "Email is leeg");
        return;
      }
      if (this.password.length <= 0) {
        this.$emit("errorMessage", "Wachtwoord is leeg");
        return;
      }

      this.$emit("sendLoginForm", {
        email: this.email,
        password: this.password
      }); // emit to parent component
    },
    goToRegister() {
      this.$emit("switchTo", "register");
    }
  }
};
</script>

