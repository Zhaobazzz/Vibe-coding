<template>
  <nav class="nav" :class="{ dark }">
    <RouterLink to="/" class="back">← 课程首页</RouterLink>
    <span v-if="label" class="sep">/</span>
    <span v-if="label" class="here mono">{{ label }}</span>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  dark?: boolean
  label?: string
}>()
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
  font-size: 0.8rem;
  margin-bottom: 1.15rem;
}
.mono {
  font-family: var(--font-mono);
}
.back {
  display: inline-flex;
  padding: 0.32rem 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--geek-border);
  background: rgba(15, 23, 42, 0.75);
  color: #cbd5e1;
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.02em;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}
.back:hover {
  border-color: rgba(34, 211, 238, 0.45);
  color: #f1f5f9;
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.12);
}
.nav.dark .back {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(2, 6, 23, 0.55);
  color: #94a3b8;
}
.nav.dark .back:hover {
  color: #f8fafc;
  border-color: rgba(34, 211, 238, 0.5);
  box-shadow: 0 0 22px rgba(34, 211, 238, 0.15);
}
.sep {
  color: #64748b;
}
.here {
  color: #94a3b8;
  font-weight: 500;
}
.nav.dark .here {
  color: #cbd5e1;
}
</style>
