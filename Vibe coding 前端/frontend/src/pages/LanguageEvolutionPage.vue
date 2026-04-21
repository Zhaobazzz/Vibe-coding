<template>
  <div class="page">
    <AppLessonNav label="编程语言演进" />

    <header class="top">
      <h1 class="serif">编程语言演进：从 0/1 到 AI 写代码</h1>
    </header>

    <nav class="toc" aria-label="本节导航">
      <a v-for="a in anchors" :key="a.id" :href="'#' + a.id">{{ a.t }}</a>
    </nav>

    <article id="s1" class="card">
      <SectionHeaderLight>一、计算机的本质</SectionHeaderLight>
      <p class="body">
        计算机底层是<strong class="hi">一堆晶体管</strong>，通过<strong class="hi">通电 / 断电</strong>表示
        <strong class="hi">1 / 0</strong>。大量晶体管组成<strong class="hi">逻辑门</strong>，逻辑门再组合成<strong class="hi">CPU</strong>——于是所有信息最终都落在
        <strong class="hi">0 和 1</strong> 上。
      </p>
      <div class="diag-row">
        <div class="mini-diag">
          <span class="cap">与门（AND）</span>
          <svg viewBox="0 0 120 80" width="120" height="80" aria-hidden="true">
            <path d="M20 20 L20 60 L60 60 Q90 40 60 20 Z" fill="none" stroke="#4a7c59" stroke-width="2" />
            <line x1="0" y1="30" x2="20" y2="30" stroke="#4a7c59" stroke-width="2" />
            <line x1="0" y1="50" x2="20" y2="50" stroke="#4a7c59" stroke-width="2" />
            <line x1="90" y1="40" x2="120" y2="40" stroke="#4a7c59" stroke-width="2" />
          </svg>
        </div>
        <div class="mini-diag">
          <span class="cap">加法器（示意）</span>
          <svg viewBox="0 0 120 80" width="120" height="80" aria-hidden="true">
            <rect x="25" y="20" width="70" height="40" rx="4" fill="none" stroke="#4a7c59" stroke-width="2" />
            <text x="40" y="46" font-size="12" fill="#4a7c59">Σ</text>
            <line x1="0" y1="35" x2="25" y2="35" stroke="#4a7c59" />
            <line x1="0" y1="50" x2="25" y2="50" stroke="#4a7c59" />
            <line x1="95" y1="42" x2="120" y2="42" stroke="#4a7c59" />
          </svg>
        </div>
        <div class="cta-wrap">
          <button type="button" class="cta" @click="cpuOpen = true">CPU 结构图 →</button>
          <p class="cta-sub">点击查看 CPU 内部结构（教学示意）</p>
        </div>
      </div>
      <p class="body foot">
        所以，最本质的开发方式其实就是用 <strong class="hi">0 和 1</strong> 跟计算机沟通——这就是我们说的<strong class="hi">机器语言</strong>。
      </p>
    </article>

    <DiamondDivider />

    <article id="s2" class="card">
      <SectionHeaderLight>二、机器语言 — 直接和 CPU 说 0 与 1</SectionHeaderLight>
      <p class="body">
        最早的程序员（1940–50 年代）直接写 0 和 1 的序列，CPU 逐条读取并执行。
      </p>
      <TerminalWindow title="Machine Code (x86)">
        <p class="c">; 把数字 97 放到寄存器 AL</p>
        <p class="b">10110000 01100001</p>
        <p class="c">; 把 AL 的值加上 3</p>
        <p class="b">00000100 00000011</p>
      </TerminalWindow>
      <p class="body">CPU 拿到这串 0 和 1 直接执行，无需翻译，因此理论上最快。</p>
      <div class="warn">
        <strong>但问题很明显</strong>
        <ul>
          <li><strong>完全不可读</strong>——不查手册看不出含义。</li>
          <li><strong>极易出错</strong>——错一个 bit 就可能崩溃，难以 debug。</li>
          <li><strong>效率极低</strong>——简单运算也要写很多行。</li>
        </ul>
      </div>
      <div class="ask">能不能用人能看懂的「缩写」来替代这些 0 和 1？</div>
    </article>

    <DiamondDivider />

    <article id="s3" class="card">
      <SectionHeaderLight>三、汇编语言 — 用英文缩写替代二进制</SectionHeaderLight>
      <p class="body">
        于是出现助记符：<code class="inline">10110000</code> → <strong class="hi">MOV</strong>；
        <code class="inline">00000100</code> → <strong class="hi">ADD</strong>。
      </p>
      <TerminalWindow title="Assembly (x86)">
        <p><span class="c">; 把数字 97 放到寄存器 AL</span></p>
        <p><span class="k">MOV</span> <span class="w">AL</span>, <span class="w">61h</span> <span class="c">; 61h = 97 的十六进制</span></p>
        <p><span class="c">; 把 AL 的值加上 3</span></p>
        <p><span class="k">ADD</span> <span class="w">AL</span>, <span class="w">3</span></p>
      </TerminalWindow>
      <div class="callout orange">
        <strong>关键工具：汇编器（Assembler）</strong>
        <p>CPU 仍只懂 0/1；汇编器把 <code class="inline">MOV</code> 等助记符翻译回机器码。</p>
      </div>
      <div class="callout mint">
        <strong>进步</strong>
        <p><code class="inline">MOV AL, 61h</code> 一眼能看出在做什么，排错比纯二进制现实得多。</p>
      </div>
    </article>

    <DiamondDivider />

    <article id="s4" class="card">
      <TerminalWindow title="同一个操作，不同 CPU 的写法完全不同">
        <p><span class="c">; Intel x86 CPU</span></p>
        <p><span class="k">MOV</span> <span class="w">AL</span>, <span class="w">61h</span></p>
        <p><span class="c">; ARM CPU（Apple Silicon 等）</span></p>
        <p><span class="k">MOV</span> <span class="w">R0</span>, <span class="w">#97</span></p>
        <p><span class="c">; 寄存器名、写法、编码全不一样，不能互换</span></p>
      </TerminalWindow>
      <p class="body">
        你的 Mac（ARM）与朋友的 Windows 台式机（x86），同一段汇编<strong class="hi">无法通用</strong>。
      </p>
      <div class="lim">
        <strong>局限二：效率仍然很低</strong>
        <p>一条汇编只做极小的事；没有 for、函数、变量名等抽象。</p>
      </div>
      <div class="lim">
        <strong>局限三：没有抽象能力</strong>
        <p>你必须关心寄存器与地址——在「指挥每一步」，而不是「描述要什么结果」。</p>
      </div>
      <div class="ask">能不能写一句「人话」，让工具自动翻译成不同 CPU 的机器码？</div>
    </article>

    <DiamondDivider />

    <article id="s5" class="card">
      <SectionHeaderLight>四、高级编程语言 — 用「人话」编程</SectionHeaderLight>
      <p class="body">
        程序员更希望描述「要做什么」，而不是「CPU 每一步怎么走」。C、Java、Python、JavaScript
        等高级语言由此普及。
      </p>
      <div class="tri">
        <div class="tri-card">
          <span class="emoji">💾</span>
          <h3>机器语言</h3>
          <div class="codebox">10110000 01100001</div>
          <span class="pill bad">不可读</span>
          <span class="pill bad">绑定 CPU</span>
        </div>
        <div class="tri-card">
          <span class="emoji">✏️</span>
          <h3>汇编语言</h3>
          <div class="codebox">MOV AL, 61h<br />ADD AL, 3</div>
          <span class="pill mid">勉强能读</span>
          <span class="pill bad">绑定 CPU</span>
        </div>
        <div class="tri-card">
          <span class="emoji">🚀</span>
          <h3>高级语言（Python）</h3>
          <div class="codebox">a = 97<br />a += 3</div>
          <span class="pill ok">人人能读</span>
          <span class="pill ok">跨平台</span>
        </div>
      </div>
      <h3 class="subh">翻译工具的升级</h3>
      <p class="body">编译器 / 解释器把高级语言逐步降到目标平台的机器指令。</p>
      <div class="callout mint big">
        <strong>高级语言解决了什么？</strong>
        <ul>
          <li><strong>可读性：</strong><code class="inline">a = 97</code> 几乎不需要注释。</li>
          <li><strong>跨平台：</strong>同一份源码可在不同架构上构建运行。</li>
          <li><strong>开发效率：</strong>一行往往对应许多条汇编。</li>
        </ul>
      </div>
    </article>

    <DiamondDivider />

    <article id="s6" class="card wide-table">
      <SectionHeaderLight>五、全貌：从机器语言到 AI 写代码</SectionHeaderLight>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th />
              <th>机器语言</th>
              <th>汇编语言</th>
              <th>高级语言</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>写法</th>
              <td><code>10110000…</code></td>
              <td><code>MOV AL, 61h</code></td>
              <td><code>a = 97</code></td>
            </tr>
            <tr>
              <th>可读性</th>
              <td>不可读</td>
              <td>勉强能读</td>
              <td>人人能读</td>
            </tr>
            <tr>
              <th>跨平台</th>
              <td>与 CPU 强绑定</td>
              <td>与 CPU 强绑定</td>
              <td>一次编写，多处运行（由工具链适配）</td>
            </tr>
            <tr>
              <th>翻译工具</th>
              <td>无</td>
              <td>汇编器</td>
              <td>编译器 / 解释器</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="evo" role="list">
        <div v-for="n in evolution" :key="n.t" class="node" role="listitem">
          <span class="circle" />
          <strong>{{ n.t }}</strong>
          <span class="sub">{{ n.s }}</span>
        </div>
      </div>
      <div class="phil">
        <p>
          编程语言的发展，可以理解为不断把「人好表达的模糊意图」映射到「机器好执行的精确指令」。传统规则很难覆盖「帮我做一个好看的登录页」这种需求；而
          <strong class="hi">大语言模型</strong>通过数据学习自然语言与代码之间的统计关联，让
          <strong class="hi">AI Coding（Vibe Coding）</strong>成为新的抽象层：用自然语言驱动生成与修改代码。
        </p>
        <p>它不是简单多叠一层翻译，而是把「意图 → 代码」这条路径真正产品化了。</p>
      </div>
    </article>

    <DiamondDivider />

    <article id="s7" class="card teaser">
      <SectionHeaderLight>六、接下来：认识终端与 Shell</SectionHeaderLight>
      <p class="body">
        当你用 AI 生成项目后，仍要在<strong class="hi">终端</strong>里装依赖、启服务。下一节我们会拆开：终端窗口、<strong class="hi">Shell</strong>、命令参数与内置命令。
      </p>
    </article>

    <nav class="bottom-nav">
      <RouterLink to="/process#environment-six" class="btn ghost">← 上一节：开发流程与环境</RouterLink>
      <RouterLink to="/terminal" class="btn primary">下一节：认识终端与 Shell →</RouterLink>
    </nav>

    <CpuDiagramModal :open="cpuOpen" @close="cpuOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppLessonNav from '@/components/AppLessonNav.vue'
import SectionHeaderLight from '@/components/SectionHeaderLight.vue'
import TerminalWindow from '@/components/TerminalWindow.vue'
import DiamondDivider from '@/components/DiamondDivider.vue'
import CpuDiagramModal from '@/components/CpuDiagramModal.vue'

const cpuOpen = ref(false)

const anchors = [
  { id: 's1', t: '本质' },
  { id: 's2', t: '机器语言' },
  { id: 's3', t: '汇编' },
  { id: 's4', t: '局限' },
  { id: 's5', t: '高级语言' },
  { id: 's6', t: '全貌' },
  { id: 's7', t: '预告' },
]

const evolution = [
  { t: '机器语言', s: '写 0/1' },
  { t: '汇编语言', s: '写助记符' },
  { t: '高级语言', s: '写人话' },
  { t: 'AI Coding', s: '说人话' },
]
</script>

<style scoped>
.page {
  max-width: 820px;
  margin: 0 auto;
  padding: 1.5rem 1.15rem 4rem;
  background: var(--paper-bg);
}
.top {
  text-align: center;
  margin-bottom: 1.25rem;
}
.serif {
  margin: 0;
  font-family: var(--font-serif);
  font-size: clamp(1.35rem, 3.2vw, 1.85rem);
  color: var(--forest-dark);
  font-weight: 700;
}
.toc {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.toc a {
  font-size: 0.78rem;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  background: var(--paper-card);
  border: 1px solid rgba(74, 124, 89, 0.25);
  color: var(--forest);
}
.toc a:hover {
  background: rgba(74, 124, 89, 0.1);
}
.card {
  background: var(--paper-card);
  border-radius: 20px;
  padding: 1.75rem 1.5rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.06);
  margin-bottom: 0;
}
.body {
  margin: 0 0 1rem;
  color: var(--body);
  line-height: 1.75;
  font-size: 0.95rem;
}
.hi {
  color: var(--highlight-green);
  font-weight: 600;
}
.foot {
  margin-bottom: 0;
}
.diag-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 1.25rem;
  margin: 1rem 0;
}
.mini-diag {
  text-align: center;
}
.cap {
  display: block;
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 0.25rem;
}
.cta-wrap {
  flex: 1 1 200px;
  text-align: center;
}
.cta {
  display: inline-block;
  padding: 0.65rem 1.25rem;
  border: none;
  border-radius: 10px;
  background: var(--forest);
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  transition: filter 0.15s;
}
.cta:hover {
  filter: brightness(1.08);
}
.cta-sub {
  margin: 0.5rem 0 0;
  font-size: 0.8rem;
  color: var(--muted);
}
.c {
  color: #6a9955;
  margin: 0.15rem 0;
}
.b {
  color: #d4d4d4;
  margin: 0.15rem 0;
}
.k {
  color: #569cd6;
}
.w {
  color: #e8e8e8;
}
.warn {
  margin: 1rem 0;
  padding: 1rem 1.1rem;
  border-left: 4px solid #b22222;
  background: #fff5f5;
  border-radius: 0 10px 10px 0;
  font-size: 0.9rem;
  color: var(--body);
}
.warn strong {
  color: #a61b1b;
  display: block;
  margin-bottom: 0.5rem;
}
.warn ul {
  margin: 0;
  padding-left: 1.1rem;
}
.ask {
  text-align: center;
  padding: 1rem;
  border: 1px dashed #7eb8da;
  border-radius: 12px;
  background: #e8f4fc;
  color: #1d6f42;
  font-weight: 600;
  font-size: 0.92rem;
}
.callout {
  margin: 1rem 0;
  padding: 1rem 1.1rem;
  border-radius: 0 12px 12px 0;
  font-size: 0.9rem;
  line-height: 1.65;
}
.callout.orange {
  border-left: 4px solid #d97706;
  background: #fff4e5;
  color: var(--body);
}
.callout.orange strong {
  color: #92400e;
}
.callout.mint {
  border-left: 4px solid var(--forest);
  background: #e8f5e9;
  color: var(--body);
}
.callout.mint strong {
  color: var(--forest-dark);
}
.callout.big ul {
  margin: 0.5rem 0 0;
  padding-left: 1.2rem;
}
.inline {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: #e8f3e9;
  color: var(--forest-dark);
  padding: 0.1em 0.35em;
  border-radius: 4px;
}
.lim {
  margin: 1rem 0;
  padding: 0.85rem 1rem;
  border-left: 4px solid #d97706;
  background: #fffaf5;
  border-radius: 0 10px 10px 0;
}
.lim strong {
  color: #c2410c;
  display: block;
  margin-bottom: 0.35rem;
}
.lim p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--body);
  line-height: 1.65;
}
.tri {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.85rem;
  margin: 1.25rem 0;
}
@media (max-width: 720px) {
  .tri {
    grid-template-columns: 1fr;
  }
}
.tri-card {
  border: 1px solid #e5e2db;
  border-radius: 14px;
  padding: 1rem;
  text-align: center;
}
.tri-card h3 {
  margin: 0.35rem 0 0.65rem;
  font-size: 0.95rem;
  color: var(--forest-dark);
}
.emoji {
  font-size: 1.5rem;
}
.codebox {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  background: #1e1e1e;
  color: #d4d4d4;
  border-radius: 8px;
  padding: 0.65rem;
  text-align: left;
  min-height: 3.5rem;
  margin-bottom: 0.65rem;
  line-height: 1.5;
}
.pill {
  display: inline-block;
  font-size: 0.72rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  margin: 0.15rem;
}
.pill.bad {
  background: #ffe4e6;
  color: #9f1239;
}
.pill.mid {
  background: #fef9c3;
  color: #854d0e;
}
.pill.ok {
  background: #dcfce7;
  color: #166534;
}
.subh {
  margin: 1.5rem 0 0.5rem;
  font-size: 1rem;
  color: var(--forest-dark);
}
.table-wrap {
  overflow-x: auto;
  margin: 1rem 0;
  border-radius: 12px;
  border: 1px solid #e5e2db;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
}
thead th {
  background: var(--forest);
  color: #fff;
  padding: 0.6rem 0.5rem;
  text-align: left;
}
tbody th {
  background: #f4f6f4;
  text-align: left;
  padding: 0.55rem 0.65rem;
  width: 5.5rem;
  color: var(--forest-dark);
}
tbody td {
  padding: 0.55rem 0.65rem;
  border-top: 1px solid #eceae4;
  vertical-align: top;
}
tbody tr:nth-child(even) td {
  background: #fafaf8;
}
.evo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1rem;
  margin: 1.5rem 0;
}
.node {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
  text-align: center;
}
.circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 25%, #7cb88a, var(--forest));
  margin-bottom: 0.35rem;
  box-shadow: 0 4px 14px rgba(74, 124, 89, 0.35);
}
.node strong {
  font-size: 0.85rem;
  color: var(--forest-dark);
}
.node .sub {
  font-size: 0.75rem;
  color: var(--muted);
}
.phil {
  background: #f0f7f4;
  border-radius: 16px;
  padding: 1.25rem 1.35rem;
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--body);
}
.phil p {
  margin: 0 0 0.75rem;
}
.phil p:last-child {
  margin-bottom: 0;
}
.teaser {
  margin-bottom: 2rem;
}
.bottom-nav {
  position: sticky;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  padding: 1rem 0 0;
  background: linear-gradient(transparent, var(--paper-bg) 20%);
}
.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
  border: 1px solid transparent;
  transition:
    transform 0.15s,
    box-shadow 0.15s;
}
.btn:hover {
  transform: translateY(-1px);
}
.btn.ghost {
  background: var(--paper-card);
  border-color: #d8d3c9;
  color: var(--body);
}
.btn.primary {
  background: var(--forest);
  color: #fff;
  box-shadow: 0 4px 16px rgba(74, 124, 89, 0.35);
}
</style>
