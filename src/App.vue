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
          router.push('/')
        }
        throw err;
      });
    });
  },
}
</script>

<style>

</style>
