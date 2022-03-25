<template>
  <div class="flex flex-col justify-center items-center bg-malachite-100 w-full h-screen">
    <div class="flex flex-col justify-center justify-center border p-4 bg-white rounded-md shadow  w-1/3 space-y-4">
      <div v-if="loading" class="flex flex-row items-center justify-center">
        loading ...
      </div>
      <p v-if="success" class="text-malachite-500 font-bold">Operation Success</p>

      <div class="flex flex-col items-center justify-center">
        <div class="text-malachite-500" v-html="app_settings.project_logo"></div>
        <p class="font-bold p-4 text-capitalize text-malachite-500">{{app_settings.project_name}}</p>
      </div>

      <form @submit.prevent="attemptLogin" class=" flex flex-col items-center">
        <div class="flex flex-col space-y-4 w-full">
          <p>
            Username
          </p>
          <input type="text" v-model='username' class="form-input rounded" required="required">
        </div>
        <div  class="flex flex-col space-y-4 w-full">
          <p>
            Password
          </p>
          <input type="password" v-model='password' class="form-input rounded" required="required">
        </div>
        <input class="mt-4 class border py-2 p-4 w-min rounded-md bg-malachite-400
         hover:bg-malachite-600 text-malachite-800 cursor-pointer" type="submit" value="Login">
        <error-component></error-component>

      </form>
    </div>

  </div>
</template>

<script>
import app_settings from '../app_settings';
import ErrorComponent from "@/components/util/ErrorComponent";
import {mapGetters} from "vuex";
export default {
  name: "LoginPage",
  components: {ErrorComponent},
  computed:{
    ...mapGetters(['getError'])
  },
  data(){
    return {
      app_settings:app_settings,
      loading:false,
      username:'',
      password:'',
      success:false
    }
  },
  methods:{
    attemptLogin(){
      this.loading=true
      // eslint-disable-next-line no-unused-vars
      let payload ={
        username: this.username,
        password: this.password,
        clientType: "web"
      }
      this.$store.dispatch('login', payload).then(resp=>{
        console.log(resp)
        this.success=true
      }).catch(()=>{

      }).then(()=>{
        this.loading=false
        window.location.replace('countries')
      })
    }
  }
}
</script>

<style scoped>

</style>