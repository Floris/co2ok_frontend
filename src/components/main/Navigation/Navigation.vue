<template>
  <div class="navigation">
    <nav class="navbar" v-bind:class="{showBar : isActive}">
      <div class="content">
        <div class="co2ok-logo">
          <router-link to="/">
            <img
              id="logo1"
              src="../../../assets/co2ok_white.svg"
              v-bind:class="{hideLogo : isActive}"
            >
            <img
              id="hiddenLogo"
              src="../../../assets/co2ok_logo.png"
              v-bind:class="{showLogo : isActive}"
            >
          </router-link>
        </div>
        <div class="nav-items">
          <div class="dropdown">
            <router-link class="dropdown_zakelijk spacing-desktop" to="/zakelijk">{{zakelijk}}</router-link>
            <div class="dropdown-content">
            <router-link class="spacing-desktop dropdown_zakelijk" to="/causemarketing">CAUSEMARKETING</router-link>
            </div>
          </div>
          <router-link class="profile" to="/ninja">{{links[0].text}}</router-link>
          <router-link class="profile" to="/projecten">{{links[3].text}}</router-link>
          <router-link class="profile" to="/inspiratie">{{links[4].text}}</router-link>
          <router-link class="profile" to="/about">{{links[5].text}}</router-link>
          <router-link class="profile" to="/faq">{{links[6].text}}</router-link>
          <!-- <a href="/ninja" class="spacing-desktop">{{links[0].text}}</a>
          <a href="/projecten" class="spacing-desktop">{{links[3].text}}</a>
          <a href="/inspiratie" class="spacing-desktop">{{links[4].text}}</a>
          <a href="/about" class="spacing-desktop">{{links[5].text}}</a>
          <a href="/faq" class="spacing-desktop">{{links[6].text}}</a> -->
           <!-- <router-link
            class="spacing-desktop"
            v-bind:class="{showItems : isActive}"
            v-for="(routes) in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
          >{{routes.text}}</router-link> -->
          <router-link class="profile" to="/login">
            <i class="far fa-user"></i>
          </router-link>
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
          <a
            href="https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe"
            target="_blank"
          >
            <!-- <button
              v-bind:class="{showButton : isActive}"
              class="button green hidden"
            >Download Ninja</button>-->
          </a>
        </div>

        <div class="nav-items-mobile">
          <input type="checkbox">
          <!-- Span for hamburger icon -->
          <span></span>
          <span></span>
          <span></span>
          <!-- mobile menu -->
          <div class="mobile-menu">
            <router-link
              class="spacing"
              v-for="routes in links"
              v-bind:key="routes.id"
              :to="`${routes.page}`"
            >{{routes.text}}</router-link>
            <router-link class="profile_mobile" to="/login">
              <i class="far fa-user"></i>
            </router-link>
            <router-link to="/causemarketing">CAUSE MARKETING</router-link>
            <div class="lang_flag_mobile">
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
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import lang from "./../../../lang/lang_navigation.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";

export default {
  name: "Navigation",
  data() {
    return {
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
          page: "/projecten"
        },
        {
          id: 3,
          text: lang.nl.links[3].text,
          page: "/about"
        },
        {
          id: 4,
          text: lang.nl.links[4].text,
          page: "/inspiratie"
        },
        {
          id: 5,
          text: lang.nl.links[5].text,
          page: "/about"
        },
        {
          id: 6,
          text: lang.nl.links[6].text,
          page: "/faq"
        },
        // {
        //   id: 5,
        //   text: lang.nl.links[5].text,
        //   page: "/login"
        // }
      ],
      zakelijk: lang.nl.zakelijk,
      isActive: false,
      showMobileMenu: false
    };
  },
  props: ["lang"],
  mounted: function() {
    this.checkCookies();

    console.log(lang.nl.links);
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
    handleScroll(event) {
      // console.log("handlescroll", window.pageYOffset);
      if (window.pageYOffset > 800 && screen.width > 600) {
        // console.log("navbar true");
        this.isActive = true;
      } else {
        // console.log("navbar false");
        this.isActive = false;
      }
    },
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

      this.links.splice(1, 1, {
        id: 1,
        text: lang[lng].links[1].text,
        page: "/projecten"
      });

      this.links.splice(2, 1, {
        id: 2,
        text: lang[lng].links[2].text,
        page: "/about"
      });

      this.links.splice(3, 1, {
        id: 3,
        text: lang[lng].links[3].text,
        page: "/faq"
      });

      this.zakelijk = lang[lng].zakelijk;
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
