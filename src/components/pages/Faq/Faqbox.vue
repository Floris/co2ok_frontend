<template>
  <div class="faqbox">
    <div class="content">
      <div class="qa_block" v-for="(item, key) in faq" v-bind:key="key">
        <div v-on:click="show(key)" class="q">
          <p>{{item.q}}</p>
        </div>
        <transition name="fade">
          <div v-if="active[key]" class="a">
            <p>{{item.a}}</p>
          </div>
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
      active: {
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
        q7: false,
        q8: false,
        q9: false,
        q10: false,
        q11: false,
        q12: false
      }
    };
  },
  props: ["faq"],
  methods: {
    show(number) {
      // reset
      this.active = {
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
        q7: false,
        q8: false,
        q9: false,
        q10: false,
        q11: false,
        q12: false
      };

      if (number === this.prevNumber) {
        // only close
        this.prevNumber = null;
        return;
      }

      switch (number) {
        case "q1":
          this.active.q1 = true;
          break;
        case "q2":
          this.active.q2 = true;
          break;
        case "q3":
          this.active.q3 = true;
          break;
        case "q4":
          this.active.q4 = true;
          break;
        case "q5":
          this.active.q5 = true;
          break;
        case "q6":
          this.active.q6 = true;
          break;
        case "q7":
          this.active.q7 = true;
          break;
        case "q8":
          this.active.q8 = true;
          break;
        case "q9":
          this.active.q9 = true;
          break;
        case "q10":
          this.active.q10 = true;
          break;
        case "q11":
          this.active.q11 = true;
          break;
        case "q12":
          this.active.q12 = true;
          break;
      }

      this.prevNumber = number;
    }
  }
};
</script>
