<template>
  <div class="home">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>

    <div class="jumbotron">
      <div class="jumbo_content">
        <img src="../../../assets/boom2.svg">
        <div class="text_block">
          <h1>{{title}}</h1>
          <p>{{title2}}</p>
          <a
            target="_blank"
            href="https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe"
          >
            <button class="button green">{{button_header1}}</button>
          </a>
        </div>
      </div>
      <div class="line_container">
        <div class="line"></div>
      </div>
    </div>

    <div class="howItWorks">
      <div class="img_background"></div>
      <div class="img-background-color"></div>

      <div class="block">
        <h2>{{s3_title}}</h2>

        <div class="carousel showCarousel hidden">
          <carousel :centerMode="true" :per-page="1" :mouse-drag="true" :perPage="1">
            <slide>
              <div class="img_block">
                <img src="../../../assets/hoeWerktHet1.svg">
                <h3>{{s3_img_title1}}</h3>
                <p>{{s3_img_p1}}</p>
              </div>
            </slide>
            <slide>
              <div class="img_block">
                <img src="../../../assets/hoeWerktHet2.svg">
                <h3>{{s3_img_title2}}</h3>
                <p>{{s3_img_p2}}</p>
              </div>
            </slide>
            <slide>
              <div class="img_block">
                <img src="../../../assets/hoeWerktHet3.svg">
                <h3>{{s3_img_title3}}</h3>
                <p>{{s3_img_p3}}</p>
              </div>
            </slide>
          </carousel>
        </div>

        <div class="img_collection hideCarousel">
          <div class="img_block">
            <img src="../../../assets/hoeWerktHet1.svg">
            <h3>{{s3_img_title1}}</h3>
            <p>{{s3_img_p1}}</p>
          </div>
          <div class="img_block">
            <img src="../../../assets/hoeWerktHet2.svg">
            <h3>{{s3_img_title2}}</h3>
            <p>{{s3_img_p2}}</p>
          </div>
          <div class="img_block">
            <img src="../../../assets/hoeWerktHet3.svg">
            <h3>{{s3_img_title3}}</h3>
            <p>{{s3_img_p3}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="companies">
      <div class="line_container">
        <div class="line"></div>
      </div>
      <div class="content">
        <h2>
          {{s4_title}}
          <a href="#" target="_blank">{{s4_link}}</a>
        </h2>
      </div>
      <div class="content">
        <div class="block">
          <img src="../../../assets/lotte/Logos_webshops/Middel_1.svg">
        </div>
        <div class="block">
          <img src="../../../assets/lotte/Logos_webshops/Middel_2.svg">
        </div>
        <div class="block">
          <img src="../../../assets/lotte/Logos_webshops/Middel_3.svg">
        </div>
        <div class="block">
          <img src="../../../assets/lotte/Logos_webshops/Middel_4.svg">
        </div>
        <div class="block">
          <img src="../../../assets/lotte/Logos_webshops/Middel_5.svg">
        </div>
        <div class="block">
          <img src="../../../assets/lotte/Logos_webshops/Middel_6.svg">
        </div>
      </div>
      <div class="content">
        <div class="block">
          <img src="../../../assets/lotte/Logos_webshops/Middel_7.svg">
        </div>
        <div class="block">
          <img src="../../../assets/lotte/Logos_webshops/Middel_8.svg">
        </div>
        <div class="block">
          <img src="../../../assets/lotte/Logos_webshops/Middel_9.svg">
        </div>
        <div class="block">
          <img src="../../../assets/lotte/Logos_webshops/Middel_10.svg">
        </div>
        <div class="block">
          <img src="../../../assets/lotte/Logos_webshops/Middel_11.svg">
        </div>
        <div class="block">
          <img src="../../../assets/lotte/Logos_webshops/Middel_12.svg">
        </div>
      </div>
    </div>
    <div class="projects">
      <div class="content">
        <h2>{{s6_title}}</h2>
        <p>{{s6_p1}}</p>
        <router-link to="/projecten">
          <button class="button green">{{s6_button}}</button>
        </router-link>
        <!-- <div class="img_cover">
          <img src="../../../assets/project1.jpg">
          <img src="../../../assets/project2.jpg">
          <img src="../../../assets/project3.jpg">
        </div>-->
      </div>
    </div>
    <div class="privacy">
      <div class="content">
        <div class="group">
          <div class="about_privacy">
            <h2>{{s7_title}}</h2>
            <div v-html="s7_p"></div>
            <router-link to="/privacy">{{s7_button}}</router-link>
          </div>
          <div class="contact">
            <div class="group">
              <div class="group-item_col">
                <h2>Contact</h2>
                <div class="group-item">
                  <div class="group-item_col">
                    <i class="fas fa-envelope big_icon"></i>
                    <i class="fas fa-phone big_icon"></i>
                  </div>
                  <div class="group-item_col">
                    <p class="email_number">+31639765259</p>
                    <p class="email_number">info@co2ok.eco</p>
                  </div>
                </div>
              </div>
              <div class="group-item_col">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-linkedin"></i>
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
import lang from "./../../../lang/lang_home.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Footer from "./../../main/Footer/Footer";
import Navigation from "./../../main/Navigation/Navigation";

import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  data() {
    return {
      show: false,
      // language
      lang: "nl",
      // text
      title: lang.nl.title,
      title2: lang.nl.title2,
      button_header1: lang.nl.button_header1,

      //section2
      s2_title: lang.nl.s2_title,
      s2_p1: lang.nl.s2_p1,

      // section3
      s3_title: lang.nl.s3_title,
      s3_img_title1: lang.nl.s3_img_title1,
      s3_img_p1: lang.nl.s3_img_p1,
      s3_img_title2: lang.nl.s3_img_title2,
      s3_img_p2: lang.nl.s3_img_p2,
      s3_img_title3: lang.nl.s3_img_title3,
      s3_img_p3: lang.nl.s3_img_p3,

      // section4
      s4_title: lang.nl.s4_title,
      s4_p1: lang.nl.s4_p1,
      s4_link: lang.nl.s4_link,

      // section 6
      s6_title: lang.nl.s6_title,
      s6_p1: lang.nl.s6_p1,
      s6_button: lang.nl.s6_button,

      // privacy
      s7_title: lang.nl.s7_title,
      s7_p: lang.nl.s7_p,
      s7_button: lang.nl.s7_button
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
      this.title2 = lang[language].title2;
      this.button_header1 = lang[language].button_header1;

      //section2
      this.s2_title = lang[language].s2_title;
      this.s2_p1 = lang[language].s2_p1;

      //section3
      this.s3_title = lang[language].s3_title;
      this.s3_img_title1 = lang[language].s3_img_title1;
      this.s3_img_p1 = lang[language].s3_img_p1;
      this.s3_img_title2 = lang[language].s3_img_title2;
      this.s3_img_p2 = lang[language].s3_img_p2;
      this.s3_img_title3 = lang[language].s3_img_title3;
      this.s3_img_p3 = lang[language].s3_img_p3;

      //section4
      this.s4_title = lang[language].s4_title;
      this.s4_p1 = lang[language].s4_p1;
      this.s4_link = lang[language].s4_link;

      // section 6
      this.s6_title = lang[language].s6_title;
      this.s6_p1 = lang[language].s6_p1;
      this.s6_button = lang[language].s6_button;

      // privacy
      this.s7_title = lang[language].s7_title;
      this.s7_p = lang[language].s7_p;
      this.s7_button = lang[language].s7_button;

      setCookie("userLang", language, 200);
      this.lang = language;
    } // end changeLang
  },
  // Load Components
  components: {
    Footer: Footer,
    Carousel: Carousel,
    Slide: Slide,
    Navigation: Navigation
  }
};
</script>

// import style here
<style lang="scss" src="./../../../styles/Home.scss"></style>
