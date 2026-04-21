<template>
  <div class="shell">
    <StarsBackground :count="100" />
    <div class="inner">
      <AppLessonNav dark label="IDE 与 AI 编程工具" />

      <header class="head">
        <h1>IDE 与 AI 编程：以 Cursor 和 Coze 为例</h1>
        <p class="sub">把「问清楚」和「改对地方」练成习惯</p>
      </header>

      <div class="lead">
        <p class="lead-title">IDE 是什么</p>
        <p>
          IDE（<span lang="en">Integrated Development Environment</span>）= <strong>集成开发环境</strong>。
        </p>
        <p class="lead-label">比如：</p>
        <ul class="lead-examples">
          <li>VS Code</li>
          <li>IntelliJ</li>
          <li>PyCharm</li>
        </ul>
        <p>
          它是用来<strong>写代码、运行代码、调试代码</strong>的工具，可以理解为程序员炒菜用的<strong>灶台</strong>。
        </p>
        <p><strong>AI IDE</strong> = 带有人工智能助手的开发工具（IDE）。</p>
        <p>
          也就是：在传统代码编辑器里，加了一个<strong>会写代码、会解释代码、会帮你开发</strong>的 AI——把聊天、补全、多文件编辑和终端绑在同一套界面里。下面仍以
          <strong>Cursor</strong>（桌面）与<strong>扣子编程</strong>（网页）为例整理；其中 Vue 3 + Vite 的目录与命令，和本课站一致。
        </p>
      </div>

      <section class="example" aria-labelledby="example-cursor">
        <h2 id="example-cursor" class="example-title">例子一：Cursor——界面分区与用途</h2>
        <p class="example-lead">
          下面以真实项目窗口为例，对照五个常用区域：中间写代码、左侧找文件、右侧跟 AI 对话、底部跑命令；命令面板则用来快速打开任意功能。
        </p>
        <figure class="figure">
          <img
            class="example-shot"
            :src="cursorLayoutSrc"
            width="1024"
            height="640"
            loading="lazy"
            decoding="async"
            alt="Cursor IDE：左侧文件树、中间编辑器打开 code.html、底部终端、右侧 Agent 对话与任务摘要。"
          />
          <figcaption>典型布局：编辑区居中，文件树与 AI 面板分居两侧，终端贴在编辑区下方。</figcaption>
        </figure>
        <div class="region-wrap" role="region" aria-label="界面区域说明">
          <table class="region-table">
            <thead>
              <tr>
                <th scope="col">每个区域</th>
                <th scope="col">用途</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in layoutRegions" :key="row.area">
                <th scope="row">{{ row.area }}</th>
                <td>{{ row.purpose }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="example" aria-labelledby="example-coze">
        <h2 id="example-coze" class="example-title">例子二：扣子（Coze）——编程环境 + 工作流低代码</h2>

        <h3 class="subhx">2.1 扣子编程：对话、终端与预览</h3>
        <p class="example-lead">
          在浏览器里完成：左侧用自然语言描述需求，AI 会在云端执行初始化（例如终端里出现
          <span class="mono">coze init --template expo</span>），并读说明、反问功能与视觉偏好；右侧是 App
          预览区（开发中占位、二维码真机预览）。底部常有终端 / 控制台 / 输出切换，留意资源占用提示。与桌面
          Cursor 布局不同，仍是「说清楚 → 看执行 → 验界面」。
        </p>

        <h3 class="subhx">2.2 工作流：低代码画布怎么用</h3>
        <p class="example-lead">
          扣子里的<strong>工作流</strong>是典型的低代码编排：在画布上拖节点、连线，把「开始 / 结束、大模型、插件或
          HTTP、条件分支」串成一条可重复执行的业务链路，再<strong>试运行</strong>校验，最后<strong>发布</strong>给智能体或开放
          API。官方说明见
          <a
            class="ext"
            href="https://www.coze.cn/open/docs/guides/use_workflow"
            target="_blank"
            rel="noopener noreferrer"
            >使用工作流</a>（扣子开放文档）。下图为<strong>扣子工作流画布</strong>示例截图；节点与菜单以线上产品为准。
        </p>
        <figure class="figure coze-flow-figure">
          <img
            class="example-shot coze-flow-diagram"
            :src="cozeWorkflowCanvasSrc"
            width="1024"
            height="362"
            loading="lazy"
            decoding="async"
            alt="扣子工作流画布：开始、大模型（豆包）、意图识别、HTTP 请求与结束等节点在网格画布上连线编排。"
          />
          <figcaption>
            示例链路：开始（入参）→ 大模型 → 意图识别 → HTTP 请求 → 结束；在画布上拖节点、连箭头即可搭出同类流程。
          </figcaption>
        </figure>
        <ol class="coze-steps">
          <li><strong>新建工作流</strong>，进入画布编辑器。</li>
          <li>从节点列表拖入<strong>开始、大模型、意图识别、HTTP 请求、结束</strong>等，按业务顺序摆好。</li>
          <li>用<strong>连线</strong>把上游节点的输出字段接到下游输入，必要时定义工作流级变量做中转。</li>
          <li>逐个节点打开配置：提示词、模型参数、插件入参与分支条件。</li>
          <li>点<strong>试运行</strong>看整图是否跑通，再<strong>发布</strong>，供智能体引用或对外暴露接口。</li>
        </ol>
        <p class="coze-refs">
          教程参考（网上公开资料，与产品迭代可能不完全一致）：
          <a
            class="ext"
            href="https://www.coze.cn/open/docs/guides/use_workflow"
            target="_blank"
            rel="noopener noreferrer"
            >扣子官方 · 使用工作流</a>
          ·
          <a
            class="ext"
            href="https://www.53ai.com/news/coze/2024090893786.html"
            target="_blank"
            rel="noopener noreferrer"
            >53AI · 工作流搭建入门（图文）</a>
          ·
          <a
            class="ext"
            href="https://blog.csdn.net/m0_53539063/article/details/147259882"
            target="_blank"
            rel="noopener noreferrer"
            >CSDN · 扣子工作流小白教程</a>
        </p>
      </section>

      <div class="grid">
        <article v-for="t in topics" :key="t.title" class="card">
          <span class="ico" aria-hidden="true">{{ t.icon }}</span>
          <h2>{{ t.title }}</h2>
          <p class="card-body">{{ t.body }}</p>
          <ul v-if="t.bullets?.length" class="bullets">
            <li v-for="b in t.bullets" :key="b">{{ b }}</li>
          </ul>
        </article>
      </div>

      <aside class="tip" aria-label="提示">
        <strong>验收习惯：</strong>合并或保存前看一遍
        <span class="mono">diff</span>，本地跑一遍
        <span class="mono">npm run dev</span> / 测试；AI 改动的文件应和任务一一对应，避免「顺手重构」。
      </aside>

      <nav class="page-nav">
        <RouterLink to="/fullstack-cheatsheet" class="nav-btn ghost">← 上一节：全栈上手速查</RouterLink>
        <div class="page-nav-right">
          <RouterLink to="/ide-practice" class="nav-btn ghost">下一节：用 Cursor 完成你的个人主页 →</RouterLink>
          <RouterLink to="/" class="nav-btn primary">回课程首页 →</RouterLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import StarsBackground from '@/components/StarsBackground.vue'
import AppLessonNav from '@/components/AppLessonNav.vue'

const cursorLayoutSrc = `${import.meta.env.BASE_URL}images/cursor-ide-layout.png`
const cozeWorkflowCanvasSrc = `${import.meta.env.BASE_URL}images/coze-workflow-canvas.png`

const layoutRegions = [
  { area: '编辑器', purpose: '您的主要编码区域' },
  { area: '文件浏览器', purpose: '导航项目文件（左侧边栏）' },
  { area: 'AI聊天面板', purpose: '与 AI 对话（右侧边栏）' },
  { area: '终端', purpose: '运行命令（底部）' },
  {
    area: '命令面板',
    purpose: '访问所有功能（Cmd/Ctrl + Shift + P）',
  },
] as const

const topics = [
  {
    icon: '💬',
    title: '先选模式：问一句 vs 改一仓',
    body:
      '只读查代码、解释报错，用对话（Ask）即可；要让工具改多个文件、跑终端、跟完整个任务，用 Agent / 自动执行模式更合适。',
    bullets: [
      '小问号 → 聊天；要落地改动 → Agent（名称因版本略有不同，认准「能改仓库」的那一档）。',
      '扣子编程里可打开「自动」类模式，让 AI 在云端跑初始化与改项目；界面以左侧对话、右侧预览为常见布局。',
    ],
  },
  {
    icon: '📎',
    title: '用 @ 把上下文喂够',
    body:
      '模型看不到你脑子里想的「那个文件」。桌面端常用 @ 引用文件、文件夹或终端输出；网页端则多用附件、选中片段或技能入口把上下文带上。',
    bullets: [
      '改某个 Vue 页：@ 该 .vue + 相关 composable / store。',
      '查报错：@ 终端里那段日志或截图中的栈。',
    ],
  },
  {
    icon: '📐',
    title: '项目规则：写一次、每次都遵守',
    body:
      '把团队约定放进仓库里的规则文件，IDE 会在每次任务里带上，减少风格漂移和无关改动。',
    bullets: [
      '本类项目常见：`.cursor/rules/` 下的说明、或根目录 `AGENTS.md`（按你实际使用的工具为准）。',
      '写明：技术栈、目录习惯、禁止事项（例如「不要改无关文件」）。',
      '扣子等产品里往往有项目说明、技能 / 插件库等配置，作用类似「团队约定」，以各产品文档为准。',
    ],
  },
  {
    icon: '🎯',
    title: '把需求写成「可交付」',
    body:
      '一句话需求容易得到含糊实现。尽量包含目标、边界和验收方式。',
    bullets: [
      '例：「只在 `HomePage.vue` 增加一节文案，不要动路由；标题用 h2。」',
      '需要查全库时再说「可以搜索」；否则默认限定在当前功能相关路径。',
    ],
  },
  {
    icon: '🛡️',
    title: '终端与权限：默认谨慎',
    body:
      '涉及安装依赖、访问网络、git 写操作的步骤，工具往往会询问或走沙箱——先看再批准。',
    bullets: [
      '网络/全磁盘权限只在确实需要时打开。',
      '敏感环境变量、密钥不要贴进聊天；用占位符说明即可。',
    ],
  },
  {
    icon: '⚡',
    title: '和本前端项目对齐',
    body:
      '当前课站是 Vue 3 + TypeScript + Vue Router + Vite。日常开发可记住两条路径：',
    bullets: [
      '装依赖 / 跑开发服：进入 `frontend/`，`npm install` → `npm run dev`。',
      '改页面：路由在 `src/router/index.ts`，页面在 `src/pages/`。',
    ],
  },
] as const
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
  max-width: 980px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 2rem;
}
.head {
  margin-bottom: 1rem;
}
.head h1 {
  margin: 0 0 0.35rem;
  font-size: clamp(1.25rem, 3vw, 1.65rem);
  font-weight: 700;
}
.sub {
  margin: 0;
  color: #8b95a5;
  font-size: 0.9rem;
}
.lead {
  margin: 0 0 1.35rem;
  max-width: 52rem;
  font-size: 0.92rem;
  line-height: 1.65;
  color: #b8c8da;
}
.lead > p {
  margin: 0;
}
.lead > p + p,
.lead > ul + p,
.lead > p + ul {
  margin-top: 0.55rem;
}
.lead-title {
  margin: 0 0 0.35rem !important;
  font-size: 1rem;
  font-weight: 700;
  color: #e2e8f0;
  letter-spacing: 0.02em;
}
.lead-label {
  margin-top: 0.65rem !important;
  margin-bottom: 0.25rem !important;
  color: #94a3b8;
  font-size: 0.88rem;
}
.lead-examples {
  margin: 0;
  padding-left: 1.2rem;
  color: #cbd5e1;
  font-size: 0.9rem;
}
.lead-examples li {
  margin-bottom: 0.2rem;
}
.lead-examples li:last-child {
  margin-bottom: 0;
}
.example {
  margin: 0 0 1.5rem;
  padding: 1.1rem 1.15rem 1.15rem;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(34, 211, 238, 0.14);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
}
.example-title {
  margin: 0 0 0.4rem;
  font-size: 1.02rem;
  font-weight: 700;
  color: #e0f2fe;
}
.example-lead {
  margin: 0 0 0.85rem;
  font-size: 0.86rem;
  line-height: 1.6;
  color: #94a3b8;
  max-width: 52rem;
}
.example-lead .ext {
  color: #7dd3fc;
  text-decoration: underline;
  text-underline-offset: 0.15em;
}
.example-lead .ext:hover {
  color: #bae6fd;
}
.subhx {
  margin: 1.25rem 0 0.45rem;
  font-size: 0.92rem;
  font-weight: 700;
  color: #cbd5e1;
  letter-spacing: 0.02em;
}
.example .subhx:first-of-type {
  margin-top: 0.35rem;
}
.coze-flow-figure {
  margin-top: 0.75rem;
}
.coze-flow-diagram {
  width: 100%;
  max-width: min(100%, 1024px);
  height: auto;
  display: block;
  border-radius: 10px;
  border: 1px solid rgba(51, 65, 85, 0.65);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}
.coze-steps {
  margin: 0.85rem 0 0;
  padding-left: 1.25rem;
  font-size: 0.84rem;
  line-height: 1.65;
  color: #aeb9c9;
}
.coze-steps li {
  margin-bottom: 0.4rem;
}
.coze-steps li:last-child {
  margin-bottom: 0;
}
.coze-refs {
  margin: 1rem 0 0;
  font-size: 0.8rem;
  line-height: 1.65;
  color: #7c8a9e;
}
.coze-refs .ext {
  color: #7dd3fc;
  text-decoration: underline;
  text-underline-offset: 0.12em;
}
.coze-refs .ext:hover {
  color: #bae6fd;
}
.figure {
  margin: 0;
}
.example-shot {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: 1px solid rgba(51, 65, 85, 0.65);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  vertical-align: middle;
}
.figure figcaption {
  margin-top: 0.65rem;
  font-size: 0.8rem;
  line-height: 1.55;
  color: #7c8a9e;
}
.region-wrap {
  margin-top: 1rem;
}
.region-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.84rem;
  line-height: 1.5;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(51, 65, 85, 0.75);
  background: rgba(15, 23, 42, 0.65);
}
.region-table th,
.region-table td {
  padding: 0.55rem 0.75rem;
  text-align: left;
  border-bottom: 1px solid rgba(51, 65, 85, 0.55);
  vertical-align: top;
}
.region-table thead th {
  background: rgba(30, 41, 59, 0.9);
  color: #cbd5e1;
  font-weight: 600;
  font-size: 0.78rem;
  letter-spacing: 0.02em;
}
.region-table tbody th[scope='row'] {
  width: 34%;
  max-width: 12rem;
  color: #e2e8f0;
  font-weight: 600;
}
.region-table tbody td {
  color: #94a3b8;
}
.region-table tbody tr:last-child th,
.region-table tbody tr:last-child td {
  border-bottom: none;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
@media (max-width: 720px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
.card {
  padding: 1rem 1.1rem 1.05rem;
  border-radius: 14px;
  background: rgba(26, 29, 35, 0.85);
  border: 1px solid rgba(167, 139, 250, 0.22);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
}
.card .ico {
  display: block;
  font-size: 1.35rem;
  margin-bottom: 0.35rem;
}
.card h2 {
  margin: 0 0 0.45rem;
  font-size: 0.98rem;
  font-weight: 700;
  color: #e9e4ff;
  letter-spacing: 0.01em;
}
.card-body {
  margin: 0 0 0.5rem;
  font-size: 0.84rem;
  line-height: 1.6;
  color: #aeb9c9;
}
.bullets {
  margin: 0;
  padding-left: 1.15rem;
  font-size: 0.8rem;
  line-height: 1.55;
  color: #94a3b8;
}
.bullets li {
  margin-bottom: 0.35rem;
}
.bullets li:last-child {
  margin-bottom: 0;
}
.tip {
  margin-top: 1.35rem;
  padding: 1rem 1.15rem;
  border-radius: 12px;
  background: rgba(167, 139, 250, 0.08);
  border: 1px solid rgba(167, 139, 250, 0.28);
  color: #c4b5fd;
  font-size: 0.86rem;
  line-height: 1.6;
}
.tip strong {
  color: #ddd6fe;
}
.mono {
  font-family: var(--font-mono);
  font-size: 0.82em;
  color: #a5b4fc;
}
.page-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.page-nav-right {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: flex-end;
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
  border-color: rgba(167, 139, 250, 0.5);
  color: #fff;
}
.nav-btn.primary {
  background: linear-gradient(135deg, #a78bfa, #7c3aed);
  color: #fff;
  box-shadow: 0 4px 18px rgba(124, 58, 237, 0.35);
}
.nav-btn.primary:hover {
  filter: brightness(1.06);
}
</style>
