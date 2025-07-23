# VitePress 自动化文档系统使用指南

## 🎉 恭喜！你的VitePress已经成功改造完成

现在你的文档系统具备以下特性：

### ✅ 已实现的功能

1. **自动导航生成** - 根据目录结构自动生成导航栏和侧边栏
2. **美观的首页** - 动态显示所有文档分类的卡片式入口
3. **智能链接** - 点击分类卡片自动跳转到该分类的第一个文档
4. **响应式设计** - 完美适配桌面端和移动端

### 📁 当前文档结构

```
docs/
├── backend/     (⚙️ 后端开发)
│   ├── express-framework.md
│   └── nodejs-guide.md
├── database/    (🗄️ 数据库)
│   ├── design-principles.md  
│   └── sql-optimization.md
├── devops/      (🚀 DevOps)
│   ├── ci-cd-practices.md
│   └── docker-introduction.md
└── frontend/    (🎨 前端开发)
    ├── api-examples.md
    ├── markdown-examples.md
    └── react-basics.md
```

### 🚀 如何添加新文档

**添加新分类：**
1. 在 `docs/` 下创建新文件夹，如 `docs/mobile/`
2. 在文件夹中添加 `.md` 文件
3. 系统会自动检测并生成导航

**添加新文档：**
1. 直接在现有分类文件夹中创建 `.md` 文件
2. 文件会自动出现在对应的侧边栏中

### 🔧 开发命令

```bash
# 启动开发服务器（会自动生成分类数据）
pnpm run docs:dev

# 构建生产版本（会自动生成分类数据）
pnpm run docs:build

# 手动生成分类数据
pnpm run generate-categories
```

### 🎨 首页特性

- **分类卡片**：每个文档分类都有专属的图标和描述
- **文档统计**：显示每个分类下的文档数量
- **一键跳转**：点击卡片直接进入分类的第一个文档
- **响应式布局**：自动适配不同屏幕尺寸

### 📝 文件命名建议

- 使用小写字母和连字符：`my-awesome-guide.md`
- 文件名会自动转换为标题：`my-awesome-guide` → "My Awesome Guide"
- 分类名也会自动转换：`frontend` → "Frontend"

### 🔧 自定义配置

可以在 `.vitepress/auto-nav.config.ts` 中调整：
- 图标映射
- 分类描述
- 排序规则
- 忽略文件

现在你可以专注于内容创作，系统会自动处理所有导航相关的配置！
