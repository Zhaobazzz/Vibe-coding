<template>
  <article class="card">
    <header>
      <span class="icon" aria-hidden="true">{{ icon }}</span>
      <h3 class="title">{{ title }}</h3>
      <span class="step">{{ step }}</span>
    </header>
    <div class="code">
      <button type="button" class="copy" @click="copy">复制</button>
      <code>{{ command }}</code>
    </div>
    <p class="desc">{{ description }}</p>
    <footer>
      <span class="label">何时用：</span>{{ when }}
    </footer>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
  title: string
  step: number
  command: string
  description: string
  when: string
}>()

async function copy() {
  try {
    await navigator.clipboard.writeText(props.command)
  } catch {
    /* ignore */
  }
}
</script>

<style scoped>
.card {
  background: rgba(26, 29, 35, 0.92);
  border: 1px solid rgba(79, 172, 254, 0.2);
  border-radius: 16px;
  padding: 1.1rem 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  backdrop-filter: blur(8px);
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.card:hover {
  transform: translateY(-2px);
  border-color: rgba(79, 172, 254, 0.45);
}
header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.icon {
  font-size: 1.25rem;
}
.title {
  flex: 1;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #e8ecf1;
}
.step {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--accent-gold);
  color: var(--accent-gold);
  font-size: 0.8rem;
  font-weight: 600;
  display: grid;
  place-items: center;
}
.code {
  position: relative;
  background: #12151a;
  border-radius: 10px;
  padding: 0.75rem 0.85rem;
  border: 1px solid rgba(66, 211, 146, 0.25);
}
.code code {
  color: #5ef3a9;
  font-size: 0.82rem;
  word-break: break-all;
}
.copy {
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 0.65rem;
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: #c8cdd4;
}
.copy:hover {
  background: rgba(255, 255, 255, 0.12);
}
.desc {
  margin: 0;
  color: #b4bcc8;
  font-size: 0.88rem;
  line-height: 1.55;
}
footer {
  font-size: 0.8rem;
  color: #8b95a5;
  line-height: 1.5;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 0.65rem;
}
.label {
  color: var(--accent-cyan);
  font-weight: 500;
}
</style>
