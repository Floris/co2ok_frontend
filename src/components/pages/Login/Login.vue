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
          <h1>{{lang_kit.download_h1}}</h1>
          <p>{{lang_kit.download_p}}</p>
          <a
            id="downloadButton"
            target="_blank"
            href="https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe"
          >
            <button class="button green">{{lang_kit.download_button}}</button>
          </a>
        </div>
      </div>
      <div class="group-item">
        <div class="group-item_col">
          <Register_view
            v-if="show === 'register'"
            :lang_kit="lang_kit"
            @sendRegisterForm="handleRegisterForm"
            @switchTo="showComponent"
            @errorMessage="throwError"
          />

          <Login_view
            v-if="show === 'login'"
            :lang_kit="lang_kit"
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

import lang from "./../../../lang/lang_login.json";

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

      lang_kit: {
        download_h1: lang.nl.download_h1,
        download_p: lang.nl.download_p,
        download_button: lang.nl.download_button,
        register_h1: lang.nl.register_h1,
        register_p: lang.nl.register_p,
        register_button: lang.nl.register_button,
        login_h1: lang.nl.login_h1,
        login_button1: lang.nl.login_button1,
        login_button2: lang.nl.login_button2
      },

      error_message: null,
      urlServer: "http://127.0.0.1:8000"
    };
  },
  mounted: function() {
    var isFirefox = typeof InstallTrigger !== "undefined";

    // if browser is firefox change button link
    if (isFirefox) {
      document.getElementById("downloadButton").href =
        "https://addons.mozilla.org/en-US/firefox/addon/co2ok-ninja/";
    }

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

      this.lang_kit = {
        download_h1: lang[language].download_h1,
        download_p: lang[language].download_p,
        download_button: lang[language].download_button,
        register_h1: lang[language].register_h1,
        register_p: lang[language].register_p,
        register_button: lang[language].register_button,
        login_h1: lang[language].login_h1,
        login_button1: lang[language].login_button1,
        login_button2: lang[language].login_button2
      };

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
