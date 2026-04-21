<template>
  <Teleport to="body">
    <div v-if="open" class="backdrop" @click.self="close">
      <dialog class="dlg" open aria-labelledby="cpu-dlg-title">
        <button type="button" class="x" aria-label="关闭" @click="close">×</button>
        <h2 id="cpu-dlg-title">CPU 的基本模型</h2>
        <p class="intro">简化示意图：ALU、寄存器、控制单元与总线如何协同完成取指与执行。</p>
        <div class="svg-wrap" v-html="svg" />
        <p class="tip">提示：把鼠标移到色块上可看到简短说明（教学演示）。</p>
      </dialog>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 320" class="cpu-svg">
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z" fill="#1abc9c"/>
    </marker>
  </defs>
  <rect x="8" y="8" width="504" height="304" fill="none" stroke="#3498db" stroke-width="2" stroke-dasharray="8 6" rx="8"/>
  <text x="24" y="32" fill="#3498db" font-size="13" font-family="system-ui">CPU 边界（示意）</text>
  <rect class="hit" x="200" y="48" width="120" height="44" rx="6" fill="#1abc9c" opacity="0.9">
    <title>ALU：算术逻辑单元，执行加减与逻辑运算</title>
  </rect>
  <text x="220" y="75" fill="#063" font-size="12" font-weight="700">ALU</text>
  <rect class="hit" x="40" y="120" width="100" height="36" rx="6" fill="#d2b4de">
    <title>程序计数器 PC：下一条指令地址</title>
  </rect>
  <text x="52" y="142" fill="#333" font-size="11">PC</text>
  <rect class="hit" x="160" y="120" width="100" height="36" rx="6" fill="#d2b4de">
    <title>指令寄存器 IR：当前指令</title>
  </rect>
  <text x="168" y="142" fill="#333" font-size="11">IR</text>
  <rect class="hit" x="280" y="120" width="100" height="36" rx="6" fill="#d2b4de">
    <title>累加器 AC：运算中间结果</title>
  </rect>
  <text x="292" y="142" fill="#333" font-size="11">AC</text>
  <rect class="hit" x="400" y="120" width="100" height="36" rx="6" fill="#d2b4de">
    <title>状态条件寄存器</title>
  </rect>
  <text x="408" y="142" fill="#333" font-size="11">状态</text>
  <rect class="hit" x="120" y="200" width="140" height="40" rx="6" fill="#f1c40f">
    <title>指令译码器：解释操作码</title>
  </rect>
  <text x="132" y="224" fill="#333" font-size="11">指令译码器</text>
  <rect class="hit" x="280" y="200" width="160" height="40" rx="6" fill="#e67e22">
    <title>操作控制器 / 时序：产生控制信号</title>
  </rect>
  <text x="292" y="224" fill="#fff" font-size="11">控制器 / 时序</text>
  <rect class="hit" x="40" y="260" width="100" height="44" rx="6" fill="#f1c40f">
    <title>存储器（外设于 CPU 芯片之外示意）</title>
  </rect>
  <text x="58" y="288" fill="#333" font-size="12">存储器</text>
  <rect class="hit" x="380" y="260" width="100" height="44" rx="6" fill="#aed6f1">
    <title>I/O：输入输出设备接口</title>
  </rect>
  <text x="410" y="288" fill="#1a5276" font-size="12">I/O</text>
  <line x1="90" y1="260" x2="90" y2="156" stroke="#1abc9c" stroke-width="4" marker-end="url(#arr)"/>
  <text x="96" y="210" fill="#1abc9c" font-size="10">地址/数据总线（示意）</text>
</svg>`

defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

function close() {
  emit('close')
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(15, 18, 24, 0.55);
  backdrop-filter: blur(4px);
  display: grid;
  place-items: center;
  padding: 1rem;
}
.dlg {
  position: relative;
  max-width: 640px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  margin: 0;
  border: none;
  border-radius: 16px;
  padding: 1.5rem 1.5rem 1.25rem;
  background: #fff;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
}
.dlg::backdrop {
  display: none;
}
.x {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: #f3f3f3;
  font-size: 1.4rem;
  line-height: 1;
  color: #555;
}
.x:hover {
  background: #e8e8e8;
}
h2 {
  margin: 0 2rem 0.5rem 0;
  font-size: 1.25rem;
  color: #c0392b;
}
.intro {
  margin: 0 0 1rem;
  font-size: 0.88rem;
  color: #555;
  line-height: 1.55;
}
.svg-wrap :deep(.cpu-svg) {
  width: 100%;
  height: auto;
  display: block;
}
.svg-wrap :deep(.hit) {
  cursor: help;
}
.tip {
  margin: 0.75rem 0 0;
  font-size: 0.78rem;
  color: #888;
}
</style>
