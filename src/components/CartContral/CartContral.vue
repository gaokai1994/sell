<template>
    <div class="cartcontral">
        <div class="cart-decrease" @click="cartDec" v-show="food.count > 0"></div>
        <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
        <div class="cart-add" @click="cartAdd"></div>
    </div>
</template>
<script>
import Vue from 'vue'
    export default{
        props:{
            food:{
                type:Object
            }
        },
        methods:{
            cartAdd(event){
                if(!event._constructed){
                    return;
                }
                console.log(3);
                if(!this.food.count){
                    Vue.set(this.food,'count',1);
                    this.food.count =1;
                    console.log(11);
                }else{
                    this.food.count ++;
                    console.log(12);
                }
            },
            cartDec(event){
                if(!event._constructed){
                    return;
                }
                if(this.food.count){
                    this.food.count--;
                    console.log(13);
                } 
            }
            
        }
    }
</script>
<style>
.cartcontral{
    display:flex;
    height:25px;
    width:100%;
}
    .cartcontral .cart-decrease{
       width:30px;
        height:24px;
        
       background-image:url('dec.png');
       background-size:24px 24px;
        background-repeat:no-repeat;
        flex-basis:25px;
       
    }
    .cartcontral .cart-count{
        width:30px;
        height:24px;
        text-align:center;
        line-height:24px;
    }
    .cartcontral .cart-add{
        position:absolute;
        right:6px;
       width:30px;
        height:24px;
        background-image:url('add.png');
        background-size:24px 24px;
        background-repeat:no-repeat;
    }
</style>