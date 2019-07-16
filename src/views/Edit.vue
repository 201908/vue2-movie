<template>
  <div class="edit">
    <x-header>修改</x-header>
    <group label-width="4.5em">
      <x-input :show-clear="false" title="影片" v-model="movie.title"></x-input>
      <selector placeholder="请选择地点" title="地点" :options="addressList" v-model="movie.address"></selector>
      <x-input title="创建时间" v-model="movie.createTime" disabled></x-input>
      <x-input title="修改时间" v-model="movie.updateTime" disabled></x-input>
      <x-input :show-clear="false" title="评分" v-model="movie.grade" type="number"></x-input>
    </group>
    <div style="padding:15px;">
      <x-button plain type="primary" @click.native="updateMovie()">保存</x-button>
      <x-button plain type="warn" @click.native="deleteMovie()">删除</x-button>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "vux";
export default {
  name: "edit",
  data() {
    return {
      movie: {},
      addressList: ["家里", "影院"]
    };
  },
  methods: {
    fetchMovie(id) {
      this.$http.get("/movie/" + id + ".json").then(response => {
        // console.log(response);
        this.movie = response.data;
      });
    },
    updateMovie() {
      if (!this.movie.title || !this.movie.address || !this.movie.grade) {
        this.$vux.toast.text("请添加对应的信息");
      } else {
        const nowTime = dateFormat(new Date(), "YYYY-MM-DD HH:mm:ss");
        this.movie.updateTime = nowTime;
        const _this = this;
        this.$http
          .put("/movie/" + this.$route.params.id + ".json", this.movie)
          .then(response => {
            this.$vux.toast.text("保存成功");
            setTimeout(function() {
              _this.$router.push({ path: "/" });
            }, 2000);
          });
      }
    },
    deleteMovie() {
      // 显示
      const _this = this; // 需要注意 onCancel 和 onConfirm 的 this 指向
      this.$vux.confirm.show({
        title: "操作提示",
        content: "确定删除吗",
        onConfirm() {
          _this.$http
            .delete("/movie/" + _this.$route.params.id + ".json")
            .then(response => {
              _this.$vux.toast.text("删除成功");
              setTimeout(function() {
                _this.$router.push({ path: "/" });
              }, 2000);
            });
        }
      });
    }
  },
  created() {
    this.fetchMovie(this.$route.params.id);
  }
};
</script>
