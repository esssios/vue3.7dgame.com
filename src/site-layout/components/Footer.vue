<template>
  <el-card>
    <div :class="{ 'background-screen-max': maxwidth }">
      <div style="float: right; height: 40px; padding-right: 10px">
        <span v-for="item in information.data.companies" :key="item.name">
          <el-link :href="item.url" target="_blank" :underline="false">
            <svg-icon icon-class="homepage" class="mr-2" />
            <span class="font-text">
              {{ item.name }} ({{ information.data.description }})
            </span>
          </el-link>
        </span>

        <span v-if="information.data.beian">
          |
          <el-link
            href="https://beian.miit.gov.cn/"
            target="_blank"
            :underline="false"
          >
            <svg-icon icon-class="lock" class="mr-2" />
            <span class="font-text">
              {{ information.data.beian }}
            </span>
          </el-link>
        </span>
        <span v-if="information.data.version">
          |
          <el-link target="_blank" :underline="false">
            <svg-icon icon-class="security" class="mr-2" />
            <span class="font-text">
              {{ information.data.version }}
            </span>
          </el-link>
        </span>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import "@/assets/font/font.css";
import information from "@/assets/js/information";

defineProps({
  maxwidth: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
@import "@/styles/screenstyle.scss";
</style>
