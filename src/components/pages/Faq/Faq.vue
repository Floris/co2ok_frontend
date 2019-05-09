<template>
  <div class="faq">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>
    <div class="jumbotron">
      <div class="background_color"></div>
    </div>
    <div class="questions">
      <div class="line_container">
        <div class="line"></div>
      </div>
      <div class="content">
        <h2>FAQ Ninja</h2>
      </div>
      <Faqbox :faq="lang_ninja"></Faqbox>
      <div class="content">
        <h2>FAQ Business</h2>
        <Faqbox :faq="lang_business"></Faqbox>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import lang from "./../../../lang/lang_faq.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Faqbox from "./Faqbox";
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
      //   title: lang.nl.title,
      //   title2: lang.nl.title2,

      //   // section 5
      lang_ninja: {
        q1: {
          q: lang.nl.ninja.q1,
          a: lang.nl.ninja.a1
        },
        q2: {
          q: lang.nl.ninja.q2,
          a: lang.nl.ninja.a2
        },
        q3: {
          q: lang.nl.ninja.q3,
          a: lang.nl.ninja.a3
        },
        q4: {
          q: lang.nl.ninja.q4,
          a: lang.nl.ninja.a4
        },
        q5: {
          q: lang.nl.ninja.q5,
          a: lang.nl.ninja.a5
        },
        q6: {
          q: lang.nl.ninja.q6,
          a: lang.nl.ninja.a6
        },
        q7: {
          q: lang.nl.ninja.q7,
          a: lang.nl.ninja.a7
        },
        q8: {
          q: lang.nl.ninja.q8,
          a: lang.nl.ninja.a8
        },
        q9: {
          q: lang.nl.ninja.q9,
          a: lang.nl.ninja.a9
        },
        q10: {
          q: lang.nl.ninja.q10,
          a: lang.nl.ninja.a10
        },
        q11: {
          q: lang.nl.ninja.q11,
          a: lang.nl.ninja.a11
        }
      },
      lang_business: {
        q1: {
          q: lang.nl.business.q1,
          a: lang.nl.business.a1
        },
        q2: {
          q: lang.nl.business.q2,
          a: lang.nl.business.a2
        },
        q3: {
          q: lang.nl.business.q3,
          a: lang.nl.business.a3
        },
        q4: {
          q: lang.nl.business.q4,
          a: lang.nl.business.a4
        },
        q5: {
          q: lang.nl.business.q5,
          a: lang.nl.business.a5
        },
        q6: {
          q: lang.nl.business.q6,
          a: lang.nl.business.a6
        },
        q7: {
          q: lang.nl.business.q7,
          a: lang.nl.business.a7
        },
        q8: {
          q: lang.nl.business.q8,
          a: lang.nl.business.a8
        },
        q9: {
          q: lang.nl.business.q9,
          a: lang.nl.business.a9
        },
        q10: {
          q: lang.nl.business.q10,
          a: lang.nl.business.a10
        }
      }
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

      // faq ninja
      this.lang_ninja = {
        q1: {
          q: lang[language].ninja.q1,
          a: lang[language].ninja.a1
        },
        q2: {
          q: lang[language].ninja.q2,
          a: lang[language].ninja.a2
        },
        q3: {
          q: lang[language].ninja.q3,
          a: lang[language].ninja.a3
        },
        q4: {
          q: lang[language].ninja.q4,
          a: lang[language].ninja.a4
        },
        q5: {
          q: lang[language].ninja.q5,
          a: lang[language].ninja.a5
        },
        q6: {
          q: lang[language].ninja.q6,
          a: lang[language].ninja.a6
        },
        q7: {
          q: lang[language].ninja.q7,
          a: lang[language].ninja.a7
        },
        q8: {
          q: lang[language].ninja.q8,
          a: lang[language].ninja.a8
        },
        q9: {
          q: lang[language].ninja.q9,
          a: lang[language].ninja.a9
        },
        q10: {
          q: lang[language].ninja.q10,
          a: lang[language].ninja.a10
        },
        q11: {
          q: lang[language].ninja.q11,
          a: lang[language].ninja.a11
        }
      };

      this.lang_business = {
        q1: {
          q: lang[language].business.q1,
          a: lang[language].business.a1
        },
        q2: {
          q: lang[language].business.q2,
          a: lang[language].business.a2
        },
        q3: {
          q: lang[language].business.q3,
          a: lang[language].business.a3
        },
        q4: {
          q: lang[language].business.q4,
          a: lang[language].business.a4
        },
        q5: {
          q: lang[language].business.q5,
          a: lang[language].business.a5
        },
        q6: {
          q: lang[language].business.q6,
          a: lang[language].business.a6
        },
        q7: {
          q: lang[language].business.q7,
          a: lang[language].business.a7
        },
        q8: {
          q: lang[language].business.q8,
          a: lang[language].business.a8
        },
        q9: {
          q: lang[language].business.q9,
          a: lang[language].business.a9
        },
        q10: {
          q: lang[language].business.q10,
          a: lang[language].business.a10
        }
      };

      //   faq business

      setCookie("userLang", language, 200);
      this.lang = language;
    } // end changeLang
  },
  // Load Components
  components: {
    Faqbox: Faqbox,
    Footer: Footer,
    Carousel: Carousel,
    Slide: Slide,
    Navigation: Navigation
  }
};
</script>

// import style here
<style lang="scss" src="./../../../styles/Faq.scss"></style>
