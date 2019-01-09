<template>
    <div class="FooterBoxBtn" v-if="type=='one'">
        <button class="btnk">{{text}}</button>
    </div>
    <div v-else-if="type=='three'" class="FooterBoxBtn" style="padding:0 10px;">
        <button class="btnk" v-for="(item,index) in text" style="margin:0 5px;" :style="{background:item.color}" :key="index">{{item.text}}</button>
    </div>
</template>

<script>
export default {
    props: [
        "type",
        "text"
    ],
    created(){
        console.log(this);
    }
}
</script>

<style lang="less" scoped>
.FooterBoxBtn{position: fixed;left: 0;bottom: 0;right: 0;height: 71px;box-shadow: 0,0,4px,rgba(0,0,0,0.5);.bag1;.jdjz;padding: 0 15px;}
</style>
