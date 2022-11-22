<template>
  <div class="options">
    <div>
      <input type="checkbox" id="upper" value="1" />
      <label for="upper">{{ generate.upper }}</label>
    </div>
    <div>
      <input type="checkbox" id="lower" value="1" />
      <label for="lower">{{ generate.lower }}</label>
    </div>
    <div>
      <input type="checkbox" id="number" value="1" />
      <label for="number">{{ generate.number }}</label>
    </div>
    <div>
      <input type="checkbox" id="symbol" value="1" />
      <label for="symbol">{{ generate.symbol }}</label>
    </div>
  </div>
</template>
<script>
export default {
  name: "OptionPassword",
  props: ["generate"],
};
</script>
<style scoped>
.generate .options {
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 20px;
}

.generate .options label {
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
}

.generate .result {
  width: 100%;
  margin-block: 20px;
  padding: 10px;
}
</style>
