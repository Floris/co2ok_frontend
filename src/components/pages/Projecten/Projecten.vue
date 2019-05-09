<template>
  <div class="projecten">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>
    <div class="jumbotron">
      <div class="jumbo_content">
        <div class="text_block">
          <h1>{{title}}</h1>
          <p>{{p}}</p>
          <a
            target="_blank"
            href="https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe"
          >
            <button class="button green">{{button_header1}}</button>
          </a>
        </div>
        <img src="../../../assets/wereldbol.png">
      </div>
    </div>

    <div class="project_info">
      <div class="line_container">
        <div class="line"></div>
      </div>
      <div class="content">
        <div class="group">
          <div class="group-item_col">
            <div class="text">
              <h2>{{s2_title1}}</h2>
              <div v-html="s2_body1"></div>
            </div>
          </div>
          <div class="group-item_col">
            <div class="img_container">
              <img src="../../../assets/windpower.jpg" alt="windpower">
            </div>
          </div>
        </div>
        <div class="group">
          <div class="group-item_col">
            <div class="img_container">
              <img src="../../../assets/cooking.jpg" alt="cooking co2 friendly">
            </div>
          </div>
          <div class="group-item_col">
            <div class="text">
              <h2>{{s2_title2}}</h2>
              <div v-html="s2_body2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="partners_bg">
      <div class="partners">
        <h2>{{s3_title}}</h2>
        <p>{{s3_text}}</p>

        <div class="normal">
          <a href="https://www.atmosfair.de/en/" target="_blank">
            <img src="../../../assets/partners/atmosfair.png">
          </a>
          <a href="https://www.starters4communities.nl/" target="_blank">
            <img src="../../../assets/partners/starters4communities.png">
          </a>
          <a href="https://www.s-bb.nl/bedrijven/erkenning/leerbedrijf-worden" target="_blank">
            <img src="../../../assets/partners/SBB.png">
          </a>
          <a href="https://www.fairclimatefund.nl/en" target="_blank">
            <img src="../../../assets/partners/FairClimateFund.svg">
          </a>
        </div>

        <div class="carousel">
          <carousel
            :autoplay="true"
            :centerMode="true"
            :loop="true"
            :per-page="1"
            :mouse-drag="true"
            :perPage="1"
          >
            <slide>
              <a href="https://www.atmosfair.de/en/" target="_blank">
                <img src="../../../assets/partners/atmosfair.png">
              </a>
            </slide>
            <slide>
              <a href="https://www.starters4communities.nl/" target="_blank">
                <img src="../../../assets/partners/starters4communities.png">
              </a>
            </slide>
            <slide>
              <a href="https://www.s-bb.nl/bedrijven/erkenning/leerbedrijf-worden" target="_blank">
                <img src="../../../assets/partners/SBB.png">
              </a>
            </slide>
            <slide>
              <a href="https://www.fairclimatefund.nl/en" target="_blank">
                <img src="../../../assets/partners/FairClimateFund.svg">
              </a>
            </slide>
          </carousel>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>


<script>
import lang from "./../../../lang/lang_projecten.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Footer from "./../../main/Footer/Footer";
import Navigation from "./../../main/Navigation/Navigation";

import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Projecten",
  data() {
    return {
      show: false,
      // language
      lang: "nl",
      //
      title: lang.nl.title,
      p: lang.nl.p,
      button_header1: lang.nl.button_header1,
      s2_title1: lang.nl.s2_title1,
      s2_body1: lang.nl.s2_body1,
      s2_title2: lang.nl.s2_title2,
      s2_body2: lang.nl.s2_body2,
      s3_title: lang.nl.s3_title,
      s3_text: lang.nl.s3_text
    };
  },
  mounted: function() {
    this.checkCookies();

    // The .$on function gets the languege emit function from the navigation
    this.$on("changeLangNav", lang => {
      this.changeLang(lang);
    });
  }, // end mounted
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
      this.title = lang[language].title;
      this.p = lang[language].p;
      this.button_header1 = lang[language].button_header1;
      this.s2_title1 = lang[language].s2_title1;
      this.s2_body1 = lang[language].s2_body1;
      this.s2_title2 = lang[language].s2_title2;
      this.s2_body2 = lang[language].s2_body2;
      this.s3_title = lang[language].s3_title;
      this.s3_text = lang[language].s3_text;

      setCookie("userLang", language, 200);
      this.lang = language;
    } // end changeLang
  },
  // Load Components
  components: {
    Footer: Footer,
    Navigation: Navigation,
    Carousel: Carousel,
    Slide: Slide
  }
};
</script>

// import style here
<style lang="scss" src="./../../../styles/Projecten.scss"></style>