<template>
  <div class="shell">
    <StarsBackground />
    <div class="inner">
      <AppLessonNav dark label="开发流程与环境" />

      <header class="head">
        <h1>🗺️ 完整开发流程全景图</h1>
        <p class="sub">
          把握住这个主脉络，加上一些开发的小细节，大家就都能开发。
        </p>
      </header>

      <div class="flow" role="list">
        <template v-for="(s, i) in steps" :key="s.t">
          <div class="step" role="listitem">
            <span class="emoji">{{ s.icon }}</span>
            <span class="lab">{{ s.t }}</span>
          </div>
          <span v-if="i < steps.length - 1" class="arrow" aria-hidden="true">→</span>
        </template>
      </div>

      <div class="cols">
        <section class="card be">
          <h2><span class="ico">⚙️</span> 后端开发流程</h2>
          <div class="inner-flow">
            <span v-for="(x, j) in devLoop" :key="'b' + x">
              {{ x }}<span v-if="j < devLoop.length - 1" class="mini">→</span>
            </span>
          </div>
          <p class="fw-title">常用后端框架：</p>
          <div class="pills">
            <span v-for="p in backendFw" :key="p.n" class="pill">
              <strong>{{ p.n }}</strong><small>{{ p.d }}</small>
            </span>
          </div>
        </section>

        <section class="card fe">
          <h2><span class="ico">🎨</span> 前端开发流程</h2>
          <div class="inner-flow">
            <span v-for="(x, j) in devLoop" :key="'f' + x">
              {{ x }}<span v-if="j < devLoop.length - 1" class="mini">→</span>
            </span>
          </div>
          <p class="fw-title">常用前端框架：</p>
          <div class="pills">
            <span v-for="p in frontendFw" :key="p.n" class="pill">
              <strong>{{ p.n }}</strong><small>{{ p.d }}</small>
            </span>
          </div>
        </section>
      </div>

      <section class="cognition">
        <h3>💡 核心认知</h3>
        <p>不管后端还是前端，开发的套路都是一样的：</p>
        <div class="simple-flow">
          <span v-for="(x, i) in simple" :key="x">
            {{ x }}<span v-if="i < simple.length - 1" class="mini">→</span>
          </span>
        </div>
      </section>

      <section id="environment-six" class="env-section" aria-labelledby="env-title">
        <header class="env-head">
          <h2 id="env-title">搭环境：六句指令背后的思路</h2>
          <p class="env-sub">FastAPI 后端 + Node 前端（示例栈）</p>
        </header>

        <p class="env-think-title">这六句指令背后其实是一种思路：</p>
        <div class="env-think-row">
          <div class="env-tb env-orange">
            <span class="env-n">1</span>
            <strong>写代码</strong>
            <span class="env-hint">编写业务逻辑</span>
          </div>
          <span class="env-ar" aria-hidden="true">→</span>
          <div class="env-tb env-blue">
            <span class="env-n">2</span>
            <strong>准备环境与依赖</strong>
            <span class="env-hint">在终端执行指令</span>
          </div>
          <span class="env-ar" aria-hidden="true">→</span>
          <div class="env-tb env-green">
            <span class="env-n">3</span>
            <strong>启动服务</strong>
            <span class="env-hint">在终端执行指令</span>
          </div>
        </div>

        <p class="env-bulb">
          💡 <strong>为什么要用终端？</strong>代码只是静态文本，终端是你和电脑沟通的桥梁。这 6
          句指令就是让电脑为你分配资源、下载工具，并最终把代码跑起来的「遥控器」。
        </p>

        <div class="env-grid">
          <CommandCard v-for="c in commands" :key="c.step" v-bind="c" />
        </div>
      </section>

      <nav class="page-nav">
        <RouterLink to="/" class="nav-btn ghost">← 课程首页</RouterLink>
        <RouterLink to="/language" class="nav-btn primary">下一节：语言演进 →</RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import StarsBackground from '@/components/StarsBackground.vue'
import AppLessonNav from '@/components/AppLessonNav.vue'
import CommandCard from '@/components/CommandCard.vue'

const steps = [
  { icon: '📋', t: '需求确认' },
  { icon: '📝', t: 'PRD 产出' },
  { icon: '⚙️', t: '后端开发' },
  { icon: '🧪', t: '后端测试' },
  { icon: '🎨', t: '前端开发' },
  { icon: '🔗', t: '前后端联调' },
  { icon: '💫', t: '修 BUG' },
]

const devLoop = ['技术选型', '开发代码', '准备环境', '安装依赖', '启动服务', '测试']

const backendFw = [
  { n: 'FastAPI', d: '推荐 · 简洁高效' },
  { n: 'Flask', d: '轻量灵活' },
  { n: 'Django', d: '全家桶 · 偏重' },
  { n: 'Express.js', d: 'Node 生态' },
]

const frontendFw = [
  { n: 'Vue', d: '推荐 · 易上手' },
  { n: 'React', d: '生态最强' },
  { n: 'HTML/CSS/JS', d: '原生' },
  { n: 'Svelte', d: '新锐 · 简单' },
]

const simple = ['选型', '写代码', '准备环境', '装依赖', '启动', '测试']

const commands = [
  {
    icon: '🐍',
    title: '创建虚拟环境',
    step: 1,
    command: 'python -m venv venv',
    description: '为项目准备一间独立的「小房间」，避免全局包冲突。',
    when: '新开后端项目时执行一次即可。',
  },
  {
    icon: '🚪',
    title: '激活虚拟环境',
    step: 2,
    command: 'source ./venv/bin/activate',
    description: '进入这间「小房间」，之后的 pip 都装在这里。',
    when: '每次新开终端要做后端开发时。',
  },
  {
    icon: '📦',
    title: '安装后端依赖',
    step: 3,
    command: 'pip install -r requirements.txt',
    description: '按清单安装 Python 三方库。',
    when: '首次拉代码、或 requirements 有更新时。',
  },
  {
    icon: '⚡',
    title: '启动后端服务',
    step: 4,
    command: 'uvicorn main:app --reload',
    description: '启动 ASGI 服务，开始接收 HTTP 请求。',
    when: '要本地调试 API、或给前端联调时。',
  },
  {
    icon: '📲',
    title: '安装前端依赖',
    step: 5,
    command: 'npm install',
    description: '安装 package.json 中的前端依赖。',
    when: '首次进入前端目录、或依赖变更后。',
  },
  {
    icon: '🚀',
    title: '启动前端服务',
    step: 6,
    command: 'npm run dev',
    description: '启动开发服务器，在浏览器里预览界面。',
    when: '要预览 UI、热更新开发时。',
  },
]
</script>

<style scoped>
.shell {
  position: relative;
  min-height: 100vh;
  background: var(--space-dark-bg);
  color: #e8ecf1;
  overflow: hidden;
}
.inner {
  position: relative;
  z-index: 1;
  max-width: 1080px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 2rem;
}
.head {
  text-align: center;
  margin-bottom: 1.75rem;
}
.head h1 {
  margin: 0 0 0.5rem;
  font-family: var(--font-serif);
  font-size: clamp(1.35rem, 3.5vw, 1.85rem);
  color: var(--accent-gold);
  font-weight: 700;
}
.sub {
  margin: 0;
  color: #a8b4c4;
  font-size: 0.95rem;
  line-height: 1.6;
}
.flow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.35rem 0.25rem;
  margin-bottom: 2rem;
}
.step {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.65rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.78rem;
}
.emoji {
  font-size: 1rem;
}
.arrow {
  color: #5a6575;
  font-size: 0.85rem;
  padding: 0 0.15rem;
}
.cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
@media (max-width: 820px) {
  .cols {
    grid-template-columns: 1fr;
  }
}
.card {
  border-radius: 18px;
  padding: 1.25rem 1.35rem;
  background: var(--space-card);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}
.card.be {
  border-left: 3px solid var(--accent-mint);
  box-shadow:
    0 0 40px rgba(66, 211, 146, 0.08),
    0 20px 50px rgba(0, 0, 0, 0.35);
}
.card.fe {
  border-left: 3px solid var(--accent-cyan);
  box-shadow:
    0 0 40px rgba(79, 172, 254, 0.08),
    0 20px 50px rgba(0, 0, 0, 0.35);
}
.card h2 {
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.05rem;
}
.card.be h2 {
  color: var(--accent-mint);
}
.card.fe h2 {
  color: var(--accent-cyan);
}
.inner-flow {
  font-size: 0.82rem;
  color: #b8c2ce;
  line-height: 1.8;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
}
.mini {
  color: #5a6575;
  margin: 0 0.2rem;
}
.fw-title {
  margin: 0 0 0.5rem;
  font-size: 0.8rem;
  color: #8b95a5;
}
.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.pill {
  display: flex;
  flex-direction: column;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(66, 211, 146, 0.35);
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.2);
}
.card.fe .pill {
  border-color: rgba(79, 172, 254, 0.35);
}
.pill strong {
  color: #e8ecf1;
}
.pill small {
  color: #8b95a5;
  margin-top: 0.15rem;
}
.cognition {
  margin-top: 2rem;
  text-align: center;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(232, 197, 71, 0.25);
  background: rgba(255, 255, 255, 0.03);
}
.cognition h3 {
  margin: 0 0 0.5rem;
  color: var(--accent-gold);
  font-size: 1.1rem;
}
.cognition p {
  margin: 0 0 0.75rem;
  color: #a8b4c4;
  font-size: 0.92rem;
}
.simple-flow {
  font-size: 0.95rem;
  color: #dce2ea;
  font-weight: 500;
}
.env-section {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  scroll-margin-top: 1rem;
}
.env-head {
  margin-bottom: 1.5rem;
}
.env-head h2 {
  margin: 0 0 0.35rem;
  font-size: clamp(1.15rem, 2.8vw, 1.5rem);
  font-weight: 700;
  color: var(--accent-gold);
  font-family: var(--font-serif);
}
.env-sub {
  margin: 0;
  color: #8b95a5;
  font-size: 0.9rem;
}
.env-think-title {
  text-align: center;
  color: #c8d0da;
  font-size: 0.95rem;
  margin: 0 0 1rem;
}
.env-think-row {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}
.env-tb {
  flex: 1 1 160px;
  max-width: 220px;
  padding: 0.85rem 1rem;
  border-radius: 14px;
  background: rgba(26, 29, 35, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.env-orange {
  border-color: rgba(249, 115, 22, 0.45);
}
.env-blue {
  border-color: rgba(59, 130, 246, 0.45);
}
.env-green {
  border-color: rgba(34, 197, 94, 0.45);
}
.env-n {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--accent-gold);
}
.env-tb strong {
  font-size: 0.88rem;
}
.env-hint {
  font-size: 0.75rem;
  color: #8b95a5;
}
.env-ar {
  align-self: center;
  color: #5a6575;
  font-size: 1.1rem;
}
.env-bulb {
  margin: 0 0 1.75rem;
  padding: 1rem 1.15rem;
  border-radius: 12px;
  background: rgba(79, 172, 254, 0.08);
  border: 1px solid rgba(79, 172, 254, 0.2);
  color: #b8c8da;
  font-size: 0.88rem;
  line-height: 1.65;
}
.env-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
@media (max-width: 720px) {
  .env-grid {
    grid-template-columns: 1fr;
  }
}
.page-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.nav-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
}
.nav-btn.ghost {
  border-color: rgba(255, 255, 255, 0.2);
  color: #c8d0da;
}
.nav-btn.ghost:hover {
  border-color: rgba(66, 211, 146, 0.45);
  color: #fff;
}
.nav-btn.primary {
  background: linear-gradient(135deg, #42d392, #2aa876);
  color: #0f1419;
  box-shadow: 0 4px 18px rgba(66, 211, 146, 0.35);
}
.nav-btn.primary:hover {
  filter: brightness(1.06);
}
</style>
