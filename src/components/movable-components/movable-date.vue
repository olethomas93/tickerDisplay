<template>
  <movable v-on:delete-row="$emit('delete-row')">
    <Date />
  </movable>
</template>


<script>
import movable from "../movable";
import Date from "../date";
import { mapState } from "vuex";
export default {
  components: {
    movable,
    Date
  },
  computed: mapState(["editMode"])
};
</script>




