<template>
    <div class="shopcart">
        <div class="content">
            <div class="content-left">
                <div class="logo-wrap">
                    <div class="logo" :class="{'height':totalPrice>0}">
                        <span class="icon-shopping_cart">
                        <svg t="1571860182992" class="icon" viewBox="0 0 1187 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2559" width="25" height="25"><path d="M406.736182 946.759263m-77.240737 0a77.240737 77.240737 0 1 0 154.481473 0 77.240737 77.240737 0 1 0-154.481473 0Z" fill="#fff" p-id="2560"></path><path d="M1015.373632 946.759263m-77.240737 0a77.240737 77.240737 0 1 0 154.481473 0 77.240737 77.240737 0 1 0-154.481473 0Z" fill="#fff" p-id="2561"></path><path d="M620.370371 811.832407H404.291855a160.836724 160.836724 0 0 1-141.770973-146.659626c0-2.933193-48.886542-345.627853-64.530235-491.309749a132.971395 132.971395 0 0 0-38.620369-91.417834 48.886542 48.886542 0 0 0-28.84306-9.777309H36.176192A35.687176 35.687176 0 1 1 36.176192 0.315807h86.040314a116.34997 116.34997 0 0 1 79.685064 23.954406 195.546169 195.546169 0 0 1 66.485697 140.304376c17.599155 146.659626 64.04137 488.865422 64.530236 488.865421S342.694811 733.61394 408.691643 738.991459c74.307544 4.399789 677.567474 0 684.411591 0a34.22058 34.22058 0 0 1 35.687175 35.198311 35.687176 35.687176 0 0 1-35.19831 35.687175c-17.599155 0-275.720098 1.955462-473.221728 1.955462z" fill="#fff" p-id="2562"></path><path d="M434.601511 635.840855a35.687176 35.687176 0 0 1 0-71.374351c3.422058 0 349.049911-7.332981 484.465633-16.132559 105.594931-6.844116 121.72749-53.286331 122.216355-55.241793S1097.014157 278.480232 1112.65785 195.861976a65.996832 65.996832 0 0 0-5.377519-54.752928 52.797466 52.797466 0 0 0-39.109234-9.288443H368.604679a35.687176 35.687176 0 1 1 0-71.374351h691.255706a120.260894 120.260894 0 0 1 97.773084 30.309656 126.616144 126.616144 0 0 1 24.443271 117.816567c-16.132559 83.595987-70.885486 293.319253-73.329813 303.096561s-27.376464 97.773084-186.746591 108.039258c-136.393453 8.799578-483.976767 16.132559-488.865422 16.132559z" fill="#fff" p-id="2563"></path></svg>                        </span>
                    </div>
                    <div v-show="totalCount > 0" class="number">{{totalCount}}</div>
                </div>
                <div class="price">
                    {{totalPrice}}元
                </div>
                <div class="desc">
                    另需配送费{{deliveryPrice}}元
                </div>
            </div>
            <div class="content-right">
                <div class="pay" :class="payClass">
                    {{payDesc}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            selectFoods:{
                type:Array,
                default(){
                    return [];
                }
            },
            deliveryPrice:{
                type:Number,
                default:0
    
            },
            minPrice:{
                type:Number,
                default:0
     
            }
        },
        computed:{
            totalPrice(){
                let total = 0;
                this.selectFoods.forEach((food)=>{
                    total += food.price * food.count;
                });
                return total;
            },
            totalCount(){
                let count = 0;
                this.selectFoods.forEach((food) =>{
                    count += food.count;
                });
                return count;
            },
            payDesc(){
                if(this.totalPrice === 0){
                    return `￥${this.minPrice}元起送`;
                }else if(this.totalPrice < this.minPrice){
                    let diff = this.minPrice - this.totalPrice;
                    return `还差￥${diff}元起送`;
                }else{
                    return `去结算`;
                }
            },
            payClass(){
                if(this.totalPrice < this.minPrice){
                    return 'not-enough';
                }else{
                    return 'enough';
                }
            }
        }
    }
</script>
<style scoped>
    .shopcart{
        position:fixed;
        left:0;
        bottom:0;
        z-index:1;
        width:100%;
        height:48px;
    }
    .content{
        display:flex;
        background:#141d27;
        font-size:0;
    }
    .content .content-left{
        flex:1; 
    }
    .content .content-left .logo-wrap{
        position:relative;
        top:-10px;
        margin: 0 12px;
        padding:6px;
        width:56px;
        height:56px;
        box-sizing:border-box;
        vertical-align:top;
        border-radius:50%;
        background:#141d27;
    }
    .content .content-left .logo-wrap .number{
        position:absolute;
        top:0;
        right:0;
        width:24px;
        height:16px;
        border-radius:16px;
        font-weight:700;
        line-height:16px;
        font-size:9px;
        text-align:center;
        color:#fff;
        background:red;
        box-shadow:0 4px 8px 0 rgba(0,0,0,0.4);
    }
     .content .content-left .logo-wrap .logo{
         width:100%;
         height:100%;
         border-radius:50%;
         background:#2b343c;
         text-align:center;
     }
    .height{
        background:#108ee9!important;
        color:#fff;
    }
  svg.icon{
         padding:9px 0 0 0;
     }
     .price{
        display:inline-block;
        vertical-align:top;
        margin-top:-45px;
        line-height:24px;
        padding-right:12px;
        box-sizing:border-box;
        border-right:1px solid rgba(255,255,255,0.1);
        font-size:16px;
        font-weight:700;
        color:rgba(255,255,255,0.2);

    }
    .content .content-left .desc{
        padding:0 0 0 20px;
        display:inline-block;
        vertical-align:top;
        margin-top:-42px;
        color:rgba(255,255,255,0.2);
        font-size:10px;
    }
    .content .content-right{
        flex:0 0 105px;
        width:105px;
    }
    .pay{
        height:48px;
        line-height:48px;
         font-size:13px;
        color:rgba(255,255,255,0.2);
        text-align:center;
        font-weight:700;
        background:#2b333b;
    }
    .not-enough{
        background:#2b333b;
    }
    .enough{
        background:#00b433;
        color:#fff;
    }

</style>