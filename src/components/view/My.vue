<template>
  <div>
     
<van-nav-bar title="我的订单" id="reset" class="head" left-arrow>
     
     <template #left> 
    <van-icon @click="go_hist" name="arrow-left" size="20" />
  </template>
  
  <template #right>
    <van-icon name="ellipsis" size="30" />
  </template>
</van-nav-bar>


    <main>
        <div class="main_1">
            <div class="main_1in layout">
                <div class="main_1in_le">
                    <img src="../../assets/image/my_main-1.png" alt="">
                    <div class="main_1in_le1">
                        <p>{{memberinfoArr.nickname}}</p>
                        <a href="#">v1</a>
                    </div>
                </div>
                <div class="main_1in_ri">
                    <a href="#">每日签到</a>
                </div>
            </div>
        </div>
        <div class="main_2">
            <div class="main_2in layout">
                <div class="main_2in_1">
                    <img src="../../assets/image/my_main_2in_1.png" alt="">
                    <span>全部订单</span>
                </div>
                <div class="main_2in_1">
                    <img src="../../assets/image/my_main_2in_2.png" alt="">

                    <span>待付款</span>
                </div>
                <div class="main_2in_1">
                    <img src="../../assets/image/my_main_2in_3.png" alt="">

                    <span>待收货</span>
                </div>
            </div>
        </div>

        <div class="main_3">
            <div class="main_3in layout">
                <div class="main_3in_1">
                    <div class="main_3in_1le">
                        <img src="../../assets/image/my_main_3in_1le.png" alt="">
                        <a href="#">地址管理</a>
                    </div>
                    <div class="main_3in_1ri">
                        <img src="../../assets/image/btmhtm_main_1_left.png" alt="">
                    </div>
                </div>
                <div class="main_3in_1">
                    <div class="main_3in_1le">
                        <img src="../../assets/image/my_main_3in_1le1.png" alt="">
                        <a href="#">我的钱包</a>
                    </div>
                    <div class="main_3in_1ri">
                        <span>200余额</span>
                        <img src="../../assets/image/btmhtm_main_1_left.png" alt="">
                    </div>
                </div>
                <div class="main_3in_1">
                    <div class="main_3in_1le">
                        <img src="../../assets/image/my_main_3in_1le2.png" alt="">
                        <a href="#">我的优惠卷</a>
                    </div>
                    <div class="main_3in_1ri">
                        <img src="../../assets/image/btmhtm_main_1_left.png" alt="">
                    </div>
                </div>
                <div class="main_3in_1">
                    <div class="main_3in_1le">
                        <img src="../../assets/image/my_main_3in_1le3.png" alt="">
                        <a href="#">我的二维码</a>
                    </div>
                    <div class="main_3in_1ri">
                        <img src="../../assets/image/btmhtm_main_1_left.png" alt="">
                    </div>
                </div>
                <div class="main_3in_1">
                    <div class="main_3in_1le">
                        <img src="../../assets/image/my_main_3in_1le4.png" alt="">
                        <a href="#">我的小伙伴</a>
                    </div>
                    <div class="main_3in_1ri">
                        <img src="../../assets/image/btmhtm_main_1_left.png" alt="">
                    </div>
                </div>
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
    data(){
        return{
           memberinfoArr:{} 
        }
        
    },
created(){
    var uid = JSON.parse(localStorage.getItem('userInfo')).uid;
    //   console.log(uid)
      this.$axios.get(this.$api.memberinfoUrl+"?uid="+uid)
      .then(res=>{
          
         this.memberinfoArr = res.data.list
    //    console.log(this.memberinfoArr)
      })
},
methods:{
     go_hist(){
          this.$router.go(-1)
      },
}
};
</script>

<style scoped>
@import url('../../assets/css/my.css');
@import url('../../assets/css/reset.css');
	
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
