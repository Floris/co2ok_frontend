<template>
  <div class="privacy">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>

    <div class="container">
      <h1>Privacy statement</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat maxime deleniti delectus, aperiam reiciendis molestiae corrupti culpa libero nulla dolores deserunt! Reiciendis, eius obcaecati? Laboriosam iusto suscipit adipisci soluta itaque.</p>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat maxime deleniti delectus, aperiam reiciendis molestiae corrupti culpa libero nulla dolores deserunt! Reiciendis, eius obcaecati? Laboriosam iusto suscipit adipisci soluta itaque.</p>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat maxime deleniti delectus, aperiam reiciendis molestiae corrupti culpa libero nulla dolores deserunt! Reiciendis, eius obcaecati? Laboriosam iusto suscipit adipisci soluta itaque.</p>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat maxime deleniti delectus, aperiam reiciendis molestiae corrupti culpa libero nulla dolores deserunt! Reiciendis, eius obcaecati? Laboriosam iusto suscipit adipisci soluta itaque.</p>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Footer from "./../../main/Footer/Footer";
import Navigation from "./../../main/Navigation/Navigation";

export default {
  name: "Privacy",
  components: {
    Navigation,
    Footer
  },
  methods: {
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

// import style here
<style lang="scss" src="./../../../styles/Privacy.scss"></style>