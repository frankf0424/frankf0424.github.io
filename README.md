# Longjun Fu 的个人开发者主页

无需构建的静态网站。默认中文，可切换英文。当前没有公开作品，因此页面不显示作品区及作品导航。

## 本地预览

在本目录运行 python3 -m http.server 8000，然后打开 http://localhost:8000 。部署时不需要 Python、Node.js 或服务器程序。

## 发布到 GitHub Pages

已创建独立公开仓库 https://github.com/frankf0424/frankf0424.github.io ，从 main 分支根目录发布。https://frankf0424.github.io/ 已于 2026-10-02 验证可访问，HTTPS 正常。

后续更新：修改本站文件、提交并推送到 main，GitHub Pages 会重新发布。

## 同时发布到 Cloudflare Pages

将同一个 GitHub 仓库连接到 Cloudflare Pages。框架预设选 None，不需要构建命令，输出目录设为仓库根目录。先验证平台提供的 pages.dev 地址。

frankfu.online 的 DNS 已由 Cloudflare 管理，但作为本站域名的绑定与 HTTPS 当前尚未配置或验证。选择 Cloudflare Pages 作为对外主站时，在 Custom domains 中添加域名，并按控制台提示设置 DNS。实际访问和 HTTPS 验证成功后，再添加 canonical 地址，并公开这个域名。GitHub Pages 可保留为备用入口。

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
