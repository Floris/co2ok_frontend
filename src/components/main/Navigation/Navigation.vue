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
          <router-link
            class="spacing-desktop"
            v-bind:class="{showItems : isActive}"
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
          >{{routes.text}}</router-link>
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
            <button
              v-bind:class="{showButton : isActive}"
              class="button green hidden"
            >Download Ninja</button>
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
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "BUSINESS",
          page: "/business"
        },
        {
          id: 1,
          text: "PROJECTEN",
          page: "/projecten"
        },
        {
          id: 2,
          text: "ABOUT",
          page: "/about"
        },
        {
          id: 3,
          text: "FAQ",
          page: "/faq"
        }
      ],

      isActive: false,
      showMobileMenu: false
    };
  },
  props: ["lang"],
  methods: {
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
    changeLang(lang) {
      this.$emit("changeLangNav", lang);
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