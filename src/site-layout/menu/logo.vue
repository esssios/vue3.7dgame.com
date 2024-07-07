<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        class="sidebar-logo-link"
        to="/web/index"
      >
        <span style="white-space: nowrap">
          <img v-if="logo" :src="logo" class="sidebar-logo" />
          <h1 class="sidebar-title font-title">
            {{ title }}
          </h1>
        </span>
      </router-link>
      <router-link
        v-else
        key="expand"
        class="sidebar-logo-link"
        to="/web/index"
      >
        <span style="white-space: nowrap">
          <img v-if="logo" :src="logo" class="sidebar-logo" />
          <h1 class="sidebar-title font-title">
            {{ title }}
          </h1>
        </span>
      </router-link>
    </transition>
  </div>
</template>

<script setup lang="ts">
import information from "@/assets/js/information";
const { logo, title } = information.data;

defineProps({
  collapse: Boolean,
});
</script>

<style lang="scss" scoped>
@import "@/assets/font/font.css";
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  width: 400px;
  height: 50px;
  line-height: 50px;
  overflow: auto;
  margin-top: 4px;
  margin-left: 10px;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #909399;
      font-size: 15px;
      vertical-align: middle;
      min-width: 180px;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
