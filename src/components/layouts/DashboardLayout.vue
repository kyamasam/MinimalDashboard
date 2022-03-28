<template>
<div class="w-screen">
  <TopBar></TopBar>
  <div class="flex flex-row w-full">
    <div :class="['w-2/12 h-screen border border-r-0.5 md:block', getSideBarState ? 'block w-4/12 md:w-2/12':'hidden']">
      <Sidebar></Sidebar>
    </div>
    <div class="md:w-10/12 h-screen overflow-scroll w-full">
      <button v-if="showBack"  @click="goBack" class="flex flex-row items-center p-2 rounded-md bg-malachite-500 text-malachite-800 w-min m-4">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        Back
      </button>
      <MainArea :title="title">
        <error-component></error-component>
        <slot></slot>
      </MainArea>
    </div>
  </div>
</div>
</template>

<script>
import TopBar from "@/components/includes/TopBar";
import Sidebar from "@/components/includes/Sidebar";
import MainArea from "@/components/includes/MainArea";
import ErrorComponent from "@/components/util/ErrorComponent";
import {mapGetters} from "vuex";
export default {
  name: "DashboardLayout",
  // eslint-disable-next-line vue/no-unused-components
  components: {ErrorComponent, MainArea, Sidebar, TopBar},
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters(['getSideBarState'])
  },
  props:{
    title:{default:'Name', type:String},
    showBack:{default: false, type:Boolean}
  },
  methods:{
    goBack(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>