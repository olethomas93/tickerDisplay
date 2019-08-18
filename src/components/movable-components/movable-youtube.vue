<template>
  <movable @resize="update" v-on:delete-row="$emit('delete-row')">
    <youtube
      id="tewet"
      :fitParent="true"
      :video-id="this.videoId"
      :loop="1"
      :width="width"
      :height="height"
      ref="youtube"
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
import movable from "../static/movable";
import vueTube from "../static/Youtubeplayer";
import { mapState } from "vuex";
export default {
  mounted() {
    this.id = this._uid;
  },
  data() {
    return {
      id: null,
      videoId: "57EIRPeGBKc",
      youtubeKey: 0,
      height: 200,
      width: 200
    };
  },

  components: {
    movable
  },
  methods: {
    update(hw) {
      this.height = hw.height;
      this.width = hw.width;
    }
  },
  computed: mapState(["editMode"])
};
</script>

<style scoped>
#url {
  z-index: 99099;
}
</style>