<template>
  <form @submit.prevent="handleSubmit" class="list-form">
    <div class="list-form-up">
      <div class="list-form-item">
        <label for="name">{{ list.name }}</label>
        <input
          v-model.trim="password.name"
          id="name"
          type="text"
          required
          placeholder="EXAMPLE_NAME"
        />
      </div>
      <div class="list-form-item">
        <label for="password">{{ list.password }}</label>
        <input
          id="password"
          type="password"
          v-model.trim="password.password"
          required
          placeholder="I9JUICNSHxsaAWF11"
        />
      </div>
      <div class="list-form-item">
        <label for="secretKey">{{ list.secretKey }}</label>
        <input
          id="secretKey"
          type="password"
          v-model.trim="password.secretKey"
          required
          placeholder="SECRET_KEY"
        />
      </div>
    </div>
    <div class="list-form-down">
      <button :disabled="!areFill" class="list-form-button">
        {{ list.add }}
      </button>
    </div>
  </form>
</template>
<script>
import { mapActions } from "pinia"
import { usePasswordStore } from "../../stores/password"
export default {
  name: "AddItem",
  props: ["list"],
  data: () => ({
    password: {},
  }),
  computed: {
    areFill() {
      return Object.values(this.password).every((x) => x)
    },
  },
  methods: {
    handleSubmit() {
      this.addNewPasswordToList(this.password)
      this.password = {}
    },
    ...mapActions(usePasswordStore, ["addNewPasswordToList"]),
  },
}
</script>
<style scoped>
.list-form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.list-form .list-form-up {
  display: flex;
  align-items: center;
  column-gap: 20px;
}

.list-form-item {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.list-form-item label {
  color: var(--color-primary);
}

button {
  font-size: 18px;
  padding: 5px 30px;
  max-width: 250px;
  font-weight: bold;
  border-radius: 2px;
  cursor: pointer;
  background-color: var(--color-primary);
  transition: background-color 1s ease;
}
</style>
