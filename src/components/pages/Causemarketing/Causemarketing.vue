<template>
  <div class="causemarketing">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>
    <div class="top_intro">
      <div class="content">
        <img src="../../../assets/wereldbol5.svg">
        <div class="text">
          <!-- ADD languages -->
          <h1>{{title1}}</h1>
          <h3>{{title2}}</h3>
          <p>{{p1}}</p>
        </div>
      </div>
    </div>
    <div class="bulletpoints">
      <div class="line_container">
        <div class="line"></div>
      </div>
      <div class="content">
        <div class="carousel showCarousel hidden">
          <carousel :centerMode="true" :per-page="1" :mouse-drag="true" :perPage="1">
            <slide>
              <div class="img_block">
                <!-- <img src="../../../assets/book.svg"> -->
                <i class="fas fa-book fa-5x blue"></i>
                <div class="text">
                  <h3>{{s2_title1}}</h3>
                  <p>{{s2_p1}}</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="img_block">
                <!-- <img src="../../../assets/pijl.svg"> -->
                <i class="fas fa-coins fa-5x blue"></i>
                <div class="text">
                  <h3>{{s2_title2}}</h3>
                  <p>{{s2_p2}}</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="img_block">
                <!-- <img src="../../../assets/hart.svg"> -->
                <i class="fas fa-fire fa-5x blue"></i>
                <div class="text">
                  <h3>{{s2_title3}}</h3>
                  <p>{{s2_p3}}</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="img_block">
                <!-- <img src="../../../assets/hand.svg"> -->
                <i class="far fa-handshake fa-5x blue"></i>
                <div class="text">
                  <h3>{{s2_title4}}</h3>
                  <p>{{s2_p4}}</p>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="hideCarousel">
          <div class="img_gallery">
            <div class="img_block">
              <!-- <img src="../../../assets/book.svg"> -->
              <i class="fas fa-book fa-5x blue"></i>
              <div class="text">
                <h3>{{s2_title1}}</h3>
                <p>{{s2_p1}}</p>
              </div>
            </div>
            <div class="img_block">
              <!-- <img src="../../../assets/pijl.svg"> -->
              <i class="fas fa-coins fa-5x blue"></i>
              <div class="text">
                <h3>{{s2_title2}}</h3>
                <p>{{s2_p2}}</p>
              </div>
            </div>
            <div class="img_block">
              <!-- <img src="../../../assets/hart.svg"> -->
              <i class="fas fa-fire fa-5x blue"></i>
              <div class="text">
                <h3>{{s2_title3}}</h3>
                <p>{{s2_p3}}</p>
              </div>
            </div>
            <div class="img_block">
              <!-- <img src="../../../assets/hand.svg"> -->
              <i class="far fa-handshake fa-5x blue"></i>
              <div class="text">
                <h3>{{s2_title4}}</h3>
                <p>{{s2_p4}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block_cijfers">
      <div class="content">
        <h2>{{s3_title1}}</h2>
        <h3>{{s3_title2}}</h3>
        <div class="carousel showCarousel hidden">
          <carousel :centerMode="true" :per-page="1" :mouse-drag="true" :perPage="1">
            <slide>
              <div class="block">
                <DoughnutChart
                  :percent="percent1"
                  foregroundColor="#B6E1F9"
                  backgroundColor="#FFFFFF"
                  :visibleValue="true"
                />
                <p>{{s3_p1}}</p>
                <p class="link" v-html="s3_link1"></p>
              </div>
            </slide>
            <slide>
              <div class="block">
                <DoughnutChart
                  :percent="percent2"
                  foregroundColor="#B6E1F9"
                  backgroundColor="#FFFFFF"
                  :visibleValue="true"
                />
                <p>{{s3_p2}}</p>
                <p class="link" v-html="s3_link2"></p>
              </div>
            </slide>
            <slide>
              <div class="block">
                <DoughnutChart
                  :percent="percent3"
                  foregroundColor="#B6E1F9"
                  backgroundColor="#FFFFFF"
                  :visibleValue="true"
                />
                <p>{{s3_p3}}</p>
                <p class="link" v-html="s3_link3"></p>
              </div>
            </slide>
            <slide>
              <div class="block">
                <DoughnutChart
                  :percent="percent4"
                  foregroundColor="#B6E1F9"
                  backgroundColor="#FFFFFF"
                  :visibleValue="true"
                />
                <p>{{s3_p4}}</p>
                <p class="link" v-html="s3_link4"></p>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="content_block group hideCarousel">
          <div class="block">
            <DoughnutChart
              :percent="percent1"
              foregroundColor="#B6E1F9"
              backgroundColor="#FFFFFF"
              :visibleValue="true"
            />
            <!-- {{lang}} -->
            <p>{{s3_p1}}</p>
            <p class="link" v-html="s3_link1"></p>
          </div>
          <div class="block">
            <DoughnutChart
              :percent="percent2"
              foregroundColor="#B6E1F9"
              backgroundColor="#FFFFFF"
              :visibleValue="true"
            />
            <p>{{s3_p2}}</p>
            <p class="link" v-html="s3_link2"></p>
          </div>
          <div class="block">
            <DoughnutChart
              :percent="percent3"
              foregroundColor="#B6E1F9"
              backgroundColor="#FFFFFF"
              :visibleValue="true"
            />
            <p>{{s3_p3}}</p>
            <p class="link" v-html="s3_link3"></p>
          </div>
          <div class="block">
            <DoughnutChart
              :percent="percent4"
              foregroundColor="#B6E1F9"
              backgroundColor="#FFFFFF"
              :visibleValue="true"
            />
            <p>{{s3_p4}}</p>
            <p class="link" v-html="s3_link4"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="meer_weten">
      <div class="content">
        <div class="text">
          <h1>{{s4_title1}}</h1>
          <h1 class="link" v-html="s4_link1"></h1>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import lang from "./../../../lang/lang_causemarketing.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";
import { Carousel, Slide } from "vue-carousel";
import DoughnutChart from "vue-doughnut-chart";

export default {
  data() {
    return {
      lang: "nl",

      percent1: 0,
      percent2: 0,
      percent3: 0,
      percent4: 0,

      isActive: false,

      //section1
      title1: lang.nl.title1,
      title2: lang.nl.title2,
      p1: lang.nl.p1,

      //section2
      s2_title1: lang.nl.s2_title1,
      s2_title2: lang.nl.s2_title2,
      s2_title3: lang.nl.s2_title3,
      s2_title4: lang.nl.s2_title4,

      s2_p1: lang.nl.s2_p1,
      s2_p2: lang.nl.s2_p2,
      s2_p3: lang.nl.s2_p3,
      s2_p4: lang.nl.s2_p4,

      //section3
      s3_title1: lang.nl.s3_title1,
      s3_title2: lang.nl.s3_title2,

      s3_p1: lang.nl.s3_p1,
      s3_p2: lang.nl.s3_p2,
      s3_p3: lang.nl.s3_p3,
      s3_p4: lang.nl.s3_p4,

      s3_link1: lang.nl.s3_link1,
      s3_link2: lang.nl.s3_link2,
      s3_link3: lang.nl.s3_link3,
      s3_link4: lang.nl.s3_link4,

      //section4
      s4_title1: lang.nl.s4_title1,
      s4_link1: lang.nl.s4_link1
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

      //section1
      this.title1 = lang[language].title1;
      this.title2 = lang[language].title2;
      this.p1 = lang[language].p1;

      //section2
      this.s2_title1 = lang[language].s2_title1;
      this.s2_title2 = lang[language].s2_title2;
      this.s2_title3 = lang[language].s2_title3;
      this.s2_title4 = lang[language].s2_title4;

      this.s2_p1 = lang[language].s2_p1;
      this.s2_p2 = lang[language].s2_p2;
      this.s2_p3 = lang[language].s2_p3;
      this.s2_p4 = lang[language].s2_p4;

      //section3
      this.s3_title1 = lang[language].s3_title1;
      this.s3_title2 = lang[language].s3_title2;

      this.s3_p1 = lang[language].s3_p1;
      this.s3_p2 = lang[language].s3_p2;
      this.s3_p3 = lang[language].s3_p3;
      this.s3_p4 = lang[language].s3_p4;

      this.s3_link1 = lang[language].s3_link1;
      this.s3_link2 = lang[language].s3_link2;
      this.s3_link3 = lang[language].s3_link3;
      this.s3_link4 = lang[language].s3_link4;

      //section4
      this.s4_title1 = lang[language].s4_title1;
      this.s4_link1 = lang[language].s4_link1;

      setCookie("userLang", language, 200);
      this.lang = language;
    }, // end changeLang
    handleScroll(event) {
      console.log("handlescroll", window.pageYOffset);

      if (window.pageYOffset > 600 && this.isActive === false) {
        var self = this;
        var donutValue1 = 0;
        var donutValue2 = 0;
        var donutValue3 = 0;
        var donutValue4 = 0;
        var self = this;
        var interval = setInterval(() => {
          donutValue1++;
          self.percent1 = donutValue1;
          if (donutValue1 === 91) {
            clearInterval(interval); // stop interval
          }
        }, 5);
        var interval2 = setInterval(() => {
          donutValue2++;
          this.percent2 = donutValue2;
          if (donutValue2 === 75) {
            clearInterval(interval2); // stop interval
          }
        }, 5);
        var interval3 = setInterval(() => {
          donutValue3++;
          this.percent3 = donutValue3;
          if (donutValue3 === 92) {
            clearInterval(interval3); // stop interval
          }
        }, 5);
        var interval4 = setInterval(() => {
          donutValue4++;
          this.percent4 = donutValue4;
          if (donutValue4 === 66) {
            clearInterval(interval4); // stop interval
          }
        }, 5);
        this.isActive = true;
      }
    }
  },
  created() {
    window.addEventListener("scroll", e => this.handleScroll(e));
  },
  destroyed() {
    window.removeEventListener("scroll", e => this.handleScroll(e));
  },
  components: {
    Navigation: Navigation,
    Footer: Footer,
    Carousel: Carousel,
    Slide: Slide,
    DoughnutChart
  }
};
</script>

<style lang="scss" src="./../../../styles/Causemarketing.scss"></style>