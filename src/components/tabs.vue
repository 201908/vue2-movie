<template>
    <tabbar>
      <tabbar-item link="/" selected>
        <img slot="icon" src="../assets/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/add">
        <img slot="icon" src="../assets/add.png">
        <span slot="label">新增</span>
      </tabbar-item>
      <tabbar-item link="/miniprogram">
        <img slot="icon" src="../assets/tabs-miniprogram.png">
        <span slot="label">小程序</span>
      </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'


export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>
  .weui-tabbar{
    position:fixed;
  }
</style>

