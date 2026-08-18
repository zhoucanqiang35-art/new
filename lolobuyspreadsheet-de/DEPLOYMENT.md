# LoloBuy Spreadsheet DE — 部署说明

此压缩包包含网站完整源码、全部页面与语言数据、图片资源、SEO 路由、测试脚本，以及已经构建并验证的 `dist/` 部署产物。

## 环境要求

- Node.js 22.13.0 或更高版本
- npm
- 推荐使用 Linux 部署环境

## 从源码安装与构建

```bash
npm ci
npm run build
```

构建成功后，部署产物位于：

- `dist/server/index.js`：服务器入口
- `dist/client/`：静态资源
- `dist/.openai/hosting.json`：部署清单

## 本地运行已构建版本

```bash
npm run start
```

## 部署检查

```bash
npm run validate:artifact
```

## Cloudflare Pages

本项目在 Cloudflare Pages 构建环境中会自动识别 `CF_PAGES=1`，并把最终 Pages 产物直接生成到 `dist/`：

- `dist/` 根目录：浏览器静态资源
- `dist/_worker.js`：Pages Git 集成可直接识别的单文件高级模式 Worker 入口
- `wrangler.jsonc`：Pages 输出目录与 `nodejs_compat` 配置

Cloudflare Pages 项目设置：

- Root directory：`lolobuyspreadsheet-de`
- Build command：`npm run build`
- Build output directory：`dist`

本地验证 Pages 产物可运行：

```bash
npm run build:pages
npx wrangler pages dev dist
```

部署前请保留以下内容，不要删除：

- `app/`
- `public/`
- `scripts/`
- `package.json`
- `package-lock.json`
- `vite.config.ts`
- `tsconfig.json`
- `.openai/hosting.json`

网站当前版本包含：首页、Categories、Workflow、Guides、Markets、FAQ、Sources、独立指南页、来源记录页、24 种语言路由、移动端 3–5 屏优化，以及桌面端完整布局。
