<template>
    <div>
        <div class="saixuan saixuantab">
            <div class="actived">百科</div>
            <div>求助</div>
        </div>
        <div class="" style="padding:0 15px">
            <div class="new-notice wrap-item">
                <div class="item">
                    <div class="imgbox pr">
                        <img src="@a/Images/jpg/img1.jpg" alt="" srcset="">
                        <div class="Scfenlone">法规文章</div>
                    </div>
                    <h3 class="f30 cor47 text-overflow lh1">筑圈APP首发上线，优惠来袭</h3>
                    <p class="f22 cor9 text-overflow lh1">筑圈全新上线，创业项目大全，严选品质项目~</p>
                    <div class="subinfo-box vCenter hl1">
                        <img class="eye-icocn" src="@a/Images/png/icon2.png" alt="" srcset="">
                        <span>7479人浏览</span>
                        <span>刚刚</span>
                    </div>
                </div>
            </div>
            <div class="wrap3 wrap-item">
                <div class="list">
                    <div class="item item1 bor_bb">
                        <img src="@a/Images/jpg/img3.jpg" alt="" srcset="">
                        <div class="Scfenlone" style="bottom:20px;">法规文章</div>
                        <div class="left">
                            <h3 class="f28 cor47 textEll">供应链变革：新零售的下一个战场</h3>
                            <p class="f22 cor9 lh1 text-overflow" style="margin-top:7px">对B端诸多企业进行数字化改造，是新零售时代供...</p>
                            <div class="subinfo-box vCenter hl1" style="margin-top:12px">
                                <img class="eye-icocn" src="@a/Images/png/icon2.png" alt="" srcset="">
                                <span>129人浏览</span>
                                <span>今天</span>
                            </div>
                        </div>
                    </div>
                    <div class="item bor_bb">
                        <div class="">
                            <h3 class="f28 cor47">延安矿难致5死，涉事煤矿曾因重大安全生产隐患被督办整改立刻执行！</h3>
                            <p class="f22 cor9 lh1 text-overflow" style="margin-top:7px">延安市华龙煤业有限公司宝塔区贯屯煤矿发生一起井下事故，有5名矿...</p>
                            <div class="vCenter heng" style="margin-top:12px">
                                <div class="Scfenltwo">法规文章</div>
                                <div class="subinfo-box vCenter hl1">
                                    <img class="eye-icocn" src="@a/Images/png/icon2.png" alt="" srcset="">
                                    <span>129人浏览</span>
                                    <span>今天</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="listtwo bag1 dn">
            <div class="item bor_bb" v-for="(item,index) in list" :key="index">
                <div class="img-box" v-if="item.img">
                    <img class="wp100" :src="item.img" alt="" srcset="">
                </div>
                <h3 class="f30 cor47">{{item.title}}</h3>
                <div class="subinfo-wrap heng vCenter">
                    <div class="">
                        <div class="userinfo-wrap vCenter">
                            <div class="icon enterprise" v-if="item.type == 1">
                                <img src="@a/Images/png/icon4.png" alt="" srcset="">
                            </div>
                            <div class="icon persona" v-if="item.type == 2">
                                <img src="@a/Images/png/icon6.png" alt="" srcset="">
                            </div>
                            <div class="icon vip">
                                <img src="@a/Images/png/icon5.png" alt="" srcset="">
                            </div>
                            <p class="user-name f24 cor8">{{item.username}}</p>
                        </div>
                        <div class="lh1">
                            <span>46个回答</span>
                            <span>32762人浏览</span>
                            <span>今天</span>
                        </div>
                    </div>
                    <div class="head">
                        <img src="@a/Images/jpg/img7.jpg" alt="" srcset="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    img: require('@a/Images/jpg/img6.jpg'),
                    title: '在21世纪的中国家庭，不生孩子，有错吗？',
                    type: 1,
                    username: '张益达'
                },
                {
                    img: '',
                    title: '请问放了炭包后，是应该开窗还是关窗，哪个效果更加明显？',
                    type: 2,
                    username: '王晓红'
                },
                {
                    img: require('@a/Images/jpg/img8.jpg'),
                    title: '挖掘机如何保养寿命更久？',
                    type: 3,
                    username: '周小强'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.eye-icocn{width: 15px;height: 10px;margin-right: 7px;}
.subinfo-box span{.lh1;.corb3;.f20;.mr(9)}
.wrap-item{padding-top: 10px;.bor_bb;.pb(20);}
.new-notice{
    .item{width: 92vw;
        .imgbox img{width: 100%;border-radius: 1.07vw;}
        h3{.mt(15)}
        p{margin: 8px 0 12px 0;}
    }
}
.titlebox h2{font-size: 20px;color: #474747;.lh1}
.titlebox .icon{width: 6px;height: 10px;margin-left: 10px;}
.wrap2 .list{.pt(2);
    .icon{width: 16px;height: 16px;.mr(7)}
    .item{margin-top: 17px;}
    .subinfo-box{.mt(9)}
}
.wrap3 .item{.pb(20);.mb(12)}
.wrap3 .item:last-child{.pb(0);.mb(0);border: none}
.wrap3 .item1{.pr}
.wrap3 .item1>img{width:32.4%;border-radius: 4px;.pos;top:0;left: 0}
.wrap3 .item1 .left{padding-left: 32.4%;margin-left: 10px;}

.swiper-tab{position: fixed;top:0;left: 0;.wp100;.bag1;
    .swiper-slide{.tc;line-height: 41px;.f26;.cor9;}
    .swiper-slide.active{.cor47;.pr;}
    .swiper-slide.active::after{.cler;.pos;bottom: 0;left: 50%;transform: translateX(-50%);width: 13px;height: 1.5px;.bg(#474747)}
}
.listtwo{padding: 0 15px;}
.listtwo .item{.pb(20);.mb(20)}
.listtwo .item:first-child{.pt(15);}
.listtwo .item .img-box{border-radius: 4px;overflow: hidden;.mb(11)}
.listtwo .item .subinfo-wrap{.mt(12)}
.listtwo .item .userinfo-wrap{.mb(9)}
.listtwo .item .subinfo-wrap .head{width: 35px;height: 35px;border-radius: 50%;overflow: hidden;}
.listtwo .item .subinfo-wrap .head img{width: 100%;height: 100%;}
.listtwo .item .subinfo-wrap span{.lh1;.corb3;.f20;.mr(9)}//box-shadow: 0px 2px 3px rgba(26,186,166 .5)
.listtwo .item .icon{width: 15px;height: 15px;.mr(5);border-radius: 50%}
// .item .icon.enterprise{box-shadow: 0px 1px 4px rgba(26, 186, 166);  }
.listtwo .item .icon img{width: 100%;width: 100%;}
.user-name{.ml(4)}
</style>