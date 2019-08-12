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
        "https://bors.e24.no/server/secure/components?columns=LONG_NAME&itemSector=OSEBX.OSE"
      )
      .then(
        response => {
          if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
          }
        },
        error => console.log(err)
      );
  }
};
</script>

