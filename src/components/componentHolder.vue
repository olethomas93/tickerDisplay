<template>
  <div>
    row component: {{ data }}

    <button @click="$emit('delete-row')">Delete</button>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>