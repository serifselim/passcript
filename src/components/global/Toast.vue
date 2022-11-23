<template>
  <div id="toast-success" class="toast" role="alert">
    <div class="toast-text">{{ text }}</div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  props: ["text"],
}
</script>
<style scoped>
.toast {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px;
  margin-bottom: 16px;
  max-width: 500px;
  font-weight: 400;
  border-radius: 15px;
  background: var(--color-gray);
}
.toast-text {
  margin-left: 12px;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: var(--color-primary);
}
</style>
