<template>
    <div>
        <div class="swiper-tab bor_bb">
            <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                <swiper-slide class="active">全部</swiper-slide>
                <swiper-slide>施工</swiper-slide>
                <swiper-slide>监理</swiper-slide>
                <swiper-slide>建设</swiper-slide> 
                <swiper-slide>造价</swiper-slide> 
                <swiper-slide>设计</swiper-slide> 
                <swiper-slide>勘察</swiper-slide> 
            </swiper>
        </div>
        <div style="height:41px"></div>
        <div class="list bag1">
            <div class="item bor_bb" v-for="(item,index) in list" :key="index">
                <div class="img-box">
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {swiper,swiperSlide},
    data() {
        return {
            swiperOption: {
                slidesPerView: 6.5,
                // centeredSlides: true,
                spaceBetween: 2
            },
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
.swiper-tab{position: fixed;top:0;left: 0;.wp100;.bag1;
    .swiper-slide{.tc;line-height: 41px;.f26;.cor9;}
    .swiper-slide.active{.cor47;.pr;}
    .swiper-slide.active::after{.cler;.pos;bottom: 0;left: 50%;transform: translateX(-50%);width: 13px;height: 1.5px;.bg(#474747)}
}
.list{padding: 0 15px;}
.item{.pb(20);.mb(20)}
.item:first-child{.pt(15);}
.item .img-box{border-radius: 4px;overflow: hidden;.mb(11)}
.item .subinfo-wrap{.mt(12)}
.item .userinfo-wrap{.mb(9)}
.item .subinfo-wrap .head{width: 35px;height: 35px;border-radius: 50%;overflow: hidden;}
.item .subinfo-wrap .head img{width: 100%;height: 100%;}
.item .subinfo-wrap span{.lh1;.corb3;.f20;.mr(9)}//box-shadow: 0px 2px 3px rgba(26,186,166 .5)
.item .icon{width: 15px;height: 15px;.mr(5);border-radius: 50%}
// .item .icon.enterprise{box-shadow: 0px 1px 4px rgba(26, 186, 166);  }
.item .icon img{width: 100%;width: 100%;}
.user-name{.ml(4)}
</style>

