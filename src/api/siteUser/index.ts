import request from "@/utils/request";
import { SiteUserInfo } from "./model";

class SiteUserAPI {
  /**
   * 登录成功后获取用户信息（昵称、头像、权限集合和角色集合）
   */
  static getInfo(token: string) {
    return request<any, SiteUserInfo>({
      url: "v1/users/get-data",
      method: "get",
      params: { token },
    });
  }
}

export default SiteUserAPI;
