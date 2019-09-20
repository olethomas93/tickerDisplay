<template>
  <movable class="showDate" v-on:delete-row="$emit('delete-row')">
    <Date />
  </movable>
</template>


<script>
import movable from "../static/movable";
import Date from "../static/date";
import { mapState } from "vuex";
export default {
  name:"date",
   id: Date.now + Math.random,

data(){
  return{
     
  }
},

  components: {
    movable,
    Date
  },
  computed: mapState(["editMode"])
};
</script>

<style  scoped>

.moveable.showDate{
  left:1147px;
  top:537px;
}


</style>



