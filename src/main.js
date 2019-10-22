// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
axios.defaults.baseURL='../static';
//一级路由
import Header from '@/components/Header/Header'
import Seller from '@/components/Seller/Seller'
import Goods from '@/components/Goods/Goods'
import Commit from '@/components/Header/Commit'
//
Vue.use(VueRouter)


const routes =[
  {path:'/Header',name:'HeaderLink',component:Header},
  {path:'/Seller',name:'SellerLink',component:Seller},
  {path:'/Goods',name:'GoodsLink',component:Goods},
  {path:'/Commit',name:'CommitLink',component:Commit},
  // {path:'*',redirect:'/Header'}
]

const router =new VueRouter({
  routes,
  mode:'history'
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});