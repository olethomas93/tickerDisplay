<template>
  <p class="time"></p>
</template>

<script>
export default {
  name: "timeClock",
  mounted() {
    this.setTime();
  },

  methods: {
    time() {
      var d = new Date();

      var hour = d.getHours();
      var min = d.getMinutes();
      var sec = d.getSeconds();

      min = this.checkTime(min);
      sec = this.checkTime(sec);

      var elemList = document.getElementsByClassName("time");

      for (let item of elemList) {
        item.innerHTML = hour + ":" + min + ":" + sec;
      }

      // document.getElementsByClassName("time").innerHTML =
      //   hour + ":" + min + ":" + sec;
    },

    setTime() {
      setInterval(this.time, (10 * 10) ^ 8);
    },
    checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      } // add zero in front of numbers < 10
      return i;
    }
  }
};
</script>

<style scoped>
.time {
  box-sizing: border-box;
  color: silver;
  font-size: 40px;
  font: bold;
}
</style>
