<template>
  <div class="show">
    <input readonly class="show-input" value="Lskj3498!" />
    <a href="#" class="show-copy">
      <i class="gg-copy"></i>
    </a>
  </div>
</template>
<script>
export default {
  name: "ShowPassword",
};
</script>
<style scoped>
.show {
  width: 100%;
  border-radius: 5px;
  padding: 10px 25px;
  background: var(--color-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.show .show-input {
  font-weight: bold;
  font-size: 35px;
  border: none;
  color: var(--color-gray-text);
}

.show .show-input:focus {
  outline: none;
}

.gg-copy {
  color: var(--color-primary);
}
</style>
