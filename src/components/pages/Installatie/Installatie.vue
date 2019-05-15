<template>
  <div class="installatie">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>
    <div class="block_intro">
      <div class="content">
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

// import lang from "./../../../lang/lang_installatie.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";

export default {
  data() {
    return {
      lang: "nl",
    }
  },
  components: {
    Navigation: Navigation,
    Footer: Footer
  },
   mounted: function() {
    this.checkCookies();

    // The .$on function gets the language emit function from the navigation
    this.$on("changeLangNav", lang => {
      this.changeLang(lang);
    });
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

      //section1
      this.title = lang[language].s1_title;

      //section 2
      this.s2_title = lang[language].s2_title;
      this.s2_p1 = lang[language].s2_p1;
      this.s2_p2 = lang[language].s2_p2;
      this.s2_p3 = lang[language].s2_p3;
      this.s2_p4 = lang[language].s2_p4;

      //section 3
      this.s3_title = lang[language].s3_title;

      setCookie("userLang", language, 200);
      this.lang = language;
    } // end changeLang
  }
}
</script>


<style lang="scss" src="./../../../styles/installatie.scss"></style>