<template>
    <div class="ResourceItem">
        <div class="imgbox"><img src="@a/Images/jpg/pic1.jpg" alt=""></div>
        <div class="fonts" :class="{ active: isActive }">
            <div class="vCenter mb15"><p class="f28 cor3 fb">张益达</p><img class="widimg" src="@a/Images/png/pic1.png" alt=""><img class="widimg" src="@a/Images/png/pic1.png" alt=""></div>
            <div class="henglineleft" :class="{ active: isActive }">
                <div class="badgebox">二级建造师</div>
                <div class="badgebox">施工员</div>
                <div class="badgebox">安全员</div>
                <div class="badgebox">项目经理</div>
                <div class="badgebox">项目经理</div>
                <div class="badgebox">项目经理</div>
                <div class="badgebox">项目经理</div>
            </div>
        </div>
        <div class="jiantou tc" @click="jiantou">
            <img class="di" :class="{ active: isActive }" src="@a/Images/png/pic3.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isActive: false
        }
    },
    methods: {
        jiantou(){
            if(!this.isActive){
                this.isActive = true;
            }else{
                this.isActive = false;
            }
        }
    }
}
</script>
 
<style lang="less" scoped>
.ResourceItem{
    padding: 15px;.bag1;margin:0 15px;.pr;
    .imgbox{.wh(53,53);.oh;.bor;.borR(3px);.pos;left:15px;top:15px;}
    .fonts{
        .pl(68);height: 53px;
        &.active{
            height: auto;
        }
    }
}
.badgebox{.mb(5);.mr(5);}
.widimg{width:15px;.ml10;}
.henglineleft{
    height: 24px;.oh;
    &.active{height: auto;}
}
.jiantou img{.w(10px);.tr3dXz(0deg);}
.jiantou img.active{.tr3dXz(180deg);}
</style>

