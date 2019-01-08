<template>
    <div class="hp100 minebg" style="padding-top:100px;">
        <div class="bag1 waper pr">
            <div class="userimg"><img src="@a/Images/jpg/img8.jpg" alt=""></div>
            <div class="chuizhi" style="padding:55px 0 20px;">
                <div class="vCenter mb15">
                    <p class="f30 cor3 fb mr15">张益达</p>
                    <div class="vCenter edage">
                        <img style="width:7px;" class="mr5" src="@a/Images/png/pic5.png" alt="">
                        <p class="f24 cor6">13799276551</p>
                    </div>
                </div>
                <div class="vCenter">
                    <div class="dengji mr20">会员</div>
                    <div class="cor9 f20">2017-04-01 过期</div>
                </div>
            </div>
        </div>
        <div class="bag1 waper pr" style="margin-top:10px;padding:20px 30px 10px;">
            <h2 class="f36 cor3 mb30">会员权益</h2>
            <p class="mb30 cor6 f26">网络交易平台用实名认证证明用户的真实身份，同时也能保障所有用户的合法权益，甚至还利于让中标人顺利拿到任务款，发布人自由地发布（全款悬赏、订金招标、指定承接）任务。实名认证是管理网络秩序采取的必要手段。</p>
            <p class="mb30 cor6 f26">也是网络实名制的必然产物。近年来，也出现了一些网站要求实名注册，并通过电话认证（或向用户发送短信验证码进行验证）。</p>
            <p class="mb30 cor6 f26">网络交易平台用实名认证证明用户的真实身份，同时也能保障所有用户的合法权益，甚至还利于让中标人顺利拿到任务款。并通过电话认证（或向用户发送短信验证码进行验证）。</p>
        </div>
        <FooterBoxBtn />
    </div>
</template>

<script>
import FooterBoxBtn from '@c/FooterBoxBtn';
export default {
    components: {
        FooterBoxBtn
    }
}
</script>

<style lang="less" scoped>
.minebg{background:url('../../../assets/Images/png/pic4.png') 0% 0% / contain no-repeat;}
.userimg{.wh(69,69);border:2px solid #fff;.oh;.borR(100%);.jdjz;.m0a;.pos;top:-35px;left: 50%;.ml(-35px);box-shadow: 0px 2px 4px rgba(0,0,0,0.2);}
.edage{.wh(115,20);background:#f0f0f0;.jdjz;.borR(50px);}
.dengji{background:#f4d65d;color:#876021;.borR(3px);.tc;line-height: 1em;padding: 2px 5px;}
.waper{margin:0 15px;.borR(4px);box-shadow: 0px 2px 8px rgba(0,0,0,0.05);}
</style>

