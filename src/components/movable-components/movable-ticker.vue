<template>
  <movable>
    <div class="removebtn">
      <vs-button
        v-if="this.editMode"
        @click="$emit('delete-row')"
        radius
        type="filled"
        color="danger"
        icon="delete"
      ></vs-button>
    </div>
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


