<template>
  <div class="wxapp">
    <x-header :left-options="{showBack: false}">小程序</x-header>
    <div class="container">
      <div class="img-box">
        <img src="../assets/miniprogram-qrcode.jpg" alt />
      </div>
      <p class="text">
        长按识别小程序码
        <br />进入“记录美好人生”小程序
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "miniprogram",
  data() {
    return {};
  }
};
</script>
<style>
.container {
  margin-top: 20%;
  text-align: center;
  font-size: 14px;
}
.img-box {
  width: 60%;
  margin: 0 auto;
}
.img-box img {
  width: 100%;
}
.text {
  color: #999;
}
</style>


