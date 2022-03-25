<template>
  <table class="w-full whitespace-no-wrap">
    <thead>
    <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
      <th v-for="(index, title) in table_titles" :key="index" class="px-4 py-3">{{title}}</th>
    </tr>
    </thead>
    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
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
    table_data: {type: Array, default:()=>{
      return [ ]}}
  },
}
</script>

<style scoped>

</style>