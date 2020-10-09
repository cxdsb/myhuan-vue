<template>
<!-- badge="3" -->
  <div>
   <van-tabbar v-model="active">
  <van-tabbar-item icon="wap-home-o" to="/index">
    首页
    
      <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->  
   
  </van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" to="/shopping">购物车</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/my">我的</van-tabbar-item>
</van-tabbar>

    <!-- <footer class="footer">
      <ul class="layout">
        <li>
          <router-link to="/index">
            <img src="../assets/image/footer1.png" alt />
            <a>首页</a>
          </router-link>
        </li>
        <li>
          <router-link to="/shopping">
            <img src="../assets/image/footer2.png" alt />
            <a>购物车</a>
          </router-link>
        </li>
        <li>
          <router-link to="/my">
            <a>
              <img src="../assets/image/footer3.png" alt />
            </a>
            <a>我的</a>
          </router-link>
        </li>
      </ul>
    </footer> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
       active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/footer.css");
</style>