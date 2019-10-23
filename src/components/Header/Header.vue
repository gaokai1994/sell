<template>
    <div>
        <div class="tab">
            <div class="tab-item"><router-link tag="a" :to="{name:'GoodsLink'}">商品</router-link></div>
            <div class="tab-item"><router-link tag="a"  :to="{name:'CommitLink'}">评价</router-link></div>
            <div class="tab-item"><router-link tag="a"  :to="{name:'SellerLink'}">商家</router-link></div>
        </div>
        <div>
            <router-view :seller="seller"></router-view>
        </div>
    </div>
</template>
<script>

    export default{
            props:{
                seller:{
                    type:Object
                }
            }
    }
</script>
<style >
    .tab{
        width:100%;
        height:40px;
        display:flex;
        line-height:40px;

    }
    .tab .tab-item{
        flex:1;
        text-align:center;

    }
    .tab .tab-item a{
        display:block;
        text-decoration:none;
    }
    .tab .tab-item a:active{
        color:rgba(240,20,20);
    }
</style>