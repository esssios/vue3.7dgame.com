/**
 * 登录用户信息
 */
export interface SiteUserInfo {
  data: {
    id: Number;
    username: String;
    nickname?: String;
    info?: String;
    avatar_id?: String;
    email?: String;
    emailBind: Boolean;
  };
  roles: string[];
}
