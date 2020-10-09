<template>
  <div>
<header class="header">
        <div class="head_in layout">
            <p>  </p>
            <h1>欢迎登录</h1>
            <img src="../assets/image/index_06.jpg" alt="">
        </div>
    </header>

    <van-form @submit="onSubmit">
      <van-field
        v-model="pho"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="pass"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  data() {
    return {
      pho: "",
      pass: "",
    };
  },
  created() {},
  methods: {
    onSubmit() {
        // console.log(this.pho)
        // console.log(this.pass)
      this.$axios
        .post("/api/login", {
          phone: this.pho,
          password: this.pass,
        })
        .then((res) => {
          
          if (res.data.code == 200) {
            alert("登录成功");
            //登录成功，储存信息在本地localStorage
            // localStorage中只能存储字符串
            
            localStorage.setItem('userInfo',JSON.stringify(res.data.list))
            this.$router.push('./index')
          } else {
            Toast.fail(res.data.msg);
          }
        })
        
    },
  },
};
</script>


<style scoped>
@import url('../assets/css/login.css');
</style>