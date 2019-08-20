<template   >
  <Moveable
    class="moveable"
    v-bind="moveable"
    @drag="handleDrag"
    @dragEnd="dragend"
    @resize="handleResize"
    @scale="handleScale"
    @rotate="handleRotate"
    @warp="handleWarp"
  >
    <conf v-if="this.editMode" :moveStates="moveable"></conf>
    <vs-button
      class="removebtn"
      v-if="this.editMode"
      @click="$emit('delete-row')"
      radius
      type="filled"
      color="danger"
      icon="delete"
    ></vs-button>

    <slot> </slot>
  </Moveable>
</template>
<script>
import Moveable from "vue-moveable";
import conf from "./MovableConf";
import { mapState } from "vuex";

export default {
  components: {
    Moveable,
    conf
  },
  mounted() {
    this.toggleEdit();
  },
  data() {
    return {
      hideTimeout: null,
      activateSettings: false,
      moveable: {
        draggable: true,
        throttleDrag: 0,
        resizable: false,
        throttleResize: 1,
        keepRatio: true,
        scalable: false,
        throttleScale: 0,
        rotatable: false,
        throttleRotate: 0,
        warpable: false,
        pinchable: false
      },
     

      states: {
        scalable: "Scalable",
        resizable: "Resizable",
        warpable: "Warpable"
      }
    };
  },

  methods: {
    handleDrag({ target, left, top }) {
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
    },
    dragend({ target, left, top }) {
      setTimeout(() => {
        this.toggleEdit();
      }, 150);
    },

    dragEnter(ev) {
     
      if (ev.clientY > ev.target.height / 2) {
        ev.target.style.marginBottom = "10px";
      } else {
        ev.target.style.marginTop = "10px";
      }
    },
    dragFinish(to, ev) {
      console.log(to);
      console.log(ev);

      ev.target.style.marginTop = "2px";
      ev.target.style.marginBottom = "2px";
    },

    handleResize({ target, width, height, delta }) {
      //   console.log("onResize", width, height);
      delta[0] && (target.style.width = `${width}px`);
      delta[1] && (target.style.height = `${height}px`);
      this.$emit("resize", { width: width, height: height });
    },
    handleScale({ target, transform, scale }) {
      //   console.log("onScale scale", scale);
      target.style.transform = transform;
    },
    handleRotate({ target, dist, transform }) {
      //   console.log("onRotate", dist);
      target.style.transform = transform;
    },
    handleWarp({ target, transform }) {
      //   console.log("onWarp", target);
      target.style.transform = transform;
    },

    hideSettings() {
      this.hideTimeout = setTimeout(() => {
        this.activateSettings = false;
      }, 250);
    },
    showSettings() {
      clearTimeout(this.hideTimeout);
      this.activateSettings = true;
    },
    toggleEdit() {
      var elements = document.getElementsByClassName("moveable-control-box");

      for (let element of elements) {
        element.style.display = this.$store.getters.editMode ? "block" : "none";
      }
    }
  },
  watch: {
    moveable(newState) {
      this.clearAllStates();
      // this.moveable[newState] = true;
    },
    editMode() {
      this.toggleEdit();
    }
  },
  computed: mapState(["editMode"])
};
</script>
<style scoped>
</style>
