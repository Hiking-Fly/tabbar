import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/Category.vue")
const Cart = () => import("../views/cart/Cart.vue")
const Profile = () => import("../views/profile/Profile.vue")
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
