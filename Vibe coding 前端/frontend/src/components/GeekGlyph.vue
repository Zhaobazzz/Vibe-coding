<template>
  <span class="wrap" aria-hidden="true">
    <svg v-if="name === 'compass'" class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="9" opacity="0.35" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="m10 10 4-2-2 4-2-2z" fill="currentColor" stroke="none" opacity="0.9" />
    </svg>
    <svg v-else-if="name === 'wrench'" class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
    <svg v-else-if="name === 'globe'" class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
    <svg v-else-if="name === 'book'" class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8M8 11h6" opacity="0.5" />
    </svg>
    <svg
      v-else-if="name === 'sparkles'"
      class="ico"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 3v2.5M12 18.5V21M5 12h2.5M16.5 12H19M7 7l1.8 1.8M15.2 15.2 17 17M7 17l1.8-1.8M15.2 8.8 17 7" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" opacity="0.9" />
    </svg>
    <svg
      v-else-if="name === 'layers'"
      class="ico"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect x="3" y="3" width="18" height="7" rx="1.5" opacity="0.95" />
      <rect x="3" y="13" width="10" height="8" rx="1.5" />
      <rect x="15" y="13" width="6" height="8" rx="1.5" />
    </svg>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  name: 'compass' | 'wrench' | 'globe' | 'book' | 'sparkles' | 'layers'
}>()
</script>

<style scoped>
.wrap {
  display: inline-flex;
  color: var(--glyph-color, #22d3ee);
  filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.35));
}
.ico {
  width: 1.65rem;
  height: 1.65rem;
}
</style>
