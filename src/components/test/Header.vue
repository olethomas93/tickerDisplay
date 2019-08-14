
<template>
  <div class="buttonHeader">
    <div class="tabTop">
      <img
        alt="teft logo"
        src="./logo_ntnu_u-slagord.png"
        class="img"
        id="ntnu"
      />
      <h4 id="header" class="drop">Teft Ticker</h4>

      <img alt="teft logo" src="./teft.png" class="img" id="teft" />
    </div>

    <div class="tab">
      <vs-checkbox
        id="edit"
        @change="toggleEdit"
        icon="settings"
        color="success"
        v-model="editMode"
        >Edit Mode</vs-checkbox
      >

      <div class="button" @click="$emit('add-chidren', apps.tradingView)">
        <font-awesome-icon
          class="icon"
          icon="dollar-sign"
          size="4x"
          color="orange"
        ></font-awesome-icon>
      </div>
      <div class="button" @click="$emit('add-chidren', apps.time)">
        <font-awesome-icon
          class="icon"
          icon="clock"
          transform="shrink-4 down-2 right-2"
          size="4x"
          color="orange"
        ></font-awesome-icon>
      </div>

      <div
        class="button "
        color="orange"
        @click="$emit('add-chidren', apps.date)"
      >
        <font-awesome-icon
          class="icon"
          icon="calendar-alt"
          transform="shrink-4 down-2 right-2"
          size="4x"
          color="orange"
        ></font-awesome-icon>
      </div>

      <div class="button">
        <font-awesome-icon
          class="icon"
          icon="upload"
          transform="shrink-4 down-2 right-2"
          size="4x"
          color="orange"
        ></font-awesome-icon>
      </div>

      <div class="button" @click="$emit('add-chidren', apps.youtube)">
        <font-awesome-icon
          class="icon alt"
          fab
          :icon="['fab', 'youtube-square']"
          size="4x"
          color="orange"
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>


<script>
import "material-icons/iconfont/material-icons.css";
import { faChessQueen } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    const componentInstance = this;
    return {
      editMode: false,
      apps: {
        tradingView: "tradingView",
        time: "time",
        date: "date",
        youtube: "youtube"
      }
    };
  },

  components: {},
  methods: {
    toggleEdit() {
      this.$store.commit("change", this.editMode);
    }
  },
  computed: {
    queen() {
      return faChessQueen;
    }
  }
};
</script>

<style scoped>
.buttonHeader #header {
  font-size: 100px;
  color: #f18904;
}
.buttonHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.tabTop {
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
}

.tab > div {
  flex: 0 0 auto;
  color: red;

  text-align: center;

  margin: 70px; /* and that, will result in a 10px gap */
}
img {
  margin: 70px;
}
#ntnu {
  width: 200px;
}
#teft {
  width: 200px;
}
.button:hover .icon {
  transform: scale(1.5);
}
</style>
