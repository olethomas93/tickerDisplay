<template>
  <div class="csstransforms">
    <button class="cn-button" id="cn-button" @click="clickButton($event)">
      +
    </button>
    <div
      v-bind:class="{ openednav: isActive }"
      class="cn-wrapper"
      id="cn-wrapper"
      @click="clickWrapper($event)"
    >
      <ul>
        <li>
          <a href="#"><span class="icon-picture"></span></a>
        </li>
        <li>
          <a href="#"><span class="icon-home"></span></a>
        </li>
        <li>
          <a href="#"><span class="icon-home"></span></a>
        </li>
        <li>
          <a href="#"><span class="icon-facetime-video"></span></a>
        </li>
        <li>
          <a href="#"><span class="icon-envelope-alt"></span></a>
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
      if (!open) {
        this.openNav();
      } else {
        this.closeNav();
      }
    },

    openNav() {
      console.log("openNav");
      var button = document.getElementById("cn-button");

      open = true;
      button.innerHTML = "-";
      this.isActive = true;
    },
    closeNav() {
      console.log("closeNav");
      var button = document.getElementById("cn-button");

      open = false;
      button.innerHTML = "+";
      this.isActive = false;
    }
  }
};
</script>


<style scoped>
@import url(https://netdna.bootstrapcdn.com/font-awesome/2.0/css/font-awesome.css);
.csstransforms .cn-wrapper {
  font-size: 1em;
  width: 26em;
  height: 26em;
  /* overflow: hidden; */
  position: absolute;
  z-index: 10;
  bottom: -15em;
  left: 50%;
  border-radius: 50%;
  margin-left: -13em;
  transform: scale(0.1);
  transition: all 0.3s ease;
}
/* class applied to the container via JavaScript that will scale the navigation up */
.csstransforms .openednav {
  border-radius: 50%;
  transform: scale(1);
}

.csstransforms .cn-button {
  border: none;
  background: none;
  color: white;
  text-align: Center;
  font-size: 1.5em;
  padding-bottom: 1em;
  height: 3.5em;
  width: 3.5em;
  background-color: red;
  position: fixed;
  left: 50%;
  margin-left: -1.75em;
  bottom: -1.75em;
  border-radius: 50%;
  cursor: pointer;
  z-index: 11;
}
.csstransforms .cn-button:hover,
.csstransforms .cn-button:active,
.csstransforms .cn-button:focus {
  background-color: #222;
}

.csstransforms .cn-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2;
  pointer-events: none;
}

/* Class added to the overlay via JavaScript to show it when navigation is open */
.csstransforms .cn-overlay.onoverlay {
  pointer-events: auto;
  opacity: 1;
}
.csstransforms .cn-wrapper ul li {
  position: absolute;
  font-size: 1.5em;
  width: 10em;
  height: 10em;
  transform-origin: 100% 100%;
  overflow: hidden;
  left: 50%;
  top: 50%;
  margin-top: -1.3em;
  margin-left: -10em;
  transition: border 0.3s ease;
}

.csstransforms .cn-wrapper ul li a {
  display: block;
  font-size: 1.18em;
  height: 14.5em;
  width: 14.5em;
  position: absolute;
  bottom: -7.25em;
  right: -7.25em;
  border-radius: 100%;
  text-decoration: none;
  color: #fff;
  padding-top: 1.8em;
  text-align: center;
  transform: skew(-50deg) rotate(-70deg) scale(1);
  transition: opacity 0.3s, color 0.3s;
}

.csstransforms .cn-wrapper ul li a span {
  font-size: 1.1em;
  opacity: 0.7;
}
/* for a central angle x, the list items must be skewed by 90-x degrees
  in our case x=40deg so skew angle is 50deg
  items should be rotated by x, minus (sum of angles - 180)2s (for this demo) */

.csstransforms .cn-wrapper ul li:first-child {
  transform: rotate(-10deg) skew(50deg);
}

.csstransforms .cn-wrapper ul li:nth-child(2) {
  transform: rotate(30deg) skew(50deg);
}

.csstransforms .cn-wrapper ul li:nth-child(3) {
  transform: rotate(70deg) skew(50deg);
}

.csstransforms .cn-wrapper ul li:nth-child(4) {
  transform: rotate(110deg) skew(50deg);
}

.csstransforms .cn-wrapper ul li:nth-child(5) {
  transform: rotate(150deg) skew(50deg);
}

.csstransforms .cn-wrapper li:nth-child(odd) a {
  background-color: #a11313;
  background-color: hsla(0, 88%, 63%, 1);
}

.csstransforms .cn-wrapper ul li:nth-child(even) a {
  background-color: #a61414;
  background-color: hsla(0, 88%, 65%, 1);
}

/* active style */
.csstransforms .cn-wrapper ul li.active a {
  background-color: #b31515;
  background-color: hsla(0, 88%, 70%, 1);
}

/* hover style */
.csstransforms .cn-wrapper ul li:not(.active) a:hover,
.csstransforms .cn-wrapper ul li:not(.active) a:active,
.csstransforms .cn-wrapper ul li:not(.active) a:focus {
  background-color: #b31515;
  background-color: hsla(0, 88%, 70%, 1);
}
.csstransforms .cn-wrapper ul li:not(.active) a:focus {
  position: absolute; /* fix the "displacement" bug in webkit browsers when using tab key */
}

@media screen and (max-width: 480px) {
  .csstransforms .cn-wrapper {
    font-size: 0.68em;
  }
  .csstransforms .cn-button {
    font-size: 1em;
  }
  .csstransforms .cn-wrapper li {
    font-size: 1.52em;
  }
}
</style>