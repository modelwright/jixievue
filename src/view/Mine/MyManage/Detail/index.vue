<template>
    <div>
        <div class="tiaofu mb20">加急中，到期时间2018-11-16 15:30</div>
        <div style="padding:0 15px 0;" class="bag1">
            <div class="box2 yellowbg">人员</div>
            <div class="f40 mt10">重庆市地铁1、4、8号线重大项目一期工程拟在建项目工程</div>
            <div class="heng dibu bor_bb p15_0 mt10">
                <div>
                    <div class="vCenter mb15"><div class="boxkk greenk">建筑工程</div><div class="boxkk redk">江北区</div><div class="boxkk yellowk">3个月</div></div>
                    <p class="cor9 f20 mt20">刚刚</p>
                </div>
            </div>
            <div class="pt40 bor_bb">
                <div class="videobox mb20"><img class="wp100" src="@a/Images/jpg/pic1.jpg" alt=""></div>
                <p class="cor3 f26 mb20">中央公园华侨城旁万科森林公园5000㎡森林示范区，均衡低容积率,公园式小洋楼社区。华侨城旁万科森林公园不低35%的绿地率，14-18层低楼层小洋楼，两梯四户配置。</p>
                <p class="cor3 f26 mb20">华侨城集团公司长期致力于发展有中国特色的文化产业集群将塑造成为中国最具创想文化和影响力的企业，并通过独特的创想文化致力于提升中国人的生活品质。一系列国内著名的企业和产品品牌是少数几个连续六年入选中国企业500强的企业之一。</p>
                <div class="henglineleft mb20">
                    <div class="tup"><img src="@a/Images/jpg/pic2.jpg" alt=""></div>
                    <div class="tup"><img src="@a/Images/jpg/pic2.jpg" alt=""></div>
                    <div class="tup"><img src="@a/Images/jpg/pic2.jpg" alt=""></div>
                    <div class="tup"><img src="@a/Images/jpg/pic2.jpg" alt=""></div>
                    <div class="tup"><img src="@a/Images/jpg/pic2.jpg" alt=""></div>
                    <div class="tup"><img src="@a/Images/jpg/pic2.jpg" alt=""></div>
                    <div class="tup"><img src="@a/Images/jpg/pic2.jpg" alt=""></div>
                </div>
            </div>
            <div class="pb30">
                <h2 class="f34 pt40 pb40 heng vCenter">需求明细<span class="themefont f24">已有20人报名 ></span></h2>
                <div class="content">
                    <div class="vCenter p10_0"><div class="wp33 f26 cor6">耳机建造师</div><div class="wp33 tc f26 cor6">3人</div><div class="wp33 tr f26 cor6">2000<span class="cor9">元/月</span></div></div>
                    <div class="vCenter p10_0"><div class="wp33 f26 cor6">施工员</div><div class="wp33 tc f26 cor6">3人</div><div class="wp33 tr f26 cor6">2000<span class="cor9">元/月</span></div></div>
                    <div class="vCenter p10_0"><div class="wp33 f26 cor6">耳机建造师</div><div class="wp33 tc f26 cor6">3人</div><div class="wp33 tr f26 cor6">2000<span class="cor9">元/月</span></div></div>
                    <div class="vCenter p10_0"><div class="wp33 f26 cor6">施工员</div><div class="wp33 tc f26 cor6">3人</div><div class="wp33 tr f26 cor6">2000<span class="cor9">元/月</span></div></div>
                    <div class="vCenter p10_0"><div class="wp33 f26 cor6">耳机建造师</div><div class="wp33 tc f26 cor6">3人</div><div class="wp33 tr f26 cor6">2000<span class="cor9">元/月</span></div></div>
                </div>
            </div>
        </div>
        <div style="height:71px;"></div>
        <FooterBoxBtn type="three" :text=err />
    </div>
</template>

<script>
import FooterBoxBtn from '@c/FooterBoxBtn';
export default {
    components: {
        FooterBoxBtn
    },
    data() {
        return {
            tab: 1,
            err: [{
                text: '发布',
                color: '#febe50'
            },{
                text: '编辑',
                color: '#3ac7c1'
            },{
                text: '删除',
                color: '#fe6e63'
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.tup{width:108px;height:108px;.oh;.mr20;.mb20;}
.content{background:#fafafa;padding: 10px 15px;}
</style>

