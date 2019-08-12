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




