<template>
  <div class="sketch-page">
    <nav class="top-nav">
      <RouterLink to="/" class="back">← 回课程首页</RouterLink>
    </nav>

    <div class="paper">
      <header class="banner">
        <span class="tape" aria-hidden="true" />
        <h1>全栈项目上手速查</h1>
        <p class="tagline">四个最常见问题 · 手账风备忘</p>
      </header>

      <section class="q q1" aria-labelledby="q1-title">
        <div class="q-head">
          <span class="q-badge" aria-hidden="true">Q1</span>
          <h2 id="q1-title">如何分析一个项目的前后端代码位置？</h2>
        </div>
        <p class="q-body">
          大多数仓库会把「给人看的界面」和「给机器跑的接口」分开，常见是两个核心目录：
        </p>
        <div class="folder-row">
          <div class="folder fe">
            <span class="ico" aria-hidden="true">
              <svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7l-2-2H5a2 2 0 0 0-2 2z" />
              </svg>
            </span>
            <strong>前端</strong>
            <code>frontend/</code>、<code>web/</code>、<code>app/</code>、<code>ui/</code> …
            <span class="hint">React / Vue / 纯 HTML</span>
          </div>
          <div class="folder be">
            <span class="ico" aria-hidden="true">
              <svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7l-2-2H5a2 2 0 0 0-2 2z" />
              </svg>
            </span>
            <strong>后端</strong>
            <code>backend/</code>、<code>server/</code>、<code>api/</code> …
            <span class="hint">Python / Node / Java …</span>
          </div>
        </div>
        <div class="tip">
          <span class="bulb" aria-hidden="true">
            <svg class="ico-svg bulb-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18h6M10 22h4M12 3a6 6 0 0 1 3 11.2V17H9v-2.8A6 6 0 0 1 12 3z" />
            </svg>
          </span>
          <div>
            <strong>看扩展名也能猜：</strong>
            <span class="mono">.vue .tsx .jsx .ts .js</span> 多在前端；
            <span class="mono">.py .go .java</span> 多在后端（不是绝对，但能帮你快速缩小范围）。
          </div>
        </div>
      </section>

      <div class="q23">
        <section class="q q2" aria-labelledby="q2-title">
          <div class="q-head">
            <span class="q-badge b" aria-hidden="true">Q2</span>
            <h2 id="q2-title">启动一个前端要用什么指令？</h2>
          </div>
          <ol class="steps">
            <li>
              <span class="step-i">1</span>
              <div>
                进入前端目录
                <CmdLine text="cd frontend" />
              </div>
            </li>
            <li>
              <span class="step-i b">2</span>
              <div>
                安装依赖
                <CmdLine text="npm install" />
              </div>
            </li>
            <li>
              <span class="step-i b">3</span>
              <div>
                启动开发服务
                <CmdLine text="npm run dev" />
              </div>
            </li>
          </ol>
          <p class="note">目录名可能是 <code>client</code>、<code>web</code>，以项目 README 为准。</p>
        </section>

        <section class="q q3" aria-labelledby="q3-title">
          <div class="q-head">
            <span class="q-badge g" aria-hidden="true">Q3</span>
            <h2 id="q3-title">启动一个后端要用什么指令？</h2>
          </div>
          <ol class="steps">
            <li>
              <span class="step-i">1</span>
              <div>
                进入后端目录
                <CmdLine text="cd backend" />
              </div>
            </li>
            <li>
              <span class="step-i g">2</span>
              <div>
                激活虚拟环境（Python 常见）
                <CmdLine text="source .venv/bin/activate" />
                <span class="mini">或 <code>source venv/bin/activate</code></span>
              </div>
            </li>
            <li>
              <span class="step-i g">3</span>
              <div>
                安装依赖
                <CmdLine text="pip install -r requirements.txt" />
              </div>
            </li>
            <li>
              <span class="step-i g">4</span>
              <div>
                启动 API 服务（FastAPI 示例）
                <CmdLine text="uvicorn app.main:app --reload" />
                <span class="mini">入口可能是 <code>main:app</code>，看项目说明。</span>
              </div>
            </li>
          </ol>
        </section>
      </div>

      <section class="q q4" aria-labelledby="q4-title">
        <div class="q-head">
          <span class="q-badge" aria-hidden="true">Q4</span>
          <h2 id="q4-title">前后端「日志」在哪里查看？</h2>
        </div>
        <div class="log-grid">
          <div class="log-card fe">
            <span class="log-ico" aria-hidden="true">
              <svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3-3" />
              </svg>
            </span>
            <strong>前端</strong>
            <p>在浏览器按 <kbd>F12</kbd> 打开<strong>开发者工具</strong>，重点看 <strong>Console</strong> 与 <strong>Network</strong>：请求是否发出、状态码、返回 JSON。</p>
          </div>
          <div class="log-card be">
            <span class="log-ico" aria-hidden="true">
              <svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8" />
              </svg>
            </span>
            <strong>后端</strong>
            <p>看你<strong>启动后端服务的那一个终端</strong>：uvicorn / node 会把访问日志、报错栈、打印的 <code>print</code> 都输出在这里。</p>
          </div>
        </div>
      </section>

      <footer class="foot">
        <RouterLink to="/terminal" class="link">← 认识终端与 Shell</RouterLink>
        <RouterLink to="/ai-ide" class="link">以 Cursor 和 Coze 为例 →</RouterLink>
        <RouterLink to="/" class="link primary">课程首页 →</RouterLink>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import CmdLine from '@/components/CmdLine.vue'
</script>

<style scoped>
.ico-svg {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.2em;
  color: inherit;
}
.bulb-svg {
  color: #fbbf24;
}

.sketch-page {
  min-height: 100vh;
  padding: 1.25rem 1rem 2.5rem;
  background: transparent;
  font-family: var(--font-sans);
  font-size: 1.02rem;
  color: var(--body);
}
.top-nav {
  max-width: 720px;
  margin: 0 auto 1rem;
}
.back {
  display: inline-block;
  padding: 0.4rem 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(71, 85, 105, 0.55);
  background: rgba(15, 23, 42, 0.65);
  color: #e2e8f0;
  font-size: 0.92rem;
  font-family: var(--font-mono);
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transition: border-color 0.2s ease, background 0.2s ease;
}
.back:hover {
  border-color: rgba(34, 211, 238, 0.4);
  background: rgba(15, 23, 42, 0.85);
}
.paper {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(17, 24, 39, 0.82);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem 1.35rem 1.75rem;
  border: 1px solid rgba(51, 65, 85, 0.55);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
  position: relative;
}
.banner {
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
}
.tape {
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  width: 88px;
  height: 22px;
  background: linear-gradient(90deg, rgba(234, 179, 8, 0.35), rgba(34, 211, 238, 0.25));
  border-radius: 3px;
  border: 1px solid rgba(34, 211, 238, 0.2);
}
.banner h1 {
  margin: 0.5rem 0 0.25rem;
  font-size: clamp(1.5rem, 4vw, 1.95rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #f1f5f9;
  font-family: var(--font-mono);
}
.tagline {
  margin: 0;
  font-size: 0.95rem;
  color: var(--muted);
  font-family: var(--font-mono);
}
.q {
  margin-bottom: 1.25rem;
  padding: 1.1rem 1.15rem 1.15rem;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.45);
  position: relative;
}
.q1,
.q4 {
  border: 1px solid rgba(234, 179, 8, 0.35);
  box-shadow: 0 0 0 1px rgba(234, 179, 8, 0.08);
}
.q2 {
  border: 1px solid rgba(56, 189, 248, 0.4);
  box-shadow: 0 0 0 1px rgba(56, 189, 248, 0.08);
}
.q3 {
  border: 1px solid rgba(34, 197, 94, 0.4);
  box-shadow: 0 0 0 1px rgba(34, 197, 94, 0.08);
}
.q-head {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  margin-bottom: 0.65rem;
}
.q-badge {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10px;
  background: rgba(113, 63, 18, 0.45);
  border: 1px solid rgba(234, 179, 8, 0.45);
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: #fef3c7;
  font-family: var(--font-mono);
}
.q-badge.b {
  background: rgba(30, 58, 138, 0.45);
  border-color: rgba(56, 189, 248, 0.45);
  color: #bae6fd;
}
.q-badge.g {
  background: rgba(20, 83, 45, 0.45);
  border-color: rgba(74, 222, 128, 0.45);
  color: #bbf7d0;
}
.q h2 {
  margin: 0;
  font-size: 1.08rem;
  font-weight: 600;
  line-height: 1.35;
  color: #f1f5f9;
}
.q-body {
  margin: 0 0 0.75rem;
  line-height: 1.6;
}
.folder-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
}
@media (max-width: 560px) {
  .folder-row {
    grid-template-columns: 1fr;
  }
}
.folder {
  padding: 0.75rem 0.85rem;
  border-radius: 12px;
  border: 1px dashed rgba(100, 116, 139, 0.55);
  background: rgba(2, 6, 23, 0.35);
  font-size: 0.96rem;
  line-height: 1.55;
}
.folder.fe {
  border-color: rgba(56, 189, 248, 0.35);
  color: #e2e8f0;
}
.folder.be {
  border-color: rgba(74, 222, 128, 0.35);
  color: #e2e8f0;
}
.folder .ico {
  display: inline-flex;
  margin-right: 0.35rem;
  vertical-align: middle;
  color: #94a3b8;
}
.folder.fe .ico {
  color: #38bdf8;
}
.folder.be .ico {
  color: #4ade80;
}
.folder strong {
  display: block;
  margin-bottom: 0.2rem;
  font-size: 1rem;
  font-family: var(--font-mono);
  color: #f8fafc;
}
.folder code {
  font-family: var(--font-mono);
  font-size: 0.82em;
  background: rgba(15, 23, 42, 0.75);
  padding: 0.08em 0.25em;
  border-radius: 4px;
  border: 1px solid rgba(51, 65, 85, 0.5);
  color: #cbd5e1;
}
.hint {
  display: block;
  margin-top: 0.35rem;
  font-size: 0.88rem;
  color: var(--muted);
}
.tip {
  display: flex;
  gap: 0.55rem;
  align-items: flex-start;
  padding: 0.65rem 0.75rem;
  border-radius: 12px;
  background: rgba(120, 53, 15, 0.22);
  border: 1px dashed rgba(245, 158, 11, 0.35);
  font-size: 0.94rem;
  line-height: 1.55;
}
.bulb {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.mono {
  font-family: var(--font-mono);
  font-size: 0.88em;
}
.q23 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
@media (max-width: 640px) {
  .q23 {
    grid-template-columns: 1fr;
  }
}
.steps {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.steps li {
  display: flex;
  gap: 0.55rem;
  margin-bottom: 0.75rem;
  align-items: flex-start;
}
.step-i {
  flex-shrink: 0;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 8px;
  background: rgba(30, 41, 59, 0.75);
  border: 1px solid rgba(71, 85, 105, 0.55);
  display: grid;
  place-items: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: #e2e8f0;
  font-family: var(--font-mono);
}
.step-i.b {
  background: rgba(30, 58, 138, 0.45);
  border-color: rgba(56, 189, 248, 0.45);
  color: #bae6fd;
}
.step-i.g {
  background: rgba(20, 83, 45, 0.45);
  border-color: rgba(74, 222, 128, 0.45);
  color: #bbf7d0;
}
.steps .mini {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: var(--muted);
}
.note {
  margin: 0.5rem 0 0;
  font-size: 0.88rem;
  color: var(--muted);
}
.log-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}
@media (max-width: 560px) {
  .log-grid {
    grid-template-columns: 1fr;
  }
}
.log-card {
  padding: 0.85rem 0.95rem;
  border-radius: 12px;
  border: 1px dashed rgba(100, 116, 139, 0.5);
  background: rgba(2, 6, 23, 0.35);
  font-size: 0.94rem;
  line-height: 1.55;
  color: var(--body);
}
.log-card.fe {
  border-color: rgba(56, 189, 248, 0.35);
}
.log-card.be {
  border-color: rgba(74, 222, 128, 0.35);
}
.log-ico {
  display: inline-flex;
  margin-right: 0.35rem;
  vertical-align: middle;
  color: #94a3b8;
}
.log-card.fe .log-ico {
  color: #38bdf8;
}
.log-card.be .log-ico {
  color: #4ade80;
}
.log-card strong {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 1rem;
  font-family: var(--font-mono);
  color: #f8fafc;
}
.log-card p {
  margin: 0;
}
kbd {
  font-family: var(--font-mono);
  font-size: 0.85em;
  padding: 0.12em 0.4em;
  border-radius: 4px;
  border: 1px solid rgba(71, 85, 105, 0.65);
  background: rgba(15, 23, 42, 0.85);
  color: #e2e8f0;
}
.foot {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  justify-content: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px dashed rgba(71, 85, 105, 0.45);
}
.link {
  padding: 0.45rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(71, 85, 105, 0.55);
  color: #e2e8f0;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: var(--font-mono);
  background: rgba(15, 23, 42, 0.5);
  transition: border-color 0.2s ease, background 0.2s ease;
}
.link:hover {
  border-color: rgba(34, 211, 238, 0.35);
  background: rgba(15, 23, 42, 0.75);
}
.link.primary {
  background: linear-gradient(135deg, rgba(20, 83, 45, 0.55), rgba(22, 101, 52, 0.65));
  border-color: rgba(74, 222, 128, 0.45);
  color: #dcfce7;
}
.link.primary:hover {
  filter: brightness(1.06);
}
</style>
