<template>
  <div class="show">
    <input
      readonly
      class="show-input"
      :value="getPassword"
      :placeholder="letsGenerate"
    />
    <a v-if="getPassword" @click="copyPassword" href="#" class="show-copy">
      <i class="gg-copy"></i>
    </a>
    <toast v-if="isCopied" :text="toastText" />
  </div>
</template>
<script>
// Pinia
import { mapState } from "pinia"
import { useGenerateStore } from "../../stores/generate"
// Components
import Toast from "../global/Toast.vue"

export default {
  name: "ShowPassword",
  props: ["letsGenerate", "toastText"],
  data: () => ({
    isCopied: false,
  }),
  computed: {
    ...mapState(useGenerateStore, ["getPassword"]),
  },
  methods: {
    copyPassword() {
      navigator.clipboard.writeText(this.getPassword)
      this.isCopied = true
      setTimeout(() => {
        this.isCopied = false
      }, 1000)
    },
  },
  components: {
    Toast,
  },
}
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
  font-size: 25px;
  border: none;
  min-height: 50px;
  color: var(--color-gray-text);
}

.show-input .show .show-input:focus {
  outline: none;
}

.show-copy {
  cursor: pointer;
}

.show-copy:hover {
  opacity: 0.8;
}

.gg-copy {
  color: var(--color-primary);
}
</style>
