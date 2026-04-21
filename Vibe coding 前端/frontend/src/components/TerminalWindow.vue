<template>
  <div class="tw" :class="{ compact }">
    <div class="titlebar">
      <span class="dots">
        <i class="r" /><i class="y" /><i class="g" />
      </span>
      <span class="title">{{ title }}</span>
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    compact?: boolean
  }>(),
  { title: 'Terminal', compact: false },
)
</script>

<style scoped>
.tw {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.55;
}
.tw.compact {
  font-size: 0.8rem;
}
.titlebar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #2a2d33;
  padding: 8px 12px;
  border-bottom: 1px solid #1a1c20;
}
.dots {
  position: absolute;
  left: 12px;
  display: flex;
  gap: 6px;
}
.dots i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
}
.dots .r {
  background: #ff5f56;
}
.dots .y {
  background: #ffbd2e;
}
.dots .g {
  background: #27c93f;
}
.title {
  color: #9aa0a6;
  font-size: 0.72rem;
}
.body {
  background: #1e1e1e;
  color: #e8e8e8;
  padding: 1rem 1.1rem;
  min-height: 3.5rem;
}
</style>
