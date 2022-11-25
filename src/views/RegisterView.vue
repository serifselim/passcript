<template>
  <div>
    <form @submit.prevent="setNewUser(user)">
      <label for="username">Username</label>
      <input
        class="input"
        id="username"
        v-model.trim="user.username"
        placeholder="Username"
        required
      />
      <label for="password">Password</label>
      <input
        id="password"
        v-model.trim="user.password"
        type="password"
        placeholder="Password"
        required
      />
      <button>Sign Up</button>
    </form>
  </div>
</template>
<script>
// Pinia
import { mapActions } from "pinia"
import { useUserStore } from "../stores/user"
// Components
import Toast from "../components/global/Toast.vue"

export default {
  name: "RegisterView",
  data: () => ({
    user: {
      username: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions(useUserStore, ["setNewUser"]),
  },
}
</script>
<style scoped>
.input {
  color: white;
}
</style>
