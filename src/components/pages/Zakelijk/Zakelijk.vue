<template>
  <div class="zakelijk">
    <Navigation/>
    <!-- ADD languages -->
    <div class="top_intro">
      <div class="content">
        <img src="../../../assets/wereldbol.png">
        <div class="text">
          <!-- ADD languages -->
          <h1>Retailers,</h1>
          <h3>Groener en meer klanten, zonder inverstering</h3>
          <p>
            Klimaat is hot – steeds meer mensen kiezen voor duurzaam en groen.
            Door je klanten de kans te geven om de CO₂-uitstoot van hun aankopen te compenseren,
            kunnen we samen klimaatverandering terugdringen. En dat zonder kosten voor jouw bedrijf
            – het zorgt juist voor meer klanten!
          </p>
          <!-- <button class="button green">Help klimaatverandering bestrijden!</button> -->
        </div>
      </div>
    </div>
    <!-- ADD languages -->
    <div class="why_co2ok">
      <div class="img_background"></div>
      <!-- <div class="img-background-color"></div> -->

      <div class="why_co2ok_content content">
        <h2>Waarom Co2ok?</h2>
        <div class="carousel showCarousel hidden">
          <carousel
            :centerMode="true"
            :per-page="1"
            :navigate-to="someLocalProperty"
            :mouse-drag="true"
            :perPage="1"
          >
            <!-- ADD languages ALL slides-->
            <slide>
              <div class="content_block">
                <img src="../../../assets/icons_zakelijk/zakelijk_globe.svg">
                <h3>Go green</h3>
                <p>Als retailer run je je webshop natuurlijk zo duurzaam mogelijk. Sommige dingen liggen echter buiten je macht – het produceren en het vervoer van je producten bijvoorbeeld. Fabrikanten doen er te lang over om klimaatneutraal te worden. Met CO₂ok kunnen je klanten alles kopen wat ze willen, zonder bij te dragen aan klimaatverandering!</p>
              </div>
            </slide>
            <slide>
              <div class="content_block">
                <img src="../../../assets/icons_zakelijk/zakelijk_pijl.svg">
                <h3>Meer klanten in jouw webshop</h3>
                <p>Door je als webshop te associëren met een goed doel, zullen klanten eerder bij jou een aankoop doen dan bij een ander. Ook komen ze vaker terug. Onderzoek heeft aangetoond dat het zowel je merk als klantenbinding versterkt en zorgt voor minder verlaten winkelmandjes. Dit wordt ook wel ‘cause marketing’ genoemd</p>
              </div>
            </slide>
            <slide>
              <div class="content_block">
                <img src="../../../assets/icons_zakelijk/zakelijk_euro.svg">
                <h3>Gratis voor webshops</h3>
                <p>De plugin is geheel gratis voor jou als webshopeigenaar. Het kost maar 1 minuut van je tijd om de CO₂ok-plugin te installeren. Zodra deze geïntegreerd is in je webshop, kan de klant er zelf voor kiezen om een bijdrage te leveren. Zo maken ze hun aankoop klimaatneutraal. Deze kleine extra bijdrage ligt gemiddeld op 1%.</p>
              </div>
            </slide>
            <slide>
              <div class="content_block">
                <img src="../../../assets/icons_zakelijk/zakelijk_vink.svg">
                <h3>Makkelijke integratie en gebruik</h3>
                <p>De CO₂ok-plugin is met één klik te installeren en integreert naadloos in jouw webshop. Je klanten kunnen met één druk op de knop hun aankoop klimaatneutraal maken. Er verandert verder niets aan het bestelproces. Je raakt dus geen klanten kwijt door ingewikkelde procedures. Mocht er toch een probleem zijn met de plugin, dan zijn wij altijd bereikbaar via mail of telefoon.</p>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="content_block hideCarousel">
          <div class="content_in_block">
            <img src="../../../assets/icons_zakelijk/zakelijk_globe.svg">
            <div class="content_text">
              <h3>Go green</h3>
              <p>Als retailer run je je webshop natuurlijk zo duurzaam mogelijk. Sommige dingen liggen echter buiten je macht – het produceren en het vervoer van je producten bijvoorbeeld. Fabrikanten doen er te lang over om klimaatneutraal te worden. Met CO₂ok kunnen je klanten alles kopen wat ze willen, zonder bij te dragen aan klimaatverandering!</p>
            </div>
          </div>
          <div class="content_in_block">
            <img src="../../../assets/icons_zakelijk/zakelijk_pijl.svg">
            <div class="content_text">
              <h3>Meer klanten in jouw webshop</h3>
              <p>Door je als webshop te associëren met een goed doel, zullen klanten eerder bij jou een aankoop doen dan bij een ander. Ook komen ze vaker terug. Onderzoek heeft aangetoond dat het zowel je merk als klantenbinding versterkt en zorgt voor minder verlaten winkelmandjes. Dit wordt ook wel ‘cause marketing’ genoemd.</p>
            </div>
          </div>
          <div class="content_in_block">
            <img src="../../../assets/icons_zakelijk/zakelijk_euro.svg">
            <div class="content_text">
              <h3>Gratis voor webshops</h3>
              <p>De plugin is geheel gratis voor jou als webshopeigenaar. Het kost maar 1 minuut van je tijd om de CO₂ok-plugin te installeren. Zodra deze geïntegreerd is in je webshop, kan de klant er zelf voor kiezen om een bijdrage te leveren. Zo maken ze hun aankoop klimaatneutraal. Deze kleine extra bijdrage ligt gemiddeld op 1%.</p>
            </div>
          </div>
          <div class="content_in_block">
            <img src="../../../assets/icons_zakelijk/zakelijk_vink.svg">
            <div class="content_text">
              <h3>Makkelijke integratie en gebruik</h3>
              <p>De CO₂ok-plugin is met één klik te installeren en integreert naadloos in jouw webshop. Je klanten kunnen met één druk op de knop hun aankoop klimaatneutraal maken. Er verandert verder niets aan het bestelproces. Je raakt dus geen klanten kwijt door ingewikkelde procedures. Mocht er toch een probleem zijn met de plugin, dan zijn wij altijd bereikbaar via mail of telefoon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ADD languages -->
    <div class="block_cijfers">
      <div class="content">
        <h2>De cijfers</h2>
        <h3>Liegen er niet om</h3>
        <div class="carousel showCarousel hidden">
          <carousel
            :centerMode="true"
            :per-page="1"
            :navigate-to="someLocalProperty"
            :mouse-drag="true"
            :perPage="1"
          >
            <slide>
              <div class="block">
                <img src="../../../assets/icons_zakelijk/90.svg">
                <p>Wanneer gekozen wordt tussen twee merken van gelijke kwaliteit en prijs, kiest 90% van de klanten waarschijnlijk voor een “cause branded” product</p>
                <p>LINK</p>
              </div>
            </slide>
            <slide>
              <div class="block">
                <img src="../../../assets/icons_zakelijk/75.svg">
                <p>Wanneer gekozen wordt tussen twee merken van gelijke kwaliteit en prijs, kiest 90% van de klanten waarschijnlijk voor een “cause branded” product</p>
                <p>LINK</p>
              </div>
            </slide>
            <slide>
              <div class="block">
                <img src="../../../assets/icons_zakelijk/92.svg">
                <p>Wanneer gekozen wordt tussen twee merken van gelijke kwaliteit en prijs, kiest 90% van de klanten waarschijnlijk voor een “cause branded” product</p>
                <p>LINK</p>
              </div>
            </slide>
            <slide>
              <div class="block">
                <img src="../../../assets/icons_zakelijk/66.svg">
                <p>Wanneer gekozen wordt tussen twee merken van gelijke kwaliteit en prijs, kiest 90% van de klanten waarschijnlijk voor een “cause branded” product</p>
                <p>LINK</p>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="content_block group hideCarousel">
          <div class="block">
            <img src="../../../assets/icons_zakelijk/90.svg">
            <p>Wanneer gekozen wordt tussen twee merken van gelijke kwaliteit en prijs, kiest 90% van de klanten waarschijnlijk voor een “cause branded” product</p>
            <p>LINK</p>
          </div>
          <div class="block">
            <img src="../../../assets/icons_zakelijk/75.svg">
            <p>3 van de 4 respondenten is het er mee eens dat bedrijven acties kunnen ondernemen om zowel winst te verhogen als economische/sociale omstandigheden in de samenleving te verbeteren</p>
            <p>LINK</p>
          </div>
          <div class="block">
            <img src="../../../assets/icons_zakelijk/92.svg">
            <p>92% van consumenten geeft aan een positief beeld te hebben van een bedrijf wanneer een bedrijf een sociaal of milieu probleem aanpakt</p>
            <p>LINK</p>
          </div>
          <div class="block">
            <img src="../../../assets/icons_zakelijk/66.svg">
            <p>66% van consumenten willen dat merken een socio-politieke houding aannemen</p>
            <p>LINK</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block_form">
      <div class="content">
        <h2>In een paar minuten een groener imago</h2>
        <div class="form group">
          <div class="plugin_install">
            <h3>Plugin installatie</h3>
            <button class="button green">Magento</button>
            <button class="button green">Wordpress / WooCommerce</button>
          </div>
          <div class="ecom_input">
            <h3>Ander e-commerce system</h3>
            <div class="input_fields">
              <p>Naam*</p>
              <input v-model="name">
              <p>E-mail*</p>
              <input v-model="email">
              <p>telefoon nummer*</p>
              <input v-model="number">
              <p>e-commerce platform*</p>
              <input v-model="ecommerce">
              <button class="button green">Verstuur</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";
// import lang from "./../../../lang/lang_zakelijk.json";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Zakelijk",
  components: {
    Navigation: Navigation,
    Footer: Footer,
    Carousel: Carousel,
    Slide: Slide
  },
  data() {
    return {
      //language
      // lang: "nl",
      //text
      //top intro
      // title: lang.nl
    };
  }
};
</script>

<style lang="scss" src="./../../../styles/Zakelijk.scss"></style>
