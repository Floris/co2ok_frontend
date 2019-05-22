<template>
  <div class="home">
    <Navigation :lang="lang" @changeLangNav="changeLang"/>

    <div class="jumbotron">
      <div class="img-background-color"></div>
      <div class="content">
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

    <div class="help">
      <div class="img-background-color"></div>
      <div class="content group">
        <div class="main group-item_col">
          <h2>Help mee, shop klimaat neutraal!</h2>
          <p>Klimaat is hot - steeds meer mensen kiezen voor duurzaam en groen. Help mee met het bestrijden van klimaatverandering, door je op te geven als webshop of consument. Het enige wat je hoeft te doen, is een gratis browser extensie te installeren. Als je een webshop eigenaar bent kun je een gratis plugin installeren.</p>
          <div class="group">
            <router-link to="/login">
              <button class="button green">Strijd mee als webshop</button>
            </router-link>
            <router-link to="/login">
              <button class="button green">Strijd mee als consument</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="calculation">
      <div class="content group">
        <div class="calculation_left">
          <h2>CO₂ data berekening</h2>
          <p>
            Hoe weten we nou hoeveel CO₂ uitgestoten wordt bij de productie van goederen? En hoeveel willen we jou dan vragen bij te dragen om die uitstoot te compenseren? Hoewel het lastig is, hebben we een goede oplossing.
            Het antwoord op de eerste vraag klinkt misschien niet bevredigend. Het is namelijk erg lastig om per product uit te rekenen hoeveel CO₂ gecompenseerd zou moeten worden om klimaatneutraal te shoppen. Er is geen manier om dit snel en gegrond te doen voor een organisatie als de onze. Er zijn teveel variabelen waar we mee rekening zouden moeten houden. Per product zou het ons twee maanden duren. In die tijd kunnen we samen veel meer nuttige dingen doen voor de natuur, toch?
          </p>
          <p>Een oplossing zou zijn als fabrikanten dit voor hun rekening nemen. ‘Om deze schoen te produceren is 30 kilo CO₂ uitgestoten.’ Niet alleen zou het ons allemaal een stuk bewuster maken hoe we met onze wereld omgaan, maar ook zou het de producenten sieren. We zouden namelijk precies weten hoeveel we moeten compenseren om klimaatneutraal te kunnen shoppen.</p>
          <p>En nu het goede nieuws: met onze methode komen we er ook! Om in te schatten hoeveel jij zou moeten bijdragen om klimaatneutraal te shoppen, hebben wij de gemiddelde kosten voor CO₂-compensatie per product uitgerekend in relatie tot de prijs van het product. Als jij tussen 0,83% extra betaalt bovenop de totale prijs van je het product, shop je klimaatneutraal. Klinkt als een gek bedrag? Tel de btw erbij die we op je bijdrage moeten betalen, en je komt op één procent. </p>
          <p>Trouwens, één procent is strikt genomen aan de ruime kant. Het is beter om te veel te doen, dan te weinig. Atmosfair is er trouwens wel blij mee. Met jouw bijdrage zorgen ze bijvoorbeeld voor luchtkwaliteitverbetering in ontwikkelingslanden.</p>
        </div>
        <div class="calculation_right group-item_col">
          <img src="../../../assets/ninja_sit.png" alt="Sitting co2ok ninja">
          <p class="kgs">{{number}} KGS</p>
          <h3>Co2 gecompenseerd</h3>
          <p>(Our developers are working hard to make the CO2 counter work in the near future)</p>
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
      lang: "nl",
      number: 0,
      timer: null
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

    this.timer = setInterval(() => {
      this.number = Math.round(
        Math.random() * Math.round(Math.random() * 10000)
      );
    }, 1000);
  }, // end mounted
  //add(create) the event
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  //remove the event
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    clearInterval(this.timer);
    console.log("destroyed");
  }
};
</script>


// import style here
<style lang="scss" src="./../../../styles/Home.scss"></style>