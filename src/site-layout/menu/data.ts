import env from "@/environment";

// 首先，定义一个接口来描述数组中的对象
interface MenuItem {
  path: string;
  name: string;
  text: string;
}

// 初始化data变量，使用上面定义的接口类型
let data: MenuItem[] = [];

// 注意：如果您打算从某个模块导入env，请取消注释并正确导入
// import env from "@/environment.js";

// 由于这里的if条件总是true，您可能想要根据某些条件动态地设置data
// 但为了示例的目的，我保留了原始的if-else结构
if (env.canWeb()) {
  data = [
    {
      path: "/web/index",
      name: "Index",
      text: "平台入口",
    },
    {
      path: "/web/education",
      name: "Education",
      text: "智能教育",
    },
    {
      path: "/web/exhibition",
      name: "Exhibition",
      text: "全息展馆",
    },
    {
      path: "/web/sandtable",
      name: "SandTable",
      text: "展会沙盘",
    },
    {
      path: "/web/medical",
      name: "Medical",
      text: "元宇宙医疗",
    },
  ];
} else {
  data = [
    {
      path: "/blog/index",
      name: "Index",
      text: "开发博客",
    },
  ];
}

// 导出时，我们不再单独导出data，而是将其包含在一个对象中
// 这是一种常见的做法，尤其是当您想要导出多个变量或函数时
export default data;
