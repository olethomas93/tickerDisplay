<template>
  <movable v-on:delete-row="$emit('delete-row')">
    <Time />
  </movable>
</template>


<script>
import movable from "../static/movable";
import Time from "../static/time";
import { mapState } from "vuex";
export default {
  components: {
    movable,
    Time
  },

  computed: mapState(["editMode"])
};
</script>
