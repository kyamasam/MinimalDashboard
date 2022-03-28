<template>
<div class="bg-malachite w-screen pl-4 p-2 font-sans flex flex-row justify-between static ">
  <div class="flex flex-row text-white items-center space-x-2">
    <div class="sm:block md:hidden" @click="toggleSidebarView">
      <svg v-if="!getSideBarState"  class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </div>
    <p class="text-white text-capitalize font-bold text-sm md:text-base">{{app_settings.project_name}}</p>
  </div>

  <div @click="toggleProfilePopup" class="flex flex-row text-white font-semibold justify-center items-center px-4 cursor-pointer">
    <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <p class="pl-2 text-base md:text-base">{{username}}</p>
  </div>
  <div v-if="show_profile_popup" class=" absolute right-0 rounded-md shadow-md flex flex-col space-y-4 mt-10 w-40 cursor-pointer bg-white">
     <router-link :to="{name:'viewProfile', params:{id:parseInt(this.id)}}" class="px-4 border-b py-2">{{username}}</router-link>
    <button @click="logout" class="px-4">Logout</button>
  </div>
</div>
</template>

<script>
import app_settings from "../../app_settings.json"
import {mapGetters} from "vuex";

export default {
  name: "TopBar",
  data(){
    return {
      username:'',
      app_settings:app_settings,
      show_profile_popup: false,
    }
  },
  computed:{
    ...mapGetters(['getSideBarState'])
  },
  methods:{
    toggleProfilePopup(){
      this.show_profile_popup=!this.show_profile_popup
    },
    toggleSidebarView(){
      this.$store.commit('setSideBarView', !this.getSideBarState)
    },
    getUserData(){
      this.username = localStorage.getItem('username');
      this.id = localStorage.getItem('user_id');
    },
    logout(){
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('user_id')
      localStorage.removeItem('firstName')
      localStorage.removeItem('lastName')
      localStorage.removeItem('dateOfBirth')
      localStorage.removeItem('avatar')
      localStorage.removeItem('permissions')
      window.location.replace('/')
    }
  },
  mounted(){
this.getUserData()
  }
}
</script>

<style scoped>

</style>