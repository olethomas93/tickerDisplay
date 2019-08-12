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
    <Time />
  </movable>
</template>


<script>
import movable from "../movable";
import Time from "../time";
import { mapState } from "vuex";
export default {
  components: {
    movable,
    Time
  },
  computed: mapState(["editMode"])
};
</script>
