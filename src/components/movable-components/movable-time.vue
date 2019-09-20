<template>
  <movable class="tiemi" v-on:delete-row="$emit('delete-row')" @dragEnd="this.setPosition(payload)">
    <Time />
  </movable>
</template>


<script>
import movable from "../static/movable";
import Time from "../static/time";
import { mapState } from "vuex";
export default {
  name:"timedigital",
  postition:{
    left:232,
    top:432
  },
  components: {
    movable,
    Time
  },

  computed: mapState(["editMode"]),

  methods:{
    setPosition(payload){

      console.log(payload);

    }
  }
};
</script>

<style scoped>

.moveable.tiemi{
  left:206px;
  top:535px;
}


</style>
