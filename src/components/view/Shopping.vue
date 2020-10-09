<template>
  <div>
<van-nav-bar title="我的购物车" id="reset" class="head" left-arrow>
     
     <template #left> 
    <van-icon @click="go_hist" name="arrow-left" size="20" />
  </template>
  
  <template #right>
    <van-icon name="ellipsis" size="30" />
  </template>
</van-nav-bar>
<div id="app" v-for="(item,i) in cartlist" :key="item.id">

<van-swipe-cell>
  
<main>
     
        <div class="main_o" >

            <div class="main_o_c">
                <div :class="[item.check == true?'main_o_l_att':'main_o_l']" @click="checkAll(i)" :key="item.check">
 
                </div>      
                <a href=""><img :src="$api.baseUrl+item.img" alt=""></a>
                <div class="main_o_b">
                    <p class="info">{{item.goodsname}}</p>
                    <p class="info2">规格:</p>
                    <p class="info3">&yen;{{item.price}}</p>
                </div>
            </div>

            <div class="main_o_bo">
                <div class="main_o_bo_1" @click="jian(i)">-</div>
                <div class="main_o_bo_1" style=" border-left: 1px solid #ccc;border-right: 1px solid #ccc;">{{item.num}}</div>
                <div class="main_o_bo_1" @click="add(i)">+</div>
            </div>          
        </div>
   </main>
  <template #right>
    <div  class="main_o_bot"  @click="del(i)">
           <a>删除</a>
            </div>
  </template>
   
</van-swipe-cell>

    <div class="sh_bottom">
        <div class="bottom_left">
            <div :class="[checkAlled == true?'bottom_left_1_1':'bottom_left_1']" :key="checkAlled" @click="checked">
                </div>
            <div class="bottom_left_2" >全选</div>
        </div>
        <div class="bottom_right">
            <div class="bottom_right_1">
                <span class="bottom_right_s1">总计：</span>
                <span class="bottom_right_s2">{{numAll}}</span>
                <p>不含运费，已优惠0元</p>
            </div>
            <div class="bottom_right_2">
                <a href="">去结算({{jiesuan}}件)</a></div>
        </div>
    </div>

</div>
   

    
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  data() {
    return {
        cartlist:[],
            checkAlled:false
    };
  },
  created(){
      var uid = JSON.parse(localStorage.getItem('userInfo')).uid;
      
      this.$axios.get(this.$api.cartlistUrl+"?uid="+uid)
      .then(res=>{
        //   console.log(res.data)
          this.cartlist = res.data.list.map(item=>{
              item.check=false;
              return item
          })
        //   console.log(this.cartlist)
      })
  },
  computed:{
            numAll(){
let sum = 0;

this.cartlist.forEach(item => {
    if(item.check){
       sum += item.num * item.price
    }
    
});
return sum;
            },
            jiesuan(){
                let sum1 = 0;
this.cartlist.forEach(item => {
    sum1 += item.num
});
return sum1;
            }
        },

  methods:{
      go_hist(){
          this.$router.go(-1)
      },
            checkAll(ind){

                
                if( this.cartlist[ind].check == false){
                    this.cartlist[ind].check = true;
                    this.checkAlled = this.cartlist.every(item=>{
                        return item.check
                    })
                }else{
                    this.cartlist[ind].check = false;
                    this.checkAlled = this.cartlist.every(item=>{
                        return item.check
                    })
                }
            },
            add(ind){
this.cartlist[ind].num++;
            },
            jian(ind){
                this.cartlist[ind].num--;
                if(this.cartlist[ind].num < 1){
                    this.cartlist[ind].num = 1;
                }
            },
            del(ind){
this.cartlist.splice(ind,1)
            },
            checked(){
                
                if(this.checkAlled == false){

                this.checkAlled = true
this.cartlist.forEach(item=>{
                    item.check = true;
               })
                }else{
                    
                    this.checkAlled = false
                    this.cartlist.forEach(item=>{
                    item.check = false;
               })
                }          
                
            }
            
        },

};
</script>

<style scoped>

@import url('../../assets/css/shopping.css');
@import url('../../assets/css/bottom.css');
.main_o_bot{
        width: .97rem;
        height: 1.75rem;
        background-color: #e43a3d;
        text-align: center;
        font-size: .28rem;
        line-height: 1.75rem;
        
        
        
      }
      .main_o_bot a{
          color: #fff;
        }

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
