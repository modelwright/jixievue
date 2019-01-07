<template>
    <div class="ResourceItem">
        <div class="imgbox"><img src="@a/Images/jpg/pic1.jpg" alt=""></div>
        <div class="fonts">
            <div class="vCenter"><p class="f28 cor3 fb">张益达</p><img src="@a/Images/png/pic1.png" alt=""><img src="@a/Images/png/pic1.png" alt=""></div>
            <div class="henglineleft">
                <div class="badgebox">二级建造师</div>
                <div class="badgebox">施工员</div>
                <div class="badgebox">安全员</div>
                <div class="badgebox">项目经理</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.ResourceItem{
    padding: 15px;.bag1;margin:0 15px;.pr;
    .imgbox{.wh(53,53);.oh;.bor;.borR(3px);.pos;left:15px;top:15px;}
    .fonts{
        .pl(68);
    }
}
.badgebox{.mb(5);.mr(5);}
</style>

