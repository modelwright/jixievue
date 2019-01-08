<template>
    <div class="" style="padding:0 15px">
        <div class="new-notice wrap-item">
            <div class="titlebox vCenter">
                <h2>最新通告</h2>
                <img class="icon" src="@a/Images/png/icon1.png" alt="" srcset="" />
            </div>
            <div class="item">
                <div class="imgbox">
                    <img src="@a/Images/jpg/img1.jpg" alt="" srcset="">
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
        <div class="wrap2 wrap-item">
            <a class="titlebox vCenter di">
                <h2>现场求助</h2>
                <img class="icon" src="@a/Images/png/icon1.png" alt="" srcset="" />
            </a>
            <div class="list">
                <div class="item hengleft" v-for="item in list" :key="item">
                    <img class="icon" src="@a/Images/png/icon3.png" alt="">
                    <div>
                        <p class="f28 cor47 lh1 fb text-overflow">挖掘机如何保养寿命更久？</p>
                        <div class="subinfo-box vCenter hl1">
                            <span>17个回答</span>
                            <span>129人浏览</span>
                            <span>今天</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap3 wrap-item">
            <a class="titlebox vCenter di" style="margin-bottom:19px">
                <h2>法律法规</h2>
                <img class="icon" src="@a/Images/png/icon1.png" alt="" srcset="" />
            </a>
            <div class="list">
                <div class="item item1 bor_bb">
                    <img src="@a/Images/jpg/img2.jpg" alt="" srcset="">
                    <div class="left">
                        <h3 class="f28 cor47 textEll">2019一建《法律法规》考点：工程建设标准的分类</h3>
                        <p class="f22 cor9 lh1 text-overflow" style="margin-top:7px">对B端诸多企业进行数字化改造，是新零售时代供是新零售时代供是新零售时代供</p>
                        <div class="subinfo-box vCenter hl1" style="margin-top:12px">
                            <img class="eye-icocn" src="@a/Images/png/icon2.png" alt="" srcset="">
                            <span>129人浏览</span>
                            <span>今天</span>
                        </div>
                    </div>
                </div>
                <div class="item bor_bb">
                    <div class="">
                        <h3 class="f28 cor47">2019一建《法律法规》考点：工程建设标准的分类</h3>
                        <p class="f22 cor9 lh1 text-overflow" style="margin-top:7px">唯有志不改，中国才能牢牢掌握自己命运</p>
                        <div class="subinfo-box vCenter hl1" style="margin-top:12px">
                            <img class="eye-icocn" src="@a/Images/png/icon2.png" alt="" srcset="">
                            <span>129人浏览</span>
                            <span>今天</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap3 wrap-item">
            <a class="titlebox vCenter di" style="margin-bottom:19px">
                <h2>常用文章</h2>
                <img class="icon" src="@a/Images/png/icon1.png" alt="" srcset="" />
            </a>
            <div class="list">
                <div class="item item1 bor_bb">
                    <img src="@a/Images/jpg/img3.jpg" alt="" srcset="">
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
                        <div class="subinfo-box vCenter hl1" style="margin-top:12px">
                            <img class="eye-icocn" src="@a/Images/png/icon2.png" alt="" srcset="">
                            <span>129人浏览</span>
                            <span>今天</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap3 wrap-item">
            <a class="di titlebox vCenter" style="margin-bottom:19px">
                <h2>实用知识</h2>
                <img class="icon" src="@a/Images/png/icon1.png" alt="" srcset="" />
            </a>
            <div class="list">
                <div class="item bor_bb">
                    <img class="wp100" src="@a/Images/jpg/img4.jpg" alt="" srcset="" style="border-radius: 4px;margin-bottom:14px">
                    <div class="">
                        <h3 class="f28 cor47">家里的过道不要浪费，教你几个很实用的绝妙小招数让它瞬间变身!</h3>
                        <p class="f22 cor9 lh1 text-overflow" style="margin-top:7px">现在很多户型的过道都是狭长的形状，空白的墙壁闲着也是闲着，齐...</p>
                        <div class="subinfo-box vCenter hl1" style="margin-top:12px">
                            <img class="eye-icocn" src="@a/Images/png/icon2.png" alt="" srcset="">
                            <span>129人浏览</span>
                            <span>今天</span>
                        </div>
                    </div>
                </div>
                <div class="item bor_bb">
                    <div class="">
                        <h3 class="f28 cor47">2018年重磅科技新闻回顾：这些人那些事</h3>
                        <p class="f22 cor9 lh1 text-overflow" style="margin-top:7px">科技界都发生了哪些大事，用推文的形式回顾每个月的重磅科技新闻...</p>
                        <div class="subinfo-box vCenter hl1" style="margin-top:12px">
                            <img class="eye-icocn" src="@a/Images/png/icon2.png" alt="" srcset="">
                            <span>129人浏览</span>
                            <span>今天</span>
                        </div>
                    </div>
                </div>
                <div class="item item1 bor_bb">
                    <img src="@a/Images/jpg/img5.jpg" alt="" srcset="">
                    <div class="left">
                        <h3 class="f28 cor47 textEll">生活中10个最实用的小妙招</h3>
                        <p class="f22 cor9 lh1 text-overflow" style="margin-top:7px">提高生活质量的小妙招，需要的可以收藏一下</p>
                        <div class="subinfo-box vCenter hl1" style="margin-top:12px">
                            <img class="eye-icocn" src="@a/Images/png/icon2.png" alt="" srcset="">
                            <span>129人浏览</span>
                            <span>今天</span>
                        </div>
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
            list: [1,1,1,1]
        }
    }
}
</script>
<style lang="less" scoped>
.eye-icocn{width: 15px;height: 10px;margin-right: 7px;}
.subinfo-box span{.lh1;.corb3;.f20;.mr(9)}
.wrap-item{padding-top: 27px;.bor_bb;.pb(20);}
.new-notice{
    .item{width: 92vw; .mt(19);
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
</style>

