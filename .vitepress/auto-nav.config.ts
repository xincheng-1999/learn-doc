// 自动导航生成配置
export const autoNavConfig = {
  // 基础路径
  docsPath: 'docs',
  
  // 排序配置
  sort: {
    categories: true,  // 是否对分类进行排序
    files: true,       // 是否对文件进行排序
  },
  
  // 标题转换配置
  titleTransform: {
    // 分隔符替换（连字符、下划线等）
    separators: /[-_]/g,
    // 是否首字母大写
    capitalize: true,
  },
  
  // 忽略的文件和目录
  ignore: {
    files: ['.DS_Store', 'Thumbs.db'],
    directories: ['.git', 'node_modules', '.vitepress'],
  },
  
  // 导航栏配置
  nav: {
    homeText: 'Home',
    homeLink: '/',
  },
  
  // 侧边栏配置
  sidebar: {
    // 是否折叠分组
    collapsed: false,
    // 侧边栏模式：'grouped' 为按路径分组，'unified' 为统一显示
    mode: 'grouped',
  }
}
