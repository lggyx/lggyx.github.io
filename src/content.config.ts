import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 章节受控词表。
 *
 * 用「能力域」命名而非具体技术名——WinForm/Asp.Net 这类名字是过时技术标签，
 * 放导航上等于宣称自己还在用旧栈。
 */
const CHAPTERS = [
  'algorithms',  // 算法与竞赛
  'python',      // Python
  'frontend',    // 前端
  'desktop',     // 桌面开发
  'infra',       // 基础设施
  'media',       // 音视频
  'projects',    // 项目记录
  'archive',     // 归档（不进主导航）
] as const;

const CHAPTER_META: Record<string, { label: string; desc: string }> = {
  algorithms: { label: '算法与竞赛', desc: '蓝桥杯备赛：知识点、真题与模板' },
  python:     { label: 'Python',      desc: '语言基础与框架入门' },
  frontend:   { label: '前端',        desc: 'JavaScript 与 Vue' },
  desktop:    { label: '桌面开发',     desc: 'C# / WinForm 实践' },
  infra:      { label: '基础设施',     desc: '服务器、数据库与工具链' },
  media:      { label: '音视频',       desc: 'WebRTC 等实时通信' },
  projects:   { label: '项目记录',     desc: '个人项目的开发过程' },
  archive:    { label: '归档',        desc: '已过时但有留存价值的内容' },
};

export const chapters = CHAPTERS;
export const chapterMeta = CHAPTER_META;

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    // 发布日期：迁移时从旧站 URL 路径 YYYY/MM/DD/slug 还原，保真
    pubDate: z.coerce.date(),
    // 更新时间，可选
    updatedDate: z.coerce.date().optional(),
    chapter: z.enum(CHAPTERS),
    // 每篇 1-3 个标签，必须来自受控词表（frontmatter 里写错的会被构建拦住）
    tags: z.array(z.string()).min(1).max(3),
    // 旧文标记：早于 2025-01 的文章。模板据此渲染「2024 年旧文」徽章。
    // 写成字段而非写死在正文，是为了以后改判定标准只改一处。
    legacy: z.boolean().default(false),
    description: z.string().optional(),
    cover: image().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
