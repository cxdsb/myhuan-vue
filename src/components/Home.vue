<template>
  <div id="app">

   <router-view></router-view>

<Myfoot></Myfoot>

  </div>
  
</template>

<script>

import Myfoot from './Myfooter'
export default {
  data() {
    return {
      
    };
  },
  components: {
Myfoot,
  },
  methods:{
      
  },
   created(){
       


  }
}





</script>
<style scoped>
@import url('../assets/css/index.css');
@import url('../assets/css/header.css');
@import url('../assets/css/reset.css');
</style>
