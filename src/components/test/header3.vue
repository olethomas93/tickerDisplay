<template>


  <div class="csstransforms">

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
    <button class="cn-button" id="cn-button" @click="clickButton($event)">
      MENU
    </button>
    <div
      v-bind:class="{ openednav: isActive }"
      class="cn-wrapper"
      id="cn-wrapper"
      @click="clickWrapper($event)"
    >
      <ul>
       
        <li>
          <a href="#"> <div class="button" @click="$emit('add-chidren', apps.time)">
        <font-awesome-icon
          class="icon"
          icon="clock"
          transform="shrink-4 down-2 right-2"
          size="2x"
          color="orange"
        ></font-awesome-icon>
      </div></a>
        </li>
        <li>
          <a href="#"> <div class="button" @click="$emit('add-chidren', apps.tradingView)">
        <font-awesome-icon
          class="icon"
          icon="dollar-sign"
          size="2x"
          color="orange"
        ></font-awesome-icon>
      </div></a>
        </li>
        <li>
          <a href="#"> <div
        class="button "
        color="orange"
        @click="$emit('add-chidren', apps.date)"
      >
        <font-awesome-icon
          class="icon"
          icon="calendar-alt"
          transform="shrink-4 down-2 right-2"
          size="2x"
          color="orange"
        ></font-awesome-icon>
      </div></a>
        </li>
        <li>
          <a href="#">  <div class="button" @click="$emit('add-chidren', apps.youtube)">
        <font-awesome-icon
          class="icon alt"
          fab
          :icon="['fab', 'youtube-square']"
          size="2x"
          color="orange"
        ></font-awesome-icon>
      </div></a>
        </li>
        <li>
          <a href="#"> <div class="button">
        <font-awesome-icon
          class="icon"
          icon="upload"
          transform="shrink-4 down-2 right-2"
          size="2x"
          color="orange"
        ></font-awesome-icon>
      </div></a>
        </li>
      </ul>
    </div>
    <div
      v-bind:class="{ onoverlay: isActive }"
      id="cn-overlay"
      class="cn-overlay"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      isActive: false
    };
  },
  created() {},
  methods: {
    clickWrapper(e) {
      console.log(e);
      e.stopPropagation();
    },
    clickButton(e) {
      if (!e) {
        var e = window.event;
        e.stopPropagation(); //so that it doesn't trigger click event on document
      }
      if (!this.isActive) {
        this.openNav();
      } else {
        this.closeNav();
      }
    },

    openNav() {
      console.log("openNav");
      var button = document.getElementById("cn-button");

     
      button.innerHTML = "close";
      this.isActive = true;
    },
    closeNav() {
      console.log("closeNav");
      var button = document.getElementById("cn-button");

    
      button.innerHTML = "Menu";
      this.isActive = false;
    }
  }
};
</script>


<style scoped>
@import url(https://netdna.bootstrapcdn.com/font-awesome/2.0/css/font-awesome.css);

.csstransforms{
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
img {
  margin: 70px;
}
#ntnu {
  width: 200px;
}
#teft {
  width: 200px;
}
#header {
  font-size: 100px;
  color: #f18904;
}

.cn-button {
  border: none;
  background: none;
  color: white;
  text-align: Center;
  font-size: 1.5em;
  padding-bottom: 1em;
  height: 3.5em;
  width: 3.5em;
  background-color: orange;
  position: absolute;
  left: 50%;
  top:10em;
  margin-left: -1.75em;
  /* bottom: -1.75em; */
  border-radius: 50%;
  cursor: pointer;
  z-index: 11;
}
.cn-button:hover,
.cn-button:active,
.cn-button:focus {
  background-color: #222;
}
.csstransforms .cn-wrapper {
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 10;
  /* margin-top: -13em; */
  margin-left: -13.5em;
  width: 27em;
  height: 27em;
  border-radius: 50%;
  background: transparent;
  opacity: 0;
  transition: all 0.3s ease 0.3s;
  transform: scale(0.1);
  pointer-events: none;
  overflow: hidden;
  top:8em;
}

/*cover to prevent extra space of anchors from being clickable*/
.csstransforms .cn-wrapper:after {
  color: transparent;
  content: ".";
  display: block;
  font-size: 2em;
  width: 6.2em;
  height: 6.2em;
  position: absolute;
  left: 50%;
  margin-left: -3.1em;
  top: 50%;
  margin-top: -3.1em;
  border-radius: 50%;
  z-index: 10;
}

.csstransforms .cn-wrapper ul li {
  position: absolute;

  left: 50%;
  overflow: hidden;
  margin-top: -1.4em;
  margin-left: -10em;
  width: 10em;
  height: 10em;
  font-size: 1.5em;
  transition: all 0.3s ease;
  transform: rotate(50deg) skew(60deg);
  transform-origin: 100% 100%;
  pointer-events: none;
}

.csstransforms .cn-wrapper ul li a {
  position: absolute;
  /* fix the "displacement" bug in webkit browsers when using tab key */
  right: -7.25em;
  bottom: -7.25em;
  display: block;
  width: 14.5em;
  height: 14.5em;
  border-radius: 50%;
  background: white;
  background: radial-gradient(transparent 35%, #f6f5f3 35%);
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 1.2em;
  line-height: 2;
  transition: all 0.3s ease;
  transform: skew(-60deg) rotate(-70deg) scale(0.8);
  pointer-events: auto;
}

.csstransforms .cn-wrapper ul li a span {
  position: absolute;
  top: 1.8em;
  display: block;
  font-size: 0.5em;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 999999;
}

.csstransforms .cn-wrapper ul li a:hover,
.csstransforms .cn-wrapper ul li a:active,
.csstransforms .cn-wrapper ul li a:focus {
  background: radial-gradient(transparent 35%, white 35%);
}

.csstransforms .openednav {
  border-radius: 50%;
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(1);
  pointer-events: auto;
}

.csstransforms .openednav ul li {
  transition: all 0.3s ease 0.3s;
}

.csstransforms .openednav ul li:first-child {
  transform: rotate(-20deg) skew(60deg);
}

.csstransforms .openednav ul li:nth-child(2) {
  transform: rotate(12deg) skew(60deg);
}

.csstransforms .openednav ul li:nth-child(3) {
  transform: rotate(45deg) skew(60deg);
}

.csstransforms .openednav ul li:nth-child(4) {
  transform: rotate(76deg) skew(60deg);
}

.csstransforms .openednav ul li:nth-child(5) {
  transform: rotate(108deg) skew(60deg);
}


@media only screen and (max-width: 620px) {
  .no-csstransforms li {
    width: 4em;
    height: 4em;
    line-height: 4em;
  }
}
@media only screen and (max-width: 500px) {
  .no-ccstransforms .cn-wrapper {
    padding: 0.5em;
  }
  .no-csstransforms .cn-wrapper li {
    font-size: 0.9em;
    width: 4em;
    height: 4em;
    line-height: 4em;
  }
}
@media only screen and (max-width: 480px) {
  .csstransforms .cn-wrapper {
    font-size: 0.68em;
  }
  .cn-button {
    font-size: 1em;
  }
}
@media only screen and (max-width: 420px) {
  .no-csstransforms .cn-wrapper li {
    width: 100%;
    height: 3em;
    line-height: 3em;
  }
}
</style>