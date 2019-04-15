<template>
  <div class="qa_section">
    <h2>FAQ</h2>
    <div class="content">
      <div class="qa_block">
        <div
          v-on:click="show1 = !show1"
          class="q"
        >Waarom vraagt CO₂ok Ninja om toestemming voor “Lees en verander alle data van websites die je bezoekt”?</div>
        <transition name="fade">
          <div
            v-if="show1"
            class="a"
          >Om het systeem te laten werken moet de extensie informatie kunnen zien over websites die je bezoekt, zo kan de CO₂ok Ninja zien of je op de website van één van onze partners zit. Deze informatie blijft op je computer en zo wordt je privacy bewaakt. De CO₂ok Ninja heeft zijn open source code op Github gezet zodat iedereen kan verifiëren dat hij veilig is om te gebruiken.</div>
        </transition>
      </div>

      <div class="qa_block">
        <div
          v-on:click="show2 = !show2"
          class="q"
        >Worden mijn aankopen of internet activiteiten opgeslagen door CO₂ok Ninja?</div>
        <transition name="fade">
          <div
            v-if="show2"
            class="a"
          >Nee, dat gebeurt niet. Wij krijgen alleen algemene gegevens over de aankoop van producten van de webshops. Verder verzamelen we 0 persoonlijke gegevens "– we houden daar net zo weinig van als jij!</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show3 = !show3" class="q">Met welke winkels werkt CO₂ok Ninja samen?</div>
        <transition name="fade">
          <div
            v-if="show3"
            class="a"
          >CO₂ok Ninja is aangesloten bij meer dan 22000 webwinkels, zoals Ebay, Bol.com, Etsy en Barnes&Noble.</div>
        </transition>
      </div>

      <div class="qa_block">
        <div
          v-on:click="show4 = !show4"
          class="q"
        >Wat hebben bedrijven er aan om in de partnerlijst van CO₂ok Ninja te zitten?</div>
        <transition name="fade">
          <div v-if="show4" class="a">
            1. Onze gebruikers zijn cliënten die gedreven zijn om bij onze partners hun producten te halen in plaats van bij de concurrentie.
            <br>2. We zijn verschillende features aan het voorbereiden, zoals pagina’s van partners in zoekresultaten te vermelden of klanten op de hoogte houden wanneer een product dat ze willen aanschaffen van één van onze partners voor dezelfde prijs beschikbaar is. Deze features zullen klanten via een directe link naar de webwinkels leiden van onze partners.
            <br>3. U zult als bedrijf geassocieerd worden met het imago van CO₂ok, dat voor duurzaamheid en verbetering van het klimaat staat.
          </div>
        </transition>
      </div>

      <div class="qa_block">
        <div
          v-on:click="show5 = !show5"
          class="q"
        >Welk percentage van mijn aankoop word gebruikt om CO₂-uitstoot te compenseren?</div>
        <transition name="fade">
          <div
            v-if="show5"
            class="a"
          >CO₂ok ontvangt tussen 1-6% van de uiteindelijke aankoop, via de CO₂ok Ninja. Het percentage is afhankelijk van de webwinkel en het product. Hiervan gaat 75% naar de non-profitorganisatie Atmosfair gaat, die zich inzetten voor ons klimaat. De overige 25%% gebruikt wordt voor het bedrijf zelf – we willen iedereen in staat stellen klimaatverandering te bestrijden, dus tijd om de wereld te veroveren! We doen dit niet om er rijk van te worden. Ook maken we onze inkomsten en uitgaven ieder jaar openbaar.</div>
        </transition>
      </div>

      <div class="qa_block">
        <div
          v-on:click="show6 = !show6"
          class="q"
        >Ik shop alleen op Amazon en gebruik ook al Amazon Smile programma, is er een andere reden om CO₂ok Ninja te installeren?</div>
        <transition name="fade">
          <div
            v-if="show6"
            class="a"
          >Onze partners doneren 2 tot 12 keer meer via het programma Ninja en ontvangt 1-6% van het aankoop bedrag terwijl dit bij Amazon Smile maar 0,5% is. Ook heeft CO₂ok Ninja meer variatie in producten, zoals transport services, financiële producten en officiële kleding van verschillende clubs. Amazon Smile kan dit niet aanbieden.</div>
        </transition>
      </div>

      <div class="qa_block">
        <div
          v-on:click="show7 = !show7"
          class="q"
        >Hoe kan ik er zeker van zijn dat het geld word gebruikt om CO₂ uitstoot te verminderen?</div>
        <transition name="fade">
          <div
            v-if="show7"
            class="a"
          >De organisatie waar het geld naar toe zal gaan, zoals Atmosfair – en andere organisaties – zijn in bezit van verschillende hoogstaande certificaten. Ook worden onze inkomsten en uitgaven ieder jaar openbaar gemaakt.</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show8 = !show8" class="q">Kost het mij iets om co2ok Ninja te gebruiken?</div>
        <transition name="fade">
          <div
            v-if="show8"
            class="a"
          >Nee, het programma Ninja is gratis. De prijzen bij de webwinkels zullen precies hetzelfde zijn wanneer je CO₂ok Ninja gebruikt.</div>
        </transition>
      </div>

      <div class="qa_block">
        <div
          v-on:click="show9 = !show9"
          class="q"
        >Ik koop bij geen enkel bedrijf waar jullie programma op kan, is er een andere reden om het toch te installeren?</div>
        <transition name="fade">
          <div
            v-if="show9"
            class="a"
          >Ja, wij zijn constant bezig om nieuwe partners binnen te halen. Hierdoor zal het snel mogelijk kunnen zijn dat het bedrijf waar u wel shopt er in komt te staan. Hoe meer gebruikers hoe beter, bij iedere installatie zijn we een heel stuk dichterbij dan eerst en groeit ons naam en ons doel.</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show10 = !show10" class="q">Hoe werkt CO₂ok Ninja?</div>
        <transition name="fade">
          <div
            v-if="show10"
            class="a"
          >Na het installeren van het programma kunt u toestemming gegeven om CO2-uitstoot neutraal te shoppen. Tijdens het afrekenen zal er bij de webwinkel het CO2-uitstoot neutraal winkelen in kaart worden gebracht. Eenmaal afgerekend krijgt CO₂ok een deel van een bedrag via uw aankoop. Door de inkomsten via CO₂ok Ninja worden er donaties gedaan naar organisaties zoals Atmosfair.</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show11 = !show11" class="q">Credits aan Altruisto</div>
        <transition name="fade">
          <div
            v-if="show11"
            class="a"
          >We willen Altruisto graag bedanken voor het open source maken van hun code, zodat we ons project konden “forken”, gebaseerd op hun voorgaande werk. Altruisto doet geweldig werk met het doneren aan goede doelen door middel van online winkelen. Hun GitHub repo kun je hier vinden: Altruisto GitHub repository.</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq",
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false
    };
  }
};
</script>

<style lang="scss" src="./../../../styles/Home.scss"></style>