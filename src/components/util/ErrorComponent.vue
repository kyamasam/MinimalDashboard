<template>
<div class="text-red-500" v-if="Object.keys(getError).length >0">
  <p v-if="getError.status === 500">An Unknown Error Occurred</p>
  <div v-else>
    <div v-for="(err, index) in getError.data" :key="index">
      <p v-for="(err_item, index) in err" class="capitalize" :key="index">
        <span v-if="err_item.field">{{err_item.field}} :</span> {{err_item.message}}
      </p>
    </div>
  </div>

</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ErrorComponent",
  computed:{
    ...mapGetters(['getError'])
  }
}
</script>

<style scoped>

</style>