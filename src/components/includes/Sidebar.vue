<template>
<div class="font-gray-50 py-4 w-4/12">
  <div class="px-4 py-2 bg-gray-100 text-gray-800 w-max">
    <router-link :to="{name:'CountryList'}" class="font-semibold">Countries</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>

</style>