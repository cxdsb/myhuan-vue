<template>
  <div>
    <header class="header">
      <div class="head_in layout">
        <img src="../../assets/image/index_03.jpg" alt />

        <input type="text" placeholder="寻找商品" />
        <img src="../../assets/image/index_06.jpg" alt />
      </div>
    </header>
    <div class="xian"></div>
    <nav class="nav layout">
      <a href="proclassfy.html" v-for="item in catearr" :key="item.id">{{item.catename}}</a>
    </nav>
    <div class="banner">
      <van-swipe class="my-swipe ck-slide" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in bannerarr" :key="item.id">
          <img :src="$api.baseUrl+item.img" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <ul class="navbtm">
      <li>
        <a href="details.html">
          <img src="../../assets/image/index_nav.jpg" alt />
          <span>限时抢购</span>
        </a>
      </li>
      <li>
        <a href="details.html">
          <img src="../../assets/image/index_nav.jpg" alt />
          <span>限时抢购</span>
        </a>
      </li>
      <li>
        <a href="details.html">
          <img src="../../assets/image/index_nav.jpg" alt />
          <span>限时抢购</span>
        </a>
      </li>
      <li>
        <a href="details.html">
          <img src="../../assets/image/index_nav.jpg" alt />
          <span>限时抢购</span>
        </a>
      </li>
    </ul>
    <main>
      <div class="content_o">
        <div class="content_o_left">
          <div class="content_o_left_1">
            <a href="details.html">
              <img src="../../assets/image/content_o_left.png" alt />
            </a>
            <span class="content_span1">限时秒杀</span>
          </div>
          <div class="content_o_left_2">
            <span class="con_span2">每天零点场 好货秒不停</span>
          </div>
          <div class="content_o_left_3">
            <!-- <van-count-down :time="time"> -->
  <!-- <template v-slot="timeData">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
  </template> -->
  
<!-- </van-count-down> -->
            <!-- <a href="#">02</a>
            <span>:</span>
            <a href="#">16</a>
            <span>:</span>
            <a href="#">45</a> -->
            <div class="miaom">
     <span class="con_span3">秒杀</span>         
            </div>

            
          </div>
          <div class="content_o_left_4">
            <a href="details.html">
              <!-- <img :src="$api.baseUrl+seckill.img" alt /> -->
            </a>
          </div>
        </div>
        <div class="content_o_right">
          <div class="content_o_right_t">
            <div class="content_o_right_t_le">
              <div class="content_o_right_1">
                <span class="content_span1">品牌上新</span>
              </div>
              <div class="content_o_right_2">
                <span class="con_span2">每日9点 抢大牌</span>
              </div>
              <div class="content_o_right_1">
                <a href="details.html">
                  <img src="../../assets/image/content_o_right_t4.png" alt />
                </a>
              </div>
            </div>
            <div class="content_o_right_t_ri">
              <a href="details.html">
                <img src="../../assets/image/content_o_right_t1.png" alt />
              </a>
            </div>
          </div>
          <div class="content_o_right_b">
            <div class="content_o_right_b_l">
              <div class="content_o_right_b_1">
                <span class="content_span4">每日十件</span>
              </div>
              <div class="content_o_right_b_2">
                <span class="con_span4">只为你选好货</span>
              </div>
              <a href="details.html">
                <img src="../../assets/image/content_o_right_t2.png" alt />
              </a>
            </div>
            <div class="content_o_right_b_r">
              <div class="content_o_right_b_1">
                <span class="content_span4">每日十件</span>
              </div>
              <div class="content_o_right_b_2">
                <span class="con_span4">只为你选好货</span>
              </div>
              <a>
                <img src="../../assets/image/content_o_right_t3.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="banner_2">
        <a >
          <img src="../../assets/image/banner_2.png" alt />
        </a>
      </div>
    </main>
    <div class="content_t">
      <div class="content_t_in layout">
        <van-tabs type="card">       
           <van-tab title="热门推荐">
              <div class="content_t_in_1 layout" v-for="item in getindexs" :key="item.id">
          <div class="content_t_in_1_le">
            <a >
              <img :src="$api.baseUrl+item.img" alt />
            </a>
          </div>
          <div class="content_t_in_1_ri">
            <p class="info_1">{{item.goodsname}}</p>
            <p class="info_2">&yen;{{item.price}}</p>
            <p class="info_3">已售800件</p>
            <router-link :to="'/details/'+item.id">
            <button>
              <a>立即抢购</a>
            </button>
            </router-link>
          </div>
        </div>
           </van-tab>
              <van-tab title="发现好货">
                <div class="content_t_in_1 layout" v-for="item in getindexx" :key="item.id">
          <div class="content_t_in_1_le">
            <a>
              <img :src="$api.baseUrl+item.img" alt />
            </a>
          </div>
          <div class="content_t_in_1_ri">
            <p class="info_1">{{item.goodsname}}</p>
            <p class="info_2">&yen;{{item.price}}</p>
            <p class="info_3">已售800件</p>
            <router-link :to="'/details/'+item.id">
            <button>
              
              <a>立即抢购</a>
             
            </button>
             </router-link>
          </div>
        </div>
                
                </van-tab>  

      <van-tab title="全部商品" >
                <div class="content_t_in_1 layout"  v-for="item in getindexy" :key="item.id">
          <div class="content_t_in_1_le" @click="all">
            <a>
              <img :src="$api.baseUrl+item.img" alt />
            </a>
          </div>
          <div class="content_t_in_1_ri">
            <p class="info_1">{{item.goodsname}}</p>
            <p class="info_2">&yen;{{item.price}}</p>
            <p class="info_3">已售800件</p>
            <router-link :to="'/details/'+item.id">
            <button>
              <a>立即抢购</a>
            </button>
            </router-link>
          </div>
        </div>
                </van-tab>   

        </van-tabs>
       
       
      </div>
    </div>
    <div class="content_btm"></div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from 'vant';
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      catearr: [],
      bannerarr: [],
      // seckill: [],
      getindex:[],
      getindexs: [],
      getindexx: [],
      getindexy: [],
getindeAll:[]
    };
  },
  created() {
    // this.$axios.get('/api/getcate')
    // .then(res=>{
    //     console.log(res)

    // })
    axios
      .all([
        this.getcate(),
        this.getbanner(),
        // this.getseckill(),
        this.getindexgoods(),

      ])
      .then(
        axios.spread((catearr, bannerarr, getindexgoods) => {
          this.catearr = catearr.data.list;
          this.bannerarr = bannerarr.data.list;
          // this.seckill = getseckill.data.list[0];
          this.getindex = getindexgoods.data.list;
          this.getindexs = getindexgoods.data.list[0].content;
          this.getindexx= getindexgoods.data.list[1].content;
          this.getindexy= getindexgoods.data.list[2].content;
          // console.log(this.getindex);
          // console.log(this.getindexx);
          // console.log(this.getindexy);
        })
      );
  },
  methods: {
    onClick(name, title) {
      Toast(title);
    },
    all(){
      // let sum = 0
this.getindex.forEach(item=>{
   
   
  
})

    },
    getcate() {
      return this.$axios.get("/api/getcate");
    },
    getbanner() {
      return this.$axios.get("/api/getbanner");
    },
    getseckill() {
      return this.$axios.get("/api/getseckill");
    },
    getindexgoods() {
      return this.$axios.get("/api/getindexgoods");
    },
    getcatetree(){

    }
  },
};
</script>
<style scoped>
@import url("../../assets/css/index.css");
@import url("../../assets/css/header.css");
@import url("../../assets/css/reset.css");
/* 倒计时 */
 /* .colon {
    display: inline-block;
    margin: 0 4px;
    color: #ee0a24;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
  } */
</style>
