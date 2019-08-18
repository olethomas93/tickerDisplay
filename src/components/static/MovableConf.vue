<template>
  <ul class="checkBox">
    <li>
      <vs-checkbox v-model="moveStates.warpable">warpable</vs-checkbox>
    </li>
    <li>
      <vs-checkbox color="success" v-model="moveStates.scalable"
        >Scalable</vs-checkbox
      >
    </li>
    <li>
      <vs-checkbox color="danger" v-model="moveStates.resizable"
        >resizable</vs-checkbox
      >
    </li>
    <li></li>
  </ul>
</template>


<script>
export default {
  data() {
    return {};
  },
  props: {
    moveStates: Object
  },
  methods: {}
};
</script>
<style scoped>
.checkBox {
  position: absolute;
  margin: -30px 0 0 0;
  list-style-type: none;
  width: 500px;
  color: red;
}

.checkBox > li {
  display: inline-block;
}
</style>

