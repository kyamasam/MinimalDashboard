<template>
<div class="bg-malachite w-full pl-4 p-2 font-sans flex flex-row justify-between static">
  <p class="text-white text-capitalize font-bold">{{app_settings.project_name}}</p>
  <div @click="toggleProfilePopup" class="flex flex-row text-white font-semibold justify-center px-4 cursor-pointer">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <p class="pl-2">User Name</p>
  </div>
  <div v-if="show_profile_popup" class="absolute right-0 rounded-md shadow-md flex flex-col space-y-4 mt-10 w-40 cursor-pointer">
    <p class="px-4 border-b py-2">User Name</p>
    <p class="px-4">User Name</p>
  </div>
</div>
</template>

<script>
import app_settings from "../../app_settings.json"
export default {
  name: "TopBar",
  data(){
    return {
      app_settings:app_settings,
      show_profile_popup: false
    }
  },
  methods:{
    toggleProfilePopup(){
      this.show_profile_popup=!this.show_profile_popup
    }
  }
}
</script>

<style scoped>

</style>