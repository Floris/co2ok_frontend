<template>
  <div class="installatie">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>
    <div class="block_intro">
      <div class="content">
        <div class="installatie_blok">
          <div class="blok_titleinstallatie">
            <div class="blok_titel">
              <h1>{{title}}</h1>
            </div>
            <div class="blok_subtitel">
              <h3>{{title2}}</h3>
            </div>
            <div class="titel_lijn"></div>
          </div>
          <div class="blokken">
            <div class="blok">
              <div class="blok_2">
                <h3>{{s2_title1}}</h3>
                <p>{{s2_p1}}</p>
              </div>
              <div class="blok_2">
                <div class="blk_2"></div>
                <div class="blk_2">
                  <div class="installatie_foto1"></div>
                </div>
              </div>
              <div class="blok_2">
                <p v-html="s2_p2"></p>
                <div class="installatie_foto2"></div>
              </div>
              <div class="blok_2">
                <p>{{s2_p3}}</p>
              </div>
              <div class="blok_2"></div>
            </div>
            <div class="blok">
              <div class="blok_3">
                <h3>{{s3_title1}}</h3>
                <p v-html="s3_p1"></p>
              </div>
              <div class="blok_3">
                <div class="installatie_foto3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import lang from "./../../../lang/lang_installatie.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";

export default {
  data() {
    return {
      lang: "nl",

      //title subtitle
      title: lang.nl.title,
      title2: lang.nl.title2,

      //woocomerce installation
      s2_title1: lang.nl.s2_title1,
      s2_p1: lang.nl.s2_p1,
      s2_p2: lang.nl.s2_p2,
      s2_p3: lang.nl.s2_p3,

      //magento installation
      s3_title1: lang.nl.s3_title1,
      s3_p1: lang.nl.s3_p1
    };
  },
  components: {
    Navigation: Navigation,
    Footer: Footer
  },
  mounted: function() {
    this.checkCookies();
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

      //title subtitle
      this.title = lang[language].title;
      this.title2 = lang[language].title2;

      //woocomerce installation
      this.s2_title1 = lang[language].s2_title1;
      this.s2_p1 = lang[language].s2_p1;
      this.s2_p2 = lang[language].s2_p2;
      this.s2_p3 = lang[language].s2_p3;

      //magento installation
      this.s3_title1 = lang[language].s3_title1;
      this.s3_p1 = lang[language].s3_p1;

      setCookie("userLang", language, 200);
      this.lang = language;
    } // end changeLang
  }
};
</script>


<style lang="scss" src="./../../../styles/installatie.scss"></style>