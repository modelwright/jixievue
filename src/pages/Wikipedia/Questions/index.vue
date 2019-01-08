<template>
    <div class="bag1" style="padding:0 15px">
        <div class="item item1 heng vCenter bor_bb">
            <p class="item-hd f28 cor48">标题</p>
            <input class="f28 flex1 cor48" type="text" placeholder="一句话描述你的问题(必填)">
        </div>
        <div class="item item1 heng vCenter bor_bb">
            <p class="item-hd f28 cor48">标题</p>
            <div class="picker">
                <p class="cb1">请选择类别</p>
            </div>
        </div>
        <div class="desc-wrap bor_bb">
            <p class="item-title fb">详细描述</p>
            <div class="textarea-wrap">
                <textarea class=" fl26 cor47" name="" id="" cols="30" rows="7" placeholder="补充问题详细信息"></textarea>
            </div>
            <div class="seimg-wrap flex-wrap">
                <div class="item jdjz">
                    <img src="@a/Images/jpg/img9.jpg" alt="" srcset="">
                </div>
                <div class="item up-btn jdjz">
                    <div>
                        <img class="icon" src="@a/Images/png/icon7.png" alt="" srcset="">
                        <p class="lh1 f24 cb3 tc mt10">上传图片</p>
                    </div>
                </div>
            </div>
            <p class="f22 lh1" style="color: #fe6e63;">* 您还可以上传1张图片</p>
        </div>
        <div class="desc-wrap">
            <p class="item-title fb">视频</p>
            <div class="seimg-wrap flex-wrap">
                <div class="item up-btn2 jdjz">
                    <div>
                        <img class="icon" src="@a/Images/png/icon8.png" alt="" srcset="">
                        <p class="lh1 f24 cb3 tc mt10">上传图片</p>
                    </div>
                </div>
            </div>
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
