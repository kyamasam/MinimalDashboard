<template>
<div>
  <TopBar></TopBar>
  <div class="flex flex-row">
    <div class="w-2/12 h-screen border border-r-0.5">
      <Sidebar></Sidebar>
    </div>
    <div class="w-10/12 h-screen">
      <MainArea :title="title">
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
export default {
  name: "DashboardLayout",
  components: {MainArea, Sidebar, TopBar},
  data(){
    return {

    }
  },
  props:{
    title:{default:'Name', type:String}
  }
}
</script>

<style scoped>

</style>