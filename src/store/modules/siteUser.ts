import AuthAPI from "@/api/auth";
import SiteUserAPI from "@/api/siteUser";
import { resetRouter } from "@/router";
import { store } from "@/store";

import { LoginData } from "@/api/auth/model";
import { SiteUserInfo } from "@/api/siteUser/model";
import { TOKEN_KEY } from "@/enums/CacheEnum";

export const useSiteUserStore = defineStore("siteUser", () => {
  const siteUser = ref<SiteUserInfo>({
    data: {
      id: -1,
      username: "",
      emailBind: false,
    },
    roles: [],
  });

  /**
   * 登录
   *
   * @param {LoginData}
   * @returns
   */
  function login(loginData: LoginData) {
    return new Promise<void>((resolve, reject) => {
      AuthAPI.loginDemo(loginData)
        .then((res) => {
          const { access_token } = res;
          localStorage.setItem(TOKEN_KEY, "" + access_token); // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // 获取信息(用户昵称、头像、角色集合、权限集合)
  function getUserInfo() {
    return new Promise<SiteUserInfo>((resolve, reject) => {
      const token = localStorage.getItem(TOKEN_KEY);
      SiteUserAPI.getInfo("" + token)
        .then((data) => {
          if (!data) {
            reject("Verification failed, please Login again.");
            return;
          }
          if (!data.roles || data.roles.length <= 0) {
            reject("getUserInfo: roles must be a non-null array!");
            return;
          }
          Object.assign(siteUser.value, { ...data });
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // user logout
  function logout() {
    return new Promise<void>((resolve, reject) => {
      AuthAPI.logout()
        .then(() => {
          localStorage.setItem(TOKEN_KEY, "");
          location.reload(); // 清空路由
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // remove token
  function resetToken() {
    console.log("resetToken");
    return new Promise<void>((resolve) => {
      localStorage.setItem(TOKEN_KEY, "");
      resetRouter();
      resolve();
    });
  }

  return {
    siteUser,
    login,
    getUserInfo,
    logout,
    resetToken,
  };
});

// 非setup
export function useSiteUserStoreHook() {
  return useSiteUserStore(store);
}
