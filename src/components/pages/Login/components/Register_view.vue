<template>
  <div class="register_view">
    <h1>{{lang_kit.register_h1}}</h1>
    <input class="input" placeholder="email" type="text" v-model="email">
    <input class="input" placeholder="password" type="password" v-model="password">
    <button class="button green" v-on:click="sendRegisterForm">Join CO2ok</button>
    <p class="privacy" v-html="lang_kit.register_p"></p>
    <a v-on:click="goToLogin">{{lang_kit.register_button}}</a>
  </div>
</template>

<script>
export default {
  name: "register_view",
  props: ["lang_kit"],

  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    sendRegisterForm() {
      console.log("sendRegisterForm");

      // check if email
      if (!this.validateEmail(this.email)) {
        this.$emit("errorMessage", "Email is niet valide");
        return;
      }
      if (this.password.length <= 3) {
        this.$emit("errorMessage", "Wachtwoord te kort");
        return;
      }

      this.$emit("sendRegisterForm", {
        email: this.email,
        password: this.password
      }); // emit to parent component
    },
    goToLogin() {
      this.$emit("switchTo", "login");
    },
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
};
</script>
