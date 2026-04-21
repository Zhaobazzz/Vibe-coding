<template>
  <div class="shell">
    <StarsBackground :count="100" />
    <div class="inner">
      <AppLessonNav dark label="用 Cursor 完成你的个人主页" />

      <header class="head">
        <h1>用 Cursor 完成你的个人主页</h1>
        <p class="sub">脚手架 → Stitch → 精调 → 动效 · 五步与可复制提示词</p>
      </header>

      <p class="lead">
        每一步下面的灰框均可<strong>一键复制</strong>到 Cursor。英文成稿建议落在仓库里的
        <code class="file-tag">frontend/Stitch_prompt.md</code> 再交给 Stitch。
      </p>

      <h2 class="deck-title">Vibe coding 个人网站构建</h2>

      <ol class="steps">
        <li class="step">
          <h3 class="step-title">第一步：新建项目框架</h3>
          <CopyablePrompt label="Markdown / 提示词" :text="promptReactFrame" />
        </li>

        <li class="step">
          <h3 class="step-title">第二步：构思网页大致内容</h3>
          <p class="step-body">
            用脑图或文档整理「个人网站」要呈现的信息与结构：整体信息、页面结构、导航与跳转、视觉风格、配色方案、交互效果等；再细化到首页、关于、作品、联系等栏目与文案要点。
          </p>
          <figure class="step-fig">
            <img
              class="step-img"
              :src="mindmapSrc"
              width="972"
              height="1024"
              loading="lazy"
              decoding="async"
              alt="个人网站构建脑图：整体信息、页面结构、导航与跳转、视觉风格、配色方案、交互效果等分支。"
            />
            <figcaption>参考结构：可按你的站点增删节点，再交给第三步写 Stitch 提示词</figcaption>
          </figure>
        </li>

        <li class="step">
          <h3 class="step-title">第三步：让 Cursor 编写 Stitch 提示词</h3>
          <p class="step-body">
            把第二步的字段交给 Cursor，生成英文提示词并写入 <code class="file-tag">Stitch_prompt.md</code>，用于 Stitch 出原型；原型中不要带人物头像等图片。
          </p>
          <CopyablePrompt label="Markdown / 提示词" :text="promptStitchZh" />
          <CopyablePrompt label="流程说明（可复制）" :text="promptStitchPipeline" />
        </li>

        <li class="step">
          <h3 class="step-title">第四步：精调细节方法论</h3>
          <CopyablePrompt label="Markdown / 提示词" :text="promptOpenBrowser" />
          <p class="step-body muted">
            在 Cursor 中用 <strong>Open Browser</strong>（或内置简单浏览器）打开本地页，地址与终端输出的
            <span class="mono-inline">Local: http://localhost:5173</span> 保持一致；对照 Stitch 原型逐项改间距、字号与文案。
          </p>
          <CopyablePrompt label="修正细节（可复制）" :text="promptNlEdit" />
        </li>

        <li class="step">
          <h3 class="step-title">第五步：动效引入</h3>
          <p class="step-body">
            到 <strong>Vue Bits</strong> 或 <strong>React Bits</strong>（与第一步框架一致）复制组件 <strong>Code</strong> 到
            <code class="file-tag">Components</code> / <code class="file-tag">components</code> 文件夹，再复制文档里的
            <strong>Usage</strong>，用下面提示词让 Cursor 只接线、不改源文件：
          </p>
          <CopyablePrompt label="Usage 代码段引入提示词" :text="promptMotionUsage" />
        </li>
      </ol>

      <aside class="tip" aria-label="提示">
        <strong>提示：</strong>第三步生成的英文全文可覆盖或合并进 <code class="file-tag">Stitch_prompt.md</code>；动效源文件请勿手改，便于日后单独升级。
      </aside>

      <nav class="page-nav">
        <RouterLink to="/ai-ide" class="nav-btn ghost">← 上一节：以 Cursor 和 Coze 为例</RouterLink>
        <RouterLink to="/" class="nav-btn primary">回课程首页 →</RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import StarsBackground from '@/components/StarsBackground.vue'
import AppLessonNav from '@/components/AppLessonNav.vue'
import CopyablePrompt from '@/components/CopyablePrompt.vue'

const mindmapSrc = `${import.meta.env.BASE_URL}images/personal-site-mindmap.png`

const promptReactFrame =
  '在当前项目下构建一个网页的前端 React 框架（先不要填充代码，只是构建框架）'

const promptStitchZh =
  '帮我根据这张图片出一版英文提示词保存在Stitch_prompt.md 文件中，用于喂给stitch,根据以上的字段内容生成个人网站的原型图，原型图中不需要带图片（人物头像等），参考风格：<参考风格从Designprompts中获取：https://www.designprompts.dev/>'

const promptStitchPipeline = 'Cursor 产出的提示词提供给 Stitch，Stitch 产出原型图'

const promptOpenBrowser =
  '在 Cursor 中打开浏览器查看前端网页（URL参照终端输出：Local: http://localhost:5173）'

const promptNlEdit = '选中组件之后可以自然语言修改组件，浏览器同理。'

const promptMotionUsage = `我要为首页添加一个动效，这个动效的文件我已经放在了components 文件夹下，分别是<组件名称>.jsx 和 <组件名称>.css，你不要修改这两个文件，请帮我把这个动效应用到我的项目中，使用的代码为：

<组件的 Usage>`
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
  max-width: 720px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 2rem;
}
.head {
  margin-bottom: 1rem;
}
.head h1 {
  margin: 0 0 0.35rem;
  font-size: clamp(1.15rem, 2.8vw, 1.55rem);
  font-weight: 700;
}
.sub {
  margin: 0;
  color: #8b95a5;
  font-size: 0.88rem;
}
.lead {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  line-height: 1.65;
  color: #b8c8da;
}
.deck-title {
  margin: 0 0 1rem;
  font-size: 1.08rem;
  font-weight: 700;
  color: #fce7f3;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(244, 114, 182, 0.35);
}
.steps {
  margin: 0;
  padding: 0;
  list-style: none;
}
.step {
  margin-bottom: 1.25rem;
  padding: 1rem 1.05rem 1.1rem;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(244, 114, 182, 0.16);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
}
.step-title {
  margin: 0 0 0.55rem;
  font-size: 0.98rem;
  font-weight: 700;
  color: #fda4af;
}
.step-body {
  margin: 0 0 0.65rem;
  font-size: 0.84rem;
  line-height: 1.65;
  color: #aeb9c9;
}
.step-body.muted {
  color: #94a3b8;
  font-size: 0.8rem;
}
.step-fig {
  margin: 0.35rem 0 0;
}
.step-img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.35);
  vertical-align: middle;
}
.step-fig figcaption {
  margin-top: 0.45rem;
  font-size: 0.76rem;
  line-height: 1.45;
  color: #94a3b8;
}
.file-tag {
  font-family: var(--font-mono);
  font-size: 0.82em;
  padding: 0.12em 0.35em;
  border-radius: 6px;
  background: rgba(30, 41, 59, 0.9);
  color: #fda4af;
}
.mono-inline {
  font-family: var(--font-mono);
  font-size: 0.85em;
  color: #a5f3fc;
}
.tip {
  margin: 0 0 1.25rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  background: rgba(244, 114, 182, 0.08);
  border: 1px solid rgba(244, 114, 182, 0.28);
  color: #fbcfe8;
  font-size: 0.84rem;
  line-height: 1.55;
}
.tip strong {
  color: #fff;
}
.page-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  margin-top: 0.25rem;
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
  border-color: rgba(244, 114, 182, 0.5);
  color: #fff;
}
.nav-btn.primary {
  background: linear-gradient(135deg, #f472b6, #db2777);
  color: #fff;
  box-shadow: 0 4px 18px rgba(219, 39, 119, 0.35);
}
.nav-btn.primary:hover {
  filter: brightness(1.06);
}
</style>
