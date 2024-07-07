<template>
  <div :class="classObj" class="app-wrapper">
    <div class="background-screen-max">
      <horizontal v-show="!isMobile" />
      <vertical
        v-show="isMobile"
        :open-menu="openMenu"
        @selected-menu="selectedMenu"
      />
    </div>

    <router-view class="background-screen-max" />
    <the-footer :maxwidth="true" />
  </div>
</template>

<script setup lang="ts">
import Horizontal from "@/site-layout/menu/horizontal.vue";
import Vertical from "@/site-layout/menu/vertical.vue";

import TheFooter from "@/site-layout/components/Footer.vue";
const { body } = document;
const WIDTH = 992; // refer to Bootstrap's responsive design
// import variables from "@/styles/variables.scss";

let isMobile = ref(false);
let openMenu = ref(false);

let menuClass = computed(() => {
  return isMobile.value ? "sidebar-container" : "";
});

let menuMode = computed(() => {
  return isMobile.value ? "vertical" : "horizontal";
});

let classObj = computed(() => {
  return {
    hideSidebar: !openMenu.value,
    openSidebar: openMenu.value,
    withoutAnimation: false,
    mobile: isMobile.value,
  };
});

function selectedMenu() {
  openMenu.value = !openMenu.value;
}
// use $_ for mixins properties
// https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
function $_isMobile() {
  const rect = body.getBoundingClientRect();
  return rect.width - 1 < WIDTH;
}
function $_resizeHandler() {
  isMobile.value = $_isMobile();
}
onMounted(() => {
  $_resizeHandler();
});
onBeforeMount(() => {
  window.addEventListener("resize", $_resizeHandler);
});
// onBeforeDestroy(() => {
//   window.removeEventListener("resize", $_resizeHandler);
// });
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
// @import "~@/styles/variables.scss";
@import "@/styles/screenstyle.scss";

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
