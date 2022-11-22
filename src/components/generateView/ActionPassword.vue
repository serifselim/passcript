<template>
  <div class="action">
    <button>
      {{ generate }}
      <i class="gg-arrow-long-right-c"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: "ActionPassword",
  props: ["generate"],
};
</script>
<style scoped>
.context .generate .action {
  width: 100%;
}

.context .generate .action button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  color: var(--color-dark);
  margin-bottom: 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
}

.context .generate .action button:hover {
  opacity: 0.8;
}

.gg-arrow-long-right-c {
  margin-left: 20px;
  color: var(--color-dark);
}
</style>
