<template>
  <div class="font-text">
    <h2>登录账号</h2>
    <el-form
      ref="loginFormRef"
      class="login-body"
      :rules="loginRules"
      :model="loginData"
      label-width="75px"
      size="large"
    >
      <el-form-item
        class="fw-700"
        label="用户名"
        prop="username"
        style="margin-bottom: 26px"
      >
        <el-input
          v-model="loginData.username"
          suffix-icon="user"
          size="large"
        />
      </el-form-item>
      <el-form-item
        class="fw-700"
        label="密码"
        prop="password"
        style="margin-bottom: 26px"
      >
        <el-input
          v-model="loginData.password"
          type="password"
          suffix-icon="lock"
          @keyup.enter="handleLogin"
        />
      </el-form-item>
      <el-form-item class="login-button">
        <el-button style="width: 100%" type="primary" @click="handleLogin">
          登陆平台
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useSiteUserStore } from "@/store";
import { LocationQuery, useRoute } from "vue-router";
import router from "@/router";
import type { FormInstance } from "element-plus";

const siteUserStore = useSiteUserStore();
const route = useRoute();

// Internationalization
const { t } = useI18n();

import { LoginData } from "@/api/auth/model";
import { log } from "console";
const loginFormRef = ref<FormInstance>(); // 登录表单ref

const loginData = ref<LoginData>({
  username: "",
  password: "",
});

const loginRules = computed(() => {
  return {
    username: [
      {
        required: true,
        trigger: "blur",
        message: t("请输入用户名称"),
      },
      {
        min: 5,
        message: t("用户名称长度应该大于5"),
        trigger: "blur",
      },
    ],
    password: [
      {
        required: true,
        trigger: "blur",
        message: t("请输入密码"),
      },
      {
        min: 6,
        message: t("密码长度应该大于6"),
        trigger: "blur",
      },
    ],
  };
});
// 登录
function handleLogin() {
  loginFormRef.value?.validate((valid: boolean) => {
    if (valid) {
      // loading.value = true;
      siteUserStore
        .login(loginData.value)
        .then(() => {
          const { path, queryParams } = parseRedirect();
          router.push({ path: path, query: queryParams });
        })
        .catch(() => {
          // getCaptcha();
        })
        .finally(() => {
          // loading.value = false;
        });
    }
  });
}
// 解析 redirect 字符串 为 path 和  queryParams
function parseRedirect(): {
  path: string;
  queryParams: Record<string, string>;
} {
  const query: LocationQuery = route.query;
  const redirect = (query.redirect as string) ?? "/";

  const url = new URL(redirect, window.location.origin);
  const path = url.pathname;
  const queryParams: Record<string, string> = {};

  url.searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });

  return { path, queryParams };
}
</script>
