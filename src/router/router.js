import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const Home = () => import("views/home/Home.vue")
const Category = () => import("views/category/Category.vue")
const Cart = () => import("views/cart/Cart.vue")
const Profile = () => import("views/profile/Profile.vue")

const routes = [
    {
        path:"/",
        component:Home
    },{
        path:"/home",
        component:Home
    },{
        path:"/category",
        component:Category
    },{
        path:"/shopcart",
        component:Cart
    },{
        path:"/profile",
        component:Profile
    },
]

const router = new VueRouter({
    mode:"history",
    routes
})

export default router
