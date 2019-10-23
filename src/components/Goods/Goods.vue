<template>
    <div class="goods">
        <div class="menu-wrap" ref="menuWrapper">
            <ul>
                <li v-for="(item,index) in goods" :to="item.type" class="menu-item"  :class="{'current':currentIndex === index}" @click.stop="selectMenu(index,$event)">
                    <span class="text">
                        <span v-show="item.type > 0" class="icon" :class="classMap[item.type]">
                        </span>{{item.name}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrap" ref="foodWrapper">
            <ul>
                <li v-for="item in goods"  class="food-list food-list-hook" >
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li v-for="food in item.foods" class="food-item">
                            <div class="food_icon">
                                <img width="57" height="57" :src="food.icon">
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月售{{food.sellCount}}份</span>
                                    <span>好评率:{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="now">￥{{food.price}}</span>
                                    <span class="old" v-show="food.oldPrice">
                                        ￥{{food.oldPrice}}
                                    </span>
                                </div>
                                <div class="cartcontral-wrap">
                                    <cart-contral :food="food"></cart-contral>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <shop-cart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shop-cart>
    </div>
</template>
<script>
import axios from 'axios';
import BScroll from 'better-scroll';
import ShopCart from '../ShopCart/ShopCart';
import CartContral from '../CartContral/CartContral';
    export default{
        props:{
            seller:{
                type:Object
            }
        },
        data(){
            return{
                goods:{},
                listHeight : [],
                scrollY : 0


            }
        },
        computed:{
            currentIndex(){
                for(let i = 0;i< this.listHeight.length;i++){
                    let height1 = this.listHeight[i];
                    let height2 = this.listHeight[i + 1];
                    if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
                        return i;
                    }
                }
                return 0;
            }
            
        },
        created(){
            this.classMap = ['decrease','discount','special','invoice','guarantee'];
            axios.get('data.json')
                .then(res => {
                    this.goods = res.data.goods;
                    this.$nextTick(() => {
                        this._initScroll();
                        this._calculateHeight();
                    });
                });
            
        },
        methods:{
            _initScroll(){
                this.menuScroll = new BScroll(this.$refs.menuWrapper,{
                    click:true
                });
                this.foodScroll = new BScroll(this.$refs.foodWrapper,{
                    click:true,
                    probeType:3
                });
                this.foodScroll.on('scroll',(pos) =>{
                    this.scrollY =Math.abs(Math.round(pos.y)); 
                });
            },

            _calculateHeight(){
                let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
                let height = 0;
                this.listHeight.push(height);
                for(let i = 0;i < foodList.length; i++){
                    let item =foodList[i];
                    height += item.clientHeight;
                    this.listHeight.push(height);
                }
            },
            selectMenu(index,event){
                if(!event._constructed){
                    return;
                }
                let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
                let el = foodList[index];
                this.foodScroll.scrollToElement(el,300);
            }
        },
        components:{
            'shop-cart':ShopCart,
            'cart-contral':CartContral
        }
    }
</script>
<style scoped>
ul,li,h2{
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
.food-item .title{
    padding-left:14px;
    height:26px;
    line-height:26px;
    border-left:2px solid #d9dde1;
    font-size:12px;
    color:rgba(147,153,159);
    background:#f3f5f7;
}
.food-item{
    display:flex;
    margin:18px;
    padding-bottom:18px;
    border:1px solid rgba(7,17,27,0.1);
}
.current{
    position:relative;
    z-index:10;
    margin-top:-1px;
    background:#fff;
    font-weight:700;
}
.current .text{
    border:none;
}
.food-item:last-child{
    border:none;
    margin-bottom:0;
}
.food-item .food_icon{
flex: 0 0 57px;
margin-right:10px;
}
.food-item .content{
    flex:1;
 text-align:left;
}
.food-item .content .name{
    margin:2px 0 8px 0;
    line-height:14px;
    height:14px;
    font-size:14px;
    color:rgba(7,17,27);
}
.desc,.extra{
    line-height:10px;
    font-size:10px;
    color:rgba(147,153,159);
}
.desc{
    line-height:12px;
    margin-bottom:8px;
}
.content .count{
    margin-right:12px;
   
}
.food-item .content .price{
    vertical-align:left;
    font-weight:700;
    line-height:24px;
    color:red;
}
.cartcontral-wrap{
    width:37%;
    height:25px;
    position:relative;
    top:-24px;
    margin:0px 12px 0px 89px;
}
.food-item .content .now{
    margin-right:8px;
    font-size:14px;
    color:rgb(240,20,20);
}
.food-item .content .old{
    text-decoration:line-through;
    font-size:10px;
    color:rgb(147,153,159);
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