<template>
  <div class="footer">
    <div class="content">
      <div class="section2">
        <p>Lange Viestraat 2, Utrecht</p>
        <p>The Netherlands</p>
        <p>+31639765259</p>
        <p>info@co2ok.eco</p>
      </div>
      <div class="section2">
        <p>© 2018 CO₂OK.</p>
        <p>Kvk: 69752753</p>
      </div>
      <div class="section2">
        <p>Social media</p>
        <router-link
          class="spacing"
          v-for="routes in links"
          v-bind:key="routes.id"
          :to="privacyStatement"
        >Privacy Statement</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      testdata: null
    };
  },
  mounted: function() {}, // end mounted

  methods: {}
};
</script>

// import style here
<style lang="scss" src="./../../../styles/Footer.scss"></style>
