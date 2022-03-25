<template>
<div class="p-8 flex flex-col">
  <div class="flex flex-row gap-x-2 items-baseline">
    <p class="text-xl font-semibold">
      {{title}}
    </p>
  </div>
  <slot>

  </slot>
</div>
</template>

<script>
export default {
  name: "MainArea",
  props:{
    title:{default:'Name', type:String}
  }
}
</script>

<style scoped>

</style>