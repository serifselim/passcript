<template>
  <div class="container">
    <div class="context">
      <div class="header">
        <h1 class="title">{{ currentData.generate.header }}</h1>
      </div>
      <show-password
        :toastText="currentData.global.toastText"
        :letsGenerate="currentData.generate.letsGenerate"
      />
      <div class="generate">
        <length-password :charLength="currentData.generate.charLength" />
        <option-password :generate="currentData.generate" />
        <strength-password :strength="currentData.generate.strength" />
        <action-password :generate="currentData.generate.generate" />
      </div>
    </div>
  </div>
</template>
<script>
// Pinia
import { mapState } from "pinia"
import { useLangStore } from "../stores/lang.js"
// Compoents
import {
  ShowPassword,
  LengthPassword,
  OptionPassword,
  StrengthPassword,
  ActionPassword,
} from "../components/generateView"

export default {
  name: "GenerateView",
  data: () => ({}),
  computed: {
    ...mapState(useLangStore, ["currentData"]),
  },
  components: {
    ShowPassword,
    LengthPassword,
    OptionPassword,
    StrengthPassword,
    ActionPassword,
  },
}
</script>
<style scoped>
.container {
  max-width: 576px;
  height: 70%;
  margin: 30px auto 0 auto;
}

.context {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.context .header {
  width: 100%;
  text-align: center;
  padding: 15px 0;
}

.context .title {
  font-weight: bold;
  font-size: 25px;
  color: var(--color-gray-text);
}

.context .generate {
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px 25px;
  background: var(--color-gray);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
