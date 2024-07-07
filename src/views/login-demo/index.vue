<template>
  <site>
    <div class="module-head font-text">
      <h1 class="module-welcome">欢迎!</h1>
      <h4>准备好出发了么？</h4>
      <br />
      <el-tabs
        v-model="activeName"
        type="border-card"
        class="card-shadow"
        @tab-click="handleClick"
      >
        <el-tab-pane name="login" label="账户密码登录">
          <login>账户密码登录</login>
        </el-tab-pane>
        <el-tab-pane
          v-if="env.canRegister()"
          name="qrcode"
          label="微信扫码（登陆/注册）"
        >
          <div>微信扫码进入</div>
        </el-tab-pane>
      </el-tabs>
      <br />
      <el-button
        style="width: 100%"
        @click="$router.push({ path: '/site/download' })"
        size="small"
        v-if="!env.local()"
      >
        下载相关程序
      </el-button>
      <el-button style="width: 100%" @click="backend()" size="small" v-else>
        进入管理后台
      </el-button>
    </div>
  </site>
</template>

<script setup lang="ts">
import env from "@/environment";
import Site from "@/components/MrPP/MrPPSite/index.vue";
import Login from "@/components/MrPP/MrPPLogin/index.vue";

let activeName = ref("login");

function backend() {
  window.open(undefined, "_blank");
}
function handleClick() {
  console.log(activeName.value);
}
</script>

<style lang="scss" scoped>
.module-head {
  padding: 10px 10px 10px 10px;
  max-width: 100%;
}

.module-title {
  font-size: 14px;
  padding: 10px 10px 10px 10px;
  text-align: center;
  color: #666;
}

.module-welcome {
  margin-top: 0px;
  font-size: 36px;
  color: #666;
}

.module-text {
  font-size: 20px;
  font-weight: lighter;
  color: #666;
}

.module-link {
  margin-top: 10px;
}

.module-link a {
  color: rgb(28, 160, 212);
  font-size: 16px;
  line-height: 22px;
}

.module-body {
  padding-top: 14px;
  height: 100%;
  max-width: 100%;
  padding: 10px 10px 20px 10px;
}

.module-hint {
  font-size: 14px;
  font-weight: lighter;
  color: #666;
  font-weight: bold;
}

.module-qrcode {
  margin-top: 2px;
  padding: 6px;
  border: 1px solid;
  border-radius: 4px;
  border-color: rgb(213, 216, 216);
}
</style>
