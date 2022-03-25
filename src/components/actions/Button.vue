<template>
<button class="flex flex-row p-2 rounded-md bg-malachite-500 text-malachite-800">
  {{name}}
</button>
</template>

<script>
export default {
  name: "ActionButton",
  props:{
    name:{default:'', type:String}
  }
}
</script>

<style scoped>

</style>