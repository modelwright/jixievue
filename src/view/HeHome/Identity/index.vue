<template>
    <div class="page">
        <div class="item">
            <p class="yijiname f40 cor47 fb">人员</p>
            <div class="erji-item heng vCenter">
                <p class="f28 cor48">施工-建筑工程-项目经理</p>
                <p class="f24 cor9">已认证</p>
            </div>
            <div class="erji-item heng vCenter">
                <p class="f28 cor48">施工-建筑工程-项目经理</p>
                <p class="f24 c1">未认证</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.c1{color: #fe6e63;}
.page{.bag1;padding: 0 15px;}
.item{.pt(26)}
.yijiname{.lh1;.mb(20)}
.erji-item{
    height: 50px;
	background-color: #fafafa;
	border-radius: 4px;
    border: solid 1px #e8e8e8;
    padding: 0 15px;
    .mb(10)
}
.erji-item:last-child {.mb(0)}
</style>

