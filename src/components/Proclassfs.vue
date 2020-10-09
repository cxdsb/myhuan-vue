<template>
  <div>
<van-nav-bar title="商品详情" id="reset" class="head" left-arrow>
     
     <template #left> 
    <van-icon @click="go_hist" name="arrow-left" size="20" />
  </template>
  
  <template #right>
    <van-icon name="ellipsis" size="30" />
  </template>
  </van-nav-bar>
    <main>
        <div class="main_in">
            <div class="main_left">
                <!-- <ul>
                    <li v-for="item in catetree" :key="item.id" ><a href="#">{{item.catename}}</a></li>
                </ul> -->
                <van-sidebar v-model="activeKey">
  <van-sidebar-item v-for="(item,index) in catetree" :key="item.id" :title="item.catename" @click="changed(index)" />
  
</van-sidebar>
            </div>
            <main>
               <div class="main_right"  v-for="(item,index) in catetreecych" :key="index">
                <div class="main_right_top">
                    <div class="main_right_top_1">
                        <a href="#">{{item.catename}}</a>
                    </div>
                    <router-link :to="'/prolist/'+item.id">
                    <div class="main_right_top_2">
                        
                        <a  @click="moresp(index)">更多&gt;</a>
                    
                    </div>
                    </router-link>
                </div>
                <div class="main_right_ce">
                    
                    <div class="main_right_ce_1" >
                        <a href="#"><img :src="$api.baseUrl+item.img" alt=""></a>
                        <span>{{item.catename}}</span>
                    </div>
                   
                </div>
                

            </div> 
            </main>
            

        </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        activeKey: 0,
      catetree:[],
      catetreecy:[],
      catetreecych:[],

    };
  },
created(){
axios.all([
    this.getcatetree()
])
.then(
    axios.spread((getcatetree)=>{
this.catetree = getcatetree.data.list
// console.log(this.catetree)
this.catetreecych = this.catetree[0].children;
    })
)
},
  methods: {
      go_hist(){
          this.$router.go(-1)
      },
    getcatetree(){
return this.$axios.get("api/getcatetree")
    },
    changed(ind){
        // console.log(ind)
this.catetreecy = this.catetree[ind];
this.catetreecych = this.catetree[ind].children;
// console.log(this.catetreecy)
console.log(this.catetreecych) 
    },
    moresp(ind){
// console.log(ind)
    }
  },
  
  components: {
 
  },
};
</script>

<style scoped>
@import url('../assets/css/proclassfy.css');
    .van-icon::before{
    color: #fff;
}
.head {
    background-color: #f26b11;
}
	#reset /deep/ .van-ellipsis{
		color: #fff !important;
	}
</style>
