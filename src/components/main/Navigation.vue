<template>
  <div class="navigation">
    <nav class="navbar" v-bind:class="{showBar : isActive}">
      <div class="content">
        <div class="co2ok-logo">
          <a href="/">
            <img src="../../assets/co2ok_white.svg" v-bind:class="{hideLogo : isActive}">
            <img
              src="../../assets/co2ok_logo.png"
              id="hiddenLogo"
              v-bind:class="{showLogo : isActive}"
            >
          </a>
        </div>
        <div class="nav-items">
          <router-link
            class="spacing-desktop"
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
          >{{routes.text}}</router-link>
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
          text: "Business",
          page: "/business"
        },
        {
          id: 1,
          text: "Team",
          page: "/team"
        },
        {
          id: 2,
          text: "CO₂ compensatie",
          page: "/"
        },
        {
          id: 3,
          text: "Login",
          page: "/Login"
        },
        {
          id: 4,
          text: "Download Ninja",
          page: "/download"
        }
      ],

      isActive: false,
      showMobileMenu: false
    };
  },
  methods: {
    //gets called when you scroll
    handleScroll(event) {
      console.log("handlescroll", window.pageYOffset);
      if (window.pageYOffset > 800 && screen.width > 600) {
        console.log("navbar true");
        this.isActive = true;
      } else {
        console.log("navbar false");
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

<style lang="scss" src="../../styles/Navigation.scss"></style>