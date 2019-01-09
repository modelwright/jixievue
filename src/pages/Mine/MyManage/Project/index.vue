<template>
    <div>
        <div class="saixuan saixuantab">
            <div class="actived">已发布项目</div>
            <div>已发布服务</div>
            <div>已参与项目</div>
            <div>已参与服务</div>
        </div>
        <div class="" v-if=" tab==1"> <!-- 已发布项目 -->
            <router-link to="mineManageDetail">
                <BoxItem v-for="(item,key) in 6" :key="key" :type="6" style="margin-bottom:12px;"/>
            </router-link>
        </div>
        <div class="" v-if=" tab==2"> <!-- 已发布服务 -->
            <router-link to="mineManageDetail">
                <BoxItem v-for="(item,key) in 6" :key="key" :type="5" style="margin-bottom:12px;"/>
            </router-link>
        </div>
        <div class="" v-if=" tab==3"> <!-- 已参与项目 -->
            <router-link to="mineManageDetail">
                <BoxItem v-for="(item,key) in 6" :key="key" :type="1" style="margin-bottom:12px;"/>
            </router-link>
        </div>
        <div class="" v-if=" tab==4"><!-- 已参与服务 -->
            <router-link to="mineManageDetail">
                <BoxItem v-for="(item,key) in 6" :key="key" :type="4" style="margin-bottom:12px;"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import BoxItem from '@c/BoxItem';
export default {
    components: {BoxItem},
    data() {
        return {
            tab: 1
        }
    }
}
</script>

<style>

</style>
