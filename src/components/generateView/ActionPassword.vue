<template>
  <div class="action">
    <button @click="generatePassword" :disabled="!getIsAnyTrueQuery">
      {{ generate }}
      <i class="gg-arrow-long-right-c"></i>
    </button>
  </div>
</template>
<script>
// Pinia
import { mapActions, mapState } from "pinia"
import { useGenerateStore } from "../../stores/generate"

export default {
  name: "ActionPassword",
  props: ["generate"],
  computed: {
    ...mapState(useGenerateStore, ["getIsAnyTrueQuery"]),
  },
  methods: {
    ...mapActions(useGenerateStore, ["generatePassword"]),
  },
}
</script>
<style scoped>
.action {
  width: 100%;
}

.action button {
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
  border: none;
  transition: background-color 0.4s ease-in;
}

.action button:disabled {
  background-color: brown;
  cursor: default;
}

.action button:hover {
  opacity: 0.8;
}

.gg-arrow-long-right-c {
  margin-left: 20px;
  color: var(--color-dark);
}
</style>
