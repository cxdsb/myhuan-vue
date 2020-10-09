<template>
  <div>

     <header class="header">
      <div class="head_in layout">
        <img @click="go_hist" src="../../assets/image/prolist_head.png" alt="">
        <img src="../../assets/image/index_03.jpg" alt />
        <img src="../../assets/image/index_06.jpg" alt />
      </div>
    </header>
    <main class="main layout">
        <div class="main_t">
            <input type="text" placeholder="搜索商品">

        </div>
        <div class="main_1">
            <div class="main_1_left">
                <img :src="$api.baseUrl+cateinfo_arr.img" alt="">
            </div>
            <div class="main_1_right">
                <p>{{cateinfo_arr.catename}}</p>
                <p>&yen;123</p>
                <p>2323条评论</p>
            </div>
        </div>
        
    </main>

    <div class="content_btm"></div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  data() {
    return {
      cateinfo_arr:{}
    };
  },
created(){
let id = this.$route.params.newsid
// console.log(id)
this.$axios.get(this.$api.cateinfoUrl,{
  params:{
    id
  }
})
.then(res=>{
  // console.log(res.data.list)
  if(res.data.code == 200){
    this.cateinfo_arr = res.data.list
  }
  
})
},
  methods: {
     go_hist(){
          this.$router.go(-1)
      },
  },
  components: {
 
  },
};
</script>

<style scoped>
@import url("../../assets/css/prolist.css");

</style>
