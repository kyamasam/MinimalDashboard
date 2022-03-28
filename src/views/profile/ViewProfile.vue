<template>
<dashboard-layout title="View Profile" :show-back="true">
  <p v-if="success" class="text-malachite-500 font-bold">Operation Success</p>
  <div v-if="loading" class="flex flex-row items-center justify-center">
    loading ...
  </div>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-row space-x-4 mt-4">
      <span class="font-bold capitalize">{{profile.firstName}} </span>
      <span class="font-bold capitalize ">{{profile.lastName}}</span>
      <span class="font-bold capitalize">Born in {{new Date(profile.dateOfBirth).toLocaleDateString()}}</span>
    </div>
    <div>
      <img :src="profile.avatar" alt="">
    </div>

    <form @submit.prevent="updateProfile" class="w-full md:w-1/3 flex flex-col items-center" >
      <div class="flex flex-col space-y-4 w-full">
        <p class="capitalize">
          First Name
        </p>
        <input type="text" v-model='formFirstName' class="form-input rounded" required="required">
      </div>
      <div class="flex flex-col space-y-4 w-full">
        <p class="capitalize">
          Last Name
        </p>
        <input type="text" v-model='formLastName' class="form-input rounded" required="required">
      </div>
      <div class="flex flex-col space-y-4 w-full">
        <p class="capitalize">
          First Name
        </p>
        <input type="date" v-model='formDateOfBirth' class="form-input rounded" required="required">
      </div>
      <div class="flex flex-col space-y-4 w-full">
        <p class="capitalize">
          Avatar
        </p>
        <input type="text" v-model='formAvatar' class="form-input rounded" required="required">
      </div>
      <img :src="formAvatar" class="rounded" alt="image preview">
      <input class="mt-4 class border py-2 p-4 w-min rounded-md bg-malachite-400
         hover:bg-malachite-600 text-malachite-800 cursor-pointer" type="submit" value="Update">
    </form>
  </div>


</dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/layouts/DashboardLayout";
export default {
  name: "ViewProfile",
  components: {DashboardLayout},
  data(){
    return {
      profile:{},
      formFirstName:'',
      formLastName:'',
      formDateOfBirth:'',
      formAvatar:'',
      success:false,
      loading:false
    }
  },
  methods:{
    getProfileInfo(){
      this.profile.username= localStorage.getItem('username');
      this.profile.user_id= localStorage.getItem('user_id');
      this.profile.firstName= localStorage.getItem('firstName');
      this.profile.lastName= localStorage.getItem('lastName');
      this.profile.dateOfBirth= localStorage.getItem('dateOfBirth');
      this.profile.avatar= localStorage.getItem('avatar');
      this.formFirstName = this.profile.firstName
      this.formLastName = this.profile.lastName
      this.formDateOfBirth = this.profile.dateOfBirth
      this.formAvatar = this.profile.avatar
    },
    updateProfile(){
      let payload = {
        firstName: this.formFirstName,
        lastName: this.formLastName,
        dateOfBirth: this.formDateOfBirth,
        avatar: this.formAvatar
      }
      this.$store.dispatch('updateProfile', payload).then((resp)=>{
        this.loading=true
        console.log(resp)
        localStorage.setItem('firstName', resp.data.firstName)
        localStorage.setItem('lastName', resp.data.lastName)
        localStorage.setItem('dateOfBirth', resp.data.dateOfBirth)
        localStorage.setItem('avatar', resp.data.avatar)
        this.profile.firstName= resp.data.firstName;
        this.profile.lastName= resp.data.lastName;
        this.profile.dateOfBirth= resp.data.dateOfBirth;
        this.profile.avatar= resp.data.avatar;
        this.success=true
      }).catch(()=>{

      }).then(()=>{
        this.loading = false
      })
    }
  },
  mounted() {
    this.getProfileInfo()
  }
}
</script>

<style scoped>

</style>