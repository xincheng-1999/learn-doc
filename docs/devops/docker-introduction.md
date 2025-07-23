# Docker 入门

Docker是一个开源的容器化平台。

## 什么是容器

容器是应用程序和其依赖项的轻量级、可移植的封装。

## 基本命令

- `docker build` - 构建镜像
- `docker run` - 运行容器
- `docker ps` - 查看运行中的容器

## Dockerfile

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```
