<template>
  <div class="home">
    <Navigation/>
    <!-- <div class="language_selectors">
      <button v-on:click="changeLang('nl')">
        <img class="img_lang" src="../../../assets/nl_flag.png">
      </button>
      <button v-on:click="changeLang('en')">
        <img class="img_lang" src="../../../assets/en_flag.png">
      </button>
    </div>-->
    <div class="jumbotron1">
      <!-- <img src="../../../assets/boom2.svg"> -->
      <!-- <div class="img-background-color"></div> -->
      <div class="jumbo_content">
        <img src="../../../assets/boom2.svg">
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
    <!-- <div class="ourMission">
      <div class="block">
        <div class="quotes">"</div>
        <div class="text">
          <h2>{{s2_title}}</h2>
          <p>{{s2_p1}}</p>
        </div>
      </div>
    </div>-->
    <div class="howItWorks">
      <h2>{{s3_title}}</h2>
      <div class="img_collection">
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
    <div class="companies">
      <h2>{{s4_title}}</h2>
      <p>{{s4_p1}}</p>
      <div class="content">
        <div class="block">
          <img src="../../../assets/companies/hema.png">
        </div>
        <div class="block">
          <img src="../../../assets/companies/ali.png">
        </div>
        <div class="block">
          <img src="../../../assets/companies/dx.png">
        </div>
        <div class="block">
          <img src="../../../assets/companies/booking.png">
        </div>
        <div class="block">
          <img src="../../../assets/companies/ebay.png">
        </div>
        <div class="block">
          <img src="../../../assets/companies/baxshop.jpeg">
        </div>
        <div class="block">
          <img src="../../../assets/companies/coolblue.png">
        </div>
        <div class="block">
          <img src="../../../assets/companies/bol_com.png">
        </div>
      </div>
    </div>
    <div class="projects">
      <div class="content">
        <h2>{{s6_title}}</h2>
        <div class="img_cover">
          <img src="../../../assets/project1.jpg">
          <img src="../../../assets/project2.jpg">
          <img src="../../../assets/project3.jpg">
        </div>
        <p>{{s6_p1}}</p>
      </div>
    </div>
    <!-- <Faq :faq="faq"></Faq> -->
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
          :mouse-drag="true"
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
import Navigation from "./../../main/Navigation";

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

      //section2
      s2_title: lang.nl_home.s2_title,
      s2_p1: lang.nl_home.s2_p1,

      // section3
      s3_title: lang.nl_home.s3_title,
      s3_img_title1: lang.nl_home.s3_img_title1,
      s3_img_p1: lang.nl_home.s3_img_p1,
      s3_img_title2: lang.nl_home.s3_img_title2,
      s3_img_p2: lang.nl_home.s3_img_p2,
      s3_img_title3: lang.nl_home.s3_img_title3,
      s3_img_p3: lang.nl_home.s3_img_p3,

      // section4
      s4_title: lang.nl_home.s4_title,
      s4_p1: lang.nl_home.s4_p1,

      // section 6
      s6_title: lang.nl_home.s6_title,
      s6_p1: lang.nl_home.s6_p1,

      // section 5
      faq: {
        s5_q1: lang.nl_home.s5_q1,
        s5_a1: lang.nl_home.s5_a1,
        s5_q2: lang.nl_home.s5_q2,
        s5_a2: lang.nl_home.s5_a2,
        s5_q3: lang.nl_home.s5_q3,
        s5_a3: lang.nl_home.s5_a3,
        s5_q4: lang.nl_home.s5_q4,
        s5_a4: lang.nl_home.s5_a4,
        s5_q5: lang.nl_home.s5_q5,
        s5_a5: lang.nl_home.s5_a5,
        s5_q6: lang.nl_home.s5_q6,
        s5_a6: lang.nl_home.s5_a6,
        s5_q7: lang.nl_home.s5_q7,
        s5_a7: lang.nl_home.s5_a7,
        s5_q8: lang.nl_home.s5_q8,
        s5_a8: lang.nl_home.s5_a8,
        s5_q9: lang.nl_home.s5_q9,
        s5_a9: lang.nl_home.s5_a9,
        s5_q10: lang.nl_home.s5_q10,
        s5_a10: lang.nl_home.s5_a10,
        s5_q11: lang.nl_home.s5_q11,
        s5_a11: lang.nl_home.s5_a11
      }
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
        setCookie("userLang", "en", 200);
      }
    }, // end checkCookies

    changeLang: function(language) {
      console.log("execute changeLang");

      // english
      if (language.includes("en")) {
        console.log("change language to ENG");
        //section1
        this.title = lang.en_home.title;
        this.title2 = lang.en_home.title2;
        this.button_header1 = lang.en_home.button_header1;

        //section2
        this.s2_title = lang.en_home.s2_title;
        this.s2_p1 = lang.en_home.s2_p1;

        //section3
        this.s3_title = lang.en_home.s3_title;
        this.s3_img_title1 = lang.en_home.s3_img_title1;
        this.s3_img_p1 = lang.en_home.s3_img_p1;
        this.s3_img_title2 = lang.en_home.s3_img_title2;
        this.s3_img_p2 = lang.en_home.s3_img_p2;
        this.s3_img_title3 = lang.en_home.s3_img_title3;
        this.s3_img_p3 = lang.en_home.s3_img_p3;

        //section4
        this.s4_title = lang.en_home.s4_title;
        this.s4_p1 = lang.en_home.s4_p1;

        // section 6
        this.s6_title = lang.en_home.s6_title;
        this.s6_p1 = lang.en_home.s6_p1;

        // section 5
        this.faq.s5_q1 = lang.en_home.s5_q1;
        this.faq.s5_a1 = lang.en_home.s5_a1;
        this.faq.s5_q2 = lang.en_home.s5_q2;
        this.faq.s5_a2 = lang.en_home.s5_a2;
        this.faq.s5_q3 = lang.en_home.s5_q3;
        this.faq.s5_a3 = lang.en_home.s5_a3;
        this.faq.s5_q4 = lang.en_home.s5_q4;
        this.faq.s5_a4 = lang.en_home.s5_a4;
        this.faq.s5_q5 = lang.en_home.s5_q5;
        this.faq.s5_a5 = lang.en_home.s5_a5;
        this.faq.s5_q6 = lang.en_home.s5_q6;
        this.faq.s5_a6 = lang.en_home.s5_a6;
        this.faq.s5_q7 = lang.en_home.s5_q7;
        this.faq.s5_a7 = lang.en_home.s5_a7;
        this.faq.s5_q8 = lang.en_home.s5_q8;
        this.faq.s5_a8 = lang.en_home.s5_a8;
        this.faq.s5_q9 = lang.en_home.s5_q9;
        this.faq.s5_a9 = lang.en_home.s5_a9;
        this.faq.s5_q10 = lang.en_home.s5_q10;
        this.faq.s5_a10 = lang.en_home.s5_a10;
        this.faq.s5_q11 = lang.en_home.s5_q11;
        this.faq.s5_a11 = lang.en_home.s5_a1;

        setCookie("userLang", "en", 200);
        return;
      }

      // Dutch
      console.log("change language to NL");
      //section1
      this.title = lang.nl_home.title;
      this.title2 = lang.nl_home.title2;
      this.button_header1 = lang.nl_home.button_header1;

      //section2
      this.s2_title = lang.nl_home.s2_title;
      this.s2_p1 = lang.nl_home.s2_p1;

      //section3
      this.s3_title = lang.nl_home.s3_title;
      this.s3_img_title1 = lang.nl_home.s3_img_title1;
      this.s3_img_p1 = lang.nl_home.s3_img_p1;
      this.s3_img_title2 = lang.nl_home.s3_img_title2;
      this.s3_img_p2 = lang.nl_home.s3_img_p2;
      this.s3_img_title3 = lang.nl_home.s3_img_title3;
      this.s3_img_p3 = lang.nl_home.s3_img_p3;

      //section4
      this.s4_title = lang.nl_home.s4_title;
      this.s4_p1 = lang.nl_home.s4_p1;

      // section 6
      this.s6_title = lang.nl_home.s6_title;
      this.s6_p1 = lang.nl_home.s6_p1;

      // section 5
      this.faq.s5_q1 = lang.nl_home.s5_q1;
      this.faq.s5_a1 = lang.nl_home.s5_a1;
      this.faq.s5_q2 = lang.nl_home.s5_q2;
      this.faq.s5_a2 = lang.nl_home.s5_a2;
      this.faq.s5_q3 = lang.nl_home.s5_q3;
      this.faq.s5_a3 = lang.nl_home.s5_a3;
      this.faq.s5_q4 = lang.nl_home.s5_q4;
      this.faq.s5_a4 = lang.nl_home.s5_a4;
      this.faq.s5_q5 = lang.nl_home.s5_q5;
      this.faq.s5_a5 = lang.nl_home.s5_a5;
      this.faq.s5_q6 = lang.nl_home.s5_q6;
      this.faq.s5_a6 = lang.nl_home.s5_a6;
      this.faq.s5_q7 = lang.nl_home.s5_q7;
      this.faq.s5_a7 = lang.nl_home.s5_a7;
      this.faq.s5_q8 = lang.nl_home.s5_q8;
      this.faq.s5_a8 = lang.nl_home.s5_a8;
      this.faq.s5_q9 = lang.nl_home.s5_q9;
      this.faq.s5_a9 = lang.nl_home.s5_a9;
      this.faq.s5_q10 = lang.nl_home.s5_q10;
      this.faq.s5_a10 = lang.nl_home.s5_a10;
      this.faq.s5_q11 = lang.nl_home.s5_q11;
      this.faq.s5_a11 = lang.nl_home.s5_a1;

      setCookie("userLang", "nl", 200);
    } // end changeLang
  },
  // Load Components
  components: {
    Faq: Faq,
    Footer: Footer,
    Carousel: Carousel,
    Slide: Slide,
    Navigation: Navigation
  }
};
</script>

// import style here
<style lang="scss" src="./../../../styles/Home.scss"></style>
