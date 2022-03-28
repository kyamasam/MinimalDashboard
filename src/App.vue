<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import api from "@/api";
import router from "@/router";
import axios from "axios";

export default {
  name: 'App',
  components: {
  },
  created: function () {
    //check if user is logged in
    api.interceptors.request.use((config) => {
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
      return config;
    });
    api.interceptors.response.use( undefined, function (err) {
      return new Promise(function () {
        if (err.response.status === 401) {
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          axios.post(api_url+'/auth/refresh-token',{'refreshToken': localStorage.getItem('refresh'), 'clientType':'mobile'}).then(resp=>{
            localStorage.setItem('refresh', resp.data.data.refreshToken)
            localStorage.setItem('token', resp.data.data.token)
            // reload the page to make sure that requests are repeated
            window.location.reload()
          }).catch((err)=>{
            store.commit('setError', {status:err.response.status, data: err.response.data})
            window.location.replace('/')
          })
        }
        throw err;
      });
    });
  },
}
</script>

<style>

</style>
