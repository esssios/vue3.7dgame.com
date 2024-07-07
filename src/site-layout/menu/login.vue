<template>
  <div :style="_style">
    <el-button
      class="font-text"
      style="float: right; padding: 10px"
      @click="$router.push({ path: '/site/login' })"
    >
      平台注册/登陆
    </el-button>
  </div>
</template>

<script setup lang="ts">
import "@/assets/font/font.css";
defineProps({
  _style: String,
});
</script>
