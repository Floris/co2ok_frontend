<template>
  <div class="qa_section">
    <h2>FAQ</h2>
    <div class="content">
      <div class="qa_block">
        <div v-on:click="show(1)" class="q">{{faq.s5_q1}}</div>
        <transition name="fade">
          <div v-if="show1" class="a">{{faq.s5_a1}}</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show(2)" class="q">{{faq.s5_q2}}</div>
        <transition name="fade">
          <div v-if="show2" class="a">{{faq.s5_a2}}</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show(3)" class="q">{{faq.s5_q3}}</div>
        <transition name="fade">
          <div v-if="show3" class="a">{{faq.s5_a3}}</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show(4)" class="q">{{faq.s5_q4}}</div>
        <transition name="fade">
          <div v-if="show4" class="a">{{faq.s5_a4}}</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show(5)" class="q">{{faq.s5_q5}}</div>
        <transition name="fade">
          <div v-if="show5" class="a">{{faq.s5_a5}}</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show(6)" class="q">{{faq.s5_q6}}</div>
        <transition name="fade">
          <div v-if="show6" class="a">{{faq.s5_a6}}</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show(7)" class="q">{{faq.s5_q7}}</div>
        <transition name="fade">
          <div v-if="show7" class="a">{{faq.s5_a7}}</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show(8)" class="q">{{faq.s5_q8}}</div>
        <transition name="fade">
          <div v-if="show8" class="a">{{faq.s5_a8}}</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show(9)" class="q">{{faq.s5_q9}}</div>
        <transition name="fade">
          <div v-if="show9" class="a">{{faq.s5_a9}}</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show(10)" class="q">{{faq.s5_q10}}</div>
        <transition name="fade">
          <div v-if="show10" class="a">{{faq.s5_a10}}</div>
        </transition>
      </div>

      <div class="qa_block">
        <div v-on:click="show(11)" class="q">{{faq.s5_q11}}</div>
        <transition name="fade">
          <div v-if="show11" class="a">{{faq.s5_a11}}</div>
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
      prevNumber: null,
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
  },
  props: ["faq"],
  methods: {
    show(number) {
      // reset
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
      this.show8 = false;
      this.show9 = false;
      this.show10 = false;
      this.show11 = false;

      if (number === this.prevNumber) {
        // only close
        this.prevNumber = null;
        return;
      }

      switch (number) {
        case 1:
          this.show1 = true;
          break;
        case 2:
          this.show2 = true;
          break;
        case 3:
          this.show3 = true;
          break;
        case 4:
          this.show4 = true;
          break;
        case 5:
          this.show5 = true;
          break;
        case 6:
          this.show6 = true;
          break;
        case 7:
          this.show7 = true;
          break;
        case 8:
          this.show8 = true;
          break;
        case 9:
          this.show9 = true;
          break;
        case 10:
          this.show10 = true;
          break;
        case 11:
          this.show11 = true;
          break;
      }

      this.prevNumber = number;
    }
  }
};
</script>

<style lang="scss" src="./../../../styles/Home.scss"></style>