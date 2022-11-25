<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h3>{{ getCurrentData.header.login }}</h3>

      <label for="username">{{ getCurrentData.login.username }}</label>
      <input
        class="input"
        id="username"
        v-model.trim="user.username"
        :placeholder="getCurrentData.login.username"
        required
      />

      <label for="password">{{ getCurrentData.login.password }}</label>
      <input
        id="password"
        v-model.trim="user.password"
        type="password"
        :placeholder="getCurrentData.login.password"
        required
      />

      <button>{{ getCurrentData.login.logIn }}</button>
    </form>
    <toast v-if="isAuthed" :text="getCurrentData.global.authToastText" />
  </div>
</template>
<script>
// Pinia
import { mapActions, mapState } from "pinia"
import { useLangStore } from "../stores/lang"
import { useUserStore } from "../stores/user"
// Components
import Toast from "../components/global/Toast.vue"

export default {
  name: "LoginView",
  data: () => ({
    user: {
      username: "",
      password: "",
      isAuthed: false,
    },
  }),
  computed: {
    ...mapState(useUserStore, ["getCurrentUser"]),
    ...mapState(useLangStore, ["getCurrentData"]),
  },
  methods: {
    handleSubmit() {
      const isTrueUser = this.loginUser(this.user)
      if (isTrueUser) {
        this.showToast().then(() => {
          this.$router.push("/generate")
        })
      }
    },
    async showToast() {
      this.isAuthed = true
      setTimeout(() => {
        this.isAuthed = false
      }, 1000)
    },
    ...mapActions(useUserStore, ["loginUser"]),
  },
  components: {
    Toast,
  },
}
</script>
<style scoped>
form {
  height: 520px;
  width: 400px;
  background-color: var(--color-gray);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  padding: 50px 35px;
}
form * {
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder {
  color: #e5e5e5;
}
button {
  margin-top: 50px;
  width: 100%;
  background-color: var(--color-primary);
  color: var(--color-dark);
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
</style>
