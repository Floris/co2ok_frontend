<template>
  <div class="footer">
    <div class="content">
      <div class="section1">
        <div class="group">
          <div class="group-item">
            <i class="fas fa-map-marker-alt"></i>
            <p>Lange Viestraat 2, Utrecht</p>
          </div>
          <div class="group-item">
            <i class="fas fa-phone"></i>
            <p>+31639765259</p>
          </div>
        </div>
        <div class="group">
          <div class="group-item">
            <i class="fas fa-envelope"></i>
            <p>info@co2ok.eco</p>
          </div>
          <div class="group-item">
            <i class="fas fa-building"></i>
            <p>Kvk: 69752753</p>
          </div>
        </div>
      </div>
      <div class="section2">
        <div class="group">
          <div class="group-item">
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p>© 2019 CO₂OK.</p>
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

