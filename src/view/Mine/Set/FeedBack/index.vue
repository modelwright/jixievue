<template>
    <div>
        <div class='input-box bag1 pr bor_tt bor_bb'>
            <textarea class='f26 cor3'
                placeholder='留下您宝贵的意见和建议，我们将努力改进...'
                v-model="word">
            </textarea>
            <div class='word-counttr'>{{word.length}}/600</div>
        </div>
        <div class='btn1'>提交意见</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            word: ''
        }
    }
}
</script>

<style lang="less" scoped>
.input-box{
  margin-top: 11px;
    height: 150px;
}
.input-box>textarea{
  padding: 12px;
  width: 100%;
  height: 100%;
  border: none
}
.btn1{
  margin-top: 30px
}
.word-counttr {
    position:absolute;
    right:12px;
    bottom:12px;
    font-size:12px;
    color:#ccc;
}
.btn1{
    margin:0 auto;
    width:340px;
    height:40px;
    line-height:40px;
    background-color:#fe6e63;
    border-radius:4px;
    font-size:16px;
    color:#fff;
    text-align:center;
    margin-top: 30px
}
</style>
