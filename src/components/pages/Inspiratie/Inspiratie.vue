<template>
  <div class="inspiratie">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>

    <div class="jumbotron">
      <div class="background_color"></div>
    </div>
    <div class="line_container">
      <div class="line"></div>
    </div>
    <div class="blog_content content">
      <div class="feeds">
        <div id="instafeed"></div>
        <div class="medium_posts">
          <div class="post">
            <div>
              <img class="img_background" src="../../../assets/blog_image1.jpg" alt>
            </div>
            <div class="img-background-color"></div>
            <div class="top orange">
              <p>Blog</p>
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
              <p>Blog</p>
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
              <p>Blog</p>
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
            <div class="top orange">
              <p>Blog</p>
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
            <div class="top orange">
              <p>Blog</p>
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
            <div class="top orange">
              <p>Blog</p>
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
    document.body.style.overflow = "initial";

    //instafeed
    let Instafeed = require("instafeed.js");
    Instafeed = new Instafeed(
      this.instaOptions
    );
    Instafeed.run();
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
  },
  data() {
    return {
        instaOptions: {
          get: 'user',
          // userId: process.env.INSTA_USER_ID,
          userId: '6780198652',
          limit: 12,
          resolution: 'standard_resolution',
          // height: '500px',
          accessToken: '6780198652.1677ed0.80d6f1f003594055b2112c307d8807c3',
          // accessToken: process.env.INSTA_ACCESS_TOKEN,
          template: '<div class="insta-container animated zoomIn" style="position:relative; z-index: 0;width:250px;height:250px;margin:10px;"><a href="{{link}}" target="_blank" style="width: 250px;height:250px;border-radius: 9px;"><div class="img-background-color"><div class="top green"><p>Instagram</p></div><div class="bottom"><div><p class="text">Likes: {{likes}}</p><p class="text">{{caption}}</p></div></div></div><img src="{{image}}" style="width: 100%;height:100%;border-radius: 9px;"/></a></div>',
          sortBy: 'most-recent'
          // filter: function(image) {
          //     return image.tags.indexOf('TAG_NAME') >= 0;
          // }
            }
        }
  }
};
</script>

<style lang="scss" src="./../../../styles/Inspiratie.scss"></style>
