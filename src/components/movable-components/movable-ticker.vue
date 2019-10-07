<template>
  <movable class="ticker" v-on:delete-row="$emit('delete-row')">
    <TradingView />
  </movable>
</template>


<script>
import movable from "../static/movable";
import TradingView from "../static/Tradingview";
import { mapState } from "vuex";
export default {
  name:"tradingView",
   id: Date.now + Math.random,
  mounted() {
    
  },
  data() {
    return {
     

    };
  },

  components: {
    movable,
    TradingView
  },
  computed: mapState(["editMode"])
};
</script>

<style scoped>

.moveable.ticker{
  left:281px;
  top:450px;
}



</style>
