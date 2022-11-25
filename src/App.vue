<template>
  <div>
    <header-vue />
    <router-view :lang="getCurrentData" />
  </div>
</template>

<script>
// Pinia
import { mapState, mapActions } from "pinia"
import { useLangStore } from "./stores/lang"
import { useUserStore } from "./stores/user"
// Components
import HeaderVue from "./components/global/Header.vue"

export default {
  created() {
    this.getLangFromLS()
    this.getAllUser()
    this.autoAuthUser()
  },
  computed: {
    ...mapState(useLangStore, ["getCurrentLang", "getCurrentData"]),
  },
  methods: {
    ...mapActions(useLangStore, ["switchLang", "getLangFromLS"]),
    ...mapActions(useUserStore, ["getAllUser", "autoAuthUser"]),
  },
  components: {
    HeaderVue,
  },
}
</script>
