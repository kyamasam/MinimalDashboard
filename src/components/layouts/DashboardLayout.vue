<template>
<div>
  <TopBar></TopBar>
  <Sidebar></Sidebar>
  <MainArea></MainArea>
</div>
</template>

<script>
import TopBar from "@/components/includes/TopBar";
import Sidebar from "@/components/includes/Sidebar";
import MainArea from "@/components/includes/MainArea";
export default {
  name: "DashboardLayout",
  components: {MainArea, Sidebar, TopBar}
}
</script>

<style scoped>

</style>