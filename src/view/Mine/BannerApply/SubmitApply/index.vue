<template>
    <div class="bag1" style="padding:15px">
        <div class="desc-wrap bor_bb">
            <div class="textarea-wrap">
                <textarea class=" fl26 cor47" name="" id="" cols="30" rows="7" placeholder="请描述您的业绩"></textarea>
            </div>
        </div>
        <div class="item item1 heng vCenter bor_bb">
            <p class="item-hd f28 cor48">姓名</p>
            <input class="f28 flex1 cor48" type="text" placeholder="填写您的姓名">
        </div>
        <div class="item item1 heng vCenter bor_bb">
            <p class="item-hd f28 cor48">联系方式</p>
            <input class="f28 flex1 cor48" type="text" placeholder="填写您的联系方式">
        </div>

        <div style="margin-top:26px">
            <p class="f28 cor9">说明：</p>
            <p class="f26 cor9">1. 请在此处填写广告投放需求</p>
            <p class="f26 cor9">2. 平台将在3个工做日内来电与您沟通投放事宜</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
body{background: #fff !important;}
.cb1{color: #b1b1b3;}
.cb3{color: #b3b3b3;}
.item1{height: 48px;}
.item1 input{border: none;text-align: right}
.item1 .item-hd{margin-right: 90px;}
.item .picker{.pr;.pr(15)}
.item .picker:after{
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #C8C8CD;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 2px;}
.desc-wrap{.pb(15)}
.item-title{.f40;.cor47;.lh1;.mt(19);.mb(14)}
textarea{
    display: block;
    width: 100%;
	height: 140px;
	background-color: #fafafa;
    border-radius: 5px;
    padding: 10px 13px;
    border: none
}
.seimg-wrap{.mt(10)}
.seimg-wrap>.item{width: 108px;height: 108px;border-radius: 3px;margin: 0 10px 10px 0;overflow: hidden;}
.seimg-wrap>.item:nth-child(3n) {.mr(0)}
.seimg-wrap>.item.up-btn,.seimg-wrap>.item.up-btn2{border: solid 1px #e8e8e8;}
.up-btn .icon{width: 19px;height: 19px;.dk;.m0a}
.up-btn2 .icon{width: 30px;height: 30px;.dk;.m0a}
</style>
