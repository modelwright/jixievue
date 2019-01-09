<template>
    <div class="page ">
        <div class="list bag1">
            <router-link to="">
                <div class="item bor_bb" v-for="(item,index) in list" :key="index">
                    <div class="img-box">
                        <img class="wp100" :src="item.img" alt="" srcset="">
                    </div>
                    <h3 class="f30 cor47">{{item.title}}</h3>
                    <div class="subinfo-wrap heng vCenter">
                        <div class="lh1">
                            <span>46个回答</span>
                            <span>32762人浏览</span>
                            <span>今天</span>
                        </div>
                        <div class="dele-btn jdjz">
                            <img src="@a/Images/png/icon16.png" alt="" srcset="">
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
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
                    title: '在21世纪的中国家庭，不生孩子，有错吗？'
                },
                {
                    img: '',
                    title: '请问放了炭包后，是应该开窗还是关窗，哪个效果更加明显？'
                },
                {
                    img: require('@a/Images/jpg/img8.jpg'),
                    title: '挖掘机如何保养寿命更久？'
                },
                {
                    img: '',
                    title: '请问放了炭包后，是应该开窗还是关窗，哪个效果更加明显？'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.list{padding: 0 15px 15px 15px;}
.item{.pb(20);.mb(20)}
.item:first-child{.pt(15);}
.item .img-box{border-radius: 4px;overflow: hidden;.mb(11)}
.item .subinfo-wrap{.mt(12)}
.item .userinfo-wrap{.mb(9)}
.item .subinfo-wrap .head{width: 35px;height: 35px;border-radius: 50%;overflow: hidden;}
.item .subinfo-wrap .head img{width: 100%;height: 100%;}
.item .subinfo-wrap span{.lh1;.corb3;.f20;.mr(9)}
.dele-btn{
    width: 27px;
	height: 27px;
	background-color: #ffffff;
	border-radius: 4px;
    border: solid 1px #dbdbdb;
    img{width: 12.5px;height: 14px;}
}
</style>

