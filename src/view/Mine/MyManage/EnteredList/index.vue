<template>
    <div>
        <UserListItem :userList=userList />
    </div>
</template>

<script>
import UserListItem from '@c/UserListItem'
export default {
    components: {
        UserListItem
    },
    data(){
        return {
            userList: [{
                text: '张益达',
                img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=131502580,2269416953&fm=173&app=49&f=JPEG?w=218&h=146&s=E0B61AD508624C1309184D0A0300F0F2',
                isVip: true
            },{
                text: '叶子青',
                img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=131502580,2269416953&fm=173&app=49&f=JPEG?w=218&h=146&s=E0B61AD508624C1309184D0A0300F0F2'
            },{
                text: '毒角SHOW',
                img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=131502580,2269416953&fm=173&app=49&f=JPEG?w=218&h=146&s=E0B61AD508624C1309184D0A0300F0F2'
            }]
        }
    }
}
</script>

<style>

</style>
