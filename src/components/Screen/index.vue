<template>
    <div>
        <div class="saixuan">
            <div class="acc" v-for="(item,key) in saixuan" :class="{actived: tanknum == key }"  @click="model(key)" :key="key">{{item.text}}{{item.num?`(${item.num})`:''}}</div>
        </div>
        <div v-if="isShow" class="tankuang" @click="tankuangfun">
            <div class="hengleft bag1" style="padding-top:44px" v-if="tanknum==0">
                <div class="wp33 tc" v-for="(item,key) in 3" :key="key" style="padding:12.5px 0;">
                    <div class="f26 cor6" style="padding:12.5px 0;" v-for="(item,index) in 6" :key="index">全国</div>
                </div>
            </div>
            <div class="bag1" v-if="tanknum==1" style="padding-top:44px">
                <div class="bor_bb wp100 hengleft" style="overflow-x:auto;height:37px;">
                    <div v-for="(item,key) in erji" :key="key" class="di tc hp100 jdjz fl" style="width:79.5px;">
                        {{item}}
                    </div>
                </div>
                <div class="hengleft" style="padding:10px 0 0;">
                    <ul style="width:102px;" class="pl25">
                        <li
                        class="f26 cor6 pr"
                        v-for="(item,index) in newbox" 
                        :key="index"
                        @click="tab(index)">{{item.label}}<span>{{item.tar?`(${item.tar})`:''}}</span></li>
                    </ul>
                    <div class="tabCon flex1">
                        <div 
                            v-for='(itemCon,index) in newbox'
                            :key="index"
                            v-show=" index == num">
                            <div v-for="(xname,key) in itemCon.content" :key="key" style="padding:10px 0;">{{xname}}</div>
                        </div>
                    </div>
                </div>
                <div class="bor_tt foter jdjz">
                    <div>重置</div>
                    <div>搜索</div>
                </div>
            </div>
            <div class="bag1" v-if="tanknum==2" style="padding-top:44px">
                <ul class="paixu">
                    <li>只看发布</li>
                    <li>只看加急</li>
                    <li>只看VIP</li>
                    <li>只看实名认证个人</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: false,
            height: 0,
            saixuan: [{
                text: '区域'
            },{
                text: '明细',
                num: 1
            },{
                text: '排序'
            }],
            tanknum: '22',
            erji: ["施工","监理","分类","分类","分类"],
            newbox: [{
                label: '以及分类',
                tar: '1',
                content: ['耳机分类32111','市政公用工程','市政公用工程','市政公用工程','市政公用工程','市政公用工程','市政公用工程','市政公用工程']
            },{
                label: '以及分类',
                content: ['耳机分类322221','市政公用工程','市政公用工程','市政公用工程','市政公用工程']
            },{
                label: '以及分类',
                content: ['耳机分类321','市政公用工程','市政公用工程','市政公用工程','市政公用工程']
            }],
            num: 0
        }
    },
    methods: {
        model: function (key){
            // alert('Hello ' + event.target.tagName + '!')
            // this.height = event.target.clientHeight
            this.isShow = !this.isShow;
            this.tanknum = key;
            if(this.isShow == false){
                this.tanknum = '22';
            }
        },
        tankuangfun: function(event){
            if(event.target.className == "tankuang"){
                this.isShow = !this.isShow;
            }
            if(this.isShow == false){
                this.tanknum = '22';
            }
        },
        tab: function (params) {
            this.num = params;
        }
    }
}
</script>

<style lang="less" scoped>
.saixuan{position:fixed;left: 0;top: 0;.wp100;z-index: 3;}
.tankuang{background:rgba(0,0,0,.3);.wp100;position: fixed;left:0;top:0;height: 100%;z-index: 2;}
.pl25{padding-left:25px;li{padding:10px 0;}} 
.tabCon{padding-left: 55.5px;max-height:300px;overflow: auto;}
.foter>div{.w(50%);.jdjz;height: 50px;.pr;&:first-child:after{content: '';display: block;width: 1px;height: 100%;.pos;right: 0;top: 0;background: @bcor1;}}
.paixu{padding: 10px 0 10px 25px;}
.paixu li{padding: 10px 0;}
</style>
