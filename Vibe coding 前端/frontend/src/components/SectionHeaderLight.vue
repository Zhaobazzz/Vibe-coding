<template>
  <h2 class="head">
    <span class="bar" aria-hidden="true" />
    <span class="text"><slot /></span>
  </h2>
</template>

<style scoped>
.head {
  display: flex;
  align-items: stretch;
  gap: 0.75rem;
  margin: 0 0 1rem;
  font-family: var(--font-mono);
  font-size: clamp(1.05rem, 2.2vw, 1.28rem);
  font-weight: 600;
  color: var(--forest-dark);
  line-height: 1.35;
  letter-spacing: -0.01em;
}
.bar {
  width: 3px;
  min-height: 1.4em;
  border-radius: 2px;
  background: linear-gradient(180deg, var(--accent-cyan), var(--accent-mint));
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.35);
}
.text {
  flex: 1;
}
</style>
