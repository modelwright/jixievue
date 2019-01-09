<template>
    <div class="page bag1">
        <div class="wrap1">
            <TitleBox :title="'常见问题'" />
            <div class="wdlist">
                <router-link v-for="(item,index) in 4" :key="index" to="">
                    <ListItem />
                </router-link>
            </div>
        </div>
        <div class="wrap2">
            <TitleBox :title="'更多问题分类'" />
            <div class="fllist hengline">
                <div class="fltitem">
                    <h3 class="f28 cor1 fb lh1">合同</h3>
                    <p class="f22 cor1">当事双方之间设立、变更、终止民事关系的协议</p>
                </div>
                <div class="fltitem">
                    <h3 class="f28 cor1 fb lh1">售后保障</h3>
                    <p class="f22 cor1">商品出售以后所提供的各种服务活动</p>
                </div>
                <div class="fltitem">
                    <h3 class="f28 cor1 fb lh1">项目问题</h3>
                    <p class="f22 cor1">移动网内运营增值业务的社会合作单位</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TitleBox from '@c/TitleBox';
import ListItem from '@c/ListItem';
export default {
    components: {
        TitleBox,
        ListItem
    }
}
</script>

<style lang="less" scoped>
.wdlist{.mt(9)}
.wrap1{.pl(15);.pt(19.5)}
.wrap2{padding: 19.5px 15px;}
.fltitem{width: 184px;height: 91px;background-color:#EF3258;border-radius: 5px;.mb(12);padding: 16px 22px 0 15px;}
.fltitem p{line-height: 17px;.mt(8);text-align: justify;.text-overflow2}
.fllist{.mt(20)}
</style>
