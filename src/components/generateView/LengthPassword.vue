<template>
  <div class="generate-length">
    <div class="generate-length-up">
      <h3>{{ charLength }}</h3>
      <h1>{{ getPasswordLength }}</h1>
    </div>
    <div class="generate-length-down">
      <input type="range" class="slider" max="12" v-model="length" min="6" />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia"
import { useGenerateStore } from "../../stores/generate"
export default {
  name: "LengthPassword",
  props: ["charLength"],
  data: () => ({
    length: 6,
  }),
  computed: {
    ...mapState(useGenerateStore, ["getPasswordLength"]),
  },
  methods: {
    ...mapActions(useGenerateStore, ["setPasswordLength"]),
  },
  watch: {
    length() {
      this.setPasswordLength(this.length)
    },
  },
}
</script>
<style scoped>
.generate-length {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}

.generate-length .generate-length-up {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.generate-length .generate-length-up h1 {
  color: var(--color-primary);
}

.generate-length .generate-length-down {
  width: 100%;
  margin-top: 20px;
}

.slidecontainer {
  width: 100%;
}

.slider {
  width: 100%;
  height: 10px;
  background: var(--color-dark);
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background: var(--color-primary);
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: var(--color-primary);
  cursor: pointer;
}
</style>
