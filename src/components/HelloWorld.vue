<template>
  <div class="helloWorld">
    <h1 class="msg">{{ title }}</h1>
    <h2 class="msg">{{ title2 }}</h2>
    <button v-on:click="changeLang('nl')"><img class='img_lang' src='../assets/nl_flag.png'/></button>
    <button v-on:click="changeLang('en')"><img class='img_lang' src='../assets/en_flag.png'/></button>
  </div>
</template>

<script>
import lang from './../lang/lang_home.json'
import {getCookie, setCookie} from './../../functions/cookies'

export default {
  name: 'HelloWorld',
  data () {
    return {
      title: lang.nl_home.title,
      title2: lang.nl_home.title2
    }
  },
  mounted: function (){
    this.checkCookies();
  }, // end mounted

  methods: {
    checkCookies(){
      console.log('%ccheck cookies -  ' + document.cookie, 'color:red;');

      if(getCookie('userLang')){ // checks if userLang cookie exists
        console.log('cookie exists');
        this.changeLang(getCookie('userLang'));
        return;
      }

      var userLang = navigator.language || navigator.userLanguage; 

      if(userLang.includes('en')){
          this.title = lang.en_home.title;
          this.title2 = lang.en_home.title2;
          setCookie('userLang', 'en', 14);
      }

    }, // end checkCookies

    changeLang: function(language){ 
      console.log('execute changeLang');
      if(language.includes('en')){
          console.log('change language to ENG');
          this.title = lang.en_home.title;
          this.title2 = lang.en_home.title2;
          setCookie('userLang', 'en', 14);
          return
      }

      console.log('change language to NL');
      this.title = lang.nl_home.title;
      this.title2 = lang.nl_home.title2;
      setCookie('userLang', 'nl', 14);
    } // end changeLang
  }
}
</script>

// import style here
<style lang="scss" src="./../styles/HelloWorld.scss"></style>
