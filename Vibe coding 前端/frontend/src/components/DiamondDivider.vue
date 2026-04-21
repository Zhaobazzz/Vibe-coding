<template>
  <div class="wrap" role="separator">
    <span class="line" />
    <span class="diamond" />
    <span class="line" />
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin: 2rem 0;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}
.line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4cfc4, transparent);
}
.diamond {
  width: 10px;
  height: 10px;
  border: 1px solid #c4bfb2;
  transform: rotate(45deg);
  margin: 0 12px;
  flex-shrink: 0;
}
</style>
