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
        v-model="name"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="pho"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="pass"
        type="pass"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
<van-checkbox @click="check" v-model="checked" checked-color="#07c160">请同意《小u会员章程》《小u协议》《小u隐私政策》《小u隐私政策》</van-checkbox>
    
  </div>
</template>
<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      name: "",
      pho: "",
      pass: "",
      checked:false
      // data:{}
    };
  },
  methods: {
      check(){
        this.checked != this.checked;
        // console.log(this.checked)
    },
    onSubmit(values) {
          this.$axios
        .post("/api/register", {
          nickname: this.name,
          phone: this.pho,
          password: this.pass,
        })
        .then((res) => {
          // console.log(res.data);
          
          if (res.data.code === 200) {
            if(!this.checked){
Toast.fail("请勾选");
          }else{
            alert("注册成功");
            this.$router.push("/login");
          }
            
          } else {
            Toast.fail(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
    },
    
};


</script>
<style scoped>
@import url('../assets/css/register.css');

</style>