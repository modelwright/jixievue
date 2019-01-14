<template>
    <div>
        <div class="saixuan saixuantab">
            <div class="actived" @click="qiehuan(1)">我的项目</div>
            <div @click="qiehuan(2)">我的服务</div>
            <div @click="qiehuan(3)">参与项目</div>
            <div @click="qiehuan(4)">参与服务</div>
        </div>
        <div class="" v-if=" tab==1"> <!-- 我的项目 -->
            <router-link to="mineManageDetail">
                <BoxItem v-for="(item,key) in 6" :key="key" :type="6" style="margin-bottom:12px;"/>
            </router-link>
        </div>
        <div class="" v-if=" tab==2"> <!-- 我的服务 -->
            <router-link to="mineManageDetail">
                <BoxItem v-for="(item,key) in 6" :key="key" :type="5" style="margin-bottom:12px;"/>
            </router-link>
        </div>
        <div class="" v-if=" tab==3"> <!-- 参与项目 -->
            <router-link to="mineManageDetail">
                <BoxItem v-for="(item,key) in 6" :key="key" :type="1" style="margin-bottom:12px;"/>
            </router-link>
        </div>
        <div class="" v-if=" tab==4"><!-- 参与服务4 -->
            <router-link to="mineManageDetail">
                <BoxItem v-for="(item,key) in 6" :key="key" :type="4" style="margin-bottom:12px;"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import BoxItem from '@c/BoxItem';
import {logout} from '@/api/login';
export default {
    components: {BoxItem},
    data() {
        return {
            tab: 1
        }
    },
    methods: {
        qiehuan(index){
            this.tab = index;
            this.logout(data).then((item)=>{
                console.log(item)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>
