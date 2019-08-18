<template>
  <youtube :video-id="videoId" :loop="1" ref="youtube" @playing="playing" />
</template>

<script>
export default {
  components: {},
  data() {
    return {
      videoId: "57EIRPeGBKc"
    };
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("o/ we are watching!!!");
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
};
</script>
<style scoped>
.player {
  width: 150px;
  height: 128px;
}
</style>