<template>
  <div class="button-settings">
    <div class="button" v-if="this.editMode">
      <vs-button
        @click="settings = true"
        radius
        type="filled"
        color="warning"
        icon="build"
      >
      </vs-button>
    </div>
    <vs-popup title="settings" :active.sync="settings">
      <div class="button-settings">
        <div v-for="symbol in symbols" :key="symbol.title">
          <vs-input placeholder="Pro Name" v-model="symbol.proName" />

          <vs-input placeholder="description" v-model="symbol.title" />
          <hr />
        </div>
        <vs-button @click="addToTicker">Add New</vs-button>

        <vs-button @click="acceptAlert">Submit</vs-button>

        <vs-alert :active="!validText" color="danger" icon="new_releases">
          Fields can not be empty please enter the data
        </vs-alert>
      </div>
      <div>
        <movableConf />
      </div>
    </vs-popup>
  </div>
</template>

 <script>
import movableConf from "./MovableConf";
import { mapState } from "vuex";
export default {
  name: "tradingSettings",

  components: { movableConf },
  data() {
    return {
      select1: 2,
      settings: false
    };
  },
  computed: {},
  methods: {
    acceptAlert() {
      this.$vs.notify({
        color: "success",
        title: "Accept Selected",
        text: "Adding successfull"
      });
      this.$emit("update");
    },
    close() {
      this.$vs.notify({
        color: "danger",
        title: "Closed",
        text: "You close a dialog!"
      });
    },
    addToTicker() {
      this.symbols.push({});
    },
    validText() {
      var valid = false;
      for (var symbol in this.symbols) {
        if (symbol.proName.length > 0 && symbol.title.length > 0) {
          valid = true;
        }
      }
      return valid;
    },

    showSettings() {
      var editMode = this.$store.getters.editMode;
    }
  },
  props: {
    symbols: {
      type: Array
    }
  },
  computed: mapState(["editMode"])
};
</script>
<style scoped>
.wrapper {
  height: 50%;
  width: 50%;
}
div.button {
  position: absolute;

  right: -45px;
  top: -20px;
  padding: 10px 0 10px 50px;
}
</style>





