<template>
  <div class="block">
    <div class="head">
      <span v-if="label" class="label">{{ label }}</span>
      <button type="button" class="copy" @click="copy">
        {{ state === 'ok' ? '已复制' : '复制' }}
      </button>
    </div>
    <pre class="pre" tabindex="0">{{ text }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  text: string
  label?: string
}>()

const state = ref<'idle' | 'ok'>('idle')
let timer: ReturnType<typeof setTimeout> | undefined

async function copy() {
  try {
    await navigator.clipboard.writeText(props.text)
    state.value = 'ok'
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      state.value = 'idle'
    }, 1600)
  } catch {
    state.value = 'idle'
  }
}
</script>

<style scoped>
.block {
  margin: 0.65rem 0 0.35rem;
  border-radius: 10px;
  border: 1px solid rgba(71, 85, 105, 0.65);
  background: rgba(15, 23, 42, 0.85);
  overflow: hidden;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.35rem 0.55rem 0.35rem 0.75rem;
  border-bottom: 1px solid rgba(51, 65, 85, 0.55);
  background: rgba(2, 6, 23, 0.35);
}
.label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #94a3b8;
  font-family: var(--font-mono);
}
.copy {
  flex-shrink: 0;
  font-size: 0.72rem;
  font-weight: 600;
  font-family: var(--font-mono);
  padding: 0.28rem 0.65rem;
  border-radius: 6px;
  border: 1px solid rgba(244, 114, 182, 0.45);
  background: rgba(244, 114, 182, 0.12);
  color: #fbcfe8;
  cursor: pointer;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}
.copy:hover {
  background: rgba(244, 114, 182, 0.22);
  border-color: rgba(244, 114, 182, 0.65);
}
.pre {
  margin: 0;
  padding: 0.65rem 0.75rem 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.76rem;
  line-height: 1.55;
  color: #e2e8f0;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: min(42vh, 22rem);
  overflow: auto;
}
</style>
