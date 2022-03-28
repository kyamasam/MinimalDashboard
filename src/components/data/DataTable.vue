<template>
  <table class="w-full whitespace-no-wrap mt-4 border ">
    <thead>
    <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b  bg-gray-50 ">
      <th v-for="(title, index) in table_titles" :key="index" class="px-4 py-3">{{title}}</th>
    </tr>
    </thead>
    <tbody class="bg-white divide-y">
    <slot>

    </slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    table_titles: {type:Array, default:()=>{return [
        'title1', 'title2'
      ]}},
  },
}
</script>

<style scoped>

</style>