# VitePress 自动导航生成

这个项目已经配置为根据 `docs` 目录结构自动生成导航栏和侧边栏。

## 如何使用

### 1. 创建新的文档分类

只需要在 `docs` 目录下创建一个新的文件夹：

```
docs/
├── frontend/     # 前端相关文档
├── backend/      # 后端相关文档
├── devops/       # DevOps相关文档
└── new-category/ # 你的新分类
```

### 2. 添加文档文件

在分类文件夹中创建 `.md` 文件：

```
docs/new-category/
├── getting-started.md
├── advanced-topics.md
└── best-practices.md
```

### 3. 自动生成效果

系统会自动：

- **导航栏**：为每个目录生成一个导航项，链接到该目录下的第一个文件
- **侧边栏**：为每个目录生成一个分组，包含该目录下的所有文档
- **标题转换**：将文件名和目录名转换为友好的标题
  - `getting-started.md` → "Getting Started"
  - `api-examples.md` → "Api Examples"
  - `frontend` → "Frontend"

### 4. 文件命名建议

- 使用小写字母和连字符：`my-awesome-guide.md`
- 避免特殊字符和空格
- 使用描述性的文件名

## 开发命令

```bash
# 启动开发服务器
pnpm run docs:dev

# 构建生产版本
pnpm run docs:build

# 预览生产版本
pnpm run docs:preview
```

## 技术实现

自动导航生成通过以下方式实现：

1. **扫描目录**：使用 Node.js fs 模块扫描 `docs` 目录
2. **过滤文件**：只处理 `.md` 文件和子目录
3. **生成配置**：动态生成 VitePress 的导航和侧边栏配置
4. **标题转换**：将文件名转换为用户友好的标题

这样你就可以专注于内容创作，而不需要手动维护导航配置！
