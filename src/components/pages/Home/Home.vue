<template>
  <div class="home">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>

    <div class="jumbotron">
      <div class="background_left"></div>
      <div class="background_right"></div>
      <img src="../../../assets/wereldbol.svg">
      <div class="content">
        <h1 class="quote_head">CO₂ compensation, because there is no planet B.</h1>
        <div class="head_group group">
          <div class="text_block">
            <h2>{{s1_title}}</h2>
          </div>
          <div class="text_block">
            <h2>{{s1_title2}}</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="howItWorks">
      <div class="line_container">
        <div class="line"></div>
      </div>

      <div class="block">
        <h2>{{s2_title}}</h2>

        <div class="carousel showCarousel hidden">
          <carousel :centerMode="true" autoplay :per-page="1" :mouse-drag="true">
            <slide>
              <div class="group-item_col">
                <i class="fas fa-user-ninja"></i>
                <h3>{{s2_title_1}}</h3>
                <div class="text_box">
                  <p>{{s2_p_1}}</p>
                  <router-link to="/ninja">
                    <button class="button green">{{s2_button_1}}</button>
                  </router-link>
                </div>
              </div>
            </slide>
            <slide>
              <div class="group-item_col">
                <i class="fas fa-calculator"></i>
                <h3>{{s2_title_2}}</h3>
                <div class="text_box">
                  <p>{{s2_p_2}}</p>
                  <router-link to="/login">
                    <button class="button green">{{s2_button_2}}</button>
                  </router-link>
                </div>
              </div>
            </slide>
            <slide>
              <div class="group-item_col">
                <i class="fas fa-desktop"></i>
                <h3>{{s2_title_3}}</h3>
                <div class="text_box">
                  <p>{{s2_p_3}}</p>
                  <router-link to="/zakelijk">
                    <button class="button green">{{s2_button_3}}</button>
                  </router-link>
                </div>
              </div>
            </slide>
            <slide>
              <div class="group-item_col">
                <i class="fas fa-leaf"></i>
                <h3>{{s2_title_4}}</h3>
                <div class="text_box">
                  <p>{{s2_p_4}}</p>
                  <router-link to="/projecten">
                    <button class="button green">{{s2_button_4}}</button>
                  </router-link>
                </div>
              </div>
            </slide>
          </carousel>
        </div>

        <div class="group hideCarousel">
          <div class="group-item_col">
            <i class="fas fa-user-ninja"></i>
            <div class="text_box">
              <h3>{{s2_title_1}}</h3>
              <p>{{s2_p_1}}</p>
              <router-link to="/ninja">
                <button class="button green">{{s2_button_1}}</button>
              </router-link>
            </div>
          </div>
          <div class="group-item_col">
            <i class="far fa-chart-bar"></i>
            <div class="text_box">
              <h3>{{s2_title_2}}</h3>
              <p>{{s2_p_2}}</p>
              <router-link to="/login">
                <button class="button green">{{s2_button_2}}</button>
              </router-link>
            </div>
          </div>
          <div class="group-item_col">
            <i class="fas fa-store"></i>
            <div class="text_box">
              <h3>{{s2_title_3}}</h3>
              <p>{{s2_p_3}}</p>
              <router-link to="/zakelijk">
                <button class="button green">{{s2_button_3}}</button>
              </router-link>
            </div>
          </div>
          <div class="group-item_col">
            <i class="fas fa-leaf"></i>
            <div class="text_box">
              <h3>{{s2_title_4}}</h3>
              <p>{{s2_p_4}}</p>
              <router-link to="/projecten">
                <button class="button green" v-html="s2_button_4"></button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="quote">
      <div class="content">
        <h2>CO₂ compensation, because there is no planet B.</h2>
      </div>
    </div>

    <div class="tree content">
      <div class="line">
        <div class="line2" id="fillLine">
          <div class="bol_wrapper">
            <transition name="fade">
              <div v-if="bol1" class="bol" id="bol1">
                <!-- <img class="globe" src="../../../assets/globe1.svg" alt="planeet"> -->
                <i class="fas fa-globe-europe"></i>
              </div>
            </transition>
            <transition name="fade">
              <div v-if="bol1" class="bol2" id="bol1_"></div>
            </transition>
          </div>

          <div class="bol_wrapper">
            <transition name="fade">
              <div v-if="bol2" class="bol" id="bol2">
                <!-- <img class="globe" src="../../../assets/globe2.svg" alt="planeet"> -->
                <i class="fas fa-globe-americas"></i>
              </div>
            </transition>
            <transition name="fade">
              <div v-if="bol2" class="bol2" id="bol2_"></div>
            </transition>
          </div>

          <div class="bol_wrapper">
            <transition name="fade">
              <div v-if="bol3" class="bol" id="bol3">
                <!-- <img class="globe" src="../../../assets/globe3.svg" alt="planeet"> -->
                <i class="fas fa-globe-asia"></i>
              </div>
            </transition>
            <transition name="fade">
              <div v-if="bol3" class="bol2" id="bol3_"></div>
            </transition>
          </div>

          <div class="bol_wrapper">
            <transition name="fade">
              <div v-if="bol4" class="bol" id="bol4">
                <!-- <img class="globe" src="../../../assets/globe4.svg" alt="planeet"> -->
                <i class="fas fa-globe-africa"></i>
              </div>
            </transition>
            <transition name="fade">
              <div v-if="bol4" class="bol2" id="bol4_"></div>
            </transition>
          </div>
        </div>
      </div>

      <div class="group_col">
        <transition name="fade">
          <div v-if="bol1" class="group text_box_container">
            <div class="text_box">
              <h3 class="aai">{{s3_title_1}}</h3>
              <p class="aai">{{s3_p_1}}</p>
              <!-- <h3 class="bigNumber">1</h3> -->
            </div>
          </div>
        </transition>

        <transition name="fade">
          <div v-if="bol2" class="group text_box_container">
            <div class="text_box">
              <h3 class="aai">{{s3_title_2}}</h3>
              <p class="aai">{{s3_p_2}}</p>
              <!-- <h3 class="bigNumber">2</h3> -->
            </div>
          </div>
        </transition>

        <transition name="fade">
          <div v-if="bol3" class="group text_box_container">
            <div class="text_box">
              <h3 class="aai">{{s3_title_3}}</h3>
              <p class="aai" v-html="s3_p_3"></p>
              <!-- <h3 class="bigNumber">3</h3> -->
            </div>
          </div>
        </transition>

        <transition name="fade">
          <div v-if="bol4" class="group text_box_container">
            <div class="text_box">
              <h3 class="aai">{{s3_title_4}}</h3>
              <p class="aai">{{s3_p_4}}</p>
              <!-- <h3 class="bigNumber">4</h3> -->
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="help">
      <div class="img-background-color"></div>
      <div class="content group">
        <div class="main group-item_col">
          <h2>{{s4_title}}</h2>
          <p>{{s4_p}}</p>
          <div class="group buttons">
            <router-link to="/zakelijk">
              <button class="button green">{{s4_button1}}</button>
            </router-link>
            <router-link to="/ninja">
              <button class="button green">{{s4_button2}}</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="calculation">
      <div class="content group">
        <div class="calculation_left">
          <h2>{{s5_title_1}}</h2>
          <div v-html="s5_p_1"></div>
        </div>
        <div class="calculation_right group-item_col">
          <img src="../../../assets/ninja_sit.png" alt="Sitting co2ok ninja">
          <h3>{{s5_title_sm}}</h3>
          <p class="kgs">{{number}} KGS</p>
          <!-- <p>{{s5_p_2}}</p> -->
        </div>
      </div>
    </div>

    <div class="bomenPlanten">
      <div class="content">
        <h2>{{s6_title}}</h2>
        <p v-html="s6_p"></p>
      </div>
    </div>

    <div class="partners_bg">
      <div class="partners">
        <h2>{{partners_title}}</h2>
        <p>{{partners_text}}</p>

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
import lang from "./../../../lang/lang_home.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Footer from "./../../main/Footer/Footer";
import Navigation from "./../../main/Navigation/Navigation";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  components: {
    Navigation: Navigation,
    Footer: Footer,
    Carousel: Carousel,
    Slide: Slide
  },
  data() {
    return {
      lang: "nl",
      number: 0,
      timer: null,

      bol1: false,
      bol2: false,
      bol3: false,
      bol4: false,

      s1_title: lang.nl.s1_title,
      s1_title2: lang.nl.s1_title2,

      s2_title: lang.nl.s2_title,

      s2_title_1: lang.nl.s2_title_1,
      s2_p_1: lang.nl.s2_p_1,
      s2_button_1: lang.nl.s2_button_1,

      s2_title_2: lang.nl.s2_title_2,
      s2_p_2: lang.nl.s2_p_2,
      s2_button_2: lang.nl.s2_button_2,

      s2_title_3: lang.nl.s2_title_3,
      s2_p_3: lang.nl.s2_p_3,
      s2_button_3: lang.nl.s2_button_3,

      s2_title_4: lang.nl.s2_title_4,
      s2_p_4: lang.nl.s2_p_4,
      s2_button_4: lang.nl.s2_button_4,

      s3_title_1: lang.nl.s3_title_1,
      s3_p_1: lang.nl.s3_p_1,

      s3_title_2: lang.nl.s3_title_2,
      s3_p_2: lang.nl.s3_p_2,

      s3_title_3: lang.nl.s3_title_3,
      s3_p_3: lang.nl.s3_p_3,

      s3_title_4: lang.nl.s3_title_4,
      s3_p_4: lang.nl.s3_p_4,

      s4_title: lang.nl.s4_title,
      s4_p: lang.nl.s4_p,
      s4_button1: lang.nl.s4_button1,
      s4_button2: lang.nl.s4_button2,

      s5_title_1: lang.nl.s5_title,
      s5_p_1: lang.nl.s5_p_1,
      s5_title_sm: lang.nl.s5_title_sm,
      s5_p_2: lang.nl.s5_p_2,

      s6_title: lang.nl.s6_title,
      s6_p: lang.nl.s6_p,

      partners_title: lang.nl.partners_title,
      partners_text: lang.nl.partners_text
    };
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

      this.s1_title = lang[language].s1_title;
      this.s1_title2 = lang[language].s1_title2;

      this.s2_title = lang[language].s2_title;

      this.s2_title_1 = lang[language].s2_title_1;
      this.s2_p_1 = lang[language].s2_p_1;
      this.s2_button_1 = lang[language].s2_button_1;

      this.s2_title_2 = lang[language].s2_title_2;
      this.s2_p_2 = lang[language].s2_p_2;
      this.s2_button_2 = lang[language].s2_button_2;

      this.s2_title_3 = lang[language].s2_title_3;
      this.s2_p_3 = lang[language].s2_p_3;
      this.s2_button_3 = lang[language].s2_button_3;

      this.s2_title_4 = lang[language].s2_title_4;
      this.s2_p_4 = lang[language].s2_p_4;
      this.s2_button_4 = lang[language].s2_button_4;

      this.s3_title_1 = lang[language].s3_title_1;
      this.s3_p_1 = lang[language].s3_p_1;

      this.s3_title_2 = lang[language].s3_title_2;
      this.s3_p_2 = lang[language].s3_p_2;

      this.s3_title_3 = lang[language].s3_title_3;
      this.s3_p_3 = lang[language].s3_p_3;

      this.s3_title_4 = lang[language].s3_title_4;
      this.s3_p_4 = lang[language].s3_p_4;

      this.s4_title = lang[language].s4_title;
      this.s4_p = lang[language].s4_p;
      this.s4_button1 = lang[language].s4_button1;
      this.s4_button2 = lang[language].s4_button2;

      this.s5_title_1 = lang[language].s5_title;
      this.s5_p_1 = lang[language].s5_p_1;
      this.s5_title_sm = lang[language].s5_title_sm;
      this.s5_p_2 = lang[language].s5_p_2;

      this.s6_title = lang[language].s6_title;
      this.s6_p = lang[language].s6_p;

      this.partners_title = lang[language].partners_title;
      this.partners_text = lang[language].partners_text;

      setCookie("userLang", language, 200);
      this.lang = language;
    }, // end changeLang

    //gets called when you scroll
    handleScroll(event) {
      console.log("handlescroll", window.pageYOffset, 1811);
      // if (window.pageYOffset > 1120 && screen.width > 600) {
      // console.log("navbar true");
      var pageY = window.pageYOffset;

      if (pageY > 851) {
        this.bol1 = true;
        // document.getElementById("bol1").style.display = "block";
        // document.getElementById("bol1_").style.display = "block";
      } else {
        this.bol1 = false;
      }

      if (pageY > 1109) {
        this.bol2 = true;
        // document.getElementById("bol2").style.display = "block";
        // document.getElementById("bol2_").style.display = "block";
      } else {
        this.bol2 = false;
      }

      if (pageY > 1314) {
        this.bol3 = true;
        // document.getElementById("bol3").style.display = "block";
        // document.getElementById("bol3_").style.display = "block";
      } else {
        this.bol3 = false;
      }

      if (pageY > 1575) {
        this.bol4 = true;
        // document.getElementById("bol4").style.display = "block";
        // document.getElementById("bol4_").style.display = "block";
      } else {
        this.bol4 = false;
      }

      var begin = pageY - 1100;
      var end = 230;

      var p1 = 0;
      var p2 = 100;

      p1 = (100 / end) * begin;

      console.log(`${p1}% --- ${p2}%`);

      document.getElementById(
        "fillLine"
      ).style.backgroundImage = `-webkit-linear-gradient(top, #2ecc71 ${p1}%, white ${p2}%)`;
    }
  },
  mounted: function() {
    this.checkCookies();

    this.timer = setInterval(() => {
      this.number = Math.round(
        Math.random() * Math.round(Math.random() * 10000)
      );
    }, 1000);

    document.body.style.overflow = "initial";
  }, // end mounted
  //add(create) the event
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  //remove the event
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    clearInterval(this.timer);
    console.log("destroyed");
  }
};
</script>


// import style here
<style lang="scss" src="./../../../styles/Home.scss"></style>