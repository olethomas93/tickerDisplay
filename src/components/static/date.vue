<template>
  <p class="date"></p>
</template>

<script>
export default {
  name: "dateApp",
  mounted() {
    this.setDate();
  },

  methods: {
    date() {
      var d = new Date();

      var date = d.getDate();

      var month = d.getMonth();
      var montharr = [
        "Jan",
        "Feb",
        "Mar",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      month = montharr[month];

      var year = d.getFullYear();

      var day = d.getDay();
      var dayarr = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
      day = dayarr[day];

      var elemList = document.getElementsByClassName("date");

      for (let item of elemList) {
        item.innerHTML = day + " " + date + " " + month + " " + year;
      }
    },

    setDate() {
      setInterval(this.date, (10 * 10) ^ 10);
    }
  }
};
</script>

<style scoped>
.date {
  box-sizing: border-box;
  color: silver;
  font-size: 40px;
  font: bold;
}
</style>