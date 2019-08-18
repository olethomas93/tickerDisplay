<template>
  <movable v-on:delete-row="$emit('delete-row')">
    <TradingView />
  </movable>
</template>


<script>
import movable from "../static/movable";
import TradingView from "../static/Tradingview";
import { mapState } from "vuex";
export default {
  mounted() {
    this.id = this._uid;
  },
  data() {
    return {
      id: null
    };
  },

  components: {
    movable,
    TradingView
  },
  computed: mapState(["editMode"])
};
</script>


