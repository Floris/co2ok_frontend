<template>
  <div class="footer">
    <div class="content">
      <div class="section1">
        <div class="group">
          <div class="group-item">
            <i class="fas fa-map-marker-alt fa-lg"></i>
            <p>Lange Viestraat 2, Utrecht</p>
          </div>
        </div>

        <div class="group">
          <div class="group-item">
              <i class="fas fa-envelope fa-lg"></i>
              <p>info@co2ok.eco</p>
            </div>
          </div>
          
        <div class="group">
          <div class="group-item">
            <i class="fas fa-phone fa-lg"></i>
            <p>+31639765259</p>
          </div>
        </div>

        <div class="group">
          <div class="group-item">
            <p>Kvk: 69752753</p>
          </div>
        </div>
        <div class="group">
          <div class="group-item">
            <router-link to="/privacy">Privacy policy</router-link>
          </div>
        </div>
      </div>
            
      <div class="section1 social-links">
        <div class="group">
          <div class="group-item">
            <div class="group-item ">
                <a href="https://www.instagram.com/co2ok.eco/" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/CO2ok/" target="_blank">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/co%E2%82%82ok/" target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/CO2ok_eco" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p>Copyright by</p>
      <img src="../../../assets/co2ok_white.svg">
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

