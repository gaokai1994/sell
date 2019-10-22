<template>
  <div id="app">
    <top :seller="seller"></top>
    <app-header></app-header>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Top from './components/Top/Top'
import axios from 'axios'
export default {
  id: '#App',
  data(){
    return{
      seller:{}
    }
  },
  created(){
    axios.get('data.json')
        .then(res=>{
         this.seller = res.data.seller;
      console.log(this.seller);

     })
  },
  components: {
    'app-header':Header,
    'top':Top
  }
}
</script scoped>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
