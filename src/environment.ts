// 加载环境变量
const env = import.meta.env;

function canRegister(): boolean {
  return env.VUE_APP_BASE_MODE === "mrpp.com";
}

function useCloud(): boolean {
  return env.VUE_APP_BASE_MODE !== "local";
}

function canDocument(): boolean {
  return env.VUE_APP_BASE_MODE !== "local";
}

function canWeb(): boolean {
  return env.VUE_APP_BASE_MODE === "mrpp.com";
}

function canBlog(): boolean {
  return env.VUE_APP_BASE_MODE === "7dgame.com";
}

function canStory(): boolean {
  return (
    env.VUE_APP_BASE_MODE === "local" || env.VUE_APP_BASE_MODE === "7dgame.com"
  );
}

function canSetup(): boolean {
  return env.VUE_APP_BASE_MODE === "local";
}

function mrpp(): boolean {
  return env.VUE_APP_BASE_MODE === "mrpp.com";
}

function mrcn(): boolean {
  return (
    env.VUE_APP_BASE_MODE === "4mr.cn" || env.VUE_APP_BASE_MODE === "7dgame.com"
  );
}

function local(): boolean {
  return env.VUE_APP_BASE_MODE === "local";
}

function canManager(): boolean {
  return (
    env.VUE_APP_BASE_MODE === "local" ||
    env.VUE_APP_BASE_MODE === "4mr.cn" ||
    env.VUE_APP_BASE_MODE === "7dgame.com"
  );
}

function getIP(): string {
  const reg = /^([^:]+)/g;
  const ret = reg.exec(window.location.host);
  return ret ? ret[1] : "";
}

function title(): string {
  const hostname = window.location.hostname.toLowerCase();
  if (hostname.includes("mrpp.com")) {
    return "不加班官方网站";
  }
  if (hostname.includes("4mr.cn")) {
    return "不加班官方网站";
  }
  if (hostname.includes("hololens2.cn")) {
    return "上海不加班网络科技";
  }
  if (hostname.includes("bujiaban.com")) {
    return "混合现实编程";
  }
  if (hostname.includes("localhost")) {
    return "混合现实编程";
  }
  if (hostname.includes("7dgame.com")) {
    return "不加班官方网站";
  }
  return "上海不加班网络科技有限公司";
}
function subtitle(): string {
  switch (env.VUE_APP_BASE_MODE) {
    case "4mr.cn":
      return "内部版本";
    case "7dgame.com":
      return "Apple Reality Spirit";
    case "local":
      return "私有部署版本";
    default:
      return "公测版本";
  }
}

function replaceIP(input: string): string {
  return input.replace("[ip]", getIP());
}

export default {
  getIP,
  canRegister,
  canWeb,
  canBlog,
  canSetup,
  canStory,
  subtitle,
  title,
  canManager,
  useCloud,
  canDocument,
  mrcn,
  mrpp,
  local,
  replaceIP,
};
