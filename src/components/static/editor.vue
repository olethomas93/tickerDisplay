<template>
  <div>
    <vue-editor v-if="this.editor" class="editor" v-model="content">

      
    </vue-editor>

    <editorview  :content="content"  v-on:delete-row="$emit('delete-row')"></editorview>
  </div>
</template>
 
<script>
import { VueEditor } from 'vue2-editor'

import { mapState } from "vuex";
import editorview from "./edtorview"
 
export default {
  data() {
    return {
      content: "<h1>Edit-mode to open editor</h1>"
    }
  },
   
components: {
  VueEditor,
  editorview

  
},
 computed: mapState(["editor"])
}
</script>

<style scoped>

.editor{

    height:200px;
    width:640px;

    position: absolute;
}




</style>