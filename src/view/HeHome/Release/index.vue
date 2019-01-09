<template>
    <div>
        <div class="saixuan saixuantab">
            <div class="actived">已发布项目</div>
            <div>已发布服务</div>
        </div>
        <div class="" v-if=" tab==1">
            <router-link to="/detail">
                <BoxItem v-for="(item,key) in 6" :key="key" :type="2" style="margin-bottom:12px;"/>
            </router-link>
        </div>
        <div class="" v-if=" tab==2">
            <router-link to="/detail">
                <BoxItem v-for="(item,key) in 6" :key="key" :type="3" style="margin-bottom:12px;"/>
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

