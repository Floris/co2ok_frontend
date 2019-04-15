<template>
  <div class="home">
    <div class="language_selectors">
      <button v-on:click="changeLang('nl')">
        <img class="img_lang" src="../../../assets/nl_flag.png">
      </button>
      <button v-on:click="changeLang('en')">
        <img class="img_lang" src="../../../assets/en_flag.png">
      </button>
    </div>
    <div class="jumbotron1">
      <div class="img-background-color"></div>
      <div class="jumbo_content">
        <div class="text_block">
          <h1>{{title}}</h1>
          <p>{{title2}}</p>
          <a
            target="_blank"
            href="https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe"
          >
            <button class="button white">{{button_header1}}</button>
          </a>
        </div>
      </div>
    </div>
    <div class="ourMission">
      <div class="block">
        <div class="text">
          <h2>Our mission</h2>
          <p>Ga met ons de strijd aan. Door elke online aankoop die je doet CO₂ok te maken, beperken we de hoeveelheid broeikasgassen die in de lucht komen. Zo gaan we samen klimaatverandering tegen!</p>
        </div>
      </div>
    </div>
    <div class="howItWorks">
      <h2>{{s2_title}}</h2>
      <div class="img_collection">
        <div class="img_block">
          <img src="../../../assets/hoeWerktHet1.svg">
          <h3>{{s2_img_title1}}</h3>
          <p>{{s2_img_p1}}</p>
        </div>
        <div class="img_block">
          <img src="../../../assets/hoeWerktHet2.svg">
          <h3>{{s2_img_title2}}</h3>
          <p>{{s2_img_p2}}</p>
        </div>
        <div class="img_block">
          <img src="../../../assets/hoeWerktHet3.svg">
          <h3>{{s2_img_title3}}</h3>
          <p>{{s2_img_p3}}</p>
        </div>
      </div>
    </div>
    <div class="companies">
      <h2>Bedrijven</h2>
      <p>Met keuze uit meer dan 20.000 webshops!</p>
      <div class="content">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
      </div>
    </div>
    <Faq></Faq>
    <div class="partners">
      <div class="normal">
        <img src="../../../assets/partners/atmosfair.png">
        <img src="../../../assets/partners/starters4communities.png">
        <img src="../../../assets/partners/SBB.png">
        <img src="../../../assets/partners/FairClimateFund.svg">
      </div>

      <div class="carousel">
        <carousel
          :autoplay="true"
          :centerMode="true"
          :loop="true"
          :per-page="1"
          :navigate-to="someLocalProperty"
          :mouse-drag="false"
          :perPage="1"
        >
          <slide>
            <img src="../../../assets/partners/atmosfair.png">
          </slide>
          <slide>
            <img src="../../../assets/partners/starters4communities.png">
          </slide>
          <slide>
            <img src="../../../assets/partners/SBB.png">
          </slide>
          <slide>
            <img src="../../../assets/partners/FairClimateFund.svg">
          </slide>
        </carousel>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import lang from "./../../../lang/lang_home.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Faq from "./Faq";
import Footer from "./../../main/Footer/Footer";

import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  data() {
    return {
      show: false,
      // text
      title: lang.nl_home.title,
      title2: lang.nl_home.title2,
      button_header1: lang.nl_home.button_header1,
      s2_title: lang.nl_home.s2_title,
      s2_img_title1: lang.nl_home.s2_img_title1,
      s2_img_p1: lang.nl_home.s2_img_p1,
      s2_img_title2: lang.nl_home.s2_img_title2,
      s2_img_p2: lang.nl_home.s2_img_p2,
      s2_img_title3: lang.nl_home.s2_img_title3,
      s2_img_p3: lang.nl_home.s2_img_p3
    };
  },
  mounted: function() {
    this.checkCookies();
  }, // end mounted

  methods: {
    checkCookies() {
      console.log("%ccheck cookies -  " + document.cookie, "color:red;");

      if (getCookie("userLang")) {
        // checks if userLang cookie exists
        console.log("cookie exists");
        this.changeLang(getCookie("userLang"));
        return;
      }

      var userLang = navigator.language || navigator.userLanguage;

      if (userLang.includes("en")) {
        this.title = lang.en_home.title;
        this.title2 = lang.en_home.title2;
        setCookie("userLang", "en", 14);
      }
    }, // end checkCookies

    changeLang: function(language) {
      console.log("execute changeLang");
      if (language.includes("en")) {
        console.log("change language to ENG");
        this.title = lang.en_home.title;
        this.title2 = lang.en_home.title2;
        this.button_header1 = lang.en_home.button_header1;
        this.s2_title = lang.en_home.s2_title;
        this.s2_img_title1 = lang.en_home.s2_img_title1;
        this.s2_img_p1 = lang.en_home.s2_img_p1;
        this.s2_img_title2 = lang.en_home.s2_img_title2;
        this.s2_img_p2 = lang.en_home.s2_img_p2;
        this.s2_img_title3 = lang.en_home.s2_img_title3;
        this.s2_img_p3 = lang.en_home.s2_img_p3;
        setCookie("userLang", "en", 14);
        return;
      }

      console.log("change language to NL");
      this.title = lang.nl_home.title;
      this.title2 = lang.nl_home.title2;
      this.button_header1 = lang.nl_home.button_header1;
      this.s2_title = lang.nl_home.s2_title;
      this.s2_img_title1 = lang.nl_home.s2_img_title1;
      this.s2_img_p1 = lang.nl_home.s2_img_p1;
      this.s2_img_title2 = lang.nl_home.s2_img_title2;
      this.s2_img_p2 = lang.nl_home.s2_img_p2;
      this.s2_img_title3 = lang.nl_home.s2_img_title3;
      this.s2_img_p3 = lang.nl_home.s2_img_p3;
      setCookie("userLang", "nl", 14);
    } // end changeLang
  },
  // Load Components
  components: {
    Faq: Faq,
    Footer: Footer,
    Carousel: Carousel,
    Slide: Slide
  }
};
</script>

// import style here
<style lang="scss" src="./../../../styles/Home.scss"></style>
