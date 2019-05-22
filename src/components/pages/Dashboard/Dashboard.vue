<template>
  <div class="dashboard">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>
 
  <div class="content">
    <h1>Profile</h1>
    <h2>The power of ninja is together!</h2>
    <h3>Tell your friends and family about the Ninja App <br> and share the link to fight climate change.</h3>
    <div class="box">
      <p class="link"> https://co2ok.ninja/152
        <i class="far fa-copy"></i>
      </p>
    </div>
    <div class="social" style="margin-top:20px; magin-bottom:20px;">
      <a href="https://www.facebook.com/sharer?u=https%3A%2F%2Fco2ok.ninja%2F152" target="_blank">
        <i class="fab fa-facebook-square big_icon"></i>
        </a>
      <a href="https://twitter.com/intent/tweet?text=Help%20me%20fight%20climate%20change%20while%20shopping%20-%20easy%20and%20for%20free!%20http%3A%2F%2Fco2ok.ninja%2F152">
        <i class="fab fa-twitter-square big_icon"></i>
      </a>
    </div>
      <div class="group">
        <div class="box-co2 group_col">
          <h3 class="title-box"> CO₂ compensated </h3>
          <p style="text-decoration: underline; font-size: 20px; text-align: center; ">{{number}} KGS</p>
          <div class="img_container">
            <img src="../../../assets/chimneys-co2-compensated.png">
          </div>
          <p class="chimneys-text">(Our developers are working hard to make <br> the CO2 counter work in the near future)</p>
        </div>
        <div class="box-stars">
          <h3 class="title-box"> Ninja Stars </h3>
          <div class="img_container" style="margin-top: 50px;">
            <img src="../../../assets/shurikens-new-temp.png">
          </div>
          <p class="chimneys-text" style="margin-top: 150px;">(0 ninja stars)</p>
        </div>
      </div>


      <p style="text-align: center;">The online shop makes your purchase climate neutral and that way we actively compensate CO2 through a sustainable project. <br> Make sure every penny is worth it so we can live on a green and clean planet.</p>
      <div class="pick group_col">
        <h2 class="title-box"> Pick a cause </h2>
        <img src="../../../assets/ninjaDesign_headicon_mindful.png" style="height:150px;">

        <div class="img_container_ninja" style="margin:10px;">
          <div class="block">
            <img src="../../../assets/cropped-cropped-klimaschutzprojekt-indien-square.jpg" style="height:150px; width: 150px; border-radius: 15px; box-shadow: 2px 2px 20px grey;">
          </div>
          <div class="block">
            <img src="../../../assets/cropped-cropped-zon-en-wind-winter-square.jpg" style="height:150px; width: 150px; border-radius: 15px; box-shadow: 2px 2px 20px grey;">
          </div>
          <div class="block">
            <img src="../../../assets/Save80cookingstove-square.jpg" style="height:150px; width: 150px; border-radius: 15px; box-shadow: 2px 2px 20px grey;">
          </div>
        </div>
        <p class="chimneys-text">(Our developers are working hard to make the causes work)</p>
      </div>
  </div>

    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios";
import { getCookie, setCookie } from "./../../../../functions/cookies";

import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";

export default {
  name: "Dashboard",
  components: {
    Navigation: Navigation,
    Footer: Footer
  },
  data() {
    return {
      lang: "nl",
      urlServer: "http://127.0.0.1:8000",
      timer: null,
      number: 0,
    };
  },
  mounted: function() {
    this.checkIfLoggedIn();

     this.timer = setInterval(() => {
      this.number = Math.round(Math.random() * 1000)
    }, 800);
  },
  beforeDestroy: function() {
    clearInterval(this.timer);
  },
  methods: {
    checkIfLoggedIn() {
      if (!getCookie("loggedIn")) {
        console.log("not loggedIn, redirect to login");
        this.$router.push("/login"); // redirect to login
      }
    },
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

      setCookie("userLang", language, 200);
      this.lang = language;
    } // end changeLang
  }
};
</script>

<style lang="scss" src="./../../../styles/Dashboard.scss"></style>
