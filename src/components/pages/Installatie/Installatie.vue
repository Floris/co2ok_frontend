<template>
  <div class="installatie">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>
    <div class="block_intro">
      <div class="content">
        <div class="installatie_blok">
          <div class="blok_titleinstallatie">
            <div class="blok_titel">
              <h1>Plugin Installatie</h1>
            </div>
            <div class="blok_subtitel">
              <h3>Met een paar klikken vecht je mee en is je imago supergroen!</h3>
            </div>
            <div class="titel_lijn"></div>
          </div>
          <div class="blokken">
            <div class="blok">
              <div class="blok_2">
                <h3>WooCommerce plugin installatie</h3>
                <p>
                  1: Login in de beheeromgeving van je webshop (de WordPress admin)
                  2: Open het ‘Nieuwe plugin’/‘Add new plugin’ scherm:
                </p>
              </div>
              <div class="blok_2">
                <div class="blk_2"></div>
                <div class="blk_2">
                  <div class="installatie_foto1"></div>
                </div>
              </div>
              <div class="blok_2">
                <p>
                  3: Zoek naar ‘co2ok’
                  <br>4: Klik op ‘Nu installeren’/’Install Now’:
                </p>
                <div class="installatie_foto2"></div>
              </div>
              <div class="blok_2">
                <p>
                  5: Na enkele momenten is de plugin geïnstalleerd, klik vervolgens op ‘Activeren’:
                  Dat was het! De rest gaat vanzelf. Mocht je nog vragen hebben/onverhoopt tegen problemen aanlopen, we staan we je graag telefonisch/per mail te woord.
                </p>
              </div>
              <div class="blok_2"></div>
            </div>
            <div class="blok">
              <div class="blok_3">
                <h3>Magento extension/plugin</h3>
                <p>Onze Magento plugin is sinds kort in de Magento marketplace beschikbaar! Hier terug te vinden. Binnenkort komt hier de installatiehandleiding. Voorbeeld van de knop in een Magento shop:</p>
              </div>
              <div class="blok_3">
                <div class="installatie_foto3"></div>
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
// import lang from "./../../../lang/lang_installatie.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";

export default {
  data() {
    return {
      lang: "nl"
    };
  },
  components: {
    Navigation: Navigation,
    Footer: Footer
  },
  mounted: function() {
    this.checkCookies();

    // The .$on function gets the language emit function from the navigation
    this.$on("changeLangNav", lang => {
      this.changeLang(lang);
    });
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

      //section1
      this.title = lang[language].s1_title;

      //section 2
      this.s2_title = lang[language].s2_title;
      this.s2_p1 = lang[language].s2_p1;
      this.s2_p2 = lang[language].s2_p2;
      this.s2_p3 = lang[language].s2_p3;
      this.s2_p4 = lang[language].s2_p4;

      //section 3
      this.s3_title = lang[language].s3_title;

      setCookie("userLang", language, 200);
      this.lang = language;
    } // end changeLang
  }
};
</script>


<style lang="scss" src="./../../../styles/installatie.scss"></style>