<template>
  <div id="app" class="container">
    <buttonheader v-on:add-chidren="this, addChildren($event)" />
   
   
     
    <component
      v-for="(children, index) in this.activeChildren"
      :key="children.id"
      :data="children"
      v-bind:is="children"
      v-on:delete-row="removeChildren(index)"
    ></component>

  <display/>
    
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
import display from "./components/test/display-box"
import editor from "./components/static/editor"

import { mapState } from "vuex";
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
    display,
    editor
    
    
  },

  created(){
this.childrens = this.$store.getters.activeChildren;

 

  },

  mounted() {

     this.childrens = this.$store.getters.activeChildren;

      if(localStorage.getItem('children')) {
      try {
        this.setChildren(JSON.parse(localStorage.getItem('children')));
      } catch(e) {
        console.log(e);
        localStorage.removeItem('children');
      }
    }
    
    
    
  
  },
  computed: mapState(["activeChildren"]),

  data() {
    return {
      childrens: [],
     
    };
  },
  methods: {
    addChildren(name) {
      console.log(name);
      if (name == "tradingView") {
        this.$store.commit("addChildren", tradingview);
        
      }
      if (name == "timedigital") {
        this.$store.commit("addChildren", timeclock);
      }
      if (name == "date") {
        this.$store.commit("addChildren", date);
      }
      if (name == "youtube") {
        this.$store.commit("addChildren", youtubeVue);
      }
       if (name == "editor") {
        this.$store.commit("addChildren", editor);
      }
     
      this.savetoLocalStorage();

      
    },
    removeChildren(index) {
     
      this.$store.commit("removeChildren", index);

      this.savetoLocalStorage();
    },
    setChildren(children){
    //  console.log(children);
     children.forEach(child => {

      this.addChildren(child.name);
       
     });
       
       
        
      

       
     
    

    },
   
      savetoLocalStorage() {
      let parsed = JSON.stringify(this.activeChildren);
      localStorage.setItem('children', parsed);
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

#components{
  left:20%
}
</style>
