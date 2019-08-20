<template>
  
  <movable v-on:delete-row="$emit('delete-row')">
    <div class="editorview" v-html="content"></div>
    </movable> 

</template>


<script>
import movable from "../static/movable"
export default {

    components:{
        movable
    },

    

props:{

    content:String
        
    

}
    



}
</script>

<style scoped>



.editorview{
  position: absolute;
  width: 100%;
  z-index: 99;
  box-sizing: border-box;
  object-fit: fill;
  
}

</style>