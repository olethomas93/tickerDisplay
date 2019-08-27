<template>
  <div> 
    <movable class ="editor">
    <vue-editor v-if="this.editor" class="editor" v-model="content">

      
    </vue-editor>
    </movable>
    <editorview  :content="content"  v-on:delete-row="$emit('delete-row')"></editorview>
  </div>
</template>
 
<script>
import { VueEditor } from 'vue2-editor'

import { mapState } from "vuex";
import editorview from "./edtorview"
import movable from "../static/movable"
 
export default {
  name:"editor",
  id: Date.now + Math.random,
  data() {
    return {
      content: "<h1>Edit-mode to open editor</h1>"
    }
  },
   
components: {
  VueEditor,
  editorview,
  movable

  
},
 computed: mapState(["editor"])
}
</script>

<style scoped>

.editor{

    height:100px;
    width:814px;

    position: absolute;
}

.moveable.editor{
  left:500px;
  top:130px;
}




</style>