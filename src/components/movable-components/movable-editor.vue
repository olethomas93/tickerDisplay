<template>
    <movable>
        
       <editor/>


    </movable>
</template>


<script>

import editor from "../static/editor"
import movable from "../static/movable"
export default {
    name:"editor",
    id: Date.now + Math.random,

    data(){
        return{
             
         

        }
    },

    components:{
        movable,
        editor
    }
    
    
}
</script>