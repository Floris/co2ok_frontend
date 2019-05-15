<template>
  <div class="zakelijk">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>
    <!-- ADD languages -->
    <div class="top_intro">
      <div class="content">
        <img src="../../../assets/wereldbol.png">
        <div class="text">
          <!-- ADD languages -->
          <h1>{{title}}</h1>
          <h3>{{title2}}</h3>
          <p>{{s1_p1}}</p>
          <!-- <button class="button green">Help klimaatverandering bestrijden!</button> -->
        </div>
      </div>
    </div>
    <!-- ADD languages -->
    <div class="why_co2ok">
      <div class="img_background"></div>
      <!-- <div class="img-background-color"></div> -->

      <div class="why_co2ok_content content">
        <h2>{{s2_title}}</h2>
        <div class="carousel showCarousel hidden">
          <carousel :centerMode="true" :per-page="1" :mouse-drag="true" :perPage="1">
            <!-- ADD languages ALL slides-->
            <slide>
              <div class="content_block">
                <img src="../../../assets/icons_zakelijk/zakelijk_globe.svg">
                <h3>{{s2_title2}}</h3>
                <p>{{s2_p1}}</p>
              </div>
            </slide>
            <slide>
              <div class="content_block">
                <img src="../../../assets/icons_zakelijk/zakelijk_pijl.svg">
                <h3>{{s2_title3}}</h3>
                <p>{{s2_p2}}</p>
              </div>
            </slide>
            <slide>
              <div class="content_block">
                <img src="../../../assets/icons_zakelijk/zakelijk_euro.svg">
                <h3>{{s2_title4}}</h3>
                <p>{{s2_p3}}</p>
              </div>
            </slide>
            <slide>
              <div class="content_block">
                <img src="../../../assets/icons_zakelijk/zakelijk_vink.svg">
                <h3>{{s2_title5}}</h3>
                <p>{{s2_p4}}</p>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="content_block hideCarousel">
          <div class="content_in_block">
            <img src="../../../assets/icons_zakelijk/zakelijk_globe.svg">
            <div class="content_text">
              <h3>{{s2_title2}}</h3>
              <p>{{s2_p1}}</p>
            </div>
          </div>
          <div class="content_in_block">
            <img src="../../../assets/icons_zakelijk/zakelijk_pijl.svg">
            <div class="content_text">
              <h3>{{s2_title3}}</h3>
              <p>{{s2_p2}}</p>
            </div>
          </div>
          <div class="content_in_block">
            <img src="../../../assets/icons_zakelijk/zakelijk_euro.svg">
            <div class="content_text">
              <h3>{{s2_title4}}</h3>
              <p>{{s2_p3}}</p>
            </div>
          </div>
          <div class="content_in_block">
            <img src="../../../assets/icons_zakelijk/zakelijk_vink.svg">
            <div class="content_text">
              <h3>{{s2_title5}}</h3>
              <p>{{s2_p4}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ADD languages -->
    <div class="block_cijfers">
      <div class="content">
        <h2>{{s3_title}}</h2>
        <h3>{{s3_title2}}</h3>
        <div class="carousel showCarousel hidden">
          <carousel :centerMode="true" :per-page="1" :mouse-drag="true" :perPage="1">
            <slide>
              <div class="block">
                <!-- <img src="../../../assets/icons_zakelijk/90.svg"> -->
                <DoughnutChart :percent="percent1" foregroundColor="#2ecc71" :visibleValue="true"/>

                <p>{{s3_p1}}</p>
                <p v-html="s3_link1"></p>
              </div>
            </slide>
            <slide>
              <div class="block">
                <!-- <img src="../../../assets/icons_zakelijk/75.svg"> -->
                <DoughnutChart :percent="percent2" foregroundColor="#2ecc71" :visibleValue="true"/>

                <p>{{s3_p2}}</p>
                <p v-html="s3_link2"></p>
              </div>
            </slide>
            <slide>
              <div class="block">
                <!-- <img src="../../../assets/icons_zakelijk/92.svg"> -->
                <DoughnutChart :percent="percent3" foregroundColor="#2ecc71" :visibleValue="true"/>

                <p>{{s3_p3}}</p>
                <p v-html="s3_link3"></p>
              </div>
            </slide>
            <slide>
              <div class="block">
                <!-- <img src="../../../assets/icons_zakelijk/66.svg"> -->
                <DoughnutChart :percent="percent4" foregroundColor="#2ecc71" :visibleValue="true"/>
                <p>{{s3_p4}}</p>
                <p v-html="s3_link4"></p>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="content_block group hideCarousel">
          <div class="block">
            <!-- <img src="../../../assets/icons_zakelijk/90.svg"> -->
            <DoughnutChart :percent="percent1" foregroundColor="#2ecc71" :visibleValue="true"/>

            <!-- {{lang}} -->
            <p>{{s3_p1}}</p>
            <p v-html="s3_link1"></p>
          </div>
          <div class="block">
            <!-- <img src="../../../assets/icons_zakelijk/75.svg"> -->
            <DoughnutChart :percent="percent2" foregroundColor="#2ecc71" :visibleValue="true"/>
            <p>{{s3_p2}}</p>
            <p v-html="s3_link2"></p>
          </div>
          <div class="block">
            <!-- <img src="../../../assets/icons_zakelijk/92.svg"> -->
            <DoughnutChart :percent="percent3" foregroundColor="#2ecc71" :visibleValue="true"/>
            <p>{{s3_p3}}</p>
            <p v-html="s3_link3"></p>
          </div>
          <div class="block">
            <!-- <img src="../../../assets/icons_zakelijk/66.svg"> -->
            <DoughnutChart :percent="percent4" foregroundColor="#2ecc71" :visibleValue="true"/>
            <p>{{s3_p4}}</p>
            <p v-html="s3_link4"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="block_form">
      <div class="content">
        <h2>{{s4_title}}</h2>
        <div class="form group">
          <div class="plugin_install">
            <h3>{{s4_title2}}</h3>
            <button class="button green">Magento</button>
            <button class="button green">Wordpress / WooCommerce</button>
          </div>
          <div class="ecom_input">
            <h3>{{s4_title3}}</h3>
              <p v-if="error">
                {{ error }}
              </p>
            <form action="https://hotmail.us20.list-manage.com/subscribe/post" method="POST" @submit="checkForm">
              <input type="hidden" name="u" value="8e5d19fbeb79f5b19520e1f2b">
              <input type="hidden" name="id" value="82f97344b0">
              <div class="input_fields">
                <p>{{s4_input}}</p>
                <input v-model="name" type="text" name="MERGE1" id="MERGE1" size="25" >
                <p>{{s4_input2}}</p>
                <input
                  v-model="email"
                  type="email"
                  autocapitalize="off"
                  autocorrect="off"
                  name="MERGE0"
                  id="MERGE0"
                  size="25"
                >
                <p>{{s4_input3}}</p>
                <input v-model="phonenum" type="text" name="MERGE6" id="MERGE6" size="25">
                <p>{{s4_input4}}</p>
                <input v-model="ecommerce" type="text" name="MERGE2" id="MERGE2" size="25">
                <button class="button green">{{s4_button}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import lang from "./../../../lang/lang_zakelijk.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";
import { Carousel, Slide } from "vue-carousel";
import DoughnutChart from "vue-doughnut-chart";

export default {
  name: "Zakelijk",
  data() {
    return {
      lang: "nl",

      percent1: 0,
      percent2: 0,
      percent3: 0,
      percent4: 0,

      isActive: false,


      error: '',

      name: null,
      email: null,
      phonenum: null,
      ecommerce: null,

      //section 1
      title: lang.nl.title,
      title2: lang.nl.title2,
      s1_p1: lang.nl.s1_p1,

      //section 2
      s2_title: lang.nl.s2_title,
      s2_title2: lang.nl.s2_title2,
      s2_title3: lang.nl.s2_title3,
      s2_title4: lang.nl.s2_title4,
      s2_title5: lang.nl.s2_title5,

      s2_p1: lang.nl.s2_p1,
      s2_p2: lang.nl.s2_p2,
      s2_p3: lang.nl.s2_p3,
      s2_p4: lang.nl.s2_p4,

      //section 3
      s3_title: lang.nl.s3_title,
      s3_title2: lang.nl.s3_title2,

      s3_p1: lang.nl.s3_p1,
      s3_p2: lang.nl.s3_p2,
      s3_p3: lang.nl.s3_p3,
      s3_p4: lang.nl.s3_p4,

      s3_link1: lang.nl.s3_link1,
      s3_link2: lang.nl.s3_link2,
      s3_link3: lang.nl.s3_link3,
      s3_link4: lang.nl.s3_link4,

      //section 4
      s4_title: lang.nl.s4_title,
      s4_title2: lang.nl.s4_title2,
      s4_title3: lang.nl.s4_title3,

      s4_input: lang.nl.s4_input,
      s4_input2: lang.nl.s4_input2,
      s4_input3: lang.nl.s4_input3,
      s4_input4: lang.nl.s4_input4,
      s4_button: lang.nl.s4_button,

      s4_error: lang.nl.s4_error,

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

      //section 1
      this.title = lang[language].title;
      this.title2 = lang[language].title2;

      this.s1_p1 = lang[language].s1_p1;

      //section 2
      this.s2_title = lang[language].s2_title;
      this.s2_title2 = lang[language].s2_title2;
      this.s2_title3 = lang[language].s2_title3;
      this.s2_title4 = lang[language].s2_title4;
      this.s2_title5 = lang[language].s2_title5;

      this.s2_p1 = lang[language].s2_p1;
      this.s2_p2 = lang[language].s2_p2;
      this.s2_p3 = lang[language].s2_p3;
      this.s2_p4 = lang[language].s2_p4;

      //section 3
      this.s3_title = lang[language].s3_title;
      this.s3_title2 = lang[language].s3_title2;

      this.s3_p1 = lang[language].s3_p1;
      this.s3_p2 = lang[language].s3_p2;
      this.s3_p3 = lang[language].s3_p3;
      this.s3_p4 = lang[language].s3_p4;

      this.s3_link1 = lang[language].s3_link1;
      this.s3_link2 = lang[language].s3_link2;
      this.s3_link3 = lang[language].s3_link3;
      this.s3_link4 = lang[language].s3_link4;

      //section 4
      this.s4_title = lang[language].s4_title;
      this.s4_title2 = lang[language].s4_title2;
      this.s4_title3 = lang[language].s4_title3;

      this.s4_input = lang[language].s4_input;
      this.s4_input2 = lang[language].s4_input2;
      this.s4_input3 = lang[language].s4_input3;
      this.s4_input4 = lang[language].s4_input4;
      this.s4_button = lang[language].s4_button;
      this.s4_error = lang[language].s4_error;

      setCookie("userLang", language, 200);
      this.lang = language;
    }, // end changeLang
    handleScroll(event) {
      // console.log("handlescroll", window.pageYOffset);

      if (
        window.pageYOffset > 800 &&
        screen.width > 600 &&
        this.isActive === false
      ) {
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
    },
    checkForm: function (e) {
      if (this.name && this.email && this.phonenum && this.ecommerce) {
        return true;
      }

      if (!this.name || !this.email || !this.phonenum || !this.ecommerce) {
        this.error = this.s4_error;
      }
      
      e.preventDefault();
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

<style lang="scss" src="./../../../styles/Zakelijk.scss"></style>
