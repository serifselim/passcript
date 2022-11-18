<template>
  <div>
    <button @click="switchLang">CHANGE LANG ({{ getCurrentLang }})</button>
    <router-view :lang="getCurrentData" />
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useLangStore } from "./stores/lang";

export default {
  created() {
    this.getLangFromLS();
  },
  computed: {
    ...mapState(useLangStore, ["getCurrentLang", "getCurrentData"]),
  },
  methods: {
    ...mapActions(useLangStore, ["switchLang", "getLangFromLS"]),
  },
};
</script>
