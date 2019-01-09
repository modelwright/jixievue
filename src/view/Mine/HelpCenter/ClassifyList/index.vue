<template>
    <div class="page">
        <div class="wrap1 bag1">
            <div class="wdlist">
                <router-link class="dk" v-for="(item,index) in 4" :key="index" to="">
                    <ListItem />
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import ListItem from '@c/ListItem';
export default {
    components: {
        ListItem
    }
}
</script>

<style lang="less" scoped>
.page{.pt(20)}
.wrap1{.pl(15);}
.wdlist a:last-child .list-item{border: none}
</style>

