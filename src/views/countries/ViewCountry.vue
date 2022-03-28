<template>
  <dashboard-layout :show-back="true" :title="`View ${country.name}`">

    <span class="flex flex-row space-x-4 mt-4">
       {{country.name}}
    | Code : {{country.iso3CountryCode}}
   | {{country.iso2CountryCode}}
    Created on {{new Date(country.createdAt).toLocaleDateString()}}
    at {{new Date(country.createdAt).toLocaleTimeString()}}
    </span>


  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/layouts/DashboardLayout";
import {hasPermission} from "@/utils/methods";
export default {
  name: "ViewCountry",
  components: {DashboardLayout},
  data(){
    return {
      country:{}
    }
  },

  methods:{
    retrieveCountry() {
      console.log("here")
      this.$store.dispatch('fetchCountries', this.$route.params.id).then(resp => {
        this.country = resp.data
      });
    }
  },
  mounted() {
    if(hasPermission('view_country')){
      this.retrieveCountry()
    }
  }
}
</script>

<style scoped>

</style>