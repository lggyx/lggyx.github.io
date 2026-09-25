// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 站点地址：部署到 GitHub Pages 时需要
  site: 'https://lggyx.github.io',

  markdown: {
    // Shiki 语法高亮（Astro 内置，构建期完成，运行时零成本）
    // 双主题：跟随系统的明暗切换
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: false,
    },
  },
});
