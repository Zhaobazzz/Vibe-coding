<template>
  <div class="wrap">
    <code>{{ text }}</code>
    <button type="button" class="copy" @click="copy">复制</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()

async function copy() {
  try {
    await navigator.clipboard.writeText(props.text)
  } catch {
    /* ignore */
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.35rem;
}
code {
  flex: 1;
  min-width: 0;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  padding: 0.4rem 0.55rem;
  border-radius: 8px;
  background: #2d2a26;
  color: #c8f5c4;
  border: 2px solid #1a1815;
}
.copy {
  font-family: 'Patrick Hand', 'Ma Shan Zheng', var(--font-sans);
  font-size: 0.95rem;
  padding: 0.25rem 0.6rem;
  border-radius: 8px;
  border: 2px dashed #9a8b78;
  background: #fffef8;
  color: #5c5346;
}
.copy:hover {
  border-color: #6b5b45;
}
</style>
