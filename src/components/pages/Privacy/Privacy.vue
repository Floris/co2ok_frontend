<template>
  <div class="privacy">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>
    <div class="jumbotron">
      <div class="background_color"></div>
    </div>
    <div class="questions">
      <div class="line_container">
        <div class="line"></div>
      </div>
      <div class="container pp__container">
        <div class="privacypolicy">
          <h1>Privacy Policy</h1>
          <div v-html="p"></div>
        </div>
        <div class="lockimage group">
          <img src="../../../assets/lock.svg">
        </div>
      </div>
      <div class="container">
        <div class="faqbox">
          <div class="content">
            <div class="qa_block" v-for="(item, key) in privacyTekst" v-bind:key="key">
              <div v-on:click="show(key)" class="q">
                <p v-html="item.q"></p>
              </div>
              <transition name="fade">
                <div v-if="active[key]" class="a">
                  <p v-html="item.a"></p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Footer from "./../../main/Footer/Footer";
import Navigation from "./../../main/Navigation/Navigation";
import lang from "./../../../lang/lang_privacy.json";

export default {
  name: "Privacy",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      prevNumber: null,
      p: lang.nl.p,
      privacyTekst: lang.nl.questions,
      lang: "nl",
      active: {
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
        q7: false,
        q8: false,
        q9: false,
        q10: false,
        q11: false,
        q12: false
      }
    };
  },
  mounted: () => {
    console.log("privacyTekst", this.privacyTekst);
    document.body.style.overflow = "initial";
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

      this.privacyTekst = lang[language].questions;
      this.p = lang[language].p;

      this.lang = language;
    }, // end changeLang
    show(number) {
      console.log("show", number);
      // reset
      this.active = {
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
        q7: false,
        q8: false,
        q9: false,
        q10: false,
        q11: false,
        q12: false
      };

      if (number === this.prevNumber) {
        // only close
        this.prevNumber = null;
        return;
      }

      switch (number) {
        case "q1":
          this.active.q1 = true;
          break;
        case "q2":
          this.active.q2 = true;
          break;
        case "q3":
          this.active.q3 = true;
          break;
        case "q4":
          this.active.q4 = true;
          break;
        case "q5":
          this.active.q5 = true;
          break;
        case "q6":
          this.active.q6 = true;
          break;
        case "q7":
          this.active.q7 = true;
          break;
        case "q8":
          this.active.q8 = true;
          break;
        case "q9":
          this.active.q9 = true;
          break;
        case "q10":
          this.active.q10 = true;
          break;
        case "q11":
          this.active.q11 = true;
          break;
        case "q12":
          this.active.q12 = true;
          break;
      }

      this.prevNumber = number;
    }
  }
};
</script>

// import style here
<style lang="scss" src="./../../../styles/Privacy.scss"></style>