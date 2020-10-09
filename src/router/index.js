import Vue from 'vue'
// 1.引入vue-router
import VueRouter from 'vue-router'

// 2.给vue安装路由插件，让每一个组件中都可以使用router-link和router-view组件

Vue.use(VueRouter);

// 引入组件

// 3.路由配置--路由映射
var routes = [
    {
        path: '/',
        //懒加载
        component: () => import('../components/Home'),
        redirect: "/index",
        children: [
            {
                path: '/index',
                //懒加载
                component: () => import('../components/view/Index'),

            },
            {
                path: '/my',
                meta: { reqiresAuth: true },
                //路由命名
                component: () => import('../components/view/My')
            },
            {
                path: '/shopping',
                meta: { reqiresAuth: true },//元信息-是否需要守卫 身份验证
                //路由命名
                component: () => import('../components/view/Shopping')
            },
            {
                path: '/prolist/:newsid',
                //路由命名
                component: () => import('../components/view/Prolist')

            },
            {
                path: '/order',
                //路由命名
                component: () => import('../components/view/order')

            },
            
        ]
    },
    {
        path: '/details/:newsid',
        component: () => import('../components/Details'),
    },

    {
        path: '/login',
        component: () => import('../components/Login')
    },

    {
        path: '/register',
        component: () => import('../components/Register')
    },
    {
        path: '/proclassfs',
        //路由命名
        component: () => import('../components/Proclassfs')

    },
    {
        path: '*',
        component: () => import('../components/Notfound')
    }
]

// 4.实例化路由对象

var router = new VueRouter({ routes: routes, mode: 'history' })

router.beforeEach((to, from, next) => {
    //     全局守卫，守卫的是所有的路由--进入每一个路由的所有嵌套路径片段路由记录
    // to.matched数组中包含$route对象的检查元信息
    // arr.some()判断该数组是否有元信息,返回布尔值
    // 判断哪些路由有元信息，需要身份验证
    if (to.matched.some(record => record.meta.reqiresAuth)) {
        //需要登录身份验证的执行这里，判断是否登录
        if (localStorage.getItem("userInfo")) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }

})

//导出router，vuerouter实例

export default router;