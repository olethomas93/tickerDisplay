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
    <youtube
      :fitParent="true"
      :video-id="this.videoId"
      :loop="1"
      ref="youtube"
      @playing="playing"
    />

    <input
      id="url"
      v-if="this.editMode"
      v-model="videoId"
      placeholder="video ID"
    />
  </movable>
</template>


<script>
import movable from "../movable";
import vueTube from "../Youtubeplayer";
import { mapState } from "vuex";
export default {
  mounted() {
    this.id = this._uid;
  },
  data() {
    return {
      id: null,
      videoId: "57EIRPeGBKc"
    };
  },

  components: {
    movable
  },
  computed: mapState(["editMode"])
};
</script>

<style scoped>
#url {
  z-index: 99099;
}
</style>