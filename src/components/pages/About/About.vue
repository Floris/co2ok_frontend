<template>
  <div class="about">
    <Navigation />
    <!-- ADD languages -->
    <div class="block_intro">
      <div class="content">
          <div class="block_text">
            <h3>"Klimaatverandering is een serieus probleem. Of je nu arm of rijk bent, het raakt ons allemaal!"</h3>
          </div>
      </div>
    </div>
    <div class="block_history">
      <div class="content">
        <div class="block_text">
          <div class="title">
            <h2>Het ontstaan van co2ok</h2>
          </div>
          <div class="text">
            <p>
              In maart 2017 stond Milo op de skipiste. Daar zag hij een bord staan met de CO2-uitstoot van een week wintersporten. Wat raar dat je dat niet kunt compenseren, dacht hij. Met een vliegticket kan dat wel. Eenmaal thuis las hij in een onderzoek van CE Delft dat spullen en kleding meer impact op het milieu hebben dan auto’s, vliegen en vlees eten bij elkaar. Dan moet je dat toch kunnen compenseren?
            </p>
            <p>
              Als de overheid niets doet, dan doe ik het, besloot Milo. Hij zei zijn baan op en schreef zich in bij de Kamer van Koophandel. En zo begon hij op 4 oktober 2017 met CO2ok. Zijn doel? Iedereen in staat te stellen zijn online aankopen klimaatneutraal te doen. Tegelijkertijd wil hij ervoor zorgen dat de levensstandaard van mensen in derdewereldlanden wordt verhoogd. Kortom: een win-winsituatie dus.
            </p>
            <p>
              Sinds oktober 2018 is Jos mede-eigenaar van CO2ok. Jos heeft een commerciële achtergrond en wilde graag voor zichzelf beginnen. Ook wilde hij zijn kennis graag inzetten voor het milieu. Toen hij hoorde over CO2ok was hij direct enthousiast. Hij belde Milo op en al snel was hun samenwerking een feit. Milo is verantwoordelijk voor de ideeën en de techniek en Jos voor de bedrijfsvoering.
            </p>  
            <p>
              Hun droom? Over vijf jaar worden alle producten klimaatneutraal geproduceerd en is het compenseren van je aankopen niet meer nodig. Daardoor is CO2ok overbodig geworden.
            </p>
          </div>
        </div>
        <div class="block_text_mobile">
          <div class="title group-item">
            <h2>Het ontstaan van co2ok</h2>
            <img src="../../../assets/Middel_24.svg" @click="showHistory = !showHistory">
          </div>
          <div class="text" v-if="showHistory">
            <p>
              In maart 2017 stond Milo op de skipiste. Daar zag hij een bord staan met de CO2-uitstoot van een week wintersporten. Wat raar dat je dat niet kunt compenseren, dacht hij. Met een vliegticket kan dat wel. Eenmaal thuis las hij in een onderzoek van CE Delft dat spullen en kleding meer impact op het milieu hebben dan auto’s, vliegen en vlees eten bij elkaar. Dan moet je dat toch kunnen compenseren?
            </p>
            <p>
              Als de overheid niets doet, dan doe ik het, besloot Milo. Hij zei zijn baan op en schreef zich in bij de Kamer van Koophandel. En zo begon hij op 4 oktober 2017 met CO2ok. Zijn doel? Iedereen in staat te stellen zijn online aankopen klimaatneutraal te doen. Tegelijkertijd wil hij ervoor zorgen dat de levensstandaard van mensen in derdewereldlanden wordt verhoogd. Kortom: een win-winsituatie dus.
            </p>
            <p>
              Sinds oktober 2018 is Jos mede-eigenaar van CO2ok. Jos heeft een commerciële achtergrond en wilde graag voor zichzelf beginnen. Ook wilde hij zijn kennis graag inzetten voor het milieu. Toen hij hoorde over CO2ok was hij direct enthousiast. Hij belde Milo op en al snel was hun samenwerking een feit. Milo is verantwoordelijk voor de ideeën en de techniek en Jos voor de bedrijfsvoering.
            </p>  
            <p>
              Hun droom? Over vijf jaar worden alle producten klimaatneutraal geproduceerd en is het compenseren van je aankopen niet meer nodig. Daardoor is CO2ok overbodig geworden.
            </p>
          </div>
        </div>
        <!-- img & title fighters section -->
        <div class="img_title">
          <img src="../../../assets/weegschaal.png">
          <h2>De klimaatstrijders van CO₂ok</h2>
        </div>
      </div>
    </div>
    <div class="block_fighters">
      <div class="content">
          <div class="fighters">
            <div class="img_block">
              <img src="../../../assets/milo.jpg"/>
              <h3>Milo de Vries</h3>
              <p>Founder</p>
              <p>quote</p>
            </div>
            <div class="img_block">
              <img src="../../../assets/milo.jpg"/>
              <h3>Milo de Vries</h3>
              <p>Founder</p>
              <p>quote</p>
            </div>
            <div class="img_block">
              <img src="../../../assets/milo.jpg"/>
              <h3>Milo de Vries</h3>
              <p>Founder</p>
              <p>quote</p>
            </div>
            <div class="img_block">
              <img src="../../../assets/milo.jpg"/>
              <h3>Milo de Vries</h3>
              <p>Founder</p>
              <p>quote</p>
            </div>
            <div class="img_block">
              <img src="../../../assets/milo.jpg"/>
              <h3>Milo de Vries</h3>
              <p>Founder</p>
              <p>quote</p>
            </div>
            <div class="img_block">
              <img src="../../../assets/milo.jpg"/>
              <h3>Milo de Vries</h3>
              <p>Founder</p>
              <p>quote</p>
            </div>
          </div>
          <div class="fighters_mobile">
            <div class="title group-item">
              <h2>De klimaatstrijders van CO₂ok</h2>
              <img src="../../../assets/Middel_24.svg" @click="showFighters = !showFighters">
            </div>
            <div class="img_collage" v-if="showFighters">
              <div class="img_block">
                <img src="../../../assets/milo.jpg"/>
                <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p>
              </div>
              <div class="img_block">
                <img src="../../../assets/milo.jpg"/>
                <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p>
              </div>
              <div class="img_block">
                <img src="../../../assets/milo.jpg"/>
                <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p>
              </div>
              <div class="img_block">
                <img src="../../../assets/milo.jpg"/>
                <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p>
              </div>
              <div class="img_block">
                <img src="../../../assets/milo.jpg"/>
                <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p>
              </div>
              <div class="img_block">
                <img src="../../../assets/milo.jpg"/>
                <h3>Milo de Vries</h3>
                <p>Founder</p>
                <p>quote</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./../../main/Navigation/Navigation";
import Footer from "./../../main/Footer/Footer";
import { Carousel, Slide } from "vue-carousel";

export default {
    components: {
      Navigation: Navigation,
      Footer: Footer,        
      Carousel: Carousel,
      Slide: Slide
  },
  data() {
    return {
      showHistory : true,
      showFighters: true,
      window: {
        width: 0
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      console.log(this.window.width);
      // console.log(this.show);
      if(this.window.with = window.innerWidth < 900) {
        this.showHistory = false;

      }
    }
  }
}
</script>

<style lang="scss" src="./../../../styles/About.scss"></style>