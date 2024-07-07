<template>
  <div>
    <div v-if="openMenu" class="drawer-bg" @click="selectedMenu"></div>
    <div class="navbar">
      <hamburger
        :is-active="true"
        class="hamburger-container"
        @toggle-click="selectedMenu"
      />
      <breadcrumb class="breadcrumb-container" />
      <login :_style="'width: 100%; padding: 7px'" />
    </div>
    <div :class="'sidebar-container'">
      <logo :collapse="false" />
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :router="true"
          mode="vertical"
          :background-color="variables['menu-background']"
          :text-color="variables['menu-text']"
          :active-text-color="variables['menu-active-text']"
          :unique-opened="false"
          :collapse-transition="false"
        >
          <el-menu-item
            v-for="(item, index) in data"
            :key="index"
            :index="item.path"
          >
            {{ item.text }}
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from "./logo.vue";
import Login from "./login.vue";
import data from "@/site-layout/menu/data";
import variables from "@/styles/variables.module.scss";

// 组件的 props
const props = defineProps<{
  openMenu: boolean;
}>();
const emit = defineEmits(["selectedMenu"]);
// methods
function selectedMenu() {
  // 发出事件
  emit("selectedMenu");
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables copy.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
    height: 100%;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
