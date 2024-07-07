import env from '@/environment';

// 为 companies 函数定义返回类型  
function companies(): { name: string; url: string; }[] {
  if (document.domain.toLowerCase().includes('u7gm.com')) {
    return [{ name: '上海游七网络科技有限公司', url: 'https://u7gm.com' }];
  }
  return [{ name: '上海不加班网络科技有限公司', url: 'https://bujiaban.com' }];
}

interface Company {
  name: string;
  url: string;
}

interface Data {
  title: string;
  description: string;
  companies: Company[];
  version: string;
  beian: string;
  logo: string;
}

interface Information {
  data: Data;
}

const information: Information = {
  data: {
    title: env.title(),
    description: env.subtitle(),
    companies: companies(),
    version: '20230412.1',
    beian: '沪ICP备15039333号',
    logo: 'src/assets/images/logo.gif'
  }
};

export default information;