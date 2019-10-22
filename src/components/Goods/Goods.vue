<template>
    <div class="goods">
        <div class="menu-wrap">
            <ul>
                <li v-for="item in goods" :to="item.type" class="menu-item" >
                    <span class="text">
                        <span v-show="item.type > 0" class="icon" :class="classMap[item.type]">
                        </span>{{item.name}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrap">
            <ul>
                <li v-for="item in goods"  class="food-item" >
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li v-for="food in item.foods" class="food-item">
                            <div class="food_icon">
                                <img :src="food.icon">
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span>{{food.sellCount}}份</span>
                                    <span>好评率:{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span>￥{{food.price}}</span>
                                    <span v-show="food.oldPrice">
                                        ￥{{food.oldPrice}}
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        data(){
            return{
                goods:{}
            }
        },
        created(){
            this.classMap = ['decrease','discount','special','invoice','guarantee'];
            axios.get('data.json')
                .then(res => {
                    this.goods = res.data.goods;
                });
            
        }
    }
</script>
<style scoped>
ul,li{
    margin:0;
    padding:0;
    list-style-type:none;
}
.goods{
    position:absolute;
    top:218px;
    bottom:46px;
    width:100%;
    display:flex;
    overflow:hidden;
}
.menu-wrap{
    flex:0 0 80px;
    width:80px;
    background:#f3f5f7;
}
.foods-wrap{
    flex:1;
}
.menu-item{
    display:table;
    width:56px;
    height:54px;
    line-height:14px;
    padding:0 12px;
}
.icon{
    display:inline-block;
    width:16px;
    height:16px;
    vertical-align:top;
    margin-right:6px;
    background-size:16px 16px;
    background-repeat:no-repeat;
}
.decrease{
    background-image:url('decrease_2@2x.png');
}
.discount{
    background-image:url('discount_2@2x.png');
}
.special{
    background-image:url('special_2@2x.png');
}
.invoice{
    background-image:url('invoice_2@2x.png');
    
}
.guarantee{
    background-image:url('guarantee_2@2x.png');
}
.text{
    font-size:12px;
    display:table-cell;
    width:56px;
    vertical-align:middle;
    border:1px solid rgba(7,17,27,0.2);
}

</style>