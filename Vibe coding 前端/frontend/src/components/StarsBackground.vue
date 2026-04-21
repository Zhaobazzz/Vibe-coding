<template>
  <div class="stars" aria-hidden="true">
    <span v-for="n in count" :key="n" class="star" :style="starStyle(n)" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ count?: number }>(), { count: 80 })

function starStyle(seed: number) {
  const x = ((seed * 9301 + 49297) % 233280) / 2332.8
  const y = ((seed * 7919 + 104729) % 233280) / 2332.8
  const s = 0.5 + (seed % 5) * 0.35
  const d = 2 + (seed % 3)
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${d}px`,
    height: `${d}px`,
    opacity: String(s / 3),
    animationDelay: `${(seed % 10) * 0.4}s`,
  }
}
</script>

<style scoped>
.stars {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.star {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  animation: twinkle 4s ease-in-out infinite;
}
@keyframes twinkle {
  0%,
  100% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.55;
  }
}
</style>
