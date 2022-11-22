<template>
  <div class="result">
    <div class="result-box">
      <h1>{{ strength }}</h1>

      <div class="result-level">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ResultPassword",
  props: ["strength"],
};
</script>
<style scoped>
.result .result-box {
  display: flex;
  justify-content: space-between;
  background: var(--color-dark);
  padding: 20px 25px;
  margin-block: 20px;
}

.result .result-box h1 {
  font-size: 25px;
  font-weight: 500;
}

.result .result-box .result-level {
  display: flex;
  column-gap: 10px;
  align-items: stretch;
}

.result .result-box .result-level div {
  border: 1.5px solid white;
  width: 13px;
}
</style>
