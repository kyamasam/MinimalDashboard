<template>
    <dashboard-layout :title="title">
      <p v-if="success_message !== ''" class="text-malachite-500 font-bold">{{success_message}}</p>

      <data-table :table_titles="['name','country code', 'phone code', 'created at', 'actions']">
        <tr v-for="(item, index) in table_data" :key="index" class="text-gray-700 dark:text-gray-400">
          <td class="px-4 py-3">
            {{ item.name }}
          </td>
          <td class="px-4 py-3">
            {{ item.iso3CountryCode }}
          </td>
          <td class="px-4 py-3">
            {{ item.phoneCode }}
          </td>
          <td class="px-4 py-3">
            {{ item.createdAt }}
          </td>
          <td class="flex flex-row space-x-2">
            <router-link class="flex flex-row p-2 rounded-md bg-malachite-500 text-malachite-800 w-min " :to="{name:'viewCountry', params:{id:item.id}}">
              View
            </router-link>
            <button @click="editCountry" class="flex flex-row p-2 rounded-md bg-malachite-500 text-malachite-800">
              Edit Country
            </button>
          </td>

        </tr>
      </data-table>
      <div v-if="loading">Loading ...</div>
    </dashboard-layout>
</template>

<script>
import {mapGetters} from "vuex";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import DataTable from "@/components/data/DataTable";
import {hasPermission} from "@/utils/methods"
export default {
  name: "CountriesList",
  components: {DataTable, DashboardLayout},
  data() {
    return {
      countries: [],
      success_message:'',
      table_data: [],
      loading:false
    }
  },
  props: {
    title: {type: String, default: ''}
  },
  computed: {
    ...mapGetters(['getCountries'])
  },
  methods: {
    retrieveCountries() {
      this.loading = true
      this.$store.dispatch('fetchCountries').then(resp => {
        this.table_data = resp.data
      }).then(()=>{
        this.loading=false
      });
    },
    editCountry(){
      if(hasPermission('edit_country'))
        this.success_message = 'You have permission'
      }
  },
  mounted() {
    this.retrieveCountries()
  }
}
</script>

<style scoped>

</style>