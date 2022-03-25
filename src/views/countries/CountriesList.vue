<template>
<div>
  <p>countries</p>
  <p>{{countries}}</p>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CountriesList",
  data(){
    return {
      countries:[]
    }
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