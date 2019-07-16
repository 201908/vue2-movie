<template>
  <div class="add">
    <x-header :left-options="{showBack: false}">新增</x-header>
    <group label-width="4.5em">
      <x-input :show-clear="false" title="影片" v-model="movie.title" required></x-input>
      <selector placeholder="请选择地点" title="地点" :options="addressList" v-model="movie.address"></selector>
      <x-input :show-clear="false" title="评分" v-model="movie.grade" type="number" required></x-input>
    </group>
    <div style="padding:15px;">
      <x-button plain type="primary" @click.native="add()">保存</x-button>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "vux";

export default {
  name: "add",
  data() {
    return {
      movie: {
        title: "",
        address: "",
        grade: ""
      },
      addressList: ["家里", "影院"]
    };
  },
  created() {
    this.onFocus();
  },
  methods: {
    add() {
      if (!this.movie.title || !this.movie.address || !this.movie.grade) {
        this.$vux.toast.text("请添加对应的信息");
      } else {
        const nowTime = dateFormat(new Date(), "YYYY-MM-DD HH:mm:ss");
        this.movie.createTime = nowTime;
        this.movie.updateTime = nowTime;
        const _this = this;
        if (!this.$vux.toast.isVisible()) {
          this.$http.post("/movie.json", this.movie).then(response => {
            // console.log(response);
            this.$vux.toast.text("保存成功");
            setTimeout(function() {
              _this.$router.push({ path: "/" });
            }, 2000);
          });
        }
      }
    },
    onFocus(val, $event) {
      console.log("on focus", val, $event);
    }
  },
  created() {
    // console.log(this.$vux.toast.isVisible())
    // console.log(dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss'))
  }
};
</script>

