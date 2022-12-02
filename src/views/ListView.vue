<template>
  <div class="container">
    <add-item :list="getCurrentData.list" />
    <div class="list-table">
      <password-list />
    </div>
  </div>
</template>
<script>
// Pinia
import { mapState } from "pinia"
import { useLangStore } from "../stores/lang"
// Components
import AddItem from "../components/listView/AddItem.vue"
import PasswordList from "../components/listView/PasswordList.vue"

export default {
  name: "ListView",
  computed: {
    ...mapState(useLangStore, ["getCurrentData"]),
  },
  components: {
    AddItem,
    PasswordList,
  },
}
</script>
<style scoped>
.list-table {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-inline: auto;
  max-width: 768px;
}
.list-form button:hover {
  opacity: 0.8;
}
</style>
