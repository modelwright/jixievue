<template>
    <div>
        <div v-for="(item,index) in userList" :key="index" class="userItem">
            <div class="imgbox"><img :src="item.img" alt=""></div>
            <div style="height:60px;" class="bor_bb flex1 vCenter f30 cor3">
                {{item.text}}
                <div class="vipbox" v-if="item.isVip"><img class="wp100" src="@a/Images/png/icon5.png" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "userList"
    ]
}
</script>

<style lang="less" scoped>
.userItem{
    .vCenter;.pr;
    .imgbox{.wh(45,45);.oh;border:2px solid #f3f3f3;.borR(100%);margin: 0 15px;}
    &:first-child::before{.cler;.w(100%);height:1px;.pos;left:0;top:0;background:#e6e6e6;}
    &:last-child::after{.cler;.w(100%);height:1px;.pos;left:0;bottom:0;background:#e6e6e6;}
    .vipbox{.wh(15,15);.ml15;}
}
</style>
