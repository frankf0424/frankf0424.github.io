# 主页发布与运维手册

本目录记录可由本人重复执行的操作。站点是纯静态文件，无构建依赖、数据库或常驻服务。公开代码仅来自本仓库，不复制其他私人仓库及其 Git 历史。

## 当前状态

| 项目 | 状态 | 核验方式 |
| --- | --- | --- |
| GitHub 仓库 | 已创建并推送 | https://github.com/frankf0424/frankf0424.github.io |
| GitHub Pages 备用站 | 已启用，2026-10-02 验证 HTTP 200、HTTPS 与首页内容 | https://frankf0424.github.io/ |
| Cloudflare Pages | 已连接 GitHub，2026-10-02 验证 HTTP 200、HTTPS 与首页内容 | https://frankf0424-github-io.pages.dev/ |
| frankfu.online 主站 | 已绑定 Cloudflare Pages；2026-10-02 控制台显示“活动”“SSL 已启用”，并验证 DNS、HTTP 200、HTTPS 与首页内容 | https://frankfu.online/ |

主站域名和 HTTPS 已通过实际访问验证。Cloudflare 控制台刚绑定时可能暂时显示“正在初始化”或“正在验证”；可在自定义域详情中点击“检查 DNS 记录”复查。

## 日常更新

1. 在本仓库修改 index.html、styles.css 或 script.js。英文文案也在 script.js 中维护；新增可见文案时检查两种语言。
2. 本地预览：在仓库根目录运行 python3 -m http.server 8000，然后打开 http://localhost:8000 。检查手机和电脑宽度、语言切换、导航、GitHub 链接和邮箱链接。
3. 在仓库根目录提交并推送：

       git status
       git add index.html styles.css script.js favicon.svg README.md ops
       git commit -m "Describe the change"
       git push origin main

   只暂存本次实际修改的文件；命令中的文件列表可按需要删减。推送前用 git diff --cached 核对内容，避免将凭据、内部资料或其他仓库文件带入公开仓库。
4. GitHub Pages 与 Cloudflare Pages 连接同一个仓库时，推送 main 后会分别部署。等各自发布完成，再检查线上页面。不要把一次 git push 当作发布成功的证据。

## 首次配置：GitHub Pages

1. GitHub 仓库名必须是 frankf0424.github.io，默认分支为 main。此仓库已独立初始化并推送。
2. 仓库 Settings → Pages → Build and deployment：Source 选 Deploy from a branch；Branch 选 main；目录选 / (root)。
3. 打开 https://frankf0424.github.io/ ，确认首页、CSS、JS、语言切换与 HTTPS 都正常。当前已完成。
4. frankfu.online 计划作为 Cloudflare Pages 的主域名，不在 GitHub Pages 设置中绑定它。

## 首次配置：Cloudflare Pages

1. 登录 Cloudflare 控制台，进入 Workers 和 Pages → 创建应用程序 → 继续前往 Pages → 导入现有 Git 存储库。
2. 连接 GitHub。安装 Cloudflare Workers and Pages 应用时，选择个人账号 frankf0424，并将仓库访问范围设为 Only select repositories，只选 frankf0424.github.io。GitHub 可能要求邮箱验证码；本人在 GitHub 页面完成。
3. 选择 frankf0424/frankf0424.github.io 和 main 分支。项目名称为 frankf0424-github-io，框架预设为“无”，构建命令留空，构建输出目录填 . （仓库根目录）。
4. 保存并部署。https://frankf0424-github-io.pages.dev/ 已于 2026-10-02 验证 HTTP 200、HTTPS 与首页内容。后续仍应检查控制台 Deployments 状态及浏览器中的中英文切换。

## 绑定 frankfu.online

1. 先确保 pages.dev 地址工作正常。
2. 在该 Pages 项目的“自定义域”中添加 frankfu.online。Cloudflare 于 2026-10-02 自动创建了名称为 @、目标为 frankf0424-github-io.pages.dev 的 CNAME 记录，TTL 为“自动”。不要另建冲突的 A、AAAA 或 CNAME 记录。
3. 等待 DNS 和证书生效。2026-10-02 已通过 `dig +short frankfu.online A` 得到 Cloudflare 地址，并通过 `curl -I https://frankfu.online/` 验证 HTTP 200、HTTPS 和首页内容；控制台随后显示“活动”“SSL 已启用”。
4. 首页 canonical 指向 https://frankfu.online/ 。GitHub Pages 地址继续作为备用入口。当前没有配置 www.frankfu.online；如果将来需要，须在 Pages 中单独添加，并确定规范地址和跳转规则。

## 发布后检查

在仓库根目录运行以下命令，分别检查页面可访问、返回码、最终地址与首页内容：

    curl -IL https://frankf0424.github.io/
    curl -IL https://frankf0424-github-io.pages.dev/
    curl -IL https://frankfu.online/

再用浏览器手动切换中英文，点击导航、GitHub 和邮件链接；在手机宽度检查有没有横向滚动。若 DNS 或证书仍在生效中，等控制台显示完成后复查，不把临时失败记录为已启用。

## 故障与回退

- GitHub Pages 未更新：先看仓库 Actions 和 Settings → Pages 的最新部署状态，确认推送到了 main，根目录存在 index.html。
- Cloudflare Pages 未更新：在项目 Deployments 查看最近构建日志、生产分支和输出目录；核对连接的是否为本仓库。
- 域名打不开：先看 Pages 的 Custom domains 状态，再看 Cloudflare DNS 记录和证书状态。不要为修复页面问题随意改动整个域名的 NS 或其他无关记录。
- 新版页面有问题：在 Git 历史中找到上一个正常提交，使用 git revert 撤销有问题的提交，再推送 main。这样两处平台会重新部署，且保留可审计的历史。不要强推 main。

## 内容边界

作品区只加入独立完成或有权公开、且代码和介绍就绪的项目。不能使用过去雇主的内部项目、代码、数据、截图或资料；不能编造演示、性能、用户量或已上线状态。新增作品时，同时启用作品区和导航入口，并补齐中英文内容。
