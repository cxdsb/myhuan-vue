<template>
<div>

<header class="header">
        <div class="head_in layout">
            <img src="../../assets/image/header_left.png" alt="">
            <h1>确定订单</h1>
            <img src="../../assets/image/header_right.png" alt="">
        </div>
    </header>
<main>
        <div class="main_1">
            <div class="main_1_in layout">
                <div class="main_1_left">
                    <div class="main_1_left_1">
                        <div class="main_1_lefto">
                            收货人:YouSu
                        </div>
                        <div class="main_1_leftt">
                            10000000000
                        </div>
                    </div>
                    <div class="main_1_left_2">收货地址:</div>
                </div>
                <div class="main_1_right">
                    <img src="../../assets/image/btmhtm_main_1_left.png" alt="">
                </div>
            </div>

        </div>
        <div class="main_2">
            <div class="main_2_in layout">
                <div class="main_2_in_top">
                    <div class="main_2_in_top_l">
                        <div class="main_2_intopltt">
                            <div class="main_2_intopltt1">
                                <img src="../../assets/image/content_t_in_1_le.png" alt="">
                            </div>
                            <div class="main_2_intopltt1">
                                <p>雅诗兰黛护肤霜</p>
                                <p>规格:50g</p>
                            </div>
                            <div class="main_2_intopltt3">
                                <img src="../../assets/image/btmhtm_main_1_left.png" alt="">
                            </div>
                        </div>
                        <div class="main_2_intoplbb">
                            购买数量：
                        </div>
                    </div>
                    <div class="main_2_in_top_r">
                        <p>yen120</p>
                        <div class="main_2_in_top_r1">
                            <div class="main_2_in_top_r_1">-</div>
                            <div class="main_2_in_top_r_2">1</div>
                            <div class="main_2_in_top_r_3">+</div>
                        </div>

                    </div>
                </div>
                <div class="main_2_in_btm">
                    <div class="main_2_in_btm_1">配送方式</div>
                    <div class="main_2_in_btm_1">某某快递</div>
                </div>
            </div>
        </div>
        <div class="main_3">
            <div class="main_3_top layout">
                <div class="main_3_topo">优惠卷</div>
                <div class="main_3_topo">无可用</div>
            </div>
            <div class="main_3_cen"></div>
            <div class="main_3_btm layout">
                <div class="main_3_btm_1">使用积分</div>
                <div class="main_3_btm_2">
                    <div class="main_3_btm_2_l">
                        <input class="input" type="text" placeholder="输入积分">
                    </div>
                    <div class="main_3_btm_2_c">使用</div>
                    <div class="main_3_btm_2_r">可以<span>50</span>积分</div>
                </div>
            </div>
        </div>
        <div class="main_4">
            <div class="main_4_in layout">
                <div class="main_4_in_1">
                    <span class="main_4s1">商品金额</span>
                    <span class="main_4s2">&yen;68.00</span>
                </div>
                <div class="main_4_in_1">
                    <span class="main_4s1">运费</span>
                    <span class="main_4s2">+&yen;0.00</span>
                </div>
                <div class="main_4_in_1">
                    <span class="main_4s1">优惠卷</span>
                    <span class="main_4s2">-&yen;0.00</span>
                </div>
                <div class="main_4_in_1">
                    <span class="main_4s1">会员优惠</span>
                    <span class="main_4s2">-&yen;0.00</span>
                </div>
                <div class="main_4_in_1">
                    <span class="main_4s1">积分抵扣</span>
                    <span class="main_4s2">-&yen;0.00</span>
                </div>
                <div class="main_4_in_2"></div>
                <div class="main_4_in_3">
                    实付金额:<span>&yen;68:00</span>
                </div>
                <button>提交订单</button>
            </div>
        </div>

    </main>
 <div class="content_btm"></div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
created(){


},
  methods: {
    
  },
  components: {
 
  },
};
</script>

<style scoped>
@import url('../../assets/css/order.css');
</style>
