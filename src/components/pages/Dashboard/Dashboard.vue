<template>
  <div class="login">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>
    <br>
    <br>
    <br>
    <br>
    <br>

    <h1>Dashboard</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis illum et dolorum reprehenderit, vero laborum repellendus vitae provident non ea tenetur! Iure odit deleniti deserunt sequi dolorum nobis hic.</p>
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
      lang: "nl",
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
    },
    checkCookies() {
      console.log("%ccheck cookies -  " + document.cookie, "color:red;");

      if (getCookie("userLang")) {
        // checks if userLang cookie exists
        console.log("cookie exists ", getCookie("userLang"));
        this.changeLang(getCookie("userLang"));
        return;
      }

      var userLang = navigator.language || navigator.userLanguage;
      if (userLang.includes("en")) {
        this.changeLang("en");
        return;
      }
    }, // end checkCookies

    changeLang: function(language) {
      console.log("execute changeLang");
      console.log("change language to " + language);

      setCookie("userLang", language, 200);
      this.lang = language;
    } // end changeLang
  }
};
</script>

<style lang="scss" src="./../../../styles/Dashboard.scss"></style>
