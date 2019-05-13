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
      email: "",
      password: "",
      urlServer: "http://127.0.0.1:8000"
    };
  },
  methods: {
    login() {
      console.log(this.email, this.password);
    },

    sendLoginForm() {
      console.log("%csendLoginForm", "color:blue");

      if (this.email !== "" && this.password !== "") {
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
              window.alert("logged in");
              // set cookie logged in
              console.log("token ==", response.data.token);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    sendRegisterForm() {
      console.log("%csendRegisterForm", "color:green");

      axios
        .post(this.urlServer + "/signup/", {
          body: {
            company: "company",
            email: this.email,
            password: this.password,
            number: "number",
            sort: "webshop",
            name: "name",
            link: "https://www.link.com",
            country: "The Netherlands",
            city: "Zandvoort",
            zipcode: "2042ar",
            street: "straat"
          },
          header: { "X-CSRFToken": "gZvnzSFeGp7h68WjCzmFky6wMkiJZXDU" }
        })
        .then(response => {
          if (response) {
            console.log("res", response);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" src="./../../../styles/Login.scss"></style>
