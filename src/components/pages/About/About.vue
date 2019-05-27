<template>
  <div class="about">
    <Navigation  :lang="lang" @changeLangNav="changeLang"/>
    <!-- ADD languages -->
    <div class="block_intro">
      <div class="content">
          <div class="block_text">
             <h2>{{title}}</h2>
          </div>
      </div>
    </div>
    <div class="block_history">
      <div class="line_container">
        <div class="line"></div>
      </div>

      <div class="content">
        <div class="block_text">
          <div class="title">      
            <h2>{{s2_title}}</h2>
          </div>
          <div class="text">
            <p>
              {{s2_p1}}
            </p>
            <p>
              {{s2_p2}}
            </p>
            <p>
              {{s2_p3}}
            </p>
            <p>
              {{s2_p4}}
            </p>
          </div>
        </div>
        <div class="weegschaal">
          <img src="../../../assets/weegschaalscheef.svg">
        </div>
        <div class="block_text_mobile">
          <div class="title group-item" @click="showHistory = !showHistory">
            <h2>{{s2_title}}</h2>
            <img src="../../../assets/Middel_24.svg">
          </div>
          <transition name="fade">
          <div class="text" v-if="showHistory">
            <p>
              {{s2_p1}}
            </p>
            <p>
              {{s2_p2}}
            </p>
            <p>
              {{s2_p3}}
            <p>
              {{s2_p4}}
            </p>
          </div>
          </transition>
        </div>
        <!-- img & title fighters section -->
      </div>
    </div>
    <div class="block_fighters">
      <div class="content">
          <div class="fighters">
            <div class="title">
              <h2>{{s3_title}}</h2>
            </div>
            <div class="img_collage">
              <div class="img_block">
                <img src="../../../assets/about_fotos/milo.png"/>
                <h3>Milo de Vries</h3>
                <p>Founder and factotum</p>
                <p>“Saving the climate, one gram at a time”</p>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-twitter"></i>
              </div>
              <div class="img_block">
                <!-- <img src="../../../assets/about_fotos/jos.png"/> -->
                <!-- <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p> -->
              </div>
              <div class="img_block">
                <!-- <img src="../../../assets/about_fotos/maaike.png"/> -->
                <!-- <h3>Maaike Braat</h3>
                <p>Scientist</p>
                <p>Het kan altijd sneller en beter en dit is een stap in de goede richting.</p> -->
              </div>
              <div class="img_block">
                <!-- <img src="../../../assets/about_fotos/michiel-1.png"/>
                <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p> -->
              </div>
            </div>
          </div>
          <div class="fighters_mobile">
            <div class="title group-item" @click="showFighters = !showFighters">
              <h2>{{s3_title}}</h2>
              <img src="../../../assets/Middel_24.svg">
            </div>
            <transition name="fade">
            <div class="img_collage group" v-if="showFighters">
              <div class="img_block">
                <img src="../../../assets/about_fotos/milo.png"/>
                <h3>Milo de Vries</h3>
                <p>Founder and factotum</p>
                <p>“Saving the climate, one gram at a time”</p>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-twitter"></i>
              </div>
              <div class="img_block">
                <!-- <img src="../../../assets/about_fotos/jos.png"/>
                <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p> -->
              </div>
              <div class="img_block">
                <!-- <img src="../../../assets/about_fotos/maaike.png"/>
                <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p> -->
              </div>
              <div class="img_block">
                <!-- <img src="../../../assets/about_fotos/michiel-1.png"/>
                <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p> -->
              </div>
              <div class="img_block">
                <!-- <img src="../../../assets/about_fotos/sanne.png"/>
                <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p> -->
              </div>
              <div class="img_block">
                <!-- <img src="../../../assets/about_fotos/ahlam.png"/>
                <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p> -->
              </div>
            </div>
            </transition>
          </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import lang from "./../../../lang/lang_about.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";

import { Carousel, Slide } from "vue-carousel";

export default {
    components: {
      Navigation: Navigation,
      Footer: Footer,        
      Carousel: Carousel,
      Slide: Slide
  },
  data() {
    return {
      showHistory : false,
      showFighters: false,

      counter: 0,

      lang: "nl",
      //section 1
      title: lang.nl.s1_title,
      
      //section 2
      s2_title: lang.nl.s2_title,
      s2_p1: lang.nl.s2_p1,
      s2_p2: lang.nl.s2_p2,
      s2_p3: lang.nl.s2_p3,
      s2_p4: lang.nl.s2_p4,
      
      //section 3
      s3_title: lang.nl.s3_title

    }
  },
  mounted: function(){
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

<style lang="scss" src="./../../../styles/About.scss"></style>