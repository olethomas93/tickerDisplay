<template>
  <div>
    {{ info }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null
    };
  },

  mounted() {
    axios
      .get(
        "https://bors.e24.no/server/components/graphdata/s1/TICK/I%3ADAX.GER?points=80&period=1opendays"
      )
      .then(
        response => {
          if (response.status === 200) {
            const html = response.data;
            console.log(html);
          }
        },
        error => console.log(err)
      );
  }
};
</script>

