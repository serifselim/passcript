<template>
  <div class="container">
    <add-item :list="getCurrentData.list" />
    <div class="list-table">
      <ul>
        <li>
          <h3>EXAMPLE_NAME</h3>
          <div class="list-table-hash">
            <i> U2FsdGVkX18QUrzzGM89qs50tQ+mqLiwfQSGgOxjrVM= </i>

            <a @click="copyPassword" href="#" class="show-copy">
              <i class="gg-copy"></i>
            </a>
          </div>
          <form></form>
          <input type="password" placeholder="ENTER YOUR SECRET_KEY" />
          <div class="list-table-actions">
            <button>{{ getCurrentData.list.decrypt }}</button>
            <button>{{ getCurrentData.list.delete }}</button>
          </div>
        </li>
      </ul>
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
.gg-copy {
  color: var(--color-primary);
}

.list-form button:hover {
  opacity: 0.8;
}
.list-table {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-inline: auto;
  max-width: 768px;
}

.list-table ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  row-gap: 20px;
}

.list-table ul li {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  padding: 15px 25px;
  border: 2px solid var(--color-gray);
}

.list-table ul li .list-table-hash {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.list-table ul li h3 {
  margin-bottom: 10px;
}

.list-table ul li input {
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
}

.list-table .list-table-actions {
  flex: 1;
  justify-content: center;
  display: flex;
  column-gap: 10px;
  margin-top: 10px;
}

.list-table .list-table-actions button {
  flex: 1;
  padding: 5px 20px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  transition: background-color 0.3s easy;
}

.list-table .list-table-actions button:first-child {
  background-color: var(--color-primary);
}

.list-table .list-table-actions button:last-child {
  background-color: brown;
}
</style>
