# Longjun Fu 的个人开发者主页

无需构建的静态网站。默认中文，可切换英文。当前没有公开作品，因此页面不显示作品区及作品导航。

网站的发布、域名、验证与回退操作统一记录在 [ops/README.md](ops/README.md)。日常更新无需依赖 Codex。

## 本地预览

在本目录运行 python3 -m http.server 8000，然后打开 http://localhost:8000 。部署时不需要 Python、Node.js 或服务器程序。

## 添加真实作品

仅在独立完成或有权公开、且代码与介绍就绪后，才加入作品区。每张卡片同时提供中英文：

- 项目名称 / Project name
- 一句话说明 / One-sentence summary
- 解决的问题 / Problem
- 我的实现 / What I built
- 使用的技术 / Technologies
- 代码链接 / Source code
- 演示链接或运行方法 / Demo or how to run
- 已知限制 / Known limitations

添加作品区时，启用 index.html 顶部的作品导航，并将联系区编号顺延。服务端程序作为独立服务部署；GitHub Pages 只承载静态页面。

## 文件

- index.html：内容和页面结构
- styles.css：样式及手机适配
- script.js：中英文切换与语言偏好
- favicon.svg：站点图标
