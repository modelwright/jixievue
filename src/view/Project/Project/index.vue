<template>
    <div>
        <Screen />
        <div class="w80 m0a">
            <router-link to="/detail">
                <BoxItem v-for="(item,key) in 6" :key="key" style="margin:15px auto;"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import Screen from '@c/Screen';
import BoxItem from '@c/BoxItem';
export default {
    components: {
        Screen,
        BoxItem
    }
}
</script>

<style>

</style>
