<template>
  <div class="home">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>

    <div class="jumbotron">
      <div class="img-background-color"></div>
      <div class="jumbo_content">
        <div class="text_block">
          <h1>CO₂ compensation, because there is no planet B.</h1>
          <p>Tijdens de productie en het transport komen broeikasgassen vrij. Fabrikanten proberen deze uitstoot terug te dringen, maar de meeste schieten hier niet zo hard mee op. Om toch juist dat product CO₂ neutraal te kunnen kopen, is CO₂-compensatie een uitkomst.</p>
        </div>
      </div>
    </div>

    <div class="howItWorks">
      <div class="line_container">
        <div class="line"></div>
      </div>

      <div class="block">
        <h2>Onze services</h2>

        <div class="carousel showCarousel hidden">
          <carousel :centerMode="true" autoplay :per-page="1" :mouse-drag="true">
            <slide>
              <div class="group-item_col">
                <i class="fas fa-cloud"></i>
                <div class="text_box">
                  <h3>Voor de consumenten</h3>
                  <p>Wij bieden consumenten de mogelijkheid een extensie te downloaden, om hun aankopen klimaat neutraal te maken.</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="group-item_col">
                <i class="fas fa-calculator"></i>
                <div class="text_box">
                  <h3>Statistieken CO₂ compensatie</h3>
                  <p>Maak je eigen account en bekijk hoeveel CO₂ jij al gecompenseerd hebt!</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="img_block">
                <img src="../../../assets/hoeWerktHet3.svg">
                <h3>Deel 3</h3>
                <p>sdij sdijf aijidfj</p>
              </div>
            </slide>
            <slide>
              <div class="group-item_col">
                <i class="fas fa-desktop"></i>
                <div class="text_box">
                  <h3>Voor de webshop</h3>
                  <p>Wij bieden webshops de mogelijkheid een plugin te installeren. Hiermee kunnen webshops klimaat neutraal worden.</p>
                </div>
              </div>
            </slide>
          </carousel>
        </div>

        <div class="group hideCarousel">
          <div class="group-item_col">
            <i class="fas fa-cloud"></i>
            <div class="text_box">
              <h3>Voor de consumenten</h3>
              <p>Wij bieden consumenten de mogelijkheid een extensie te downloaden, om hun aankopen klimaat neutraal te maken.</p>
            </div>
          </div>
          <div class="group-item_col">
            <i class="fas fa-calculator"></i>
            <div class="text_box">
              <h3>Statistieken CO₂ compensatie</h3>
              <p>Maak je eigen account en bekijk hoeveel CO₂ jij al gecompenseerd hebt!</p>
            </div>
          </div>
          <div class="group-item_col">
            <i class="fas fa-desktop"></i>
            <div class="text_box">
              <h3>Voor de webshop</h3>
              <p>Wij bieden webshops de mogelijkheid een plugin te installeren. Hiermee kunnen webshops klimaat neutraal worden.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="calculation">
      <div class="content">
        <h2>CO₂ data berekening</h2>
      </div>
    </div>

    <div class="tree group_col content">
      <div class="line">
        <div class="bol_wrapper">
          <!-- <div class="bol"></div> -->
          <div class="bol2"></div>
        </div>
        <div class="bol_wrapper">
          <!-- <div class="bol"></div> -->
          <div class="bol2"></div>
        </div>
        <div class="bol_wrapper">
          <!-- <div class="bol"></div> -->
          <div class="bol2"></div>
        </div>
        <div class="bol_wrapper">
          <!-- <div class="bol"></div> -->
          <div class="bol2"></div>
        </div>
      </div>
      <div class="group">
        <div class="text_box">
          <h3>1: Co2 uitstoten berekenen</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus in distinctio officia magni ex consequatur assumenda doloremque doloribus suscipit optio. Illum tempore sed quisquam provident placeat sequi, hic natus?</p>
        </div>
      </div>
      <div class="group">
        <div class="text_box">
          <h3>2: Klimaat neutraal</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus in distinctio officia magni ex consequatur assumenda doloremque doloribus suscipit optio. Illum tempore sed quisquam provident placeat sequi, hic natus?</p>
        </div>
      </div>
      <div class="group">
        <div class="text_box">
          <h3>3: Compensatie projecten</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus in distinctio officia magni ex consequatur assumenda doloremque doloribus suscipit optio. Illum tempore sed quisquam provident placeat sequi, hic natus?</p>
        </div>
      </div>
      <div class="group">
        <div class="text_box">
          <h3>4: Klimaat impact</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus in distinctio officia magni ex consequatur assumenda doloremque doloribus suscipit optio. Illum tempore sed quisquam provident placeat sequi, hic natus?</p>
        </div>
      </div>
    </div>

    <div class="bomenPlanten">
      <div class="content">
        <h2>Oh dus jullie planten bomen enzo?</h2>
        <p>
          Nee. Hoewel bomen op zich natuurlijk wel CO₂ opnemen, zijn er verschillende redenen om te twijfelen aan het effect van zulke projecten: Pas na 50 jaar begint een bos een daadwerkelijk effect op de bescherming van het klimaat te hebben. Als het bos voor die tijd wordt gekapt of op een andere manier verdwijnt (bijvoorbeeld als gevolg van een plaag infectie) is de winst teniet gedaan. Ook kan de bescherming van het ene bos niet voorkomen dat het bos ernaast gekapt wordt – per saldo dus weer geen winst. Atmosfair geeft hier nog
          <a
            href="https://www.atmosfair.de/en/standards/forest_projects/"
            target="_blank"
          >verdere toelichting</a> op.
        </p>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
// import lang from "./../../../lang/lang_home.json";
import { getCookie, setCookie } from "./../../../../functions/cookies";
import Footer from "./../../main/Footer/Footer";
import Navigation from "./../../main/Navigation/Navigation";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  components: {
    Navigation: Navigation,
    Footer: Footer,
    Carousel: Carousel,
    Slide: Slide
  },
  data() {
    return {
      lang: "nl"
    };
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
    }, // end changeLang

    //gets called when you scroll
    handleScroll(event) {
      // console.log("handlescroll", window.pageYOffset);
      //   if (window.pageYOffset > 800 && screen.width > 600) {
      //     // console.log("navbar true");
      //     this.isActive = true;
      //   } else {
      //     // console.log("navbar false");
      //     this.isActive = false;
      //   }
    }
  },
  mounted: function() {
    this.checkCookies();
  }, // end mounted
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


// import style here
<style lang="scss" src="./../../../styles/Home.scss"></style>