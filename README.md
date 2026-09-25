# lggyx.github.io

我的博客，用 [Astro](https://astro.build) 构建，通过 GitHub Actions 自动部署到 GitHub Pages。

> 2026-09 从 Hexo 迁移至此。35 篇文章的发布日期保留原博客写入时间，旧文已标注「旧文」徽章。

## 本地开发

```bash
npm install
npm run dev
```

## 部署

推送到 `main` 分支即自动构建并发布到 <https://lggyx.github.io>。

GitHub Actions 对该仓库免费（public 仓库不计入分钟额度），
且只配置 `push` + `workflow_dispatch` 触发，没有定时任务。

## 内容结构

- `src/content/posts/` — 所有文章（Markdown + frontmatter）
- `src/content.config.ts` — Content Collection schema，章节与标签的受控词表在此定义
- `src/pages/` — 页面：首页、文章、时间线、章节、标签、关于
- `public/images/` — 文章配图，按文章分目录

## 内置的迁移脚本

一次性脚本放在单独的迁移工作区，不在本仓库内。
