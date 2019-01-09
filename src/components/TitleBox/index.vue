<template>
    <div class="title-box">
        <p>{{title}}</p>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String
        }
    }
}
</script>

<style lang="less" scoped>
.title-box{.lh1;.pr;.pl(9.5)}
.title-box::after{.cler;.pos;left:0;top: 2px; width: 3px;height: 12px;background-color: #fe6e63;border-radius: 1.5px;}
.title-box p{.f34;.cor3;.lh1;.fb}
</style>

