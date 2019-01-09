<template>
    <div class="page">
        <div class="main list">
            <div class="item">
                <div class='item-head heng vCenter'>
                    <div class="btn2">
                        <span class="f30">已处理</span>
                    </div>
                    <div class='f28 heng vCenter'>
                        <span class="cor6">2018-11-20</span>
                        <img class="icon" src="@a/Images/png/icon15.png" alt="" srcset="">
                    </div>
                </div>
                <div class='item-content'>
                    <div class='f26 ' style="color: #fe6e63;">更新2.9之后下订单有时候闪退，平时下单有时会报错希望相关人员解决下，谢谢！</div>
                    <div class='reply'>
                        <div class='f26 cor6'>回复：</div>
                        <div class='f26 cor80'>感谢您的耐心等待，检查了下，您的版本太低，需要升级浏览器。</div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class='item-head heng vCenter'>
                    <div class="btn2">
                        <span class="f30">未处理</span>
                    </div>
                    <div class='f28 heng vCenter'>
                        <span class="cor6">2018-11-20</span>
                        <img class="icon" src="@a/Images/png/icon15.png" alt="" srcset="">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class='item-head heng vCenter'>
                    <div class="btn2">
                        <span class="f30">未处理</span>
                    </div>
                    <div class='f28 heng vCenter'>
                        <span class="cor6">2018-11-20</span>
                        <img class="icon" src="@a/Images/png/icon15.png" alt="" srcset="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.btn2{
    width:80px;
    height:30px;
    line-height:30px;
    border-radius: 15px;
    color:#fff;
    text-align:center;
    background-color: #febe50;
}
.item{
  margin-bottom: 11px;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  background-color: #fff;
  padding-left: 10px;
}
.item-head{
  padding: 17px 12px 14px 0
}
.iconfont{
  color: #c7c7cc;
  margin-left: 3px;
  transform: rotateZ(-90deg)
}
.item.on .iconfont{
  transform: rotateZ(0)
}
.item-content{
  border-top: 1px solid #e8e8e8;
  padding: 15px 12px 15px 0;
}
.item.on .item-content{
  display: block
}
.item-content div{
  line-height: 23px
}
.item-content .reply{
  margin-top: 9px
}
.icon{width: 8px;height: 15px;margin-left: 10px;}
</style>
