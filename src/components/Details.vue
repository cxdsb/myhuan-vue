<template>
  <div>
    <div v-if="procartbj">
     <van-nav-bar title="商品详情" id="reset" class="head" left-arrow>
     
     <template #left> 
    <van-icon @click="go_hist" name="arrow-left" size="20" />
  </template>
  
  <template #right>
    <van-icon name="ellipsis" size="30" />
  </template>
</van-nav-bar>
      <div class="banner">
        <img :src="$api.baseUrl+procartbj.img" alt />
      </div>
      <main class="main">
        <div class="main_1">
          <div class="main_1in layout">
            <p>{{procartbj.goodsname}}</p>
            <span class="main_1_s1">&yen;{{procartbj.price}}</span>
            <span class="main_1_s2">（此价格不与套装优惠同时享受）</span>
          </div>
        </div>
        <div class="main_2">
          <div class="main_2in">
            <div class="main_2in_1 layout">
              <div class="main_2in_1le">
                <span>促销：</span>
                <span>满减</span>
                <span>满2件9折；3件8折</span>
              </div>
              <div class="main_2in_1ri">
                <img src="../assets/image/da_main_2in_1ri.png" alt />
              </div>
            </div>
          </div>
          <div class="main_2in2">
            <div class="main_2in_2">
              <div class="main_2in2_1 layout">
                <div class="main_2in2_1_le">
                  <p>购买数量</p>
                </div>
                <div class="main_2in2_1_ri">
                  <div
                    class="main_2in2_1_ri_1"
                    style="border-radius: .04rem 0 0 .04rem;"
                    @click="jian"
                  >
                    <a>-</a>
                  </div>
                  <div class="main_2in2_1_ri_1">
                    <a href="#">{{num}}</a>
                  </div>
                  <div
                    class="main_2in2_1_ri_1"
                    style="border-radius:0 .04rem .04rem 0;"
                    @click="add"
                  >
                    <a>+</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main_2in3">
            <div class="main_2in_3 layout">
              <div class="main_2in_3_t">
                <div class="main_2in_3_tle">
                  <p>商品属性</p>
                </div>
                <div class="main_2in_3_tri">
                  <img src="../assets/image/da_main_2in_1ri.png" alt />
                </div>
              </div>
              <div class="main_2in_3_b">
                <span class="main_2in_3_b1">{{procartbj.specsname}}</span>
                <span class="main_2in_3_b2" v-for="(item,index) in progui" :key="index">{{item}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="main_02">
          <h3 class="layout">商品详情</h3>
        </div>
        <div class="main_banner" v-html="procartbj.description">
          <!-- <img src="../assets/image/de_main_banner.png" alt /> -->
        </div>
        <div class="main_3">
          <div class="main_3in layout">
            <div class="main_3ino">
              <h3>商品评价</h3>
            </div>
            <div class="main_3int">
              <p>2313fg</p>
              <p>效果很好,物流到位,下次继续来</p>
              <img src="../assets/image/main_3int.png" alt />
              <p>2020-1-2</p>
            </div>
            <div class="main_3inr">
              <p>共1000条评论</p>
              <a href="#">查看更多&gt;</a>
            </div>
          </div>
        </div>
      </main>
      <div class="btm"></div>
      <footer class="footer">
        <div class="footer_le">
          <img src="../assets/image/de_footer_le1.png" alt />
          <span>购物车</span>
        </div>
        <div class="footer_le_rig">
          <div class="footer_ce" @click.prevent="addshop">
            <a>加入购物车</a>
          </div>
          <div class="footer_ri">
            <a href>立即购买</a>
          </div>
        </div>
      </footer>
    </div>
    <div v-else>没有数据</div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  data() {
    return {
      num: 1,
      procartbj: null,
      progui:[],
      proguiobj:[],

    };
  },
  created() {
    // 获取网址id
    let id = this.$route.params.newsid;
    // console.log(id)
    // 请求数据
    this.$axios
      .get(this.$api.goodsinfoUrl, {
        params: {
          id,
        },
      })
      .then((res) => {
        if (res.data.code == 200) {
          if (res.data.list.length > 0) {
            this.procartbj = res.data.list[0];
           this.progui = this.procartbj.specsattr.split(',')
           
          
this.progui.map(item=>{
this.proguiobj = {
             tit:item,
             checked:false
 }
          })
          
          
          
         
          //  this.proguiobj
           console.log(this.proguiobj)
          }
        }
        // console.log(this.procartbj)
        // console.log(this.procartbj.img)
      });
  },
  methods: {
    go_hist(){
          this.$router.go(-1)
      },
    add() {
      this.num++;
    },
    jian() {
      this.num--;
      if (this.num < 1) {
        this.num = 1;
      }
    },
    addshop() {
      const data_shop = {
        uid: JSON.parse(localStorage.getItem("userInfo")).uid,
        goodsid: this.$route.params.newsid,
        num: this.num,
      };
    //   console.log(data_shop)
      this.$axios.post(this.$api.cartaddUrl, data_shop).then((res) => {
        if (res.data.code == 200) {
          Toast.success("加入购物车成功");
        }
      });
    },
  },
  components: {},
};
</script>

<style scoped>
@import url("../assets/css/details.css");
@import url("../assets/css/reset.css");
/* @import url('../assets/css/bottom.css'); */
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
