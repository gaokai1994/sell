<template>
    <div class="star" :class="starType">
        <span v-for="item in items" :class="item">
            <div class="item_show"></div>
        </span>
    </div>
</template>
<script>
const LENGTH =5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';
    export default{
        props:{
            size:{
                type:Number
            },
            score:{
                type:Number
            }
        },
        computed:{
            items(){
                let result = [];
                let score = Math.floor(this.score * 2) / 2;
                let int = Math.floor(score);
                let hasDecamal = score % 1 !== 0;
                for(let i = 0; i< int ; i++){
                    result.push(CLS_ON);
                }
                if(hasDecamal){
                    result.push(CLS_HALF);
                }
                while(result.length < LENGTH){
                    result.push(CLS_OFF);
                }
                return result;
            }
        }
    }
</script>
<style scoped>
    .star{
        width:100%;
    }
    .item_show{
        display:inline-block;
        margin-right:12px;
        width:26px;
        height:26px;
    }
    .on{
        background-image:url('star24_on@2x.png');
        background-size:20px 20px;
        background-repeat:no-repeat;
    }
    .half{
        background-image:url('star24_half@2x.png');
        background-size:20px 20px;
        background-repeat:no-repeat;
    }
    .off{
        background-image:url('star24_off@2x.png');
        background-size:20px 20px;
        background-repeat:no-repeat;
    }
</style>