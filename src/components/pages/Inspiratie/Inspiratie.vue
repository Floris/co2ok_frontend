<template>
  <div class="inspiratie">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>

    <div class="jumbotron">
      <div class="background_color"></div>
    </div>

    <div class="content group">
      <div class="medium_posts">
        <div class="post">d</div>
        <div class="post">d</div>
        <div class="post">x</div>
        <div class="post">e</div>
        <div class="post">x</div>
        <div class="post">v</div>
      </div>
      <div class="instagram_feed">
        <div class="post">d</div>
        <div class="post">d</div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios";
import { getCookie, setCookie } from "./../../../../functions/cookies";

import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";

export default {
  name: "Inspiratie",
  components: {
    Navigation: Navigation,
    Footer: Footer
  },
  data() {
    return {
      lang: "nl"
    };
  },
  mounted: function() {
    this.checkCookies();

    this.getMediumPosts();
  },
  methods: {
    getMediumPosts() {
      try {
        fetch("https://medium.com/@nebulasio/latest?format=json", {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
          .then(res => {
            console.log("response", res);
          })
          .catch(err => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }

      // axios
      // .get("https://medium.com/@nebulasio/latest?format=json", {
      //   headers: {
      //     "Access-Control-Allow-Origin": "*"
      //     // "Content-Type": "application/json"
      //   }
      // })
      // .then(res => {
      //   console.log(res);
      // })
      // .catch(err => {
      //   // window.alert("Error cannot get blog posts.");
      //   console.log(err);
      // });
    }, // end getMediumPosts

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

<style lang="scss" src="./../../../styles/Inspiratie.scss"></style>
