<template>
<div>
  <dashboard-layout :title="title">
    <data-table :table_titles="['country code', 'name']" >
      <tr class="text-gray-700 dark:text-gray-400">
        <td v-for="(index, item) in table_data" :key="index" class="px-4 py-3">{{item}}</td>
      </tr>
    </data-table>

  </dashboard-layout>

</div>
</template>

<script>
import {mapGetters} from "vuex";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import DataTable from "@/components/data/DataTable";

export default {
  name: "CountriesList",
  components: {DataTable, DashboardLayout},
  data(){
    return {
      countries:[],
      table_data: []
    }
  },
  props:{
    title:{type:String, default:''}
  },
  computed:{
    ...mapGetters(['getCountries'])
  },
  methods:{
    retrieveCountries(){
      this.countries = this.getCountries
    }
  },
  mounted() {
    this.retrieveCountries()
  }
}
</script>

<style scoped>

</style>