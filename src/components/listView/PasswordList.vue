<template>
  <ul>
    <password-list-item
      v-for="(pass, i) in getPasswordArr"
      :key="i"
      :pass="pass"
      :i="i"
    />
  </ul>
</template>
<script>
// Pinia
import { mapState, mapActions } from "pinia"
import { usePasswordStore } from "../../stores/password"
// Components
import PasswordListItem from "./PasswordListItem.vue"
export default {
  name: "PasswordList",
  computed: {
    ...mapState(usePasswordStore, ["getPasswordArr"]),
  },
  methods: {
    ...mapActions(usePasswordStore, ["getAllPassword"]),
  },
  created() {
    this.getAllPassword()
  },
  components: {
    PasswordListItem,
  },
}
</script>
<style scoped>
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  row-gap: 20px;
}
</style>
