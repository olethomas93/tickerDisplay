<template>
  <movable v-on:delete-row="$emit('delete-row')">
    <TradingView />
  </movable>
</template>


<script>
import movable from "../movable";
import TradingView from "../Tradingview";
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


