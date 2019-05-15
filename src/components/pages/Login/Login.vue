<template>
  <div class="login">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>
    <div class="background_left"></div>
    <!-- <div class="content"> -->
    <div class="content container">
      <div class="group-item">
        <!-- <img src="../../../assets/wereldbol.png"> -->
        <img src="../../../assets/boom2.svg">
        <div class="download_section">
          <h1>Download Ninja!</h1>
          <p>Geen registratie nodig.</p>
          <a
            target="_blank"
            href="https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe"
          >
            <button class="button green">Download Ninja - Het is gratis</button>
          </a>
        </div>
      </div>
      <div class="group-item">
        <div class="group-item_col">
          <Register_view
            v-if="show === 'register'"
            @sendRegisterForm="handleRegisterForm"
            @switchTo="showComponent"
            @errorMessage="throwError"
          />
          <Login_view
            v-if="show === 'login'"
            @sendLoginForm="handleLoginForm"
            @switchTo="showComponent"
            @errorMessage="throwError"
          />
          <p class="error_msg" v-if="error_message">{{error_message}}</p>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";
import { getCookie, setCookie } from "./../../../../functions/cookies";

import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";

import Register_view from "./components/Register_view";
import Login_view from "./components/Login_view";

export default {
  name: "Login",
  components: {
    Navigation: Navigation,
    Footer: Footer,
    Register_view: Register_view,
    Login_view: Login_view
  },
  data() {
    return {
      lang: "nl",
      show: "register",

      error_message: null,
      urlServer: "http://127.0.0.1:8000"
    };
  },
  mounted: function() {
    this.checkIfLoggedIn();

    // The .$on function gets the languege emit function from the navigation
    this.$on("changeLangNav", lang => {
      this.changeLang(lang);
    });
  },
  methods: {
    handleLoginForm(data) {
      console.log("%chandleLoginForm", "color:blue");

      // TODO: login validation

      axios
        .post(this.urlServer + "/login/", {
          body: {
            email: data.email,
            password: data.password,
            sort: "webshop"
          }
          // header: { "X-CSRFToken": "gZvnzSFeGp7h68WjCzmFky6wMkiJZXDU" } // <-- generated csrf token here
        })
        .then(response => {
          console.log(response);

          if (response.data.authenticate) {
            setCookie("loggedIn", true, 5); // set cookie logged in
            setCookie("userToken", response.data.token, 5); // set 'Token' from Server

            // store username in vuex
            this.error_message = null;
            this.$router.push("/dashboard"); // redirect to dashboard
          } else {
            this.error_message = response.data.error; // show message - response.data.error
          }
        })
        .catch(error => {
          console.log(error);
          this.error_message = error;
        });
    },

    handleRegisterForm(data) {
      console.log("%chandleRegisterForm", "color:green");

      axios
        .post(this.urlServer + "/signup/", {
          body: {
            company: "TEST_company",
            email: data.email,
            password: data.password,
            number: "TEST_number" + Math.random(),
            sort: "TEST_webshop" + Math.random(),
            name: "TEST_name" + Math.random(),
            link: "TEST_URL" + Math.random(),
            country: "TEST_country" + Math.random(),
            city: "TEST_city" + Math.random(),
            zipcode: "TEST_zipcode" + Math.random(),
            street: "TEST_street" + Math.random()
          }
          // header: { "X-CSRFToken": "gZvnzSFeGp7h68WjCzmFky6wMkiJZXDU" }
        })
        .then(response => {
          if (response.data.error) {
            this.error_message = response.data.error; // show message - response.data.error
            return;
          }
          if (response) {
            console.log("res", response);
            this.show = "login";
          }
        })
        .catch(error => {
          console.log(error);
          this.error_message = error;
        });
    },

    checkIfLoggedIn() {
      if (getCookie("loggedIn")) {
        console.log("logged in before, redirect to dashboard");
        this.$router.push("/dashboard"); // redirect to dashboard
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
    }, // end changeLang

    showComponent(component) {
      this.show = component;
    },

    throwError(msg) {
      this.error_message = msg;
    }
  }
};
</script>

<style lang="scss" src="./../../../styles/Login.scss"></style>
