<template>
  <div class="navigation">
    <nav class="navbar" v-bind:class="{showBar : isActive}">
      <div class="content">
        <div class="co2ok-logo">
          <img src="../../assets/logo_co2ok_groot.png">
        </div>
        <div class="nav-items">
          <router-link
            class="spacing"
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
          text: "Ninja",
          page: "/Home"
        },
        {
          id: 1,
          text: "Login",
          page: "/Login"
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