<template>
  <li>
    <h3>{{ pass.name.toUpperCase() }}</h3>
    <div class="list-table-hash">
      <i> {{ showPassword }} </i>

      <a @click="copyPassword" href="#" v-if="isCopied" class="show-copy">
        <i class="gg-copy"></i>
      </a>
    </div>
    <form @submit.prevent="handleSubmit(i)">
      <input
        type="password"
        v-model.trim="secretKey"
        placeholder="ENTER YOUR SECRET_KEY"
      />
      <div class="list-table-actions">
        <button>{{ getCurrentData.list.decrypt }}</button>
        <button type="button" @click="handleClick">
          {{ getCurrentData.list.delete }}
        </button>
      </div>
    </form>
    <toast v-if="isShowToast" :text="getCurrentData.global.toastText" />
  </li>
</template>
<script>
// Pinia
import { mapActions, mapState } from "pinia"
import { useLangStore } from "../../stores/lang"
import { usePasswordStore } from "../../stores/password"
// Components
import Toast from "../global/Toast.vue"

export default {
  name: "PasswordListItem",
  props: ["pass", "i"],
  data: () => ({
    secretKey: "",
    showPassword: "",
    isCopied: false,
    isShowToast: false,
  }),
  computed: {
    ...mapState(useLangStore, ["getCurrentData"]),
  },
  mounted() {
    this.showPassword = this.pass.password
  },
  methods: {
    handleSubmit(i) {
      const payload = {
        password: this.pass.password,
        secretKey: this.secretKey,
        i,
      }

      this.convertHashToPassword(payload)
      this.secretKey = ""
    },
    handleClick() {
      this.copyPassword()
    },
    copyPassword() {
      navigator.clipboard.writeText(this.pass.password)
      this.isShowToast = true
      setTimeout(() => {
        this.isShowToast = false
      }, 1000)
    },
    ...mapActions(usePasswordStore, ["convertHashToPassword"]),
  },
  watch: {
    "pass.password": {
      handler() {
        this.showPassword = "*".repeat(this.pass.password.length)
        this.isCopied = true
      },
    },
  },
  components: {
    Toast,
  },
}
</script>

<style scoped>
ul li {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  padding: 15px 25px;
  border-radius: 10px;
  border: 4px solid var(--color-gray);
}

ul li .list-table-hash {
  display: flex;
  padding: 0 20px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 5px;
}

ul li h3 {
  margin-bottom: 10px;
  color: var(--color-primary);
}

ul li input {
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
  width: 100%;
}

.list-table-actions {
  flex: 1;
  justify-content: center;
  display: flex;
  column-gap: 10px;
  margin-top: 10px;
}

.list-table-actions button {
  padding: 8px 25px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  transition: background-color 0.3s easy;
}

.list-table-actions button:first-child {
  background-color: var(--color-primary);
}

.list-table-actions button:last-child {
  background-color: brown;
}

.gg-copy {
  color: var(--color-primary);
}
</style>
