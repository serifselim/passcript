<template>
  <div class="options">
    <div>
      <input type="checkbox" v-model="queries.isUpper" id="upper" value="1" />
      <label for="upper">{{ generate.upper }}</label>
    </div>
    <div>
      <input type="checkbox" v-model="queries.isLower" id="lower" value="1" />
      <label for="lower">{{ generate.lower }}</label>
    </div>
    <div>
      <input type="checkbox" v-model="queries.isNumber" id="number" value="1" />
      <label for="number">{{ generate.number }}</label>
    </div>
    <div>
      <input type="checkbox" v-model="queries.isSymbol" id="symbol" value="1" />
      <label for="symbol">{{ generate.symbol }}</label>
    </div>
  </div>
</template>
<script>
// Pinia
import { mapState } from "pinia"
import { useGenerateStore } from "../../stores/generate"

export default {
  name: "OptionPassword",
  props: ["generate"],
  computed: {
    ...mapState(useGenerateStore, ["queries"]),
  },
}
</script>
<style scoped>
.generate .options {
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 10px;
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
