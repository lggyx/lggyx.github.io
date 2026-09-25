/**
 * 标签 slug 工具。
 *
 * 为什么需要：标签词表里含中文（蓝桥杯 / 动态规划 / 图论 / 服务器 / 图床）。
 * GitHub Pages 对中文 URL 是"软 404"——HTTP 状态返回 200，页面内容却是
 * "Page not found"（实测 /tags/服务器/ 就是这样，2026-09-25）。
 * 所以标签路由不用中文原文，统一转成 ASCII slug。
 *
 * 做法：ASCII 标签小写化；中文标签用固定映射表（tagSlug 里的 READABLE）。
 * 映射表是**静态常量**，保证同一标签永远得到同一 slug——否则每次构建
 * 路由会变，外链漂移。
 */

// 中文标签 -> ASCII slug。新标签加中文时必须在这里补一行，
// 否则会落到 tagFromSlug 的兜底（slug 直接用中文，仍然不可靠）。
const READABLE: Record<string, string> = {
  蓝桥杯: 'lanqiao',
  动态规划: 'dynamic-programming',
  图论: 'graph-theory',
  服务器: 'server',
  图床: 'image-hosting',
  组合数学: 'combinatorics',
  递推: 'recurrence',
  搜索: 'search',
  差分: 'difference',
  贪心: 'greedy',
};

/** 标签 -> URL slug（ASCII）。 */
export function tagSlug(tag: string): string {
  if (READABLE[tag]) return READABLE[tag];
  // ASCII 标签：小写 + 去掉路径不友好字符
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** 反向：从 slug 找回原标签（用于页面标题显示中文原名）。 */
export function tagFromSlug(slug: string, allTags: string[]): string {
  return allTags.find((t) => tagSlug(t) === slug) ?? slug;
}
