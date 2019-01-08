<template>
    <div class="page bag1">
        <div class="home-head">
            <div class="home-head-content bag1">
                <div class="portrait">
                    <img src="@a/Images/jpg/img7.jpg" alt="" srcset="">
                </div>
                <div class="userinfo-wrap">
                    <p class="f36 cor47 fb lh1">Assia</p>
                    <div class="icon enterprise" v-if="type == 1">
                        <img src="@a/Images/png/icon4.png" alt="" srcset="">
                    </div>
                    <div class="icon persona" v-if="type == 2">
                        <img src="@a/Images/png/icon6.png" alt="" srcset="">
                    </div>
                    <div class="icon vip">
                        <img src="@a/Images/png/icon5.png" alt="" srcset="">
                    </div>
                </div>
                <div class="btn tc">
                    <button class="btn1" style="background-color: #febe50;">关注TA</button>
                    <button class="btn2" style="background-color: #fe6e63;">聊天</button>
                </div>
            </div>
        </div>
        <div class="coent ">
            <div class="detailinfo-wrap flex-wrap bor_bb">
                <div class="item vCenter">
                    <img class="left-icon" src="@a/Images/png/icon11.png" alt="" srcset="">
                    <span>男</span>
                    <span>23岁</span>
                </div>
                <div class="item vCenter">
                    <img class="left-icon" src="@a/Images/png/icon12.png" alt="" srcset="">
                    <span>重庆-江北</span>
                </div>
                <div class="item vCenter">
                    <img class="left-icon" src="@a/Images/png/icon13.png" alt="" srcset="">
                    <span>查看TA的身份</span>
                    <img class="right-icon" src="@a/Images/png/icon15.png" alt="" srcset="">
                </div>
                <div class="item vCenter">
                    <img class="left-icon" src="@a/Images/png/icon14.png" alt="" srcset="">
                    <span>查看TA的发布</span>
                    <img class="right-icon" src="@a/Images/png/icon15.png" alt="" srcset="">
                </div>
            </div>
            <div class="userinfo-wrap-item bor_bb">
                <p class="titlebox f34 cor47 fb">TA的自述</p>
                <p class="text-item">中央公园华侨城旁万科森林公园5000㎡森林示范区，均衡低容积率,公园式小洋楼社区。华侨城旁万科森林公园不低35%的绿地率，14-18层低楼层小洋楼，两梯四户配置。</p>
                <p class="text-item">华侨城集团公司长期致力于发展有中国特色的文化产业集群将塑造成为中国最具创想文化和影响力的企业，并通过独特的创想文化致力于提升中国人的生活品质。一系列国内著名的企业和产品品牌是少数几个连续六年入选中国企业500强的企业之一。</p>
            </div>
            <div class="userinfo-wrap-item bor_bb">
                <p class="titlebox f34 cor47 fb">TA的工作经历</p>
                <p class="text-item">毕业了三年半，但只有三年工作经验，觉得复习考研那半年不好看，合并进履历，将目前公司的入职时间提前了半年多不过这种情况更加深入，已经面试成功，到了背调阶段。大家也结合自身，你理解下这里“打招呼”的意思，中国是个人情社会，到处需要关系来打招呼，但背景调查是彻底西方化的企业管理制度中的流程。</p>
                
            </div>
            <div class="userinfo-wrap-item">
                <p class="titlebox f34 cor47 fb">TA的业绩</p>
                <div class="results-list">
                    <div class="yiji-item">
                        <div class="yiji-name">人员-施工-二级工程师</div>
                        <div class="erji-item">
                            <p class="erji-name f26 cor47">欢悦里工程</p>
                            <p class="content">中央公园华侨城旁万科森林公园5000㎡森林示范区，均衡低容积率,公园式小洋楼社区。华侨城旁万科森林公园不低35%的绿地率，14-18层低楼层小洋楼，两梯四户配置。</p>
                            <div class="img-wrap">
                                <div class="item">
                                    <img src="@a/Images/jpg/img9.jpg" alt="" srcset="">
                                </div>
                            </div>
                        </div>
                        <div class="erji-item">
                            <p class="erji-name f26 cor47">欢悦里工程</p>
                            <p class="content">中央公园华侨城旁万科森林公园5000㎡森林示范区，均衡低容积率,公园式小洋楼社区。华侨城旁万科森林公园不低35%的绿地率，14-18层低楼层小洋楼，两梯四户配置。</p>
                            <div class="img-wrap">
                                <div class="item">
                                    <img src="@a/Images/jpg/img9.jpg" alt="" srcset="">
                                </div>
                            </div>
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
            type: 2
        }
    }
}
</script>

<style lang="less" scoped>
.coent{padding: 0 15px;}
.home-head{
    height: 207px;
    background-image: url('../../../assets/Images/jpg/img10.jpg');
    background-size: 100% 100%;
    padding: 82px 15px 0 15px;
    .home-head-content{
        height: 117px;
        border-radius: 4px;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
        padding-top: 42px;
        position: relative;
        .portrait{
            position: absolute;
            top: -33px;
            left: 50%;
            transform: translateX(-50%);
            width: 66px;
            height: 66px;
            border-radius: 50%;
            border: 2px solid #fff;
            box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            img{width: 100%; height: 100%;}
        }
        .userinfo-wrap{
            display: flex;
            align-items: center;
            justify-content: center;
            .icon{width: 15px;height: 15px;.ml(5);border-radius: 50%}
            .icon img{width: 100%;width: 100%;}
        }
        .btn{.mt(15)}
    }
}
button{border: none;width: 65px;height: 25px;border-radius: 3px;.f24;.cor1}
.detailinfo-wrap{.mt(26);
    .item{width: 50%;.mb(18);
        .left-icon{width: 13px;height: 13px;.mr(8);}
        span{.lh1;.f28;.cor47;.mr(10)}
        .right-icon{width: 5px;height: 8px;}
    }
}
.userinfo-wrap-item{.pt(26);.pb(22);
    .text-item{.mb(18);.f26;.cor48;line-height: 23px;text-align: justify}
    .text-item:last-child {.mb(0);}
}
.titlebox{.mb(19)}
.results-list{
   .yiji-item{background-color: #f7f7f7;border-radius: 5px;padding: 0 12px;.mb(20)}
   .yiji-name{.pl(11);line-height: 40px;.f28;.cor47;.bor_bb;.pr}
   .yiji-name::after {.cler;.pos;top: 15px;left: 0;width: 2px;height: 13px;background-color: #fe6e63;}
   .erji-name{.lh1;.mb(10)}
   .erji-item{.pt(14);.pb(5);border-bottom:#dbdbdb 1px solid;
        .content{.cor48;.f26;.cor48;line-height: 23px;}
        .img-wrap{.flex-wrap;.mt(14)}
        .img-wrap .item{width: 100px;height: 100px;border-radius: 3px;margin:0 10px 10px 0;overflow: hidden;.jdjz}
        .img-wrap .item:nth-child(3n) {margin-right: 0;}
   }
   .erji-item:last-child {border: none}
}
</style>

