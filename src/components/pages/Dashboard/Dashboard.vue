<template>
  <div class="login">
    <Navigation/>
    <br>
    <br>
    <br>
    <br>
    <br>

    <h1>Dashboard</h1>

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
  name: "Dashboard",
  components: {
    Navigation: Navigation,
    Footer: Footer
  },
  data() {
    return {
      urlServer: "http://127.0.0.1:8000"
    };
  },
  mounted: function() {
    this.checkIfLoggedIn();
  },
  methods: {
    checkIfLoggedIn() {
      if (!getCookie("loggedIn")) {
        console.log("not loggedIn, redirect to login");
        this.$router.push("/login"); // redirect to login
      }
    }
  }
};
</script>

<style lang="scss" src="./../../../styles/Dashboard.scss"></style>
