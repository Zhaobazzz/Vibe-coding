<template>
  <div class="page geek-home">
    <header class="hero">
      <h1>Vibe Coding 101-by Hongqin</h1>
      <p class="order-hint">
        <span class="sym">①→⑦</span>
        建议学习顺序：Web 前端+后端、IDE 与 AI 编程工具模块。
      </p>
    </header>

    <section id="catalog-top" class="catalog" aria-labelledby="catalog-title">
      <div class="catalog-head">
        <h2 id="catalog-title">课程目录</h2>
      </div>
      <nav class="catalog-grid" aria-label="课程目录">
        <div
          v-for="c in catalogSections"
          :key="c.id"
          class="catalog-card"
          :style="{ '--cat': c.accent }"
        >
          <div class="cat-row">
            <GeekGlyph :name="c.glyph" class="cat-glyph" :style="{ '--glyph-color': c.accent }" />
            <div class="cat-main">
              <strong class="cat-title">{{ c.title }}</strong>
              <ul class="cat-lessons">
                <li v-for="m in c.items" :key="m.to">
                  <RouterLink :to="m.to" class="cat-link">{{ m.title }}</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>

    <div class="sections" aria-label="按分类展示的课程">
      <section
        v-for="c in catalogSections"
        :key="'sec-' + c.id"
        :id="c.id"
        class="cat-section"
      >
        <header class="section-bar">
          <GeekGlyph :name="c.glyph" class="sec-glyph" :style="{ '--glyph-color': c.accent }" />
          <div class="sec-text">
            <h3 class="sec-title">{{ c.title }}</h3>
            <p class="sec-sub">{{ c.tagline }}</p>
          </div>
        </header>
        <nav class="grid" :aria-label="c.title + ' 下的课程'">
          <RouterLink
            v-for="m in c.items"
            :key="m.to"
            :to="m.to"
            class="card"
            :style="{ '--accent': m.accent }"
          >
            <div class="card-top">
              <span class="order" :title="'第 ' + m.step + ' 节'">{{ m.stepSymbol }}</span>
              <span class="mark" :style="{ '--mark': m.markColor }">{{ m.mark }}</span>
            </div>
            <span class="icon">{{ m.icon }}</span>
            <h2>{{ m.title }}</h2>
            <p>{{ m.blurb }}</p>
            <span class="go">进入 →</span>
          </RouterLink>
        </nav>
      </section>
    </div>

    <footer class="foot">
      <p>技术栈：Vue 3 · TypeScript · Vue Router · Pinia（符合项目前端开发规范）</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import GeekGlyph from '@/components/GeekGlyph.vue'

const moduleList = [
  {
    step: 1,
    stepSymbol: '①',
    mark: '◇ 环境与流程',
    markColor: 'rgba(79, 172, 254, 0.35)',
    to: '/process',
    title: '一个产品的完整开发全景图',
    blurb: '先看需求到上线的全景图，再进环境与六条终端指令，把流程落到具体命令上。',
    icon: '🛰️',
    accent: '#38bdf8',
  },
  {
    step: 2,
    stepSymbol: '②',
    mark: '◎ 语言原理',
    markColor: 'rgba(74, 124, 89, 0.35)',
    to: '/language',
    title: '计算机是怎么听代码指挥的？',
    blurb: '从 0/1、汇编、高级语言到 AI Coding 的抽象阶梯。',
    icon: '📜',
    accent: '#4a7c59',
  },
  {
    step: 3,
    stepSymbol: '③',
    mark: '▸ 终端基础',
    markColor: 'rgba(45, 90, 39, 0.35)',
    to: '/terminal',
    title: '认识终端与 Shell',
    blurb: '终端窗口、Shell、命令拆解与内置/外部命令。',
    icon: '⌨️',
    accent: '#2d5a27',
  },
  {
    step: 4,
    stepSymbol: '④',
    mark: '☆ 前后端',
    markColor: 'rgba(99, 102, 241, 0.35)',
    to: '/frontend-backend',
    title: '前后端是怎么协作的',
    blurb: '餐厅与插座类比、三件套演示、模拟 API 与多语言后端写法。',
    icon: '🌐',
    accent: '#6366f1',
  },
  {
    step: 5,
    stepSymbol: '⑤',
    mark: '※ 备忘速查',
    markColor: 'rgba(212, 168, 74, 0.4)',
    to: '/fullstack-cheatsheet',
    title: '全栈上手速查',
    blurb: 'Q1～Q4：目录在哪、怎么启动、日志上哪看——一页备忘。',
    icon: '📒',
    accent: '#d4a84a',
  },
  {
    step: 6,
    stepSymbol: '⑥',
    mark: '◇ AI 协作',
    markColor: 'rgba(167, 139, 250, 0.35)',
    to: '/ai-ide',
    title: '以 Cursor 和 Coze 为例',
    blurb: '以 Cursor 和 Coze 对照：Ask/Agent、上下文与规则；含两屏截图示例，和本课 Vue 流程对齐。',
    icon: '🤖',
    accent: '#a78bfa',
  },
  {
    step: 7,
    stepSymbol: '⑦',
    mark: '◇ Cursor 主页',
    markColor: 'rgba(244, 114, 182, 0.4)',
    to: '/ide-practice',
    title: '用 Cursor 完成你的个人主页',
    blurb: '在 Cursor 中按五步做个人主页：可复制提示词、Stitch_prompt.md、浏览器精调与 Vue/React Bits 动效接线。',
    icon: '🧩',
    accent: '#ec4899',
  },
] as const

type ModuleItem = (typeof moduleList)[number]
const modules: ModuleItem[] = [...moduleList]

const catalogMeta = [
  {
    id: 'cat-mind',
    glyph: 'compass' as const,
    title: '编程入门与开发全景',
    tagline: '一个产品的完整开发全景图 · 计算机是怎么听代码指挥的？',
    accent: '#22c55e',
    steps: [1, 2],
  },
  {
    id: 'cat-tooling',
    glyph: 'wrench' as const,
    title: '认识终端与 Shell',
    tagline: '窗口、解析规则与内外置命令',
    accent: '#22d3ee',
    steps: [3],
  },
  {
    id: 'cat-frontend-backend',
    glyph: 'globe' as const,
    title: 'Web开发全景：前端 + 后端',
    tagline: '👉 前后端是怎么协作的',
    accent: '#a78bfa',
    steps: [4],
  },
  {
    id: 'cat-vibe-tools',
    glyph: 'sparkles' as const,
    title: 'IDE 与 AI 编程工具',
    tagline: '以 Cursor 和 Coze 为例 · 与本课站同一套流程',
    accent: '#c084fc',
    steps: [6],
  },
  {
    id: 'cat-ide-labs',
    glyph: 'layers' as const,
    title: 'Cursor 实战',
    tagline: '👉 脚手架、Stitch 原型与动效接线',
    accent: '#f472b6',
    steps: [7],
  },
  {
    id: 'cat-ref',
    glyph: 'book' as const,
    title: '备忘与速查',
    tagline: '目录 · 命令 · 日志',
    accent: '#eab308',
    steps: [5],
  },
] as const

const catalogSections = computed(() =>
  catalogMeta.map((c) => ({
    ...c,
    items: modules.filter((m) => (c.steps as readonly number[]).includes(m.step)),
  })),
)
</script>

<style scoped>
.geek-home {
  min-height: 100vh;
  padding: 2rem 1rem 3rem;
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
}
.hero {
  text-align: center;
  margin-bottom: 2.25rem;
}
h1 {
  margin: 0 0 0.35rem;
  font-family: var(--font-mono);
  font-size: clamp(1.65rem, 4.2vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  background-color: var(--space-dark-bg);
  color: #e0f2fe;
  text-shadow:
    0 0 40px rgba(56, 189, 248, 0.45),
    0 0 80px rgba(14, 165, 233, 0.2);
}
.order-hint {
  margin: 1.1rem auto 0;
  max-width: 34rem;
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.4rem 0.55rem;
  font-family: var(--font-mono);
}
.order-hint .sym {
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--accent-cyan);
  font-variant-numeric: tabular-nums;
}
.catalog {
  margin-bottom: 2.25rem;
  padding: 1.15rem 1.1rem 1.2rem;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(12px);
  border: 1px solid var(--geek-border);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.35),
    0 20px 50px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}
.catalog-head {
  text-align: center;
  margin-bottom: 1rem;
}
.catalog-head h2 {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #e2e8f0;
}
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
}
@media (max-width: 680px) {
  .catalog-grid {
    grid-template-columns: 1fr;
  }
}
.catalog-card {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.85rem 0.9rem;
  border-radius: 10px;
  border: 1px solid rgba(148, 163, 184, 0.12);
  background: linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95));
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.catalog-card:hover {
  border-color: color-mix(in srgb, var(--cat) 55%, transparent);
  box-shadow: 0 0 28px color-mix(in srgb, var(--cat) 22%, transparent);
  transform: translateY(-1px);
}
.catalog-card .cat-row {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
}
.cat-glyph,
.sec-glyph {
  flex-shrink: 0;
  margin-top: 0.1rem;
}
.cat-main {
  min-width: 0;
}
.cat-title {
  display: block;
  font-size: 0.92rem;
  font-family: var(--font-mono);
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 0.4rem;
  letter-spacing: 0.02em;
}
.cat-lessons {
  margin: 0;
  padding: 0;
  list-style: none;
}
.cat-lessons li {
  margin-bottom: 0.15rem;
}
.cat-link {
  font-size: 0.76rem;
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  text-decoration: none;
  border-bottom: 1px dashed rgba(34, 211, 238, 0.35);
  transition: color 0.15s ease;
}
.cat-link:hover {
  color: #a5f3fc;
  border-bottom-color: rgba(165, 243, 252, 0.6);
}
.sections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.cat-section {
  scroll-margin-top: 1rem;
}
.section-bar {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(34, 211, 238, 0.2);
}
.sec-text {
  flex: 1;
  min-width: 0;
}
.sec-title {
  margin: 0;
  font-size: 1.05rem;
  font-family: var(--font-mono);
  font-weight: 600;
  color: #f1f5f9;
  letter-spacing: 0.02em;
}
.sec-sub {
  margin: 0.25rem 0 0;
  font-size: 0.76rem;
  color: var(--muted);
  line-height: 1.45;
  font-family: var(--font-mono);
}
.grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
}
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.2rem 1.25rem;
  padding-top: 1rem;
  border-radius: 12px;
  background: rgba(17, 24, 39, 0.85);
  border: 1px solid rgba(51, 65, 85, 0.55);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  position: relative;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}
.card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.85rem;
  bottom: 0.85rem;
  width: 3px;
  border-radius: 0 3px 3px 0;
  background: var(--accent);
  opacity: 0.75;
  box-shadow: 0 0 12px color-mix(in srgb, var(--accent) 60%, transparent);
}
.card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--accent) 35%, rgba(51, 65, 85, 0.8));
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.5),
    0 0 32px color-mix(in srgb, var(--accent) 18%, transparent);
}
.card:hover::before {
  opacity: 1;
}
.card-top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}
.order {
  display: inline-grid;
  place-items: center;
  min-width: 2rem;
  height: 2rem;
  padding: 0 0.35rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 800;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  color: var(--accent);
  background: rgba(2, 6, 23, 0.65);
  border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
  box-shadow: 0 0 14px color-mix(in srgb, var(--accent) 25%, transparent);
}
.mark {
  font-size: 0.65rem;
  font-weight: 600;
  font-family: var(--font-mono);
  letter-spacing: 0.04em;
  color: #cbd5e1;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(71, 85, 105, 0.45);
  white-space: nowrap;
}
.card h2 {
  margin: 0.3rem 0 0.45rem;
  font-size: 1.02rem;
  font-family: var(--font-mono);
  font-weight: 600;
  color: #f8fafc;
  letter-spacing: -0.01em;
}
.card p {
  margin: 0;
  flex: 1;
  font-size: 0.84rem;
  color: var(--muted);
  line-height: 1.55;
}
.icon {
  font-size: 1.5rem;
  line-height: 1;
  filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.25));
  opacity: 0.92;
}
.go {
  margin-top: 0.85rem;
  font-size: 0.78rem;
  font-weight: 600;
  font-family: var(--font-mono);
  letter-spacing: 0.06em;
  color: var(--accent, var(--accent-mint));
  text-transform: uppercase;
}
.foot {
  margin-top: 2.5rem;
  text-align: center;
  font-size: 0.72rem;
  font-family: var(--font-mono);
  color: var(--muted);
  letter-spacing: 0.04em;
}
</style>
