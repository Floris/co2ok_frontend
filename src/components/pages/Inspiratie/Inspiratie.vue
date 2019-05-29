<template>
  <div class="inspiratie">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>

    <div class="jumbotron">
      <div class="background_color"></div>
    </div>
    <div class="line_container">
      <div class="line"></div>
    </div>
    <div class="blog_content content group">
      <div class="medium_posts">
        <div class="post">
          <div>
            <img class="img_background" src="../../../assets/blog_image1.jpg" alt>
          </div>
          <div class="img-background-color"></div>
          <div class="top green">
            <p>Bedrijf</p>
          </div>
          <div class="bottom">
            <div class="title">
              <p>Veel nieuwe dingen!</p>
            </div>
            <div class="author">
              <img src="../../../assets/about_fotos/milo.png">
              <p>Milo de vries | 22 mei 2019</p>
            </div>
          </div>
        </div>
        <div class="post">
          <div>
            <img class="img_background" src="../../../assets/blog_image2.jpeg" alt>
          </div>
          <div class="img-background-color"></div>
          <div class="top orange">
            <p>Compensatie</p>
          </div>
          <div class="bottom">
            <div class="title">
              <p>Help onze planeet!</p>
            </div>
            <div class="author">
              <img src="../../../assets/about_fotos/milo.png">
              <p>Milo de vries | 22 mei 2019</p>
            </div>
          </div>
        </div>
        <div class="post">
          <div>
            <img class="img_background" src="../../../assets/blog_image3.jpg" alt>
          </div>
          <div class="img-background-color"></div>
          <div class="top orange">
            <p>Compensatie</p>
          </div>
          <div class="bottom">
            <div class="title">
              <p>Waarom "boxed" water beter is</p>
            </div>
            <div class="author">
              <img src="../../../assets/about_fotos/milo.png">
              <p>Milo de vries | 22 mei 2019</p>
            </div>
          </div>
        </div>
        <div class="post">
          <div>
            <img class="img_background" src="../../../assets/blog_image4.jpg" alt>
          </div>
          <div class="img-background-color"></div>
          <div class="top red">
            <p>Co2 Gebruik</p>
          </div>
          <div class="bottom">
            <div class="title">
              <p>Zonnenpaneel itempje</p>
            </div>
            <div class="author">
              <img src="../../../assets/about_fotos/milo.png">
              <p>Milo de vries | 22 mei 2019</p>
            </div>
          </div>
        </div>
        <div class="post">
          <div>
            <img class="img_background" src="../../../assets/blog_image5.jpg" alt>
          </div>
          <div class="img-background-color"></div>
          <div class="top red">
            <p>Co2 Gebruik</p>
          </div>
          <div class="bottom">
            <div class="title">
              <p>Help onze planeet!</p>
            </div>
            <div class="author">
              <img src="../../../assets/about_fotos/milo.png">
              <p>Milo de vries | 22 mei 2019</p>
            </div>
          </div>
        </div>
        <div class="post">
          <div>
            <img class="img_background" src="../../../assets/blog_image6.jpg" alt>
          </div>
          <div class="img-background-color"></div>
          <div class="top red">
            <p>Co2 Gebruik</p>
          </div>
          <div class="bottom">
            <div class="title">
              <p>Help onze planeet!</p>
            </div>
            <div class="author">
              <img src="../../../assets/about_fotos/milo.png">
              <p>Milo de vries | 22 mei 2019</p>
            </div>
          </div>
        </div>
      </div>
      <div class="instagram_feed">
        <iframe
          id="instagram-embed-0"
          class="instagram-media instagram-media-rendered"
          style="background: white; max-width: 600px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid #dbdbdb; box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 280px; padding: 0px;"
          src="https://www.instagram.com/p/BxIcchDFuHE/embed?utm_source=ig_embedembed/captioned/"
          scrolling="no"
          data-instgrm-payload-id="instagram-media-payload-0"
          height="750"
          frameborder="0"
        >
          <span
            data-mce-type="bookmark"
            style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;"
            class="mce_SELRES_start"
          ></span>
          <span
            data-mce-type="bookmark"
            style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;"
            class="mce_SELRES_start"
          ></span>
          <span
            data-mce-type="bookmark"
            style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;"
            class="mce_SELRES_start"
          ></span>
        </iframe>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
// import axios from "axios";
import { getCookie, setCookie } from "./../../../../functions/cookies";

import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";

export default {
  name: "Inspiratie",
  components: {
    Navigation: Navigation,
    Footer: Footer
  },
  mounted: function() {
    this.checkCookies();
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

      setCookie("userLang", language, 200);
      this.lang = language;
    } // end changeLang
  }
};
</script>

<style lang="scss" src="./../../../styles/Inspiratie.scss"></style>
