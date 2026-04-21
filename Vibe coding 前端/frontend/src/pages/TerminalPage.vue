<template>
  <div class="page">
    <AppLessonNav label="认识终端与 Shell" />

    <header class="hero">
      <span class="sq" aria-hidden="true" />
      <h1 class="serif">认识终端与 Shell：和计算机对话的方式</h1>
      <p class="deck">把「黑窗口」从神秘咒语还原成可理解的输入输出与解析规则。</p>
    </header>

    <article class="card">
      <SectionHeaderLight>一、终端是什么</SectionHeaderLight>
      <p class="body">
        <strong class="hi">终端</strong>本质上是一个字符界面窗口：向你展示程序的文本输出，并把键盘输入交给正在等待输入的程序。它本身并不「懂」命令。
      </p>
      <TerminalWindow title="Terminal">
        <p class="prompt">user@Mac ~ %</p>
      </TerminalWindow>
      <div class="callout gold">
        <strong>划重点</strong>
        <p>
          真正理解你输入那一行文字的是 <strong class="hi">Shell</strong>（例如 macOS 上常见的
          <code>zsh</code>）。终端负责显示；Shell 负责解析与执行。
        </p>
      </div>
    </article>

    <DiamondDivider />

    <article class="card">
      <SectionHeaderLight>二、Shell 是什么</SectionHeaderLight>
      <p class="body">
        Shell 是「命令行解释器」：读取一行文本，按空格切成参数数组，找到要运行的程序，把参数传进去。不同系统可能默认
        <code class="inline">zsh</code>、<code class="inline">bash</code> 或 <code class="inline">PowerShell</code>。
      </p>
      <p class="body">
        你在教程里看到的 <code class="inline">git clone</code>、<code class="inline">npm install</code>，都是交给 Shell 去启动对应可执行文件的。
      </p>
    </article>

    <DiamondDivider />

    <article class="card">
      <SectionHeaderLight>三、命令背后都是文件</SectionHeaderLight>
      <TerminalWindow title="which">
        <p><span class="g">$</span> <span class="w">which python</span></p>
        <p class="path">/usr/bin/python</p>
        <p><span class="g">$</span> <span class="w">which node</span></p>
        <p class="path">/usr/local/bin/node</p>
      </TerminalWindow>
      <p class="body">
        每条「命令」几乎都对应磁盘上的某个可执行文件。例如 <code class="inline">git</code> 往往位于
        <code class="inline">/usr/bin/git</code>（具体路径因安装方式而异）。打开它看到的是机器码，而不是魔法。
      </p>
    </article>

    <DiamondDivider />

    <article class="card">
      <h3 class="mini-h">✂️ 拆解一条命令</h3>
      <TerminalWindow title="Shell">
        <p>
          <span class="tok g">git</span>
          <span class="tok b">clone</span>
          <span class="tok o">https://github.com/xxx/repo.git</span>
        </p>
      </TerminalWindow>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>部分</th>
              <th>含义</th>
              <th>标注</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>git</code></td>
              <td>可执行文件（程序名）</td>
              <td>绿色</td>
            </tr>
            <tr>
              <td><code>clone</code></td>
              <td>第一个参数（子命令）</td>
              <td>蓝色</td>
            </tr>
            <tr>
              <td><code>https://…</code></td>
              <td>第二个参数（仓库地址）</td>
              <td>橙色</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4 class="h4">空格是分隔符</h4>
      <p class="body">Shell 会按空格把一行拆成「参数数组」：</p>
      <TerminalWindow title="argv 示意">
        <p><span class="k">argv</span><span class="w">[0] = </span><span class="s">"git"</span></p>
        <p><span class="k">argv</span><span class="w">[1] = </span><span class="s">"clone"</span></p>
        <p><span class="k">argv</span><span class="w">[2] = </span><span class="s">"https://github.com/xxx/repo.git"</span></p>
      </TerminalWindow>
      <div class="tip">
        <strong>💡 小知识</strong>
        <p>路径里有空格时必须加引号，例如 <code class="inline">cd "My Documents"</code>，否则会被拆成多个参数。</p>
      </div>
    </article>

    <DiamondDivider />

    <article class="card">
      <SectionHeaderLight>四、内置命令 vs 外部命令</SectionHeaderLight>
      <div class="grid2">
        <div class="subcard">
          <h3>📦 外部命令</h3>
          <p class="mono">git、python、node、npm</p>
          <p class="small">磁盘上的独立可执行文件，<code class="inline">which</code> 通常能打印路径。</p>
        </div>
        <div class="subcard">
          <h3>🏠 内置命令</h3>
          <p class="mono">cd、echo、export</p>
          <p class="small">由 Shell 自己实现，没有单独文件，因此 <code class="inline">which cd</code> 往往找不到。</p>
        </div>
      </div>
      <div class="think">
        <strong>🤔 为什么 cd 必须是内置的？</strong>
        <p>
          若 <code class="inline">cd</code> 是外部程序，它只会在子进程里改变工作目录，结束后回到父 Shell，目录并不会变——所以必须由当前 Shell 进程自己处理目录切换。
        </p>
      </div>
    </article>

    <DiamondDivider />

    <article class="card">
      <SectionHeaderLight>五、回到课程 — 那些指令不再是咒语</SectionHeaderLight>
      <p class="body">还记得搭环境时的六条命令吗？现在可以对照「argv 拆解」重新读一遍：</p>
      <TerminalWindow title="课程命令串">
        <p><span class="c"># Python 虚拟环境与依赖</span></p>
        <p><span class="w">python -m venv venv</span></p>
        <p><span class="w">source ./venv/bin/activate</span></p>
        <p><span class="w">pip install -r requirements.txt</span></p>
        <p><span class="w">uvicorn main:app --reload</span></p>
        <p class="c" style="margin-top: 0.65rem"># 前端</p>
        <p><span class="w">npm install</span></p>
        <p><span class="w">npm run dev</span></p>
      </TerminalWindow>
      <p class="body vibe">
        这就是 <strong>Vibe Coding</strong> 的落地姿势：用自然语言让 AI 帮你写与改代码，用终端把<strong class="hi">环境、依赖、进程</strong>牢牢握在手里。
      </p>
    </article>

    <nav class="bottom-nav">
      <RouterLink to="/language" class="btn ghost">← 上一节：语言演进</RouterLink>
      <RouterLink to="/" class="btn primary">返回课程首页</RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import AppLessonNav from '@/components/AppLessonNav.vue'
import SectionHeaderLight from '@/components/SectionHeaderLight.vue'
import TerminalWindow from '@/components/TerminalWindow.vue'
import DiamondDivider from '@/components/DiamondDivider.vue'
</script>

<style scoped>
.page {
  max-width: 760px;
  margin: 0 auto;
  padding: 1.5rem 1.15rem 4rem;
  background: var(--paper-cream);
}
.hero {
  text-align: center;
  margin-bottom: 1.75rem;
  position: relative;
}
.sq {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: var(--forest);
  margin-bottom: 0.5rem;
}
.serif {
  margin: 0 0 0.5rem;
  font-family: var(--font-serif);
  font-size: clamp(1.3rem, 3vw, 1.75rem);
  color: var(--forest-dark);
}
.deck {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
}
.card {
  background: var(--paper-card);
  border-radius: 20px;
  padding: 1.65rem 1.45rem;
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.06);
}
.body {
  margin: 0 0 1rem;
  line-height: 1.75;
  color: var(--body);
  font-size: 0.95rem;
}
.hi {
  color: var(--forest);
  font-weight: 600;
}
.inline {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: #e8f3e9;
  color: var(--forest-dark);
  padding: 0.12em 0.4em;
  border-radius: 4px;
}
.prompt {
  margin: 0;
  color: #3ecf8e;
}
.callout {
  margin-top: 1rem;
  padding: 1rem 1.1rem;
  border-radius: 0 12px 12px 0;
  border-left: 4px solid #c9a227;
  background: #fdf6e3;
  font-size: 0.9rem;
  line-height: 1.65;
}
.callout strong {
  color: #7c5e10;
  display: block;
  margin-bottom: 0.35rem;
}
.g {
  color: #3ecf8e;
}
.path {
  color: #7dd3fc;
  margin: 0.15rem 0 0.5rem 1rem;
}
.w {
  color: #e8e8e8;
}
.mini-h {
  margin: 0 0 1rem;
  font-size: 1.05rem;
  color: var(--body);
}
.tok {
  margin-right: 0.35rem;
}
.tok.g {
  background: rgba(62, 207, 142, 0.2);
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  color: #3ecf8e;
}
.tok.b {
  background: rgba(86, 156, 214, 0.25);
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  color: #569cd6;
}
.tok.o {
  background: rgba(206, 145, 120, 0.25);
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  color: #ce9178;
}
.table-wrap {
  overflow-x: auto;
  margin: 1rem 0;
  border-radius: 10px;
  border: 1px solid #e8e4dc;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
thead th {
  background: var(--forest);
  color: #fff;
  text-align: left;
  padding: 0.55rem 0.65rem;
}
tbody td {
  padding: 0.5rem 0.65rem;
  border-top: 1px solid #eeeae4;
}
.h4 {
  margin: 1.25rem 0 0.35rem;
  font-size: 0.95rem;
  color: var(--forest-dark);
}
.k {
  color: #569cd6;
}
.s {
  color: #ce9178;
}
.tip {
  margin-top: 1rem;
  padding: 1rem;
  border-left: 4px solid #c9a227;
  background: #fffbeb;
  border-radius: 0 10px 10px 0;
  font-size: 0.88rem;
}
.tip strong {
  color: #92400e;
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
}
@media (max-width: 640px) {
  .grid2 {
    grid-template-columns: 1fr;
  }
}
.subcard {
  border: 1px solid #e8e4dc;
  border-radius: 14px;
  padding: 1rem;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}
.subcard:hover {
  border-color: rgba(74, 124, 89, 0.35);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}
.subcard h3 {
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
  color: var(--forest);
}
.mono {
  font-family: var(--font-mono);
  color: var(--forest-dark);
  font-size: 0.88rem;
  margin: 0 0 0.5rem;
}
.small {
  margin: 0;
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.55;
}
.think {
  margin-top: 1rem;
  padding: 1rem 1.1rem;
  background: #faf5e6;
  border-left: 4px solid #b45309;
  border-radius: 0 12px 12px 0;
  font-size: 0.88rem;
  line-height: 1.65;
}
.think strong {
  color: #92400e;
  display: block;
  margin-bottom: 0.35rem;
}
.c {
  color: #6a9955;
}
.vibe {
  margin-top: 1.25rem;
  padding: 1rem;
  background: #f0f7f4;
  border-radius: 12px;
  border: 1px solid rgba(74, 124, 89, 0.2);
}
.bottom-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  margin-top: 2rem;
}
.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
  border: 1px solid transparent;
}
.btn.ghost {
  background: var(--paper-card);
  border-color: #d8d3c9;
  color: var(--body);
}
.btn.primary {
  background: var(--forest);
  color: #fff;
}
</style>
