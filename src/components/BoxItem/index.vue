<template>
    <div>
        <div class="boxItem" v-if="type == 1">
            <div class="borbbx">
                <div class="vCenter pt10">
                    <p class="f32 cor3 fb mr15">重庆市22号线地铁一期工程</p>
                    <p class="box2 yellowbg">施工</p>
                    <p class="box2 redbg">急</p>
                </div>
                <div class="vCenter inlineitem mb20 mt10">
                    <p class="f20 cor6">二级建造师(4)</p>
                    <p class="f20 cor6">施工员(17)</p>
                    <p class="f20 cor6">安全员(17)</p>
                    <p class="f20 cor6">项目经理(17)</p>
                    <p class="f20 cor6">材料员(17)</p>
                </div>
            </div>
            <div class="heng dibu">
                <div>
                    <div class="vCenter mb15"><div class="boxkk greenk">建筑工程</div><div class="boxkk redk">江北区</div></div>
                    <div class="vCenter">
                        <div class="deage"><img class="wp100" src="@a/Images/png/pic1.png" alt=""></div>
                        <div class="deage"><img class="wp100" src="@a/Images/png/pic1.png" alt=""></div>
                        <p class="f20 cor6 pl10">张益达</p>
                    </div>
                </div>
                <div class="chuizhiR">
                    <p class="themefont f28 lh10">50天</p>
                    <p class="cor9 f20 mt20">刚刚</p>
                </div>
            </div>
        </div>
        <div class="boxItem" v-if="type == 2"  style="padding-top:10px">
            <div class="borbbx">
                <div class="vCenter pt10">
                    <p class="f32 cor3 fb mr15">重庆市22号线地铁一期工程</p>
                    <p class="box2 yellowbg">施工</p>
                    <p class="box2 redbg">急</p>
                </div>
                <div class="vCenter inlineitem mb20 mt10">
                    <p class="f20 cor6">二级建造师(4)</p>
                    <p class="f20 cor6">施工员(17)</p>
                    <p class="f20 cor6">安全员(17)</p>
                    <p class="f20 cor6">项目经理(17)</p>
                    <p class="f20 cor6">材料员(17)</p>
                </div>
            </div>
            <div class="heng dibu">
                <div>
                    <div class="vCenter mb15"><div class="boxkk greenk">建筑工程</div><div class="boxkk redk">江北区</div></div>
                </div>
            </div>
        </div>
        <div class="boxItem" v-if="type == 3" style="padding-top:10px">
            <div class="borbbx">
                <div class="heng vCenter pt10">
                    <div class="vCenter">
                        <p class="f32 cor3 fb mr15">项目经理</p>
                        <p class="box2 yellowbg">施工</p>
                        <p class="box2 redbg">急</p>
                    </div>
                    <span class="f24" style="color: #fe6e63;">面议</span>
                </div>
                <div class="vCenter mb20 mt20">
                    <span class="f20 cor9">意向地区：</span><div class="boxkk redk ">江北区</div>
                    <span class="f20 cor9 ml30">意向明细：</span><div class="boxkk greenk">施工-建筑工程</div>
                </div>
            </div>
            <div class="heng dibu">
                
                <div class="vCenter inlineitem mb20 ">
                    <p class="f20 cor6">二级建造师(4)</p>
                    <p class="f20 cor6">施工员(17)</p>
                    <p class="f20 cor6">安全员(17)</p>
                    <p class="f20 cor6">项目经理(17)</p>
                    <p class="f20 cor6">材料员(17)</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style lang="less" scoped>
.boxItem{
    .w(90%);.bag1;box-shadow: 0 3px 6px rgba(0,0,0,0.1);padding: 0 15px;.m0a;.borR(8px);.oh;
    .inlineitem{
        p{.mr(15);.pr;}
        p:after{.pos;right:-7.5px;top:2.5px;background:#d3d3d3;content:'';width:1px;height: 10px;}
        p:last-child:after{.dn;}
    }
}
.dibu{padding: 11px 0;}

</style>
