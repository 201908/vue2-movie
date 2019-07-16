<template>
  <div class="index">
    <router-view></router-view>
    <TabBar :data="tabbarData" />
  </div>
</template>

<script>
// import tabs from "../components/tabs";
// export default {
//   name: "index",
//   components: {
//     tabs
//   }
// };
import TabBar from "../components/TabBar";
export default {
  name: "index",
  data() {
    return {
      tabbarData: [
        { title: "首页", icon: "/static/home.png", path: "/home" },
        {
          title: "新增",
          icon: "/static/add.png",
          path: "/add"
        },
        {
          title: "小程序",
          icon: "/static/tabs-miniprogram.png",
          path: "/miniprogram"
        }
      ]
    };
  },
  components: {
    TabBar
  }
};
</script>

<style>
</style>
