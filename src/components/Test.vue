<template>
  <div>
    login
    <li v-for="item in arr" :key="item.id">{{item.title}}</li>
    <button @click="get">get请求</button>
    <button @click="post">post请求</button>
 
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      arr: [],
      tit: "成都it",
    };
  },
  created() {
    //         axios.get('http://localhost:4000/arr')
    //         .then(res=>{
    //             console.log(res.data)
    // this.arr= res.data
    //         })

    //    执行多并发请求
    // axios.all([函数1(),函数2(),函数3()]) 一个函数返回一个结果，多个函数返回多个结果
    // axios.spread((结果1,结果2,结果3)=>{}) 去获取每个函数返回的结果
    // 语法：
    // axios.all([函数1(),函数2(),函数3()])
    // .then(
    //     axios.spread((结果1,结果2,结果3)=>{

    //     })
    // )

    axios.all([this.getuser(), this.getarr()]).then(
      axios.spread((users, arrs) => {
        console.log(users.data);
        console.log(arrs.data);
        this.arr = arrs.data
        
      })
    );
  },
  methods: {
       getuser() {
      return this.$axios.get("http://localhost:4000/user");
    },
    getarr() {
      return this.$axios.get("http://localhost:4000/arr");
      
    },
    get() {
    //   axios.get("http://localhost:4000/arr").then((res) => {
    //     console.log(res.data);
    //   });

    //   const $axios=axios.create({
    //       baseURL:'http://localhost:4000',
    //       timeout:3000
    //   })

    //   this.$axios.get('/arr',{
    //       params:{
    //           id:1
    //       }
    //   })
    //   .then(res=>{
    //       console.log(res)
    //   })
     


    },
    post() {
      // axios.post('http://localhost:4000/arr')
      // .then(res=>{
      //     console.log(res.data)
      // })
      this.$axios.post("http://localhost:3000/arr", {
          title: this.tit,
        })
        .then((res) => {
          
          console.log(res.data);

        });

          this.$axios.post("http://localhost:4000/user", {
          name: this.tit,
        })
        .then((res) => {
          console.log(res.data);
        });
       
    },
   
  },
};
</script>
<style scoped>
button{
    outline: none;
}
</style>