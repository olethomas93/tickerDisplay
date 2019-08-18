<template>
  <div id="app" class="container">
    <buttonheader v-on:add-chidren="this, addChildren($event)" />
   
       
    
    <component
      v-for="(children, index) in childrens"
      :key="children.name"
      :data="children"
      v-bind:is="children"
      v-on:delete-row="removeChildren(index)"
    ></component>


    <div class="display-box ">
      <h4 id="headDisplay">Ticker display</h4>
      <div id="display-Container"></div>
    </div>
  </div>
</template>

<script>
import movable from "./components/static/movable";
import tradingview from "./components/movable-components/movable-ticker";
// import buttonheader from "./components/test/Header";
import Sidb from "./components/test/Sidebar";
import timeclock from "./components/movable-components/movable-time";
import date from "./components/movable-components/movable-date";
import buttonheader from "./components/test/header4"
import youtubeVue from "./components/movable-components/movable-youtube";
import rotating from "./components/test/header3";

export default {
  name: "app",
  components: {
    movable,
    tradingview,
    buttonheader,
    timeclock,
    date,
    rotating,
    youtubeVue,
    
  },

  mounted() {
    this.childrens = this.$store.getters.activeChildren;
  },

  data() {
    return {
      childrens: [],
      selectedFile: null
    };
  },
  methods: {
    addChildren(name) {
      console.log(name);
      if (name == "tradingView") {
        this.$store.commit("addChildren", tradingview);
      }
      if (name == "time") {
        this.$store.commit("addChildren", timeclock);
      }
      if (name == "date") {
        this.$store.commit("addChildren", date);
      }
      if (name == "youtube") {
        this.$store.commit("addChildren", youtubeVue);
      }
    },
    removeChildren(index) {
      console.log("fegege");
      this.$store.commit("removeChildren", index);
    },
    setChildren(childrens) {
      this.$store.commit("setChildren", childrens);
    }
  }
};
</script>



<style scoped>
@import url("");

.display-box #headDisplay {
  font-size: 50px;
  color: #f18904;

  left: 45%;
  top: -50%;
}
</style>
