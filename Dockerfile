# 使用官方 Node 镜像构建静态文件
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 使用 Nginx 作为静态文件服务器
FROM nginx:1.25-alpine

# 拷贝自定义 Nginx 配置
COPY nginx.conf /etc/nginx/nginx.conf

# 拷贝构建好的静态文件
COPY --from=builder /app/build /usr/share/nginx/html

# 默认暴露端口
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
