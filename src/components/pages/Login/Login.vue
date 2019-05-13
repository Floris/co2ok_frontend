<template>
  <div class="login">
    <Navigation/>
    <br>
    <br>
    <br>
    <br>
    <br>

    <h1>Login/ Register page</h1>
    <!-- <form> -->
    <input placeholder="email" type="text" v-model="email">
    <input placeholder="password" type="password" v-model="password">
    <button v-on:click="sendRegisterForm">Register</button>
    <button v-on:click="sendLoginForm">Aanmelden</button>
    <p class="error_msg" v-if="error_message">{{error_message}}</p>
    <!-- </form> -->
    <br>
    <br>
    <br>
    <br>
    <br>

    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios";
import { getCookie, setCookie } from "./../../../../functions/cookies";

import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";

export default {
  name: "Login",
  components: {
    Navigation: Navigation,
    Footer: Footer
  },
  data() {
    return {
      error_message: null,
      urlServer: "http://127.0.0.1:8000",

      // form data
      email: "",
      password: "",
      company: "company",
      number: "number",
      sort: "webshop",
      name: "name2332",
      link: "https://www.link.com",
      country: "The Netherlands",
      city: "Zandvoort",
      zipcode: "2042ar",
      street: "straat"
    };
  },
  mounted: function() {
    this.checkIfLoggedIn();
  },
  methods: {
    sendLoginForm() {
      console.log("%csendLoginForm", "color:blue");

      // login validation

      axios
        .post(this.urlServer + "/login/", {
          body: {
            email: this.email,
            password: this.password,
            sort: "webshop"
          },
          header: { "X-CSRFToken": "gZvnzSFeGp7h68WjCzmFky6wMkiJZXDU" } // <-- generated csrf token here
        })
        .then(response => {
          console.log(response);

          if (response.data.authenticate) {
            setCookie("loggedIn", true, 5); // set cookie logged in
            setCookie("userToken", response.data.token, 5); // set cookie logged in
            this.error_message = null;
            this.$router.push("/dashboard"); // redirect to dashboard
          } else {
            this.error_message = response.data.error; // show message - response.data.error
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    sendRegisterForm() {
      console.log("%csendRegisterForm", "color:green");

      // register validation

      axios
        .post(this.urlServer + "/signup/", {
          body: {
            company: "company",
            email: this.email,
            password: this.password,
            number: "number",
            sort: "webshop",
            name: "name2332",
            link: "https://www.link.com",
            country: "The Netherlands",
            city: "Zandvoort",
            zipcode: "2042ar",
            street: "straat"
          },
          header: { "X-CSRFToken": "gZvnzSFeGp7h68WjCzmFky6wMkiJZXDU" }
        })
        .then(response => {
          if (response.data.error) {
            this.error_message = response.data.error; // show message - response.data.error
            // show message - response.data.error
          }
          if (response) {
            console.log("res", response);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    checkIfLoggedIn() {
      if (getCookie("loggedIn")) {
        console.log("logged in before, redirect to dashboard");
        this.$router.push("/dashboard"); // redirect to dashboard
      }
    }
  }
};
</script>

<style lang="scss" src="./../../../styles/Login.scss"></style>
