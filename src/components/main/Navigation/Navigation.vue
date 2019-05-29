<template>
  <div class="navigation">
    <nav class="navbar" v-bind:class="{showBar : isActive}">
      <div class="content">
        <div class="co2ok-logo">
          <router-link to="/">
            <img id="logo1" src="../../../assets/co2ok_logo.png">
            <img id="logo2" src="../../../assets/co2ok_white.svg">
          </router-link>
        </div>

        <div class="nav-items">
          <div class="spacing-desktop">
            <div class="lang_flag">
              <img
                v-if="lang === 'en'"
                src="../../../assets/nl_flag.png"
                v-on:click="changeLang('nl')"
              >
              <img
                v-if="lang === 'nl'"
                src="../../../assets/en_flag.png"
                v-on:click="changeLang('en')"
              >
            </div>
            <button
              class="hamburger hamburger--spin"
              id="hamburger_button"
              type="button"
              v-on:click="openNav()"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- <transition name="fade"> -->
    <!-- v-if="show"  -->
    <div id="myNav" class="overlay">
      <!-- Overlay content -->
      <div class="overlay-content">
        <router-link
          v-bind:class="{showItems : isActive}"
          v-bind:id="'navItem-'+routes.id"
          v-for="(routes) in links"
          v-bind:key="routes.id"
          :to="`${routes.page}`"
        >{{routes.text}}</router-link>
        <router-link class="profile" to="/login">
          <i class="far fa-user"></i>
        </router-link>
        <!-- <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>-->
      </div>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import lang from "./../../../lang/lang_navigation.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";

export default {
  name: "Navigation",
  data() {
    return {
      show: false,
      links: [
        {
          id: 0,
          text: lang.nl.links[0].text,
          page: "/ninja"
        },
        {
          id: 1,
          text: lang.nl.links[1].text,
          page: "/zakelijk"
        },
        {
          id: 2,
          text: lang.nl.links[2].text,
          page: "/causemarketing"
        },
        {
          id: 3,
          text: lang.nl.links[3].text,
          page: "/projecten"
        },
        {
          id: 4,
          text: lang.nl.links[4].text,
          page: "/inspiratie"
        },
        {
          id: 5,
          text: lang.nl.links[4].text,
          page: "/about"
        },
        {
          id: 6,
          text: lang.nl.links[5].text,
          page: "/faq"
        }
      ],
      isActive: false,
      showMobileMenu: false
    };
  },
  props: ["lang"],
  mounted: function() {
    this.checkCookies();

    console.log(lang.nl.links);

    if (this.show) {
    } else {
      document.body.style.overflow = "initial";
      document.getElementById("app").style.overflow = "initial";
    }
  },
  methods: {
    checkCookies() {
      console.log(
        "%ccheck cookies for nav -  " + document.cookie,
        "color:orange;"
      );

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
    //gets called when you scroll
    changeLang(lng) {
      this.$emit("changeLangNav", lng);

      this.links.splice(0, 1, {
        id: 0,
        text: lang[lng].links[0].text,
        page: "/ninja"
      });

      this.links.splice(1, 1, {
        id: 1,
        text: lang[lng].links[1].text,
        page: "/zakelijk"
      });

      this.links.splice(2, 1, {
        id: 2,
        text: lang[lng].links[2].text,
        page: "/causemarketing"
      });

      this.links.splice(3, 1, {
        id: 3,
        text: lang[lng].links[3].text,
        page: "/projecten"
      });

      this.links.splice(4, 1, {
        id: 4,
        text: lang[lng].links[4].text,
        page: "/inspiratie"
      });

      this.links.splice(5, 1, {
        id: 5,
        text: lang[lng].links[5].text,
        page: "/about"
      });

      this.links.splice(6, 1, {
        id: 6,
        text: lang[lng].links[6].text,
        page: "/faq"
      });

      this.zakelijk = lang[lng].zakelijk;
    },
    /* Open */
    openNav() {
      this.show = !this.show;

      if (this.show) {
        var element = document.getElementById("hamburger_button");
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";

        document.getElementById("app").style.overflow = "hidden";

        element.classList.add("is-active");
        // document.getElementsByClassName("navbar")[0].style.background =
        // "#2ecc71";
        document.getElementsByClassName("navbar")[0].style.background = "#fff";
        document.getElementsByClassName("navbar")[0].style.boxShadow =
          "initial";

        // document.getElementById("logo1").style.display = "none";
        // document.getElementById("logo2").style.display = "initial";

        this.isActive = true;

        document.getElementsByClassName("overlay")[0].style.height = "100%";
      } else {
        document.getElementById("app").style.overflow = "initial";

        document.getElementById("app").style.height = "100%";
        document.body.style.overflow = "initial";
        document.body.style.height = "initial";

        var element = document.getElementById("hamburger_button");

        element.classList.remove("is-active");

        setTimeout(() => {
          document.getElementsByClassName("navbar")[0].style.background =
            "#fff";
          document.getElementsByClassName("navbar")[0].style.boxShadow =
            "1px 1px 4px 0 rgba(0, 0, 0, .1)";

          document.getElementById("logo1").style.display = "initial";
          document.getElementById("logo2").style.display = "none";
        }, 300);

        document.getElementsByClassName("overlay")[0].style.height = "0";
        this.isActive = false;
      }
    }
  },
  //add(create) the event
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  //remove the event
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    console.log("destroyed");
  }
};
</script>

<style lang="scss" src="./../../../styles/Navigation.scss"></style>