
import Vue from 'vue'
import App from './App.vue'
// 路由导入
import $ from 'jquery'
import $axios from './http'
// 公共样式
import './assets/js/yidong.js'
import './assets/css/reset.css'
import router from './router'
// 引入vuex
import store from './store'
// vant ui组件
import Vant from 'vant';
import 'vant/lib/index.css'
import $api from './http/api'
// 侧边栏
// import { Sidebar, SidebarItem } from 'vant';
// 滑块
// import { SwipeCell } from 'vant';
// 表单
import { Form } from 'vant';

Vue.use(Form);
// Vue.use(SwipeCell);

// Vue.use(Sidebar);
// Vue.use(SidebarItem);

Vue.use(Vant)
Vue.prototype.$=$
Vue.prototype.$axios=$axios
Vue.prototype.$api=$api
Vue.config.productionTip = false


new Vue({
  el: '#app',
  // 5.吧路由对象注入到根实例中
  // 每一个组件都可以使用this.$router和this.$route
  router,
  store,
  components: { App },
  template: '<App/>'
})