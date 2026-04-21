<template>
  <div class="page">
    <AppLessonNav label="前后端是怎么协作的" />

    <header class="top">
      <h1 class="serif">前后端是怎么协作的</h1>
      <p class="deck">用类比把「界面、三件套、接口、服务器」串成一条线，再用小演示把抽象变成可感知的过程。</p>
    </header>

    <nav class="toc" aria-label="本节导航">
      <a v-for="a in anchors" :key="a.id" :href="'#' + a.id">{{ a.t }}</a>
    </nav>

    <!-- 什么是前端 -->
    <article id="what-fe" class="card">
      <SectionHeaderLight>什么是前端？</SectionHeaderLight>
      <p class="body">
        <strong class="hi">前端</strong>就是用户<strong>看得见、点得到</strong>的那一层：按钮、文字、图片、动效，以及点击、滑动、输入时的反馈与体验。
      </p>
    </article>

    <DiamondDivider />

    <!-- 餐厅 -->
    <article id="restaurant" class="card">
      <SectionHeaderLight>用「餐厅」理解前端和后端</SectionHeaderLight>
      <div class="tri">
        <div class="tri-card fe">
          <span class="emoji">🎨</span>
          <h3>前端 = 餐厅大堂</h3>
          <p>装修风格、菜单设计、服务员动线——顾客<strong>直接感受</strong>到的一切。</p>
        </div>
        <div class="tri-card be">
          <span class="emoji">👨‍🍳</span>
          <h3>后端 = 厨房</h3>
          <p>食材处理、火候、出餐顺序、订单调度——<strong>必不可少但顾客通常看不见</strong>。</p>
        </div>
        <div class="tri-card db">
          <span class="emoji">🗄️</span>
          <h3>数据库 = 仓库</h3>
          <p>存原料、记库存、可查询的<strong>持久化数据</strong>。</p>
        </div>
      </div>
      <div class="grid2">
        <div class="sub">
          <h4>✅ 前端负责什么？</h4>
          <ul>
            <li>布局与观感（好不好看）</li>
            <li>交互体验（好不好用）</li>
            <li>按钮、表单、动效</li>
            <li>把后端数据<strong>展示</strong>给用户</li>
            <li>适配手机 / 平板 / PC</li>
          </ul>
        </div>
        <div class="sub">
          <h4>🌐 你每天都在用的前端</h4>
          <ul>
            <li>淘宝商品列表与购物车</li>
            <li>微信聊天与通讯录</li>
            <li>抖音视频流与评论</li>
            <li>百度搜索框与结果页</li>
            <li>以及<strong>本页教程</strong>——你现在看到的界面就是前端。</li>
          </ul>
        </div>
      </div>
      <div class="sum">
        <strong>一句话总结：</strong>前端 = <strong>用户界面 (UI)</strong> + <strong>用户体验 (UX)</strong>。
        <p class="sum-sub">后端处理数据与业务规则；前端负责把这些结果<strong>清晰、好看、好操作</strong>地交给用户。</p>
      </div>
    </article>

    <DiamondDivider />

    <!-- 三件套 -->
    <article id="triple" class="card">
      <SectionHeaderLight>什么是前端三件套？</SectionHeaderLight>
      <p class="body sublead">以造房子为例，理解 HTML / CSS / JavaScript 各自分工。</p>
      <div class="trio">
        <div class="trio-card html">
          <span class="big">🧱</span>
          <strong>HTML</strong>
          <span class="tag">毛坯房 / 结构</span>
        </div>
        <div class="trio-card css">
          <span class="big">🖌️</span>
          <strong>CSS</strong>
          <span class="tag">装修 / 样式</span>
        </div>
        <div class="trio-card js">
          <span class="big">🔌</span>
          <strong>JavaScript</strong>
          <span class="tag">智能家居 / 交互</span>
        </div>
      </div>
      <div class="pills-row">
        <span><strong>HTML</strong> → 决定有什么（结构）</span>
        <span class="sep">|</span>
        <span><strong>CSS</strong> → 决定长什么样（样式）</span>
        <span class="sep">|</span>
        <span><strong>JS</strong> → 决定能做什么（交互）</span>
      </div>
    </article>

    <DiamondDivider />

    <!-- 交互演示 -->
    <article id="demo-triple" class="card">
      <h2 class="head-lab">
        <span class="bar" />
        <span>🔬 亲眼看看三件套的作用</span>
      </h2>
      <p class="body">
        下面用一颗按钮演示：<strong>只有 HTML</strong> → <strong>加上 CSS</strong> → <strong>加上 JavaScript</strong>，观察每一步的变化。
      </p>
      <div class="lab">
        <div class="dots">
          <span
            v-for="i in 3"
            :key="i"
            class="dot"
            :class="{ on: demoStep >= i - 1, big: demoStep === i - 1 }"
          />
        </div>
        <div class="badges">
          <span class="badge ok" :class="{ off: demoStep < 0 }">HTML ✓</span>
          <span class="badge" :class="{ ok: demoStep >= 1, off: demoStep < 1 }">CSS {{ demoStep >= 1 ? '✓' : '✗' }}</span>
          <span class="badge" :class="{ ok: demoStep >= 2, off: demoStep < 2 }">JS {{ demoStep >= 2 ? '✓' : '✗' }}</span>
        </div>
        <div class="demo-stage">
          <button
            type="button"
            class="demo-btn"
            :class="['s' + demoStep]"
            @click="onDemoClick"
          >
            点击我
          </button>
          <p v-if="demoStep >= 2" class="count">点击次数：{{ clickCount }}</p>
        </div>
        <p class="status-pill">{{ demoStatus }}</p>
        <div class="demo-controls">
          <button type="button" class="ctrl o" @click="demoStep = 0">1 只有 HTML</button>
          <button type="button" class="ctrl b" @click="demoStep = 1">2 加上 CSS</button>
          <button type="button" class="ctrl y" @click="demoStep = 2">3 加上 JavaScript</button>
        </div>
      </div>
      <div class="code-explain">
        <strong>📝 当前代码解释</strong>
        <pre class="codebox">{{ demoCode }}</pre>
        <p class="explain-text">{{ demoExplain }}</p>
      </div>
    </article>

    <DiamondDivider />

    <!-- 电器插座 -->
    <article id="socket" class="card socket-card">
      <h2 class="socket-title">
        <span class="plug" aria-hidden="true">🔌</span>
        用电器和插座理解前后端开发
      </h2>
      <p class="socket-sub"><span class="orange-bar">|</span> 什么是前端、接口和后端？</p>
      <div class="flow3">
        <div class="f3 fe2">
          <span class="e">📱💻🖥️</span>
          <h3>电子设备 = 前端</h3>
          <ul>
            <li>你直接使用的手机、电脑</li>
            <li>看得见、摸得着</li>
            <li>发出各种请求</li>
          </ul>
        </div>
        <div class="arrow-col">
          <span class="a1">插上插头</span>
          <span class="a2">发送请求 →</span>
        </div>
        <div class="f3 api">
          <span class="e">🔌</span>
          <h3>插座 = 接口 (API)</h3>
          <ul>
            <li>标准化约定</li>
            <li>连接前端与后端</li>
            <li>不同设备都能用</li>
          </ul>
        </div>
        <div class="arrow-col">
          <span class="a1">墙后电线</span>
          <span class="a2">← 返回响应</span>
        </div>
        <div class="f3 be2">
          <span class="e">🏭⚡🔧</span>
          <h3>墙后的系统 = 后端</h3>
          <ul>
            <li>用户看不到的调度与计算</li>
            <li>业务规则与安全</li>
            <li>数据存储与查询</li>
          </ul>
        </div>
      </div>
      <div class="socket-sum">
        <strong>核心理解：</strong>手机（前端）要充电，只要把充电器插进插座（接口），就能用上墙后的电网（后端）。做应用时同理：App
        通过 API 发请求，服务器处理完再返回结果——用户会<strong>用 App</strong>即可，不必知道机房里的复杂度。
      </div>
    </article>

    <DiamondDivider />

    <!-- 模拟请求 -->
    <article id="sim" class="card sim-wrap">
      <h2 class="head-lab">
        <span class="bar" />
        <span>📡 前后端交互演示（模拟真实请求）</span>
      </h2>
      <p class="body">在前端操作，观察数据如何流经接口到达后端，再返回前端（全流程在浏览器内模拟）。</p>

      <div class="stepper">
        <button
          v-for="(s, i) in flowLabels"
          :key="s"
          type="button"
          class="step-pill"
          :class="{ active: flowIndex === i, done: flowIndex > i }"
          @click="flowIndex = i"
        >
          {{ i + 1 }} {{ s }}
        </button>
      </div>
      <div class="sim-actions">
        <button type="button" class="btn-go" :disabled="playing" @click="playListFlow">▶ 演示：获取用户列表</button>
        <button type="button" class="btn-reset" :disabled="playing" @click="resetSim">重置演示</button>
      </div>

      <div class="sim-cols">
        <div class="col fe-col">
          <h3>💻 前端（用户设备）</h3>
          <label>姓名 <input v-model="formName" type="text" placeholder="例如：张三" /></label>
          <label>邮箱 <input v-model="formEmail" type="email" placeholder="name@example.com" /></label>
          <button type="button" class="btn-brown" :disabled="playing" @click="playAddFlow">+ 添加用户</button>
          <button type="button" class="btn-outline" :disabled="playing" @click="playListFlow">获取用户列表</button>
          <p v-if="feHint" class="hint">{{ feHint }}</p>
          <ul class="user-list">
            <li v-for="u in users" :key="u.id">
              <span>{{ u.name }} <small>{{ u.email }}</small></span>
              <button type="button" class="linkish" @click="removeUser(u.id)">删除</button>
            </li>
          </ul>
        </div>
        <div class="col mid-col">
          <h3>🔌 接口数据（请求 & 响应）</h3>
          <div class="req-box">
            <strong>前端发送的请求</strong>
            <pre>{{ lastReq || '（等待操作）' }}</pre>
          </div>
          <div class="res-box">
            <strong>后端返回的响应</strong>
            <pre>{{ lastRes || '（等待操作）' }}</pre>
          </div>
          <p class="api-note">
            接口的作用：前端按约定格式发请求，后端按约定格式回 JSON；双方<strong>只认协议</strong>，替换实现也不影响对方。
          </p>
        </div>
        <div class="col be-col">
          <h3>🖥 后端（服务器处理）</h3>
          <p class="srv"><span class="dotg" /> 服务器状态：<strong>运行中</strong></p>
          <div class="log-box">
            <strong>处理日志</strong>
            <pre>{{ logs.join('\n') || '…' }}</pre>
          </div>
          <div class="db-mini">
            <strong>users 数据表</strong>
            <table>
              <thead>
                <tr><th>id</th><th>name</th><th>email</th></tr>
              </thead>
              <tbody>
                <tr v-for="u in users" :key="'db' + u.id">
                  <td>{{ u.id }}</td>
                  <td>{{ u.name }}</td>
                  <td>{{ u.email }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>

    <DiamondDivider />

    <!-- 多语言后端 -->
    <article id="langs" class="card">
      <h2 class="head-lab">
        <span class="bar" />
        <span>💻 同一功能，不同语言写法</span>
      </h2>
      <p class="body">「获取所有用户」这个 API，在不同后端框架中的写法示意：</p>
      <div class="lang-grid">
        <div class="lang-card node">
          <div class="lang-h">Node.js + Express</div>
          <pre>app.get('/api/users', (req, res) =&gt; {
  res.json(users);
});</pre>
        </div>
        <div class="lang-card py">
          <div class="lang-h">Python + FastAPI</div>
          <pre>@app.get("/api/users")
def get_users():
    return users</pre>
        </div>
        <div class="lang-card go">
          <div class="lang-h">Go + Gin</div>
          <pre>r.GET("/api/users", func(c *gin.Context) {
  c.JSON(200, users)
})</pre>
        </div>
      </div>
      <div class="advice">
        <strong>选择建议</strong>
        <ul>
          <li>会 JavaScript、想做全栈 → <strong>Node.js</strong></li>
          <li>想上手曲线平缓 → <strong>Python</strong>（FastAPI 还带自动 API 文档）</li>
          <li>追求极致性能与部署 → <strong>Go</strong></li>
        </ul>
      </div>
    </article>

    <nav class="bottom-nav">
      <RouterLink to="/" class="btn ghost">← 课程首页</RouterLink>
      <RouterLink to="/terminal" class="btn primary">相关：认识终端与 Shell →</RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import AppLessonNav from '@/components/AppLessonNav.vue'
import SectionHeaderLight from '@/components/SectionHeaderLight.vue'
import DiamondDivider from '@/components/DiamondDivider.vue'

const anchors = [
  { id: 'what-fe', t: '什么是前端' },
  { id: 'restaurant', t: '餐厅类比' },
  { id: 'triple', t: '三件套' },
  { id: 'demo-triple', t: '演示' },
  { id: 'socket', t: '插座类比' },
  { id: 'sim', t: '交互模拟' },
  { id: 'langs', t: '多语言' },
]

let idSeq = 2
const users = ref([
  { id: 1, name: '张三', email: 'zhangsan@example.com' },
  { id: 2, name: '李四', email: 'lisi@example.com' },
])

const demoStep = ref(0)
const clickCount = ref(0)

const demoStatus = computed(() => {
  if (demoStep.value === 0) return '当前状态：只有 HTML（浏览器默认样式）'
  if (demoStep.value === 1) return '当前状态：HTML + CSS（好看了，但点击还没逻辑）'
  return '当前状态：HTML + CSS + JavaScript（完整交互）'
})

const demoCode = computed(() => {
  if (demoStep.value === 0) return '<button>点击我</button>'
  if (demoStep.value === 1)
    return `<button class="btn">点击我</button>

.btn { background: #4a7c59; color: #fff; … }`
  return `<button class="btn" onclick="handleClick()">点击我</button>

function handleClick() {
  clickCount++;
}`
})

const demoExplain = computed(() => {
  if (demoStep.value === 0) return '纯 HTML 只声明「这里有个按钮」，浏览器用系统默认样式渲染。'
  if (demoStep.value === 1) return 'CSS 负责颜色、圆角、间距——界面变好看，但点击仍不会计数。'
  return 'JavaScript 监听点击并更新状态，按钮才真正「活」起来。'
})

function onDemoClick() {
  if (demoStep.value >= 2) clickCount.value++
}

const flowLabels = ['前端操作', '发送请求', '后端处理', '数据库操作', '返回响应', '前端更新'] as const
const flowIndex = ref(0)
const playing = ref(false)
const lastReq = ref('')
const lastRes = ref('')
const logs = ref<string[]>([])
const feHint = ref('')

const formName = ref('')
const formEmail = ref('')

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

function resetSim() {
  flowIndex.value = 0
  lastReq.value = ''
  lastRes.value = ''
  logs.value = []
  feHint.value = ''
}

async function playListFlow() {
  if (playing.value) return
  playing.value = true
  resetSim()
  const snapshot = users.value.map((u) => ({ ...u }))
  flowIndex.value = 0
  feHint.value = '准备拉取列表…'
  await sleep(400)
  flowIndex.value = 1
  lastReq.value = `Method: GET\nURL: /api/users\nHeaders: { "Accept": "application/json" }`
  feHint.value = '请求发送中…'
  await sleep(500)
  flowIndex.value = 2
  logs.value = ['PROCESS 连接数据库…']
  await sleep(450)
  flowIndex.value = 3
  logs.value.push('PROCESS 执行 SELECT * FROM users')
  await sleep(450)
  flowIndex.value = 4
  lastRes.value = `Status: 200\nContent-Type: application/json\n\n${JSON.stringify({ success: true, count: snapshot.length, data: snapshot }, null, 2)}`
  logs.value.push(`GET 返回 ${snapshot.length} 条用户数据`)
  await sleep(450)
  flowIndex.value = 5
  feHint.value = '列表已根据响应更新（演示）。'
  playing.value = false
}

async function playAddFlow() {
  if (playing.value) return
  const name = formName.value.trim()
  const email = formEmail.value.trim()
  if (!name || !email) {
    feHint.value = '请填写姓名和邮箱。'
    return
  }
  playing.value = true
  resetSim()
  flowIndex.value = 0
  feHint.value = '填写完毕，准备提交…'
  await sleep(350)
  flowIndex.value = 1
  lastReq.value = `Method: POST\nURL: /api/users\nHeaders: { "Content-Type": "application/json" }\n\nBody:\n${JSON.stringify({ name, email }, null, 2)}`
  feHint.value = '请求发送中…'
  await sleep(500)
  flowIndex.value = 2
  logs.value = [`PROCESS 校验参数 OK`]
  await sleep(400)
  flowIndex.value = 3
  idSeq += 1
  const newId = idSeq
  logs.value.push(`PROCESS INSERT INTO users (name, email) VALUES ('${name}', '${email}')`)
  logs.value.push('PROCESS 写入成功，影响行数: 1')
  await sleep(450)
  flowIndex.value = 4
  const created = { id: newId, name, email }
  lastRes.value = `Status: 201 Created\n\n${JSON.stringify({ success: true, message: '用户创建成功', user: created }, null, 2)}`
  logs.value.push('POST 用户创建成功，返回新用户数据')
  await sleep(450)
  flowIndex.value = 5
  users.value = [...users.value, created]
  formName.value = ''
  formEmail.value = ''
  feHint.value = '前端已把新用户插入列表。'
  playing.value = false
}

function removeUser(id: number) {
  users.value = users.value.filter((u) => u.id !== id)
}
</script>

<style scoped>
.page {
  max-width: 920px;
  margin: 0 auto;
  padding: 1.5rem 1.1rem 4rem;
  background: var(--paper-bg);
}
.top {
  text-align: center;
  margin-bottom: 1rem;
}
.serif {
  margin: 0 0 0.5rem;
  font-family: var(--font-serif);
  font-size: clamp(1.35rem, 3vw, 1.85rem);
  color: var(--forest-dark);
}
.deck {
  margin: 0;
  color: var(--muted);
  line-height: 1.65;
  font-size: 0.95rem;
}
.toc {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.toc a {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  background: var(--paper-card);
  border: 1px solid rgba(74, 124, 89, 0.22);
  color: var(--forest);
}
.card {
  background: var(--paper-card);
  border-radius: 20px;
  padding: 1.6rem 1.45rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(51, 65, 85, 0.45);
}
.body {
  margin: 0;
  color: var(--body);
  line-height: 1.75;
  font-size: 0.95rem;
}
.sublead {
  margin-bottom: 1rem;
}
.hi {
  color: var(--forest);
  font-weight: 600;
}
.tri {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.85rem;
  margin-bottom: 1.25rem;
}
@media (max-width: 720px) {
  .tri {
    grid-template-columns: 1fr;
  }
}
.tri-card {
  border-radius: 14px;
  padding: 1rem;
  border: 1px solid rgba(71, 85, 105, 0.45);
  text-align: center;
}
.tri-card.fe {
  border-color: rgba(59, 130, 246, 0.35);
  background: linear-gradient(180deg, rgba(30, 58, 138, 0.35), var(--paper-card));
}
.tri-card.be {
  border-color: rgba(124, 58, 237, 0.3);
  background: linear-gradient(180deg, rgba(76, 29, 149, 0.28), var(--paper-card));
}
.tri-card.db {
  border-color: rgba(217, 119, 6, 0.35);
  background: linear-gradient(180deg, rgba(120, 53, 15, 0.3), var(--paper-card));
}
.tri-card h3 {
  margin: 0.35rem 0 0.5rem;
  font-size: 0.95rem;
  color: var(--forest-dark);
}
.tri-card p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.55;
  text-align: left;
}
.emoji {
  font-size: 1.75rem;
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
@media (max-width: 640px) {
  .grid2 {
    grid-template-columns: 1fr;
  }
}
.sub {
  border: 1px solid rgba(71, 85, 105, 0.4);
  border-radius: 14px;
  padding: 1rem;
  background: rgba(30, 41, 59, 0.45);
}
.sub h4 {
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
  color: var(--forest-dark);
  font-family: var(--font-mono);
}
.sub ul {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.88rem;
  color: var(--body);
  line-height: 1.65;
}
.sum {
  padding: 1rem 1.15rem;
  border-radius: 14px;
  background: rgba(20, 83, 45, 0.22);
  border: 1px solid rgba(34, 197, 94, 0.25);
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--body);
}
.sum-sub {
  margin: 0.5rem 0 0;
  font-size: 0.88rem;
  color: var(--muted);
}
.trio {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1rem;
}
@media (max-width: 640px) {
  .trio {
    grid-template-columns: 1fr;
  }
}
.trio-card {
  text-align: center;
  padding: 1rem 0.75rem;
  border-radius: 14px;
  border-width: 2px;
  border-style: solid;
}
.trio-card.html {
  border-color: #f87171;
  background: rgba(127, 29, 29, 0.22);
}
.trio-card.css {
  border-color: #60a5fa;
  background: rgba(30, 58, 138, 0.25);
}
.trio-card.js {
  border-color: #eab308;
  background: rgba(113, 63, 18, 0.28);
}
.trio-card strong {
  display: block;
  margin: 0.35rem 0;
  font-size: 1.05rem;
}
.trio-card.html strong {
  color: #b91c1c;
}
.trio-card.css strong {
  color: #1d4ed8;
}
.trio-card.js strong {
  color: #a16207;
}
.tag {
  font-size: 0.8rem;
  color: var(--muted);
}
.big {
  font-size: 2rem;
}
.pills-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.35rem 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(30, 41, 59, 0.55);
  border: 1px solid rgba(71, 85, 105, 0.35);
  border-radius: 12px;
  font-size: 0.82rem;
  color: var(--body);
}
.sep {
  color: #64748b;
}
.head-lab {
  display: flex;
  align-items: stretch;
  gap: 0.65rem;
  margin: 0 0 0.75rem;
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  font-weight: 700;
  color: var(--forest-dark);
}
.head-lab .bar {
  width: 4px;
  border-radius: 2px;
  background: var(--forest);
}
.lab {
  border: 2px dashed rgba(100, 116, 139, 0.45);
  border-radius: 16px;
  padding: 1.25rem 1rem;
  margin: 1rem 0;
  background: rgba(15, 23, 42, 0.65);
}
.dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid rgba(148, 163, 184, 0.45);
  background: var(--paper-card);
}
.dot.on {
  border-color: var(--forest);
  background: var(--forest);
}
.dot.big {
  width: 11px;
  height: 11px;
}
.badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.badge {
  font-size: 0.78rem;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  background: rgba(51, 65, 85, 0.55);
  color: var(--muted);
  font-family: var(--font-mono);
}
.badge.ok {
  background: rgba(6, 78, 59, 0.45);
  color: #86efac;
}
.badge.off {
  background: rgba(30, 41, 59, 0.75);
  color: #94a3b8;
}
.demo-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-height: 5rem;
}
.demo-btn {
  font-size: 1rem;
  padding: 0.55rem 1.4rem;
  border-radius: 10px;
  border: 2px solid rgba(71, 85, 105, 0.65);
  background: rgba(30, 41, 59, 0.85);
  color: #e2e8f0;
  font-family: var(--font-mono);
}
.demo-btn.s1 {
  border-color: rgba(34, 197, 94, 0.55);
  background: linear-gradient(135deg, #14532d, #166534);
  color: #f0fdf4;
  box-shadow: 0 4px 18px rgba(22, 101, 52, 0.35);
}
.demo-btn.s2 {
  border-color: rgba(34, 197, 94, 0.55);
  background: linear-gradient(135deg, #14532d, #166534);
  color: #f0fdf4;
  box-shadow: 0 4px 18px rgba(22, 101, 52, 0.35);
  cursor: pointer;
}
.count {
  margin: 0;
  font-size: 0.9rem;
  color: var(--muted);
}
.status-pill {
  text-align: center;
  margin: 0.75rem auto 0;
  max-width: 95%;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: var(--paper-card);
  border: 1px solid rgba(71, 85, 105, 0.45);
  font-size: 0.82rem;
  color: var(--muted);
  font-family: var(--font-mono);
}
.demo-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}
.ctrl {
  border: none;
  border-radius: 10px;
  padding: 0.5rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: filter 0.2s ease, opacity 0.2s ease;
}
.ctrl:hover {
  filter: brightness(1.08);
}
.ctrl.o {
  background: #ea580c;
}
.ctrl.b {
  background: #2563eb;
}
.ctrl.y {
  background: #ca8a04;
}
.code-explain {
  margin-top: 1.25rem;
  padding: 1rem 1.1rem;
  border-radius: 12px;
  background: rgba(120, 53, 15, 0.22);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-left: 4px solid var(--forest);
}
.code-explain strong {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--forest-dark);
}
.codebox {
  margin: 0 0 0.5rem;
  padding: 0.75rem;
  background: #1e1e1e;
  color: #d4d4d4;
  border-radius: 8px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  line-height: 1.5;
  overflow-x: auto;
  white-space: pre-wrap;
}
.explain-text {
  margin: 0;
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.6;
}
.socket-card {
  background: linear-gradient(180deg, rgba(30, 27, 22, 0.5), var(--paper-card));
}
.socket-title {
  margin: 0 0 0.35rem;
  font-family: var(--font-mono);
  font-size: 1.15rem;
  letter-spacing: -0.02em;
  color: #e2e8f0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.plug {
  font-size: 1.35rem;
}
.socket-sub {
  margin: 0 0 1.25rem;
  font-size: 0.95rem;
  color: var(--body);
}
.orange-bar {
  color: #ea580c;
  font-weight: 700;
  margin-right: 0.35rem;
}
.flow3 {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 0.35rem 0.5rem;
  align-items: center;
  margin-bottom: 1.25rem;
}
@media (max-width: 860px) {
  .flow3 {
    grid-template-columns: 1fr;
  }
  .arrow-col {
    transform: rotate(90deg);
    margin: 0.25rem 0;
  }
}
.f3 {
  border: 1px solid rgba(71, 85, 105, 0.45);
  border-radius: 14px;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.35);
}
.f3 h3 {
  margin: 0.35rem 0 0.5rem;
  font-size: 0.95rem;
  color: #e2e8f0;
}
.f3 ul {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.85rem;
  color: var(--body);
  line-height: 1.6;
}
.f3 .e {
  font-size: 1.35rem;
}
.arrow-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.72rem;
  color: var(--muted);
  min-width: 4.5rem;
  font-family: var(--font-mono);
}
.a2 {
  color: var(--forest);
  font-weight: 600;
  white-space: nowrap;
}
.socket-sum {
  padding: 1rem 1.15rem;
  border-radius: 12px;
  background: rgba(30, 27, 22, 0.55);
  border: 1px solid rgba(120, 113, 108, 0.35);
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--body);
}
.sim-wrap .stepper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 1rem 0;
}
.step-pill {
  font-size: 0.7rem;
  padding: 0.35rem 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(71, 85, 105, 0.45);
  background: rgba(15, 23, 42, 0.65);
  color: var(--muted);
  font-family: var(--font-mono);
}
.step-pill.active {
  background: linear-gradient(135deg, #0e7490, #155e75);
  color: #f8fafc;
  border-color: rgba(34, 211, 238, 0.45);
}
.step-pill.done {
  background: rgba(20, 83, 45, 0.35);
  border-color: var(--forest);
  color: var(--forest-dark);
}
.sim-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.btn-go {
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #14532d, #166534);
  color: #f0fdf4;
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;
  font-family: var(--font-mono);
  transition: filter 0.2s ease, opacity 0.2s ease;
}
.btn-go:hover:not(:disabled) {
  filter: brightness(1.08);
}
.btn-go:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
.btn-reset {
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(161, 98, 7, 0.45);
  background: rgba(113, 63, 18, 0.25);
  color: #fcd34d;
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;
  font-family: var(--font-mono);
  transition: background 0.2s ease, border-color 0.2s ease;
}
.btn-reset:hover:not(:disabled) {
  background: rgba(113, 63, 18, 0.4);
}
.btn-reset:disabled {
  opacity: 0.55;
}
.sim-cols {
  display: grid;
  grid-template-columns: 1fr 1.1fr 1fr;
  gap: 0.85rem;
}
@media (max-width: 820px) {
  .sim-cols {
    grid-template-columns: 1fr;
  }
}
.sim-cols h3 {
  margin: 0 0 0.65rem;
  font-size: 0.9rem;
  color: var(--forest-dark);
}
.col {
  border: 1px solid rgba(71, 85, 105, 0.4);
  border-radius: 14px;
  padding: 1rem;
  background: rgba(30, 41, 59, 0.4);
}
.col label {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: var(--body);
}
.col input {
  width: 100%;
  margin-top: 0.2rem;
  padding: 0.45rem 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(71, 85, 105, 0.55);
  font-size: 0.85rem;
  background: rgba(15, 23, 42, 0.65);
  color: #e2e8f0;
}
.col input::placeholder {
  color: #64748b;
}
.btn-brown {
  width: 100%;
  margin-top: 0.65rem;
  padding: 0.55rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #7c2d12, #9a3412);
  color: #fff7ed;
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;
  font-family: var(--font-mono);
  transition: filter 0.2s ease;
}
.btn-brown:hover {
  filter: brightness(1.08);
}
.btn-outline {
  width: 100%;
  margin-top: 0.45rem;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid rgba(100, 116, 139, 0.55);
  background: rgba(15, 23, 42, 0.45);
  color: #e2e8f0;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  font-family: var(--font-mono);
  transition: border-color 0.2s ease, background 0.2s ease;
}
.btn-outline:hover {
  border-color: rgba(34, 211, 238, 0.35);
  background: rgba(15, 23, 42, 0.65);
}
.hint {
  font-size: 0.78rem;
  color: var(--muted);
  margin: 0.5rem 0 0;
  min-height: 1.2em;
}
.user-list {
  list-style: none;
  margin: 0.75rem 0 0;
  padding: 0;
  font-size: 0.82rem;
}
.user-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(51, 65, 85, 0.5);
}
.user-list small {
  color: var(--muted);
}
.linkish {
  border: none;
  background: none;
  color: #38bdf8;
  font-size: 0.78rem;
  text-decoration: underline;
  padding: 0;
  cursor: pointer;
}
.linkish:hover {
  color: #7dd3fc;
}
.req-box,
.res-box,
.log-box {
  margin-bottom: 0.65rem;
}
.req-box strong,
.res-box strong,
.log-box strong {
  font-size: 0.78rem;
  color: var(--muted);
}
.req-box pre,
.res-box pre,
.log-box pre {
  margin: 0.35rem 0 0;
  padding: 0.55rem;
  background: #1e1e1e;
  color: #c8e6c9;
  border-radius: 8px;
  font-size: 0.68rem;
  line-height: 1.45;
  max-height: 140px;
  overflow: auto;
  white-space: pre-wrap;
}
.api-note {
  font-size: 0.75rem;
  color: var(--muted);
  line-height: 1.55;
  margin: 0;
}
.srv {
  font-size: 0.85rem;
  margin: 0 0 0.5rem;
}
.dotg {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  margin-right: 0.25rem;
}
.db-mini table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.72rem;
  margin-top: 0.35rem;
}
.db-mini th,
.db-mini td {
  border: 1px solid rgba(71, 85, 105, 0.45);
  padding: 0.3rem 0.35rem;
  text-align: left;
}
.db-mini th {
  background: rgba(20, 83, 45, 0.28);
  color: #bbf7d0;
  font-family: var(--font-mono);
}
.lang-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin: 1rem 0;
}
@media (max-width: 720px) {
  .lang-grid {
    grid-template-columns: 1fr;
  }
}
.lang-card {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(71, 85, 105, 0.45);
}
.lang-h {
  padding: 0.5rem 0.65rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: #f8fafc;
  font-family: var(--font-mono);
}
.lang-card.node .lang-h {
  background: linear-gradient(90deg, #14532d, #166534);
}
.lang-card.py .lang-h {
  background: linear-gradient(90deg, #7c2d12, #9a3412);
}
.lang-card.go .lang-h {
  background: linear-gradient(90deg, #854d0e, #a16207);
  color: #fffbeb;
}
.lang-card pre {
  margin: 0;
  padding: 0.65rem;
  background: rgba(15, 23, 42, 0.75);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  line-height: 1.45;
  color: #e2e8f0;
  white-space: pre-wrap;
}
.advice {
  margin-top: 1rem;
  padding: 1rem 1.1rem;
  border-radius: 12px;
  background: rgba(120, 53, 15, 0.2);
  border: 1px solid rgba(245, 158, 11, 0.18);
  border-left: 4px solid #d9a441;
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--body);
}
.advice ul {
  margin: 0.5rem 0 0;
  padding-left: 1.1rem;
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
  padding: 0.55rem 1rem;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
}
.btn.ghost {
  background: rgba(15, 23, 42, 0.45);
  border: 1px solid rgba(71, 85, 105, 0.55);
  color: var(--body);
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
}
.btn.ghost:hover {
  border-color: rgba(34, 211, 238, 0.35);
  background: rgba(15, 23, 42, 0.65);
}
.btn.primary {
  background: var(--forest);
  color: #fff;
  border: 1px solid transparent;
  cursor: pointer;
  transition: filter 0.2s ease;
}
.btn.primary:hover {
  filter: brightness(1.08);
}
</style>
